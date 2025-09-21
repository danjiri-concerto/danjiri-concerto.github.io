export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 text-center py-8 border-t border-slate-700 mt-20">
      <div className="footer-container max-w-4xl mx-auto px-4">
        <div className="space-y-3">
          <p className="text-lg">
            <span className="font-semibold text-slate-200">MAIL:</span>
            <a href="mailto:danjiri.concerto@gmail.com" className="text-blue-400 hover:text-blue-300 ml-2">
              danjiri.concerto@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold text-slate-200">X:</span>
            <a href="https://x.com/danjiriconcerto" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-2">
              @danjiriconcerto
            </a>
          </p>
          <div className="pt-4 border-t border-slate-700">
            <p className="text-slate-400">&copy; 2024 だんじり協奏曲. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}