"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import WaveDivider from "./WaveDivider";
import { submitContact } from "@/app/actions/contact";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitContact({
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: (data.get("phone") as string) || undefined,
      message: data.get("message") as string,
    });

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <WaveDivider topColor="#ffffff" bottomColor="#0c1b2a" />
      <section id="contact" className="relative bg-ocean-900 py-24 lg:py-32 overflow-hidden noise-overlay">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900 via-ocean-950 to-ocean-950" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <AnimateOnScroll>
              <span className="font-body text-sm font-semibold text-seafoam-400 tracking-widest uppercase mb-4 block">
                Get In Touch
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
                Let&apos;s build something{" "}
                <span className="font-serif italic text-seafoam-400">remarkable</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="font-body text-lg text-white/40 leading-relaxed">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimateOnScroll variant="fadeRight" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-white/60 mb-2">
                      Name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-body placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-white/60 mb-2">
                      Email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-body placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-white/60 mb-2">
                    Phone <span className="text-white/20">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-body placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 transition-colors duration-200"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-white/60 mb-2">
                    Message <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-body placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/25 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-xl hover:shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 14l12-6L2 2v4.5L10 8l-8 1.5V14z" fill="currentColor" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#10b981">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-body text-sm text-emerald-400">
                      Message sent! We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#ef4444">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="font-body text-sm text-red-400">{errorMsg}</p>
                  </div>
                )}
              </form>
            </AnimateOnScroll>

            {/* Contact info */}
            <AnimateOnScroll variant="fadeLeft" delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">Location</h4>
                    <p className="font-body text-white/40 text-sm">
                      Charleston, South Carolina
                      <br />
                      Serving clients nationwide
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:hello@1322customs.com"
                      className="font-body text-white/40 text-sm hover:text-seafoam-400 transition-colors"
                    >
                      hello@1322customs.com
                    </a>
                  </div>
                </div>

                {/* Response time */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">Response Time</h4>
                    <p className="font-body text-white/40 text-sm">
                      Within 24 hours on business days
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5" />

                {/* CTA card */}
                <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6">
                  <h4 className="font-display font-semibold text-white mb-2">
                    Prefer a conversation?
                  </h4>
                  <p className="font-body text-sm text-white/40 mb-4">
                    Schedule a free 30-minute discovery call to discuss your project.
                  </p>
                  <a
                    href="mailto:hello@1322customs.com?subject=Discovery%20Call%20Request"
                    className="inline-flex items-center gap-2 font-body text-sm font-medium text-seafoam-400 hover:text-seafoam-300 transition-colors"
                  >
                    Book a call
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
