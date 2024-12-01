import React from "react";
import { contents } from "../data/contents";
import ContentCard from "./components/ContentCard";
const contentsPage: React.FC = () => {
  return (
    <div className="container">
      <img
        src="/images/logo_horizontal.png" // ロゴ画像のパス
        alt="ロゴ画像"
        width={250} // 必要に応じて幅を指定
        height={200} // 必要に応じて高さを指定
        className="logo" // CSSクラスを指定（任意）
      />

      <h1 style={{ margin: "20px" }}>KYAST AR HUB</h1>

      <text>QRコードやURLリンクのクリックで簡単起動が可能なARコンテンツです。</text>
      <br />
      <text>コンテンツのカスタマイズ等承っております。</text>
      <div className="grid">
        {contents.map((content) => (
          <ContentCard key={content.id} title={content.title} image={content.image} description={content.description} link={content.link} />
        ))}
      </div>

      <div className="company-info" style={{ width: 500, margin: "20px auto" }}>
        <h2>会社情報</h2>
        <p>
          <strong>会社名 : </strong> 株式会社キャスタル
        </p>
        <p>
          <strong>ウェブサイト : </strong>{" "}
          <a href="https://www.kyastal.com" target="_blank" rel="noopener noreferrer">
            https://www.kyastal.com
          </a>
        </p>
        <p>
          <strong>お問い合わせ : </strong>{" "}
          <a href="https://kyastal.com/contact-us/" target="_blank" rel="noopener noreferrer">
            https://kyastal.com/contact-us/
          </a>
        </p>
        <p>
          <strong>事業内容 : </strong> XR、メタバース、ゲーム、AI技術を活用したシステム開発
        </p>
        <div className="socialLinks">
          <strong>SNS : </strong>
          <a href="https://x.com/kyastal_com" target="_blank" rel="noopener noreferrer">
            X(Twitter)
          </a>{" "}
          |
          <a href="https://www.youtube.com/@kyastalcorp" target="_blank" rel="noopener noreferrer">
            {" "}
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default contentsPage;
