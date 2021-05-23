import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const Markdown: React.FC<{ content: string }> = ({ content }) => (
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
);
