import { useApp } from '../AppContext';
import { Reveal } from './Reveal';

export function About() {
  const { t } = useApp();

  return (
    <section id="sobre-mi" className="section">
      <div className="section__inner about">
        <Reveal className="about__photo-wrap">
          <div className="about__frame">
            <div className="about__frame-border" />
            <img className="about__img" src="/assets/mario.jpg" alt="Mario Aguilar Real" />
          </div>
        </Reveal>
        <Reveal>
          <div className="eyebrow">03 — {t.nav_about}</div>
          <h2 className="section__title section__title--tight">{t.about_h}</h2>
          <p className="about__p">{t.about_p1}</p>
          <p className="about__p">{t.about_p2}</p>
        </Reveal>
      </div>
    </section>
  );
}
