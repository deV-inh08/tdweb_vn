<<<<<<< Updated upstream
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import type { TemplateItem } from './types';
import { useScrollReveal } from './hooks/useScrollReveal';
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

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<TemplateItem | null>(null);
  const [selectedTemplateName, setSelectedTemplateName] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  useScrollReveal(categoryFilter);
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
  }, [activeModalItem]);

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
=======
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
>>>>>>> Stashed changes
