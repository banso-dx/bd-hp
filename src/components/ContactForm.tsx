"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "@/app/contact/page.module.css";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `会社名: ${form.get("company")}`,
      `お名前: ${form.get("name")}`,
      `メールアドレス: ${form.get("email")}`,
      `ご興味のあるプラン: ${form.get("plan")}`,
      "",
      "お問い合わせ内容:",
      String(form.get("message") ?? ""),
    ].join("\n");

    const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
      `【${siteConfig.serviceName}】お問い合わせ・無料相談`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="company">会社名</label>
          <input id="company" name="company" required className={styles.input} placeholder="株式会社◯◯" />
        </div>
        <div className={styles.field}>
          <label htmlFor="name">お名前</label>
          <input id="name" name="name" required className={styles.input} placeholder="山田 太郎" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" required className={styles.input} placeholder="you@example.com" />
      </div>

      <div className={styles.field}>
        <label htmlFor="plan">ご興味のあるプラン</label>
        <select id="plan" name="plan" className={styles.input} defaultValue="まだ決めていない">
          <option>まだ決めていない</option>
          <option>ライトプラン</option>
          <option>スタンダードプラン</option>
          <option>フルサポートプラン</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">お問い合わせ内容</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.input}
          placeholder="現在の状況や、困っていることをお聞かせください。"
        />
      </div>

      <button type="submit" className="btn btnPrimary" style={{ alignSelf: "flex-start" }}>
        送信する
      </button>

      <p className={styles.submitNote}>
        送信ボタンを押すと、お使いのメールソフトが起動し、入力内容が転記された状態で {siteConfig.contactEmail} 宛のメール作成画面が開きます。内容をご確認のうえ送信してください。
      </p>

      {sent && (
        <p className={styles.sentNote}>
          メールソフトを開きました。送信が完了しない場合は、上記メールアドレスへ直接ご連絡ください。
        </p>
      )}
    </form>
  );
}
