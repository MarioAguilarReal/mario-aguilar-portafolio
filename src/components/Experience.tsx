import { useApp } from '../AppContext';
import { Reveal } from './Reveal';

export function Experience() {
  const { t } = useApp();

  return (
    <section id="experiencia" className="section section--exp">
      <div className="section__inner section__inner--narrow">
        <Reveal>
          <div className="eyebrow">02 — {t.nav_exp}</div>
          <h2 className="section__title section__title--exp">{t.exp_h}</h2>
        </Reveal>

        <div className="timeline">
          {t.jobs.map((j, i) => {
            const color = i === 0 ? 'var(--acc)' : 'var(--mut)';
            return (
              <Reveal className="job" key={j.company + j.dates}>
                <div className="job__rail">
                  <span
                    className="job__dot"
                    style={{ background: color, boxShadow: `0 0 0 1.5px ${color}` }}
                  />
                  <span className="job__line" />
                </div>
                <div className="job__col">
                  <div className="job__dates" style={{ color }}>
                    {j.dates}
                  </div>
                  <h3 className="job__role">{j.role}</h3>
                  <div className="job__company">{j.company}</div>
                  <p className="job__desc">{j.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
