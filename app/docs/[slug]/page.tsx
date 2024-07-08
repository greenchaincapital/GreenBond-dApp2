// file: app/docs/[slug]/page.tsx

import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import DocsLayout from '../../../components/DocsLayout';

interface Props {
  params: { slug: string };
}

async function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), 'docs', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  
  return processedContent.toString();
}

const DocsPage = async ({ params }: Props) => {
  const content = await getMarkdownContent(params.slug);

  if (!content) {
    notFound();
  }

  return (
    <DocsLayout>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </DocsLayout>
  );
};

export default DocsPage;
