import { CodeBlock } from '../components/CodeBlock';
import type { CodeLayoutData } from '../types/post';

interface CodeLayoutProps {
  data: CodeLayoutData;
}

export function CodeLayout({ data }: CodeLayoutProps) {
  return (
    <div className="code-shell">
      <div className="code-header">
        <div className="code-dots" aria-hidden="true">
          <span className="code-dot" style={{ background: '#FF5F57' }} />
          <span className="code-dot" style={{ background: '#FEBC2E' }} />
          <span className="code-dot" style={{ background: '#28C840' }} />
        </div>
        <span>{data.filename ?? `snippet.${data.language}`}</span>
        <span className="uppercase tracking-[0.14em] text-post-accent">{data.language}</span>
      </div>
      <CodeBlock code={data.code} language={data.language} />
      {data.caption ? <p className="code-caption">{data.caption}</p> : null}
    </div>
  );
}
