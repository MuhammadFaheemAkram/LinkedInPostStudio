import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-typescript';
import type { SupportedLanguage } from '../types/post';

interface CodeBlockProps {
  code: string;
  language: SupportedLanguage;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const grammar = Prism.languages[language] ?? Prism.languages.clike;
  const html = Prism.highlight(code, grammar, language);

  return (
    <pre className="code-block">
      <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  );
}
