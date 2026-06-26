import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-on-surface font-body-md">
      <Header />
      <Sidebar />
      <div className="md:ml-64 mt-16 p-margin-desktop min-h-screen">
        {children}
      </div>
    </div>
  );
}
