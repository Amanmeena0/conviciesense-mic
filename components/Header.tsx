import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center px-6 md:px-[calc(var(--margin-desktop))] bg-surface/80 backdrop-blur-md z-50 border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-8">
        <span className="font-display-lg text-title-md font-bold text-primary tracking-tight">ConvinceSense</span>
        <nav className="hidden md:flex gap-6 items-center h-full">
          <Link href="#" className="font-body-md text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Dashboard</Link>
          <Link href="#" className="font-body-md text-primary font-bold border-b-2 border-primary pb-1">Recordings</Link>
          <Link href="#" className="font-body-md text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Analytics</Link>
          <Link href="#" className="font-body-md text-on-surface-variant font-medium hover:text-primary transition-colors duration-200">Settings</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 border border-outline-variant">
          <span className="material-symbols-outlined text-outline text-[20px] mr-2">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-label-mono p-0 w-48 text-on-surface placeholder-outline" placeholder="Search calls..." type="text" />
        </div>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all p-2">notifications</button>
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-body-md font-bold hover:opacity-90 active:scale-95 transition-all">Start New Call</button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBydN9a-URkUyb3EbMEXrxRRb35zw61rKWQ7f3QcdwXBQrIa8blJRm9flK0WbBbOjWAQyw6yBXqeiOPw9A7a3ngJ3S7Le2X-QXAZIgnd88et1q7etjADf0KLje2R6eHsXAW4haDHneZxCRUONnAlkjdludfTwpAg3RfFcasH2NH1G4jLMJqS5j6LIEUiye1zcL4in7zFU-AIteWTeAFKq5NlUek2mHAEpjs5RGuL8QpW8WsRlPEHwswXnL4oYjStpG4CWyyowvqog" alt="User avatar" />
        </div>
      </div>
    </header>
  );
}
