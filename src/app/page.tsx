import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <section id="hero">
        <Link href="/minimum-journey" className="no-style-link">
          <div className="hero-container">
            <h2>MINIMUM JOURNEY</h2>
            <p>駆け抜け上等！新時代の宇宙開発競争の覇権を握れ！</p>
          </div>
        </Link>
      </section>

      <section id="about">
        <div className="content-container">
          <div className="rounded-box">
            <h2 className="text-center mb-6">概要</h2>
            <p className="mb-4">宇宙探査もコスパの時代？！MINIMUM JOURNEY（ミニマムジャーニー）は、カードドローをめぐる駆け引き、オールユニーク効果によるデッキ構築がアツいボードゲームです！</p>
            <p>詳細は、<Link href="/minimum-journey" className="text-blue-400 hover:text-blue-300">ゲームページ</Link>をご覧ください！</p>
          </div>
        </div>
      </section>

      <section id="reservation">
        <div className="content-container">
          <div className="rounded-box">
            <h2 className="text-center mb-6">予約</h2>
            <p className="mb-4">ゲームマーケット2024秋での予約受付を開始しました！</p>
            <p>予約は、<a href="https://forms.gle/1CSSiS7bTSsFa1eR8" className="text-blue-400 hover:text-blue-300">予約フォーム</a>からお願いします！</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}