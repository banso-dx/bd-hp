import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { getAllColumnArticles } from "@/lib/column";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `コラム | ${siteConfig.serviceName}`,
  description: "中小企業のDX推進、情シス代行、SaaS選定など、DXに役立つ情報を発信するコラムです。",
};

export default function ColumnIndexPage() {
  const articles = getAllColumnArticles();

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <p className="eyebrow">COLUMN</p>
          <h1 className={styles.headerTitle}>コラム</h1>
          <p className={styles.headerLead}>
            中小企業のDX推進、情シス代行、SaaS選定など、現場で役立つ情報を発信しています。
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          {articles.length === 0 ? (
            <p className={styles.empty}>準備中です。近日公開予定です。</p>
          ) : (
            <div className={styles.grid}>
              {articles.map((article, index) => (
                <Reveal key={article.slug} delay={index * 60}>
                  <Link href={`/column/${article.slug}`} className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{article.category}</span>
                        <time dateTime={article.date}>{article.date}</time>
                        <span>{article.readingMinutes}分で読了</span>
                      </div>
                      <h2 className={styles.cardTitle}>{article.title}</h2>
                      <p className={styles.cardDesc}>{article.description}</p>
                      <span className={styles.cardMore}>続きを読む →</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
