import { useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { toBlob } from 'html-to-image';
import { CaptionPanel } from './components/CaptionPanel';
import { EditorPanel } from './editor/EditorPanel';
import { PostRenderer } from './renderer/PostRenderer';
import { projects } from './projects';
import type { RenderablePost } from './types/post';

const CANVAS_BG = '#0A0A0D';

function clonePost(post: RenderablePost): RenderablePost {
  return JSON.parse(JSON.stringify(post)) as RenderablePost;
}

function padNumber(value: number): string {
  return String(value).padStart(2, '0');
}

function filenameFor(post: RenderablePost): string {
  return `${post.project.id}-post-${padNumber(post.postNumber.current)}.png`;
}

/** Wait for fonts + two frames so layout and Prism highlighting have settled. */
function nextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

async function elementToBlob(element: HTMLElement): Promise<Blob> {
  const rect = element.getBoundingClientRect();
  const blob = await toBlob(element, {
    width: Math.ceil(rect.width),
    height: Math.ceil(rect.height),
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: CANVAS_BG,
  });
  if (!blob) {
    throw new Error('PNG export failed.');
  }
  return blob;
}

function downloadBlob(blob: Blob, filename: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = objectUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

/** Render a post off-screen at full width and capture it to a PNG blob. */
async function renderPostToBlob(post: RenderablePost): Promise<Blob> {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-100000px';
  container.style.top = '0';
  container.style.width = '1080px';
  document.body.appendChild(container);

  const root = createRoot(container);
  try {
    root.render(<PostRenderer post={post} />);
    await document.fonts.ready;
    await nextPaint();
    const canvas = container.querySelector<HTMLElement>('.post-canvas');
    if (!canvas) {
      throw new Error('Off-screen canvas not found.');
    }
    return await elementToBlob(canvas);
  } finally {
    root.unmount();
    container.remove();
  }
}

function getInitialSelection(searchParams: URLSearchParams) {
  const projectParam = searchParams.get('project');
  const postParam = Number(searchParams.get('post'));

  let projectIndex = projects.findIndex((project) => project.meta.id === projectParam);
  if (projectIndex < 0) {
    projectIndex = 0;
  }

  const postsInProject = projects[projectIndex].posts;
  let postIndex = postsInProject.findIndex((post) => post.postNumber.current === postParam);
  if (postIndex < 0) {
    postIndex = 0;
  }

  return { projectIndex, postIndex };
}

function App() {
  const searchParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const screenshotMode = searchParams.get('screenshot') === 'true';
  const initial = useMemo(() => getInitialSelection(searchParams), [searchParams]);

  const [projectIndex, setProjectIndex] = useState(initial.projectIndex);
  const [postIndex, setPostIndex] = useState(initial.postIndex);
  const [draftPost, setDraftPost] = useState(() =>
    clonePost(projects[initial.projectIndex].posts[initial.postIndex]),
  );
  const [exportStatus, setExportStatus] = useState('');
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleSelectProject = (index: number) => {
    setProjectIndex(index);
    setPostIndex(0);
    setDraftPost(clonePost(projects[index].posts[0]));
    setExportStatus('');
  };

  const handleSelectPost = (index: number) => {
    setPostIndex(index);
    setDraftPost(clonePost(projects[projectIndex].posts[index]));
    setExportStatus('');
  };

  const handlePostChange = (post: RenderablePost) => {
    setDraftPost(post);
    setExportStatus('');
  };

  const handleExport = async () => {
    if (!canvasRef.current) {
      return;
    }
    setExportStatus('Exporting…');
    try {
      await document.fonts.ready;
      await nextPaint();
      const blob = await elementToBlob(canvasRef.current);
      const filename = filenameFor(draftPost);
      downloadBlob(blob, filename);
      setExportStatus(`Downloaded ${filename}`);
    } catch (error) {
      console.error(error);
      setExportStatus('Export failed');
    }
  };

  const handleExportAll = async () => {
    const project = projects[projectIndex];
    setExportStatus(`Exporting ${project.posts.length} posts…`);
    try {
      for (const post of project.posts) {
        const blob = await renderPostToBlob(post);
        downloadBlob(blob, filenameFor(post));
        await new Promise((resolve) => window.setTimeout(resolve, 400));
      }
      setExportStatus(`Downloaded ${project.posts.length} posts from ${project.meta.name}`);
    } catch (error) {
      console.error(error);
      setExportStatus('Batch export failed');
    }
  };

  if (screenshotMode) {
    return (
      <div className="screenshot-shell">
        <PostRenderer ref={canvasRef} post={draftPost} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="studio-shell">
        <EditorPanel
          projects={projects}
          projectIndex={projectIndex}
          postIndex={postIndex}
          post={draftPost}
          onSelectProject={handleSelectProject}
          onSelectPost={handleSelectPost}
          onPostChange={handlePostChange}
          onExport={handleExport}
          onExportAll={handleExportAll}
          exportStatus={exportStatus}
        />
        <div className="canvas-wrap">
          <div className="canvas-column">
            <PostRenderer ref={canvasRef} post={draftPost} />
            {draftPost.linkedInCaption ? <CaptionPanel text={draftPost.linkedInCaption} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
