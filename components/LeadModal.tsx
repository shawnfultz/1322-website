"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "./LeadModalProvider";
import { submitContact } from "@/app/actions/contact";

const industries = [
  "HVAC / Mechanical",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Landscaping / Hardscaping",
  "General Contracting",
  "Marina / Boat Dealer",
  "Charter / Tours",
  "Marine Services",
  "Real Estate",
  "Healthcare",
  "Other",
];

const needs = [
  "Full website redesign",
  "Modernize existing site",
  "Mobile optimization",
  "SEO / Local search",
  "Booking / scheduling system",
  "Custom software project",
  "Not sure yet — just exploring",
];

export default function LeadModal() {
  const { isOpen, close } = useLeadModal();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    industry: "",
    need: "",
    message: "",
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(0);
        setStatus("idle");
        setErrorMsg("");
      }, 300);
    }
  }, [isOpen]);

  function updateForm(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setStatus("loading");
    setErrorMsg("");

    const result = await submitContact({
      name: form.name,
      email: form.email,
      phone: form.phone || undefined,
      message: [
        form.website ? `Website: ${form.website}` : "",
        form.industry ? `Industry: ${form.industry}` : "",
        form.need ? `Need: ${form.need}` : "",
        form.message ? `\nMessage: ${form.message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (result.success) {
      setStatus("success");
      setStep(3);
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  const canAdvance =
    step === 0
      ? form.name && form.email
      : step === 1
        ? true
        : true;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ocean-950/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-sand-100 hover:bg-sand-200 transition-colors"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            {/* Progress bar */}
            <div className="h-1 bg-sand-100">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-blue to-brand-indigo"
                initial={{ width: "0%" }}
                animate={{ width: step === 0 ? "33%" : step === 1 ? "66%" : "100%" }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {/* STEP 0: Intro + Basic Info */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-8">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-ocean-900 mb-3">
                        Let&apos;s modernize your site.
                      </h3>
                      <p className="font-body text-ocean-700/60">
                        Tell us who you are and we&apos;ll take it from here.
                      </p>
                    </div>

                    {/* How it works — inline */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-sand-50 rounded-2xl">
                      {[
                        { num: "1", label: "You fill this out", sub: "Takes 60 seconds" },
                        { num: "2", label: "We schedule a call", sub: "Within 24 hours" },
                        { num: "3", label: "We agree on scope", sub: "Simple & transparent" },
                      ].map((s) => (
                        <div key={s.num} className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo text-white font-display font-bold text-sm flex items-center justify-center">
                            {s.num}
                          </div>
                          <div className="font-display font-semibold text-xs text-ocean-900">{s.label}</div>
                          <div className="font-body text-[11px] text-ocean-700/40">{s.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                          Name <span className="text-station-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => updateForm("name", e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                            Email <span className="text-station-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                            placeholder="you@company.com"
                            className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                            Phone
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                            placeholder="(555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={() => setStep(1)}
                        disabled={!canAdvance}
                        className="inline-flex items-center gap-2 px-8 py-3 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Next
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 1: Project Details */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-8">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-ocean-900 mb-3">
                        Tell us about your project.
                      </h3>
                      <p className="font-body text-ocean-700/60">
                        The more we know, the better we can help. All fields optional.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                          Current website URL
                        </label>
                        <input
                          type="url"
                          value={form.website}
                          onChange={(e) => updateForm("website", e.target.value)}
                          placeholder="https://yoursite.com"
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                          Industry
                        </label>
                        <select
                          value={form.industry}
                          onChange={(e) => updateForm("industry", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all appearance-none bg-white"
                        >
                          <option value="">Select your industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                          What do you need?
                        </label>
                        <select
                          value={form.need}
                          onChange={(e) => updateForm("need", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all appearance-none bg-white"
                        >
                          <option value="">Select an option</option>
                          {needs.map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                          Anything else we should know?
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => updateForm("message", e.target.value)}
                          placeholder="Budget range, timeline, specific pain points..."
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-100">
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="#ef4444">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="font-body text-sm text-red-600">{errorMsg}</p>
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between">
                      <button
                        onClick={() => setStep(0)}
                        className="font-body text-sm font-medium text-ocean-700/50 hover:text-ocean-700 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleSubmit}
                        disabled={status === "loading"}
                        className="inline-flex items-center gap-2 px-8 py-3 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 disabled:opacity-60"
                      >
                        {status === "loading" ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                              <path d="M2 14l12-6L2 2v4.5L10 8l-8 1.5V14z" fill="currentColor" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Success */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-6"
                  >
                    {/* Check icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>

                    <h3 className="font-display font-bold text-2xl md:text-3xl text-ocean-900 mb-3">
                      You&apos;re in good hands.
                    </h3>
                    <p className="font-body text-ocean-700/60 mb-8 max-w-sm mx-auto">
                      We&apos;ll review your info and reach out within 24 hours to schedule a quick call.
                    </p>

                    {/* What happens next */}
                    <div className="bg-sand-50 rounded-2xl p-6 text-left max-w-md mx-auto mb-8">
                      <h4 className="font-display font-semibold text-sm text-ocean-900 mb-4">
                        What happens next:
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                            title: "We review your submission",
                            desc: "Our team looks at your current site and puts together initial thoughts.",
                          },
                          {
                            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                            title: "We schedule a 15-min call",
                            desc: "Quick conversation to understand your goals and answer questions.",
                          },
                          {
                            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                            title: "We agree on scope & price",
                            desc: "Simple, transparent proposal. No surprises, no hidden fees.",
                          },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d={item.icon} />
                              </svg>
                            </div>
                            <div>
                              <div className="font-display font-semibold text-sm text-ocean-900">{item.title}</div>
                              <div className="font-body text-xs text-ocean-700/50">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={close}
                      className="inline-flex items-center gap-2 px-8 py-3 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300"
                    >
                      Got it
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
