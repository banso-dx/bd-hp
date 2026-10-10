import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `会社情報 | ${siteConfig.serviceName}`,
  description: `${siteConfig.companyName}の会社概要ページです。所在地・代表者・事業内容などをご案内しています。`,
};

const companyInfo = [
  { label: "会社名", value: siteConfig.companyName },
  { label: "英文社名", value: siteConfig.companyNameEn },
  { label: "設立", value: siteConfig.established },
  { label: "代表者", value: siteConfig.representative },
  { label: "所在地", value: siteConfig.address },
  { label: "資本金", value: siteConfig.capital },
  { label: "事業内容", value: siteConfig.business },
];

const missions = [
  {
    label: "MISSION",
    title: "中小企業のDXを、当たり前にする。",
    text: "IT人材の不足を理由に、DXを諦める企業をなくすことを目指します。",
  },
  {
    label: "VISION",
    title: "すべての企業に、伴走者を。",
    text: "専任の情シスがいなくても、必要な時に頼れるパートナーがいる状態を当たり前にします。",
  },
  {
    label: "VALUE",
    title: "現場に寄り添い、共に歩む。",
    text: "難しい専門用語ではなく、現場が理解し、使いこなせる形での支援にこだわります。",
  },
];

export default function CompanyPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <p className="eyebrow">COMPANY</p>
          <h1 className={styles.headerTitle}>会社情報</h1>
          <p className={styles.headerLead}>
            {siteConfig.companyName}は、中小企業のIT・DXを月額定額で支援する「{siteConfig.serviceName}」を運営しています。
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">MISSION / VISION / VALUE</p>
              <h2 className={styles.sectionTitle}>私たちが目指すこと</h2>
            </div>
          </Reveal>
          <div className={styles.missionGrid}>
            {missions.map((item, index) => (
              <Reveal key={item.label} delay={index * 80}>
                <div className={styles.missionCard}>
                  <p className={styles.missionLabel}>{item.label}</p>
                  <p className={styles.missionTitle}>{item.title}</p>
                  <p className={styles.missionText}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">会社概要</p>
              <h2 className={styles.sectionTitle}>Company Profile</h2>
            </div>
          </Reveal>
          <div className={styles.table}>
            {companyInfo.map((item) => (
              <div className={styles.row} key={item.label}>
                <p className={styles.rowLabel}>{item.label}</p>
                <p className={styles.rowValue}>{item.value}</p>
              </div>
            ))}
          </div>
          <p className={styles.note} style={{ marginTop: "16px" }}>
            ※ 記載の情報は準備中のため一部仮のものです。確定次第、随時更新いたします。
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>{siteConfig.serviceName}について、お気軽にご相談ください。</h2>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btnPrimary">
              お問い合わせ
            </Link>
            <Link href="/" className="btn btnOutline">
              サービス概要を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
