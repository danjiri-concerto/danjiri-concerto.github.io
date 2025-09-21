'use client';

import { useState } from 'react';

interface ToggleSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ToggleSection({ title, children }: ToggleSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toggle-section">
      <button
        className="toggle-button cursor-pointer bg-blue-600 text-white px-2.5 py-2.5 border-none text-base inline-block my-2.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '▼' : '▶'} {title}
      </button>
      {isOpen && (
        <div className="toggle-content p-2.5 border border-gray-300 mt-2.5 bg-gray-50 text-left">
          {children}
        </div>
      )}
    </div>
  );
}