import React, { useEffect } from 'react';
import { CATEGORY_LABELS, useAppStore } from '../store/useAppStore';

export { CATEGORY_LABELS };

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const refreshFromSupabase = useAppStore((s) => s.refreshFromSupabase);

  useEffect(() => {
    void refreshFromSupabase();
  }, [refreshFromSupabase]);

  return <>{children}</>;
};

export function useData() {
  const store = useAppStore();
  const visibleTemplates = store.templates.filter((t) => t.isVisible !== false);

  return {
    ...store,
    visibleTemplates,
  };
}
