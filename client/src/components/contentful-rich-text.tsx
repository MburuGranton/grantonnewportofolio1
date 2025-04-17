import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

interface ContentfulRichTextProps {
  content: any;
}

const ContentfulRichText = ({ content }: ContentfulRichTextProps) => {
  // If no content is provided, return null
  if (!content) {
    return null;
  }

  // Custom options for rendering the rich text
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
      [MARKS.CODE]: (text: React.ReactNode) => (
        <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded font-mono text-sm">{text}</code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className="mb-6">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className="text-4xl font-bold mb-6 mt-12">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className="text-3xl font-bold mb-4 mt-10">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className="text-2xl font-bold mb-4 mt-8">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <h4 className="text-xl font-bold mb-4 mt-6">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
        <h5 className="text-lg font-bold mb-4 mt-6">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
        <h6 className="text-base font-bold mb-4 mt-6">{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className="list-disc ml-6 mb-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className="list-decimal ml-6 mb-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li className="mb-2">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-200 dark:border-gray-800" />,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // Handle embedded images
        const { data } = node;
        if (data && data.target && data.target.fields) {
          const { title, description, file } = data.target.fields;
          const imageUrl = file?.url || '';
          const imageAlt = description || title || 'Embedded image';
          
          if (imageUrl) {
            return (
              <figure className="my-8">
                <img 
                  src={imageUrl} 
                  alt={imageAlt} 
                  className="rounded-lg w-full h-auto shadow-md"
                />
                {title && (
                  <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {title}
                  </figcaption>
                )}
              </figure>
            );
          }
        }
        return null;
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { data } = node;
        return (
          <a 
            href={data.uri} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {children}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node: any, children: React.ReactNode) => {
        // Handle links to other entries (e.g., other blog posts)
        return <span className="text-primary hover:underline">{children}</span>;
      },
    },
  };

  return (
    <div className="contentful-rich-text">
      {documentToReactComponents(content, options)}
    </div>
  );
};

export default ContentfulRichText;