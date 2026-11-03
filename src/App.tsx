/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';
import { DataProvider } from './context/DataContext';
import { useAppStore } from './store/useAppStore';
import MobileHeader from './components/layout/MobileHeader';
import Footer from './components/layout/Footer';
import BottomTabBar from './components/layout/BottomTabBar';
import Hero from './components/hero/Hero';
import Showcase from './components/sections/Showcase';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import Consultation from './components/sections/Consultation';
import TemplateModal from './components/ui/TemplateModal';
import Toast from './components/ui/Toast';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

function StorefrontLanding() {
  const {
    templates,
    pricingPlans,
    categoryFilter,
    activeModalItem,
    selectedTemplateName,
    clientNotes,
    showToast,
    setCategoryFilter,
    setActiveModalItem,
    setSelectedTemplateName,
    setClientNotes,
    setShowToast,
  } = useAppStore();

  const visibleTemplatesCount = templates.filter((t) => t.isVisible !== false).length;

  useScrollReveal(`${categoryFilter}-${visibleTemplatesCount}-${pricingPlans.length}`);

  const handleSelectTemplate = (templateName: string) => {
    setSelectedTemplateName(templateName);
    const formElem = document.getElementById('consultation');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planTitle: string) => {
    setClientNotes(`Tôi quan tâm đến gói dịch vụ: ${planTitle}`);
    const formElem = document.getElementById('consultation');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close modal on Escape key & lock scroll when active
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeModalItem, setActiveModalItem]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans max-lg:pb-24">
      <MobileHeader />
      <Hero activeModalItem={activeModalItem} setActiveModalItem={setActiveModalItem} />
      <Showcase
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        setActiveModalItem={setActiveModalItem}
        handleSelectTemplate={handleSelectTemplate}
      />
      <Features />
      <Pricing handleSelectPlan={handleSelectPlan} />
      <Consultation
        selectedTemplateName={selectedTemplateName}
        setSelectedTemplateName={setSelectedTemplateName}
        clientNotes={clientNotes}
        setClientNotes={setClientNotes}
        setShowToast={setShowToast}
      />
      <TemplateModal
        activeModalItem={activeModalItem}
        setActiveModalItem={setActiveModalItem}
        handleSelectTemplate={handleSelectTemplate}
      />
      <Toast showToast={showToast} />
      <Footer setCategoryFilter={setCategoryFilter} />
      <BottomTabBar />
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StorefrontLanding />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
