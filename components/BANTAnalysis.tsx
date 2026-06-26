import Link from 'next/link';

export default function BANTAnalysis() {
  return (
    <section className="lg:col-span-7 glass-module rounded-xl p-6">
      <h2 className="font-title-md text-title-md flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-on-tertiary-fixed-variant">fact_check</span>
        BANT Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl p-4 transition-all hover:bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-mono text-xs text-outline">BUDGET</span>
            <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
          </div>
          <p className="text-on-surface font-bold mb-1">$120k - $150k Annual</p>
          <p className="text-on-surface-variant text-[13px]">Approved for Q1 spend. Mike confirmed budget is allocated for the renewal.</p>
        </div>
        <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl p-4 transition-all hover:bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-mono text-xs text-outline">AUTHORITY</span>
            <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
          </div>
          <p className="text-on-surface font-bold mb-1">Decision Maker Present</p>
          <p className="text-on-surface-variant text-[13px]">Mike (VP of Sales) has final sign-off. Stakeholder Sarah needs technical brief.</p>
        </div>
        <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl p-4 transition-all hover:bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-mono text-xs text-outline">NEED</span>
            <span className="material-symbols-outlined text-primary text-[18px]">info</span>
          </div>
          <p className="text-on-surface font-bold mb-1">High Urgency: Compliance</p>
          <p className="text-on-surface-variant text-[13px]">Need to automate call monitoring to meet new regulatory standards by Dec 31st.</p>
        </div>
        <div className="bg-surface-container-lowest/50 border border-outline-variant/30 rounded-xl p-4 transition-all hover:bg-surface-container-lowest">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-mono text-xs text-outline">TIMELINE</span>
            <span className="material-symbols-outlined text-error text-[18px]">pending</span>
          </div>
          <p className="text-on-surface font-bold mb-1">Target Go-Live: Dec 15</p>
          <p className="text-on-surface-variant text-[13px]">Tight window. Client expressed concern about implementation bandwidth.</p>
        </div>
      </div>
    </section>
  );
}
