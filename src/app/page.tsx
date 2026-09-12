import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { getAllColumnArticles } from "@/lib/column";
import { siteConfig } from "@/lib/site-config";
import styles from "./page.module.css";

const painPoints = [
  "社内にITの相談相手がいない",
  "情シス担当が他業務と兼任で手が回らない",
  "ツールを導入しても現場で使いこなせない",
  "ベンダーの窓口がバラバラで管理が大変",
  "セキュリティ対策に不安がある",
  "コストをかけずにDXを進めたい",
];

const services = [
  {
    title: "IT相談・ヘルプデスク代行",
    text: "PCトラブルやアカウント管理、日々の「ちょっとした困りごと」まで、社内の情シスに聞くように気軽に相談できる窓口を提供します。",
  },
  {
    title: "ツール選定・導入支援",
    text: "会計・勤怠・チャット・営業管理など、目的に合ったSaaS・ITツールの比較検討から契約、導入、社内定着までを一気通貫でサポートします。",
  },
  {
    title: "業務改善・DX推進",
    text: "紙やExcelで属人化している業務を洗い出し、システム化・自動化による効率化を、現場の負担を抑えながら段階的に進めます。",
  },
];

const supportItems = [
  {
    title: "ITヘルプデスク",
    text: "PC・ネットワークトラブル、アカウント発行、社内問い合わせ対応など、日常的なIT相談にオンラインで対応します。",
  },
  {
    title: "SaaS・ツール選定支援",
    text: "業務課題に合わせたツールの比較、見積もり調整、契約更新の管理まで、ベンダーとのやり取りを代行します。",
  },
  {
    title: "業務フロー設計・改善",
    text: "現状の業務フローを可視化し、無駄や属人化のポイントを整理したうえで、システム化・自動化の計画を立てます。",
  },
  {
    title: "セキュリティ・情報管理",
    text: "パスワード管理、権限設定、基本的なセキュリティルールの整備など、最低限備えておきたい対策をご支援します。",
  },
  {
    title: "社内研修・マニュアル整備",
    text: "新しいツールや仕組みを社内に定着させるための研修実施や、マニュアル・運用ルールの整備を行います。",
  },
];

const reasons = [
  {
    title: "定額・低額で始めやすい",
    text: "都度見積もりの外注ではなく、毎月定額のサブスクリプション型。予算を確保しやすく、必要な支援を継続的に受けられます。",
  },
  {
    title: "専属担当による伴走支援",
    text: "毎回違う担当者ではなく、貴社の状況を理解した専属担当が継続して伴走。相談のたびに一から説明する手間がありません。",
  },
  {
    title: "情シス専任者の採用が不要",
    text: "採用・育成が難しいIT専門人材を抱えることなく、必要な分だけプロの支援を受けられます。",
  },
  {
    title: "現場に寄り添った提案",
    text: "大がかりなシステム刷新ではなく、現場が使いこなせる範囲での改善を優先し、無理のないDXを実現します。",
  },
];

const plans = [
  {
    name: "ライトプラン",
    target: "まずはIT相談窓口から始めたい企業向け",
    price: "月額 3万円〜",
    features: ["ITヘルプデスク（チャット相談）", "月1回のオンライン定例相談", "簡易的なツール選定アドバイス"],
    featured: false,
  },
  {
    name: "スタンダードプラン",
    target: "ツール導入や業務改善まで任せたい企業向け",
    price: "月額 8万円〜",
    features: [
      "ライトプランの全内容",
      "SaaS・ツールの選定〜導入支援",
      "業務フローの見直し・改善提案",
      "セキュリティ基本対策の整備",
    ],
    featured: true,
  },
  {
    name: "フルサポートプラン",
    target: "情シス機能をまるごと外部委託したい企業向け",
    price: "月額 15万円〜",
    features: [
      "スタンダードプランの全内容",
      "専属担当による週次定例",
      "社内研修・マニュアル整備",
      "ベンダー窓口の一元管理",
    ],
    featured: false,
  },
];

const flowSteps = [
  { title: "お問い合わせ", text: "フォームまたはメールから無料相談をお申し込みください。" },
  { title: "ヒアリング", text: "現状の業務やお悩みをオンラインで詳しくお伺いします。" },
  { title: "プランご提案", text: "課題に合わせた支援内容とプランをご提案・お見積りします。" },
  { title: "契約・支援開始", text: "ご契約後、専属担当が決まり次第、支援をスタートします。" },
];

