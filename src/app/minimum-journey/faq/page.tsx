'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

interface FAQItem {
  id: string;
  cardNames: string[];
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [filterText, setFilterText] = useState('');
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFAQData = async () => {
      try {
        const response = await fetch('/data/faq.json');
        const data = await response.json();
        setFaqItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error('FAQ データの読み込みに失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFAQData();
  }, []);

  useEffect(() => {
    if (!filterText) {
      setFilteredItems(faqItems);
      return;
    }

    const filtered = faqItems.filter(item =>
      item.cardNames.some(cardName =>
        cardName.toLowerCase().includes(filterText.toLowerCase())
      ) || item.question.toLowerCase().includes(filterText.toLowerCase()) ||
      item.answer.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [filterText, faqItems]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="content-container">
          <div className="text-center py-8">
            <div className="text-xl">読み込み中...</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section id="hero">
        <div className="hero-container">
          <h2>MINIMUM JOURNEY</h2>
          <p>駆け抜け上等！新時代の宇宙開発競争の覇権を握れ！</p>
        </div>
      </section>

      <div className="content-container">
        <h1 className="text-3xl font-bold mb-6 text-slate-100">FAQ</h1>

        <div className="mb-6">
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="カード名で絞り込み..."
            className="w-full max-w-md px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-slate-100 placeholder-slate-400"
          />
        </div>

        <div id="faq-container" className="space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-box hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4">
                <p className="question font-bold text-slate-100 text-lg leading-relaxed">
                  {item.question}
                </p>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-slate-200 leading-relaxed">
                  <strong className="text-blue-300">{item.answer.split('A. ')[0]}A. </strong>
                  <span className="text-slate-100">{item.answer.split('A. ')[1]}</span>
                </p>
              </div>

              {item.cardNames.length > 0 && (
                <div className="mt-4 p-3 bg-slate-700 rounded-lg">
                  <p className="text-sm text-slate-400 mb-2">関連カード:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.cardNames.map((cardName, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-500 transition-colors"
                      >
                        {cardName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredItems.length === 0 && filterText && (
            <div className="text-center py-8 text-slate-400">
              該当するFAQが見つかりませんでした。
            </div>
          )}

          {filteredItems.length === 0 && !filterText && !loading && (
            <div className="text-center py-8 text-slate-400">
              FAQデータがありません。
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}