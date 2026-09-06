import { useApp } from '../AppContext';
import { SKILL_GROUPS } from '../i18n';
import { Reveal } from './Reveal';

export function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <Reveal>
          <div className="eyebrow">04 — {t.nav_skills}</div>
          <h2 className="section__title">{t.skills_h}</h2>
        </Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <Reveal className="skill-card" key={g.label}>
              <div className="skill-card__label">{g.label}</div>
              <div className="skill-card__items">
                {g.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
