import { useApp } from '../AppContext';
import { PROJECT_META } from '../i18n';
import { Reveal } from './Reveal';
import { ImageSlot } from './ImageSlot';

export function Projects() {
  const { t } = useApp();

  return (
    <section id="proyectos" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="eyebrow">01 — {t.nav_projects}</div>
          <h2 className="section__title">{t.projects_h}</h2>
        </Reveal>

        <div className="projects-grid">
          {PROJECT_META.map((m, i) => (
            <Reveal as="article" className="card" key={m.slotId}>
              <div className="card__media">
                <ImageSlot id={m.slotId} placeholder={t.slotPh[i]} />
              </div>
              <div className="card__body">
                <div className="card__badge-row">
                  <span className="badge" style={{ color: m.badgeColor }}>
                    {t.badges[m.badgeKey]}
                  </span>
                </div>
                <h3 className="card__title">{t.projects[i].title}</h3>
                <p className="card__desc">{t.projects[i].desc}</p>
                <div className="card__stack">
                  {m.stack.map((s) => (
                    <span className="chip-mono" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
