// src/utils/docs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'src/docs');

export function getAllDocSlugs() {
    const filenames = fs.readdirSync(docsDirectory);
    return filenames.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
}

export function getDocData(slug) {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
        data,
        content
    };
}