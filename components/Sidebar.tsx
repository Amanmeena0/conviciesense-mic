import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-surface-container border-r border-outline-variant flex flex-col py-4 md:flex">
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 p-3 bg-surface-container-high rounded-xl border border-outline-variant/30">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-primary"></div>
          <div>
            <p className="font-title-md text-on-surface text-[14px]">Live Monitor</p>
            <p className="font-label-mono text-[10px] text-outline">AI Analyzing...</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        <Link href="#" className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-bright transition-colors duration-150">
          <span className="material-symbols-outlined">monitoring</span>
          <span className="font-label-mono">Live Insights</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg bg-primary-container text-on-primary-container">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
          <span className="font-label-mono">Call History</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-bright transition-colors duration-150">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-mono">Team Performance</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-bright transition-colors duration-150">
          <span className="material-symbols-outlined">folder_open</span>
          <span className="font-label-mono">Asset Library</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-on-surface-variant hover:bg-surface-bright transition-colors duration-150">
          <span className="material-symbols-outlined">extension</span>
          <span className="font-label-mono">Integrations</span>
        </Link>
      </nav>
      <div className="px-4 mt-auto space-y-4">
        <button className="w-full py-3 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg font-label-mono text-[12px] hover:bg-secondary/20 transition-all">
          View Active Stream
        </button>
        <div className="pt-4 border-t border-outline-variant space-y-1">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">contact_support</span>
            <span className="font-label-mono text-[12px]">Support</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">manage_accounts</span>
            <span className="font-label-mono text-[12px]">Account</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
