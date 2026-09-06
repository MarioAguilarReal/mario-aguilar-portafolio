import { useApp } from '../AppContext';

export function Nav() {
  const { t, theme, lang, toggleLang, toggleTheme } = useApp();

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__logo">MA</span>
          <span className="nav__wordmark">
            marioaguilar<span className="accent">.dev</span>
          </span>
        </a>
        <div className="nav__spacer" />
        <div className="navlinks">
          <a href="#proyectos" className="navlink">
            {t.nav_projects}
          </a>
          <a href="#experiencia" className="navlink">
            {t.nav_exp}
          </a>
          <a href="#skills" className="navlink">
            {t.nav_skills}
          </a>
          <a href="#contacto" className="navlink">
            {t.nav_contact}
          </a>
        </div>
        <div className="nav__actions">
          <button className="nav__btn" title="Español / English" onClick={toggleLang}>
            {lang === 'es' ? 'ES → EN' : 'EN → ES'}
          </button>
          <button className="nav__btn nav__btn--theme" title="Tema" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  );
}
