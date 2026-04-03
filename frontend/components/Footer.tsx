export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-x-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-[#4F46E5] to-[#22C55E] rounded-2xl flex items-center justify-center text-white">🧩</div>
              <span className="heading-font text-4xl font-semibold tracking-tighter">TECH TOTS</span>
            </div>
            <p className="text-slate-400 max-w-xs">Premium software development studio based in Coimbatore, Tamil Nadu.</p>
          </div>
          
          <div className="md:col-span-7 text-sm text-slate-400">
            © 2026 TECH TOTS • All Rights Reserved • Built with ❤️ in India
          </div>
        </div>
      </div>
    </footer>
  );
}