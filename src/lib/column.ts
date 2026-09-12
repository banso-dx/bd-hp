import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import readingTime from "reading-time";

const COLUMN_DIR = path.join(process.cwd(), "src/content/column");

export type ColumnFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
};

export type ColumnListItem = ColumnFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type ColumnArticle = ColumnListItem & {
  contentHtml: string;
};

function getSlugs(): string[] {
  return fs
    .readdirSync(COLUMN_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllColumnSlugs(): string[] {
  return getSlugs();
}

export function getAllColumnArticles(): ColumnListItem[] {
  const articles = getSlugs().map((slug) => {
    const fullPath = path.join(COLUMN_DIR, `${slug}.md`);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as ColumnFrontmatter;
    return {
      slug,
      ...frontmatter,
      readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getColumnArticle(slug: string): Promise<ColumnArticle | null> {
  const fullPath = path.join(COLUMN_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ColumnFrontmatter;

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return {
    slug,
    ...frontmatter,
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    contentHtml: processed.toString(),
  };
}
