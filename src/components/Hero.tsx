import { useApp } from '../AppContext';

export function Hero() {
  const { t } = useApp();

  return (
    <header id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__grid" />
      <div className="hero__inner">
        <div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {t.hero_badge}
          </div>
          <h1 className="hero__title">
            Mario Aguilar <span className="accent">Real</span>
          </h1>
          <p className="hero__subtitle">{t.hero_title}</p>
          <p className="hero__value">{t.hero_value}</p>
          <div className="hero__cta">
            <a href="#proyectos" className="btn-primary">
              {t.cta_projects}
            </a>
            <a href="#contacto" className="btn-secondary">
              {t.cta_contact}
            </a>
          </div>
        </div>

        <div className="hero__card-wrap">
          <div className="term">
            <div className="term__bar">
              <span className="term__dot term__dot--red" />
              <span className="term__dot term__dot--amber" />
              <span className="term__dot term__dot--green" />
              <span className="term__host">mario@marioaguilar.dev</span>
            </div>
            <div className="term__body">
              <div>
                <span className="accent">$</span> <span className="term__cmd">whoami</span>
              </div>
              <div>full-stack engineer · 4+ yrs</div>
              <div>
                <span className="accent">$</span> <span className="term__cmd">cat focus.txt</span>
              </div>
              <div>
                LLMs · AI Agents · RAG
                <br />
                {t.term_line}
              </div>
              <div>
                <span className="accent">$</span> <span className="term__cmd">status</span>
              </div>
              <div className="term__status">
                {t.term_status}
                <span className="cursor">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
