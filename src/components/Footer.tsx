import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>{siteConfig.serviceName}</p>
            <p className={styles.desc}>
              中小企業のための定額DXコンサルティング。専属の情シス担当のように、御社のDXに伴走します。
            </p>
          </div>

          <div>
            <p className="eyebrow">MENU</p>
            <ul className={styles.list}>
              <li>
                <Link href="/#service">サービス概要</Link>
              </li>
              <li>
                <Link href="/#support">支援内容</Link>
              </li>
              <li>
                <Link href="/#pricing">料金プラン</Link>
              </li>
              <li>
                <Link href="/#faq">よくある質問</Link>
              </li>
              <li>
                <Link href="/company">会社情報</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">CONTACT</p>
            <ul className={styles.list}>
              <li>
                <Link href="/contact">お問い合わせ・無料相談</Link>
              </li>
              <li>{siteConfig.contactEmail}</li>
              <li>{siteConfig.contactTel}（平日 10:00-18:00）</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}
          </p>
          <p>中小企業の「もう一人の情シス」</p>
        </div>
      </div>
    </footer>
  );
}
