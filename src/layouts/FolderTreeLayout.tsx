import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid';
import type { FolderNode, FolderTreeLayoutData } from '../types/post';

interface FolderTreeLayoutProps {
  data: FolderTreeLayoutData;
}

function TreeNode({ node }: { node: FolderNode }) {
  const hasChildren = Boolean(node.children && node.children.length > 0);
  const Icon = hasChildren ? FolderIcon : DocumentIcon;

  return (
    <div className="folder-tree-node">
      <div className={`folder-tree-item ${node.highlighted ? 'folder-tree-item-highlighted' : ''}`.trim()}>
        <Icon className="folder-tree-icon" aria-hidden="true" />
        <span className="folder-tree-name">{node.name}</span>
        {node.note ? <span className="folder-tree-note">{node.note}</span> : null}
      </div>
      {hasChildren ? <FolderTreeView roots={node.children!} /> : null}
    </div>
  );
}

/** Shared recursive tree renderer (used by ProjectOverview too). */
export function FolderTreeView({ roots }: { roots: FolderNode[] }) {
  return (
    <div className="folder-tree">
      {roots.map((node, index) => (
        <TreeNode key={`${node.name}-${index}`} node={node} />
      ))}
    </div>
  );
}

export function FolderTreeLayout({ data }: FolderTreeLayoutProps) {
  return (
    <div className="w-full max-w-[820px]">
      <FolderTreeView roots={data.roots} />
    </div>
  );
}
