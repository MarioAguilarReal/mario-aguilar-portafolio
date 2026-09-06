import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { I18N, type Dict, type Lang, type Theme } from './i18n';

interface AppState {
  lang: Lang;
  theme: Theme;
  t: Dict;
  toggleLang: () => void;
  toggleTheme: () => void;
}

const AppContext = createContext<AppState | null>(null);

const LANG_KEY = 'ma-lang';
const THEME_KEY = 'ma-theme';

function readStored<T extends string>(key: string): T | null {
  try {
    return (localStorage.getItem(key) as T | null) ?? null;
  } catch {
    return null;
  }
}

function detectLang(): Lang {
  const stored = readStored<Lang>(LANG_KEY);
  if (stored === 'es' || stored === 'en') return stored;
  return (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
}

function detectTheme(): Theme {
  const stored = readStored<Theme>(THEME_KEY);
  return stored === 'light' ? 'light' : 'dark';
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang);
  const [theme, setTheme] = useState<Theme>(detectTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es';
      try {
        localStorage.setItem(LANG_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<AppState>(
    () => ({ lang, theme, t: I18N[lang], toggleLang, toggleTheme }),
    [lang, theme, toggleLang, toggleTheme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp(): AppState {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
