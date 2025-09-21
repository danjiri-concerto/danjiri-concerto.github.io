import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToggleSection from '@/components/ToggleSection';
import Link from 'next/link';

export default function MinimumJourney() {
  return (
    <>
      <Header />

      <section id="hero">
        <div className="hero-container">
          <h2>MINIMUM JOURNEY</h2>
          <p>駆け抜け上等！新時代の宇宙開発競争の覇権を握れ！</p>
        </div>
      </section>

      <div className="toc border border-gray-300 p-4 mb-5 bg-gray-800 text-gray-100 border-gray-100 border-2 text-center">
        <ul className="list-none p-0">
          <li className="mb-1"><a href="#about" className="text-inherit no-underline hover:text-blue-400 hover:underline">概要</a></li>
          <li className="mb-1"><a href="#rule" className="text-inherit no-underline hover:text-blue-400 hover:underline">ルール</a></li>
          <li className="mb-1"><a href="#reservation" className="text-inherit no-underline hover:text-blue-400 hover:underline">予約</a></li>
          <li className="mb-1"><a href="#error" className="text-inherit no-underline hover:text-blue-400 hover:underline">誤植訂正</a></li>
          <li className="mb-1"><a href="#faq" className="text-inherit no-underline hover:text-blue-400 hover:underline">FAQ</a></li>
        </ul>
      </div>

      <section id="about">
        <div className="content-container">
          <h2>概要</h2>
          <p>宇宙探査もコスパの時代？！MINIMUM JOURNEY（ミニマムジャーニー）は、カードドローをめぐる駆け引き、オールユニーク効果によるデッキ構築がアツいボードゲームです！</p>
        </div>
      </section>

      <section id="rule">
        <div className="content-container">
          <h2>ルール</h2>
          <h3>ストーリー</h3>
          <div className="rounded-box">
            <p>2XXX年、隕石衝突によって人類は絶滅の危機に瀕した。宇宙開発に従事した研究者たちも被害に遭い、人類の宇宙開発もまた終焉を迎えたかに思えた。しかしそれから100年後、人類は劇的な復興を遂げ、平和を享受していた。新時代の科学者たちは、先人が残した宇宙開発の遺物を有効活用すべく、宇宙探査船の開発に着手した。ここに、各国の国威発揚を懸けた宇宙開発競争が再始動したのである。</p>
            <p>あなた方は、各国の宇宙探査船を任された宇宙飛行士である。優れた宇宙船を他国より早く作り上げ、遺物を集める必要がある。悠長に宇宙船を建造していると、他国に先を越されてしまう。しかし、航行距離の短い探査船では貴重な遺物を見つけられない。回収した遺物を活用して、前人未到の領域にふむ入れるのはどこの国家になるのか。ミニマム・ジャーニーで、新時代の宇宙開発競争の覇権を握れ。</p>
          </div>

          <h3>ざっくりしたルール</h3>
          <p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RpM7Neln5NY?si=D1hTdGS6JFNu2thH"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-full"
            />
          </p>
          <p>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              height="838"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube.com/embed/eshWt2iifAU"
              title="【 #ゲムマ2024秋】Minimum Journey 紹介 #shorts"
              width="471"
              className="w-full max-w-full"
            />
          </p>
          <img src="/images/rule.png" alt="simple rule" className="responsive-image" />
          <ol className="rounded-box-text">
            <li>デッキからカードを引いて探査力を得よう！</li>
            <li>他の人よりカードを引きすぎると、探査力が減るから気をつけよう！</li>
            <li>より強いカードを獲得してデッキを強化！</li>
            <li>最果てのカードを獲得するとゲーム終了！名声を多く獲得した人が勝利！</li>
          </ol>

          <h3>詳細ルール</h3>
          <p>詳細なルールは<a href="https://www.dropbox.com/scl/fi/uoc73pe0joc8uvf054mpx/minimum_journey_rulebook.pdf?rlkey=974wvay5jbwjmiitst9tghq4c&dl=0">ルールブック</a>に記載されています！</p>
        </div>
      </section>

      <section id="reservation">
        <div className="content-container">
          <h2>予約</h2>
          <p>ゲームマーケット2024秋での予約受付を開始しました！</p>
          <p>予約は、<a href="https://forms.gle/1CSSiS7bTSsFa1eR8">予約フォーム</a>からお願いします！</p>
        </div>
      </section>

      <section id="error">
        <div className="content-container">
          <h2>誤植訂正</h2>

          <h3>ゲームマーケット2024秋頒布バージョン</h3>
          <p>ゲームマーケット2024秋で頒布したルールブック・カードに一部誤植修正があります。</p>
          <p><span className="text-red-500 font-bold">【重要な誤植】</span>に関しては、プレイ前にご確認いただけますと幸いです。</p>

          <ToggleSection title="ルールブック">
            <ul className="m-4 text-left">
              <li><span className="text-red-500 font-bold">【重要な誤植】</span>4人プレイ時の準備する枚数について（p.1左下）</li>
              <ul>
                <li>（誤）各山札からめくる枚数は以下の通りです。
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">プレイ人数＼コスト</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">2</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">4</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">6</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">8</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 text-center">3人プレイ</td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 text-center">4人プレイ</td>
                        <td className="border border-gray-300 p-2 text-center"><span className="text-red-500 font-bold">3</span></td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>（正）各山札からめくる枚数は以下の通りです。
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">プレイ人数＼コスト</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">2</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">4</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">6</th>
                        <th className="border border-gray-300 p-2 text-center bg-gray-100">8</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 text-center">3人プレイ</td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 p-2 text-center">4人プレイ</td>
                        <td className="border border-gray-300 p-2 text-center"><span className="text-red-500 font-bold">4</span></td>
                        <td className="border border-gray-300 p-2 text-center">3</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                        <td className="border border-gray-300 p-2 text-center">2</td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
              {/* 他の誤植項目も同様に追加 */}
            </ul>
          </ToggleSection>

          <ToggleSection title="カード">
            <ul className="m-4 text-left">
              <li><span className="text-red-500 font-bold">【重要な誤植】</span>No. 057「航路安全のお守り」カード効果</li>
              <ul>
                <li>（誤）</li>
                <li>（正）<span className="text-red-500 font-bold">1ラウンド目は、このカードの探査力を0として扱う。</span></li>
              </ul>
              {/* 他のカード誤植項目も同様に追加 */}
            </ul>
          </ToggleSection>
        </div>
      </section>

      <section id="faq">
        <div className="content-container">
          <h2>FAQ</h2>
          <p>FAQは、<Link href="/minimum-journey/faq">FAQページ</Link>でサポートしています。</p>
          <p>FAQにない項目に関しては、<Link href="/contact">お問い合わせページ</Link>よりお問い合わせください。</p>
        </div>
      </section>

      <Footer />
    </>
  );
}