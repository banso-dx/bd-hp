import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `お問い合わせ | ${siteConfig.serviceName}`,
  description: `${siteConfig.serviceName}への無料相談・お問い合わせはこちらから。`,
};

export default function ContactPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <p className="eyebrow">CONTACT</p>
          <h1 className={styles.headerTitle}>お問い合わせ・無料相談</h1>
          <p className={styles.headerLead}>
            サービス内容やお見積りについて、まずはお気軽にご相談ください。現状のお困りごとをお聞かせいただくだけでも構いません。
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={`container ${styles.layout}`}>
          <div className={styles.infoCard}>
            <p className={styles.infoTitle}>その他のお問い合わせ方法</p>
            <div className={styles.infoList}>
              <div>
                <p className={styles.infoLabel}>MAIL</p>
                <p>{siteConfig.contactEmail}</p>
              </div>
              <div>
                <p className={styles.infoLabel}>TEL</p>
                <p>{siteConfig.contactTel}（平日 10:00-18:00）</p>
              </div>
              <div>
                <p className={styles.infoLabel}>対応時間</p>
                <p>平日 10:00〜18:00（土日祝を除く）</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
