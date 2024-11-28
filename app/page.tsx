import React from "react";
import { contents } from "../data/contents";
import ContentCard from "./components/ContentCard";
import Image from "next/image";

const contentsPage: React.FC = () => {
  return (
    <div className="container">
      {/* ロゴ画像 */}
      <Image
        src="/images/logo_horizontal.png" // ロゴ画像のパス
        alt="ロゴ画像"
        width={250} // 必要に応じて幅を指定
        height={200} // 必要に応じて高さを指定
        className="logo" // CSSクラスを指定（任意）
      />

      <h1 style={{ margin: "20px" }}>KYAST AR</h1>

      <text>
        QRコードやURLリンクのクリックで簡単起動が可能なARコンテンツです。
      </text>
      <div className="grid">
        {contents.map((content) => (
          <ContentCard
            key={content.id}
            title={content.title}
            image={content.image}
            description={content.description}
            buttonLabel="体験する"
          />
        ))}
      </div>
    </div>
  );
};

export default contentsPage;
