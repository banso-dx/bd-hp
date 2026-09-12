"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

const faqs = [
  {
    q: "IT・システムの知識が全くないのですが、依頼できますか？",
    a: "はい、問題ありません。ITに詳しい社員がいない中小企業のお客様がほとんどです。専門用語を使わず、現状のお困りごとをヒアリングしながら、何から着手すべきかを一緒に整理します。",
  },
  {
    q: "既に使っているツールやシステムがある場合も対応してもらえますか？",
    a: "現在ご利用中のツール・システムの棚卸しから支援します。無理に入れ替えるのではなく、既存の環境を活かしながら改善できる方法をご提案します。",
  },
  {
    q: "月額料金以外に追加費用は発生しますか？",
    a: "プラン内でカバーする支援範囲を契約時に明確にご案内します。範囲外の大規模な開発やシステム導入が必要な場合のみ、事前にお見積りのうえご相談します。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "最低契約期間はプランによって異なります。まずは無料相談で、貴社の状況に合ったプランと契約条件をご案内します。",
  },
  {
    q: "対応エリアはどこですか？オンラインのみですか？",
    a: "基本はオンライン（チャット・オンライン会議）でのご支援が中心です。ご要望に応じて訪問でのご支援も個別にご相談いただけます。",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={styles.faqItem} key={item.q}>
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <span className={styles.faqMark}>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
