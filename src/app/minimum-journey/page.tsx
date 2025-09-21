'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToggleSection from '@/components/ToggleSection';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ErrataItem {
  id: string;
  importance: string;
  title: string;
  incorrect: string;
  correct: string;
  tables?: {
    incorrect?: any[];
    correct?: any[];
  };
}

interface ErrataCategory {
  title: string;
  items: ErrataItem[];
}

interface ErrataData {
  version: string;
  description: string;
  important_note: string;
  categories: ErrataCategory[];
}

export default function MinimumJourney() {
  const [errataData, setErrataData] = useState<ErrataData | null>(null);

  useEffect(() => {
    const loadErrataData = async () => {
      try {
        const response = await fetch('/data/errata.json');
        const data = await response.json();
        setErrataData(data);
      } catch (error) {
        console.error('誤植訂正データの読み込みに失敗しました:', error);
      }
    };

    loadErrataData();
  }, []);
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
          <div className="rounded-box">
            <h2 className="text-center mb-6">概要</h2>
            <p>宇宙探査もコスパの時代？！MINIMUM JOURNEY（ミニマムジャーニー）は、カードドローをめぐる駆け引き、オールユニーク効果によるデッキ構築がアツいボードゲームです！</p>
          </div>
        </div>
      </section>

      <section id="rule">
        <div className="content-container">
          <div className="rounded-box">
            <h2 className="text-center mb-6">ルール</h2>
            <h3>ストーリー</h3>
            <div className="rounded-box-text">
              <p className="mb-4">2XXX年、隕石衝突によって人類は絶滅の危機に瀕した。宇宙開発に従事した研究者たちも被害に遭い、人類の宇宙開発もまた終焉を迎えたかに思えた。しかしそれから100年後、人類は劇的な復興を遂げ、平和を享受していた。新時代の科学者たちは、先人が残した宇宙開発の遺物を有効活用すべく、宇宙探査船の開発に着手した。ここに、各国の国威発揚を懸けた宇宙開発競争が再始動したのである。</p>
              <p>あなた方は、各国の宇宙探査船を任された宇宙飛行士である。優れた宇宙船を他国より早く作り上げ、遺物を集める必要がある。悠長に宇宙船を建造していると、他国に先を越されてしまう。しかし、航行距離の短い探査船では貴重な遺物を見つけられない。回収した遺物を活用して、前人未到の領域にふむ入れるのはどこの国家になるのか。ミニマム・ジャーニーで、新時代の宇宙開発競争の覇権を握れ。</p>
            </div>

          <h3>ざっくりしたルール</h3>
          <div className="space-y-6">
            <div className="aspect-w-16 aspect-h-9 relative w-full max-w-4xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/RpM7Neln5NY?si=D1hTdGS6JFNu2thH"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            <div className="aspect-w-9 aspect-h-16 relative w-full max-w-md mx-auto">
              <iframe
                src="https://www.youtube.com/embed/eshWt2iifAU"
                title="【 #ゲムマ2024秋】Minimum Journey 紹介 #shorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                style={{ aspectRatio: '9/16' }}
              />
            </div>
          </div>
          <img src="/images/rule.png" alt="simple rule" className="responsive-image" />
          <ol className="rounded-box-text">
            <li>デッキからカードを引いて探査力を得よう！</li>
            <li>他の人よりカードを引きすぎると、探査力が減るから気をつけよう！</li>
            <li>より強いカードを獲得してデッキを強化！</li>
            <li>最果てのカードを獲得するとゲーム終了！名声を多く獲得した人が勝利！</li>
          </ol>

            <h3>詳細ルール</h3>
            <p>詳細なルールは<a href="https://www.dropbox.com/scl/fi/uoc73pe0joc8uvf054mpx/minimum_journey_rulebook.pdf?rlkey=974wvay5jbwjmiitst9tghq4c&dl=0" className="text-blue-400 hover:text-blue-300">ルールブック</a>に記載されています！</p>
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

      <section id="error">
        <div className="content-container">
          <h2>誤植訂正</h2>

          {errataData ? (
            <>
              <h3>{errataData.version}</h3>
              <p>{errataData.description}</p>
              <p><span className="highlight">【重要な誤植】</span>に関しては、プレイ前にご確認いただけますと幸いです。</p>

              {errataData.categories.map((category) => (
                <ToggleSection key={category.title} title={category.title}>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.id} className="p-4 bg-slate-800 rounded-lg border border-slate-600">
                        <div className="font-bold mb-2">
                          {item.importance === '重要' && (
                            <span className="highlight">【重要な誤植】</span>
                          )}
                          {item.title}
                        </div>

                        {item.tables ? (
                          <div className="space-y-4">
                            <div>
                              <p className="mb-2">（誤）{item.incorrect}</p>
                              <table className="w-full border-collapse mb-4">
                                <thead>
                                  <tr>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">プレイ人数＼コスト</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">2</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">4</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">6</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">8</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.tables.incorrect?.map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-700">
                                      <td className="border border-slate-500 p-2 text-center">{row.players}</td>
                                      <td className={`border border-slate-500 p-2 text-center ${row.highlight === 'cost2' ? 'highlight' : ''}`}>
                                        {row.cost2}
                                      </td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost4}</td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost6}</td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost8}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <p className="mb-2">（正）{item.correct}</p>
                              <table className="w-full border-collapse">
                                <thead>
                                  <tr>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">プレイ人数＼コスト</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">2</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">4</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">6</th>
                                    <th className="border border-slate-500 p-2 text-center bg-slate-700">8</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {item.tables.correct?.map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-700">
                                      <td className="border border-slate-500 p-2 text-center">{row.players}</td>
                                      <td className={`border border-slate-500 p-2 text-center ${row.highlight === 'cost2' ? 'highlight' : ''}`}>
                                        {row.cost2}
                                      </td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost4}</td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost6}</td>
                                      <td className="border border-slate-500 p-2 text-center">{row.cost8}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {item.incorrect && (
                              <p>（誤）{item.incorrect}</p>
                            )}
                            <p>（正）{item.correct}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ToggleSection>
              ))}
            </>
          ) : (
            <p>データを読み込み中...</p>
          )}
        </div>
      </section>

      <section id="faq">
        <div className="content-container">
          <div className="rounded-box">
            <h2 className="text-center mb-6">FAQ</h2>
            <p className="mb-4">FAQは、<Link href="/minimum-journey/faq" className="text-blue-400 hover:text-blue-300">FAQページ</Link>でサポートしています。</p>
            <p>FAQにない項目に関しては、<Link href="/contact" className="text-blue-400 hover:text-blue-300">お問い合わせページ</Link>よりお問い合わせください。</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}