import Link from 'next/link';

export default function EngagementTimeline() {
  return (
    <section className="lg:col-span-8 glass-module rounded-xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-title-md text-title-md flex items-center gap-2">
          <span className="material-symbols-outlined text-error">insights</span>
          Engagement Timeline
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-xs text-on-surface-variant font-label-mono">Interest Score</span>
          </div>
          <button className="material-symbols-outlined text-outline hover:text-on-surface transition-colors">fullscreen</button>
        </div>
      </div>
      <div className="h-48 w-full relative">
        {/* Chart Grid */}
        <div className="absolute inset-0 grid grid-rows-4 gap-0">
          <div className="border-b border-outline-variant/20 flex items-end"><span className="text-[10px] text-outline font-label-mono mb-1">5 - High</span></div>
          <div className="border-b border-outline-variant/20 flex items-end"><span className="text-[10px] text-outline font-label-mono mb-1">3 - Neutral</span></div>
          <div className="border-b border-outline-variant/20 flex items-end"><span className="text-[10px] text-outline font-label-mono mb-1">1 - Low</span></div>
        </div>
        {/* SVG Chart */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#89ceff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#89ceff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q10,55 20,40 T40,45 T60,20 T80,30 T100,25 L100,100 L0,100 Z" fill="url(#chartGradient)" />
          <path d="M0,60 Q10,55 20,40 T40,45 T60,20 T80,30 T100,25" fill="none" stroke="#89ceff" strokeWidth="2" />
          <circle className="animate-pulse" cx="60" cy="20" fill="#44e2cd" r="4">
            <title>Buying Signal Detected</title>
          </circle>
        </svg>
        {/* Timeline markers */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-2">
          <span className="text-[10px] text-outline font-label-mono">0:00</span>
          <span className="text-[10px] text-outline font-label-mono">5:00</span>
          <span className="text-[10px] text-outline font-label-mono">10:00</span>
          <span className="text-[10px] text-outline font-label-mono">15:00</span>
          <span className="text-[10px] text-outline font-label-mono">20:00</span>
          <span className="text-[10px] text-outline font-label-mono">24:12</span>
        </div>
      </div>
      {/* Signals */}
      <div className="mt-8 flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
        <div className="flex-shrink-0 bg-surface-container-high border border-outline-variant rounded-lg p-3 w-48 buying-signal-glow">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Buying Signal</span>
          </div>
          <p className="text-[11px] leading-tight text-on-surface-variant">Client asked about integration timeline: "How soon can we go live?"</p>
        </div>
        <div className="flex-shrink-0 bg-surface-container-high border border-outline-variant rounded-lg p-3 w-48">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-error text-[16px]">warning</span>
            <span className="text-[10px] font-bold text-error uppercase tracking-widest">Objection</span>
          </div>
          <p className="text-[11px] leading-tight text-on-surface-variant">Competitor mention: "Oracle offers this as part of their core suite."</p>
        </div>
        <div className="flex-shrink-0 bg-surface-container-high border border-outline-variant rounded-lg p-3 w-48">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Value Prop</span>
          </div>
          <p className="text-[11px] leading-tight text-on-surface-variant">Jane explained the ROI of automated compliance monitoring.</p>
        </div>
      </div>
    </section>
  );
}
