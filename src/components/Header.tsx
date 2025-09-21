'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <header className="w-full bg-gray-800 text-white py-5 text-center">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <h1 className="ml-5">
          <Link href="/" className="no-style-link">
            だんじり協奏曲
          </Link>
        </h1>
        <nav>
          <ul className="list-none flex gap-5">
            <li className="flex items-center">
              <img src="/images/en.png" className="inline-image mr-1" alt="EN" />
              <Link href="/en" className="text-white text-lg hover:underline">
                En
              </Link>
            </li>
            <li>
              <Link href="/minimum-journey" className="text-white text-lg hover:underline">
                ゲーム
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white text-lg hover:underline">
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}