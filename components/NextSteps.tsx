import Link from 'next/link';

export default function NextSteps() {
  return (
    <section className="lg:col-span-5 flex flex-col gap-gutter">
      <div className="glass-module rounded-xl p-6 flex-1">
        <h2 className="font-title-md text-title-md flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-secondary">task_alt</span>
          Next Steps
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded border border-outline-variant flex items-center justify-center flex-shrink-0" />
            <div>
              <p className="text-sm font-bold">Send Technical Whitepaper</p>
              <p className="text-xs text-on-surface-variant">Requested by Sarah regarding security protocols.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded border border-outline-variant flex items-center justify-center flex-shrink-0" />
            <div>
              <p className="text-sm font-bold">Draft Renewal Agreement</p>
              <p className="text-xs text-on-surface-variant">Update pricing to reflect the 15% multi-year discount.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded border border-outline-variant flex items-center justify-center flex-shrink-0" />
            <div>
              <p className="text-sm font-bold">Schedule Implementation Sync</p>
              <p className="text-xs text-on-surface-variant">Address the bandwidth concerns raised by the ops team.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest">AI Follow-Up Draft</h3>
        </div>
        <p className="text-[13px] text-on-surface-variant italic mb-4">
          "Hi Mike, great connecting today. I've attached the security brief Sarah requested. Looking forward to our sync on the 15th..."
        </p>
        <button className="w-full py-2 bg-primary text-on-primary font-bold rounded-lg text-sm hover:opacity-90 active:scale-[0.98] transition-all">
          Copy &amp; Send Email
        </button>
      </div>
    </section>
  );
}
