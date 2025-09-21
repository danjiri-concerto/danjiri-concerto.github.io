import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />

      <section id="hero">
        <div className="hero-container">
          <h2>お問い合わせ</h2>
          <p>お問い合わせは、下記よりお願いいたします</p>
        </div>
      </section>

      <section id="contact">
        <div className="content-container">
          <h2>お問い合わせ</h2>
          <h3>お問い合わせの前に</h3>
          <p>お問い合わせ頂いてから返答までに時間を要する場合があります。ゲームに関するお問い合わせは、各ゲームのFAQページを併せて活用していただけると幸いです。</p>
          <p>お問い合わせは、ゲームのエラッタ/質問から感想/改善案、団体に関して、など幅広く受け付けております。</p>

          <h3>各種お問い合わせ先</h3>
          <p>お問い合わせフォーム：<a href="https://forms.gle/2nKqdARGPyGVaUXs7">フォーム</a></p>
          <p>メール：danjiri.concerto at gmail.com</p>
          <p>X：<a href="https://x.com/danjiriconcerto">@danjiriconcerto</a></p>
        </div>
      </section>

      <Footer />
    </>
  );
}