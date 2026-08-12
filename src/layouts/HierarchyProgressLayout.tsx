import type { HierarchyNode, HierarchyProgressLayoutData } from '../types/post';

interface HierarchyProgressLayoutProps {
  data: HierarchyProgressLayoutData;
}

function Row({ node, depth }: { node: HierarchyNode; depth: number }) {
  const pct = Math.max(0, Math.min(100, node.percent));

  return (
    <div className={`hp-node hp-depth-${depth}`}>
      <div className={`hp-row ${depth === 0 ? 'hp-row-root' : ''}`.trim()}>
        <div className="hp-head">
          <span className="hp-title">{node.title}</span>
          {node.detail ? <span className="hp-detail">{node.detail}</span> : null}
          <span className="hp-percent">{pct}%</span>
        </div>
        <div className="hp-track" aria-hidden="true">
          <div className="hp-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {node.children?.length ? (
        <div className="hp-children">
          {node.children.map((child, index) => (
            <Row key={`${child.title}-${index}`} node={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HierarchyProgressLayout({ data }: HierarchyProgressLayoutProps) {
  return (
    <div className="hierarchy-progress-layout">
      {data.nodes.map((node, index) => (
        <Row key={`${node.title}-${index}`} node={node} depth={0} />
      ))}
      {data.note ? <div className="center-statement">{data.note}</div> : null}
    </div>
  );
}
