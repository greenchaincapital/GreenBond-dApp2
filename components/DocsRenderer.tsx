import { getAllDocSlugs, getDocData } from '../utils/docs';
import ReactMarkdown from 'react-markdown';
import styles from '../styles/Docs.module.css';

export async function getStaticPaths() {
    const paths = getAllDocSlugs();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { data, content } = getDocData(params.slug);
    return {
        props: {
            frontmatter: data,
            content
        }
    };
}

const DocsRenderer = ({ frontmatter, content }) => {
    return (
        <div className={styles.docsContainer}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default DocsRenderer;