export default function Home() {
  const latestArticles = getAllColumnArticles().slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <p className="eyebrow">中小企業のためのDXパートナー</p>
            <h1 className={styles.heroTitle}>
              情シスがいない会社に、
              <br />
              <span>もう一人の情シス</span>を。
            </h1>
            <p className={styles.heroLead}>
              {siteConfig.serviceName}は、月額定額で中小企業のIT・DXを丸ごと支援するアウトソーシングサービスです。ツール選定から業務改善、社内ヘルプデスクまで、専属担当が御社に伴走します。
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btnPrimary">
                無料相談を申し込む
              </Link>
              <Link href="#pricing" className="btn btnOutline">
                料金プランを見る
              </Link>
            </div>
          </div>

          <Reveal>
            <div className={styles.heroPanel}>
              <p className={styles.heroPanelTitle}>BEFORE / AFTER</p>
              <div className={styles.compareRow}>
                <div className={`${styles.compareCol} ${styles.compareColBad}`}>
                  <p className={styles.compareLabel}>導入前</p>
                  <p className={styles.compareText}>
                    ITのことは誰に聞けばいいか分からず、その都度ベンダーを探して対応している。
                  </p>
                </div>
                <div className={`${styles.compareCol} ${styles.compareColGood}`}>
                  <p className={styles.compareLabel}>導入後</p>
                  <p className={styles.compareText}>
                    専属担当にまとめて相談でき、ツール選定から運用まで一貫してサポートしてもらえる。
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">よくある課題</p>
              <h2 className={styles.sectionTitle}>こんなお悩みありませんか？</h2>
            </div>
          </Reveal>
          <div className={`${styles.grid} ${styles.grid3}`}>
            {painPoints.map((text, index) => (
              <Reveal key={text} delay={index * 60}>
                <p className={styles.painCard}>
                  <span className={styles.painMark}>—</span>
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="service" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">サービス概要</p>
              <h2 className={styles.sectionTitle}>やることは、3つに集約されます。</h2>
              <p className={styles.sectionLead}>
                {siteConfig.serviceName}が、社内IT部門の役割を代行します。何でも屋のように相談を受け止めながら、必要な支援を継続的に提供します。
              </p>
            </div>
          </Reveal>
          <div className={`${styles.grid} ${styles.grid3}`}>
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <div className={styles.card}>
                  <p className={styles.cardNum}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">支援内容</p>
              <h2 className={styles.sectionTitle}>具体的な支援メニュー</h2>
              <p className={styles.sectionLead}>
                企業ごとに状況が異なるため、以下を基本メニューとしながら、プランに応じて柔軟に組み合わせます。
              </p>
            </div>
          </Reveal>
          <div className={styles.supportList}>
            {supportItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className={styles.supportRow}>
                  <p className={styles.supportRowTitle}>{item.title}</p>
                  <p className={styles.supportRowText}>{item.text}</p>
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
              <p className="eyebrow">選ばれる理由</p>
              <h2 className={styles.sectionTitle}>{siteConfig.serviceName}が選ばれる理由</h2>
            </div>
          </Reveal>
          <div className={`${styles.grid} ${styles.grid4}`}>
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70}>
                <div className={styles.card}>
                  <p className={styles.cardNum}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardText}>{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">料金プラン</p>
              <h2 className={styles.sectionTitle}>企業規模・課題に合わせた3プラン</h2>
              <p className={styles.sectionLead}>
                ※ 現在ご案内している料金プランの一例です。貴社の状況により最適なプランをご提案しますので、まずは無料相談をご利用ください。
              </p>
            </div>
          </Reveal>
          <div className={styles.pricingGrid}>
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 80}>
                <div className={`${styles.priceCard} ${plan.featured ? styles.priceCardFeatured : ""}`}>
                  <div className={styles.priceHead}>
                    {plan.featured && <span className={styles.priceBadge}>人気プラン</span>}
                    <p className={styles.priceName}>{plan.name}</p>
                    <p className={styles.priceTarget}>{plan.target}</p>
                    <p className={styles.priceValue}>{plan.price}</p>
                  </div>
                  <div className={styles.priceBody}>
                    {plan.features.map((feature) => (
                      <p className={styles.priceFeature} key={feature}>
                        {feature}
                      </p>
                    ))}
                    <Link
                      href="/contact"
                      className={`btn ${plan.featured ? "btnPrimary" : "btnOutline"}`}
                      style={{ marginTop: "auto" }}
                    >
                      このプランで相談する
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className={styles.priceNote}>
            ※ 掲載の料金・支援内容は仮のプラン例です。正式な料金は今後確定次第、更新いたします。
          </p>
        </div>
      </section>

      <section id="flow" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">導入の流れ</p>
              <h2 className={styles.sectionTitle}>お問い合わせから支援開始まで</h2>
            </div>
          </Reveal>
          <div className={styles.flowList}>
            {flowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className={styles.flowStep}>
                  <p className={styles.flowNum}>{String(index + 1).padStart(2, "0")}</p>
                  <p className={styles.flowTitle}>{step.title}</p>
                  <p className={styles.flowText}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <div className="container">
          <Reveal>
            <div className={styles.sectionHead}>
              <p className="eyebrow">よくある質問</p>
              <h2 className={styles.sectionTitle}>FAQ</h2>
            </div>
          </Reveal>
          <FaqAccordion />
        </div>
      </section>

      {latestArticles.length > 0 && (
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHead}>
                <p className="eyebrow">コラム</p>
                <h2 className={styles.sectionTitle}>DX推進に役立つ情報を発信しています</h2>
              </div>
            </Reveal>
            <div className={`${styles.grid} ${styles.grid3}`}>
              {latestArticles.map((article, index) => (
                <Reveal key={article.slug} delay={index * 70}>
                  <Link href={`/column/${article.slug}`} className={styles.card} style={{ display: "block" }}>
                    <p className={styles.cardNum}>{article.category}</p>
                    <h3 className={styles.cardTitle}>{article.title}</h3>
                    <p className={styles.cardText}>{article.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link href="/column" className="btn btnOutline">
                コラム一覧を見る
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>まずは無料相談から、始めませんか。</h2>
          <p className={styles.ctaText}>
            現状のお困りごとをお聞かせいただくだけでも構いません。貴社に合った支援の形を一緒に考えます。
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btnPrimary">
              無料相談を申し込む
            </Link>
            <Link href="/company" className="btn btnOutline">
              会社情報を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
