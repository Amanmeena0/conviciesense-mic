import Layout from '@/components/Layout';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import EngagementTimeline from '@/components/EngagementTimeline';
import BANTAnalysis from '@/components/BANTAnalysis';
import NextSteps from '@/components/NextSteps';
import TranscriptLog from '@/components/TranscriptLog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Layout>
      <main className="md:ml-64 mt-16 p-margin-desktop min-h-screen">
        <div className="max-w-container-max mx-auto space-y-stack-lg">
          {/* Page Header & Quick Stats */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-secondary-container/20 text-secondary-fixed text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">Enterprise Sale</span>
                <span className="text-outline font-label-mono text-xs">Call ID: CS-9842-X</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Post-Call Summary: Acme Corp Q4 Renewal</h1>
              <p className="text-on-surface-variant mt-1">Conducted on Oct 24, 2023 • 24m 12s Duration</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg hover:bg-surface-bright transition-colors">
                <span className="material-symbols-outlined text-[20px]">share</span>
                <span className="font-label-sm">Share Report</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-highest border border-outline-variant rounded-lg hover:bg-surface-bright transition-colors">
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span className="font-label-sm">Export CSV</span>
              </button>
            </div>
          </header>
          {/* Top Bento Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <ExecutiveSummary />
            <EngagementTimeline />
          </div>
          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <BANTAnalysis />
            <NextSteps />
          </div>
          {/* Bottom Row */}
          <TranscriptLog />
        </div>
        <Footer />
      </main>
    </Layout>
  );
}
