import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllColumnSlugs, getColumnArticle } from "@/lib/column";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllColumnSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getColumnArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | ${siteConfig.serviceName}コラム`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ColumnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getColumnArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={styles.header}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="パンくずリスト">
            <Link href="/">TOP</Link>
            <span>/</span>
            <Link href="/column">コラム</Link>
            <span>/</span>
            <span>{article.title}</span>
          </nav>
          <div className={styles.headerMeta}>
            <span className={styles.category}>{article.category}</span>
            <time dateTime={article.date}>{article.date}</time>
            <span>{article.readingMinutes}分で読了</span>
          </div>
          <h1 className={styles.title}>{article.title}</h1>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.article}>
              <div dangerouslySetInnerHTML={{ __html: article.contentHtml }} />

              <div className={styles.cta}>
                <p className={styles.ctaTitle}>{siteConfig.serviceName}について、無料相談してみませんか？</p>
                <div className={styles.ctaActions}>
                  <Link href="/contact" className="btn btnPrimary">
                    無料相談を申し込む
                  </Link>
                  <Link href="/" className="btn btnOutline">
                    サービス概要を見る
                  </Link>
                </div>
              </div>

              <Link href="/column" className={styles.backLink}>
                ← コラム一覧に戻る
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
