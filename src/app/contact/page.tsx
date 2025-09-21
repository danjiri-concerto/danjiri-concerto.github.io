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
          <div className="rounded-box">
            <h2 className="text-center mb-6">お問い合わせ</h2>

            <div className="mb-8">
              <h3 className="mb-4">お問い合わせの前に</h3>
              <p className="mb-4">お問い合わせ頂いてから返答までに時間を要する場合があります。ゲームに関するお問い合わせは、各ゲームのFAQページを併せて活用していただけると幸いです。</p>
              <p>お問い合わせは、ゲームのエラッタ/質問から感想/改善案、団体に関して、など幅広く受け付けております。</p>
            </div>

            <div>
              <h3 className="mb-4">各種お問い合わせ先</h3>
              <div className="space-y-3">
                <p>お問い合わせフォーム：<a href="https://forms.gle/2nKqdARGPyGVaUXs7" className="text-blue-400 hover:text-blue-300">フォーム</a></p>
                <p>メール：<a href="mailto:danjiri.concerto@gmail.com" className="text-blue-400 hover:text-blue-300">danjiri.concerto@gmail.com</a></p>
                <p>X：<a href="https://x.com/danjiriconcerto" className="text-blue-400 hover:text-blue-300">@danjiriconcerto</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}