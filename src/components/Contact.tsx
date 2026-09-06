import { type FormEvent } from 'react';
import { useApp } from '../AppContext';
import { CONTACT_EMAIL, LINKS } from '../i18n';
import { Reveal } from './Reveal';

export function Contact() {
  const { t, lang } = useApp();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem('nombre') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const mensaje = (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value;
    const subject = encodeURIComponent((lang === 'es' ? 'Proyecto — ' : 'Project — ') + nombre);
    const body = encodeURIComponent(`${mensaje}\n\n— ${nombre} <${email}>`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="section section--overflow">
      <div className="contact__glow" />
      <div className="section__inner section__inner--narrow section__inner--contact">
        <Reveal className="contact__head">
          <div className="eyebrow">05 — {t.nav_contact}</div>
          <h2 className="section__title section__title--contact">{t.contact_h}</h2>
          <p className="contact__sub">{t.contact_sub}</p>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={onSubmit}>
          <div className="contact-form__row">
            <input className="field" name="nombre" required placeholder={t.f_name} />
            <input className="field" name="email" type="email" required placeholder={t.f_email} />
          </div>
          <textarea className="field field--area" name="mensaje" required rows={5} placeholder={t.f_msg} />
          <button type="submit" className="btn-submit">
            {t.f_send}
          </button>
        </Reveal>

        <Reveal className="socials">
          <a className="social" href={`mailto:${CONTACT_EMAIL}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 6 10-6" />
            </svg>
            Email
          </a>
          <a className="social" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            LinkedIn
          </a>
          <a className="social" href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
            GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
