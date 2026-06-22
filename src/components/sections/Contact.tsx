'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import { FadeIn } from '@/components/animations/FadeIn';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        return value.trim() ? undefined : 'Name is required';
      case 'email':
        if (!value.trim()) return 'Email is required';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? undefined
          : 'Please enter a valid email';
      case 'subject':
        return value.trim() ? undefined : 'Subject is required';
      case 'message':
        return value.trim() ? undefined : 'Message is required';
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });
    const error = validate(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validate(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((field) => {
      const error = validate(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-[14px] bg-[var(--bg-tertiary)] border text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all duration-300 focus:outline-none focus:border-[var(--accent-gold)] ${
      touched[field] && errors[field]
        ? 'border-red-500'
        : 'border-[var(--card-border)]'
    }`;

  const socialLinks = [
    { icon: GithubIcon, href: siteConfig.socials.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
    { icon: TwitterIcon, href: siteConfig.socials.twitter, label: 'Twitter' },
    { icon: InstagramIcon, href: siteConfig.socials.instagram, label: 'Instagram' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10">
        <FadeIn direction="up">
          {/* Top CTA Banner */}
          <div className="mb-16 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-medium">
                Let&apos;s Work Together
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Have a project in mind?
              </h2>
              <p className="mt-2 text-[var(--text-muted)]">
                I&apos;m currently available for freelance work.
              </p>
            </div>
            <Button variant="primary" size="lg" href="#contact">
              Get In Touch
            </Button>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          {/* Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <SectionHeader
                label="Contact"
                title="Let's Get In Touch"
                centered={false}
              />

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--text-muted)]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 -mt-8" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={inputClasses('name')}
                        aria-label="Your name"
                        aria-invalid={!!(touched.name && errors.name)}
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={inputClasses('email')}
                        aria-label="Your email"
                        aria-invalid={!!(touched.email && errors.email)}
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      className={inputClasses('subject')}
                      aria-label="Subject"
                      aria-invalid={!!(touched.subject && errors.subject)}
                    />
                    {touched.subject && errors.subject && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      className={`${inputClasses('message')} resize-none`}
                      aria-label="Your message"
                      aria-invalid={!!(touched.message && errors.message)}
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button variant="primary" size="lg" type="submit">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info Sidebar */}
          <FadeIn direction="left" delay={0.3}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[var(--accent-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[var(--accent-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--accent-gold)]" />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">Location</p>
                  <p className="text-[var(--text-primary)]">{siteConfig.location}</p>
                </div>
              </div>

              {/* Social Follow */}
              <div className="pt-6 border-t border-[var(--card-border)]">
                <p className="text-sm font-medium text-[var(--text-primary)] mb-4">
                  Follow Me
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--card-border)] text-[var(--text-muted)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
