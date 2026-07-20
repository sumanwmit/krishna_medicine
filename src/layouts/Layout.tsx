import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white" id="applet-layout-root">
      {/* Dynamic Header */}
      <Header />

      {/* Main Page Slot */}
      <main className="flex-grow" id="applet-main-content">
        <Outlet />
      </main>

      {/* Floating Lead Triggers */}
      <FloatingActions />

      {/* Dynamic Tracking Footer */}
      <Footer />
    </div>
  );
}
