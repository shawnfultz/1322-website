"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadModal } from "./LeadModalProvider";
import { submitContact } from "@/app/actions/contact";

export default function LeadModal() {
  const { isOpen, close } = useLeadModal();
  const [step, setStep] = useState<"form" | "success">("form");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

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

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep("form");
        setStatus("idle");
        setErrorMsg("");
        setForm({ name: "", email: "", phone: "", website: "" });
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
      message: form.website ? `Website: ${form.website}` : "No website provided",
    });

    if (result.success) {
      setStep("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  const canSubmit = form.name.trim() && form.email.trim();

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
          <div className="absolute inset-0 bg-ocean-950/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
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
                animate={{ width: step === "form" ? "50%" : "100%" }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-ocean-900 mb-2">
                        Get a free quote.
                      </h3>
                      <p className="font-body text-ocean-700/60 text-sm">
                        Takes 30 seconds. We&apos;ll review your site and reach out within 24 hours.
                      </p>
                    </div>

                    {/* How it works — compact */}
                    <div className="flex items-center gap-3 mb-8 p-3 bg-sand-50 rounded-xl">
                      {[
                        { num: "1", label: "You submit" },
                        { num: "2", label: "We call you" },
                        { num: "3", label: "We get to work" },
                      ].map((s, i) => (
                        <div key={s.num} className="flex items-center gap-2 flex-1">
                          {i > 0 && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0 -ml-1.5">
                              <path d="M4 2l4 4-4 4" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo text-white font-display font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                            {s.num}
                          </div>
                          <span className="font-body text-xs font-medium text-ocean-700/60">{s.label}</span>
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
                      <div className="grid grid-cols-2 gap-4">
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
                        <div>
                          <label className="block font-body text-sm font-medium text-ocean-700 mb-1.5">
                            Current website
                          </label>
                          <input
                            type="url"
                            value={form.website}
                            onChange={(e) => updateForm("website", e.target.value)}
                            placeholder="yoursite.com"
                            className="w-full px-4 py-3 rounded-xl border border-sand-200 font-body text-ocean-900 placeholder:text-ocean-700/30 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                          />
                        </div>
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

                    <div className="mt-8">
                      <button
                        onClick={handleSubmit}
                        disabled={!canSubmit || status === "loading"}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 font-body font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-indigo rounded-full hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
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
                          "Get My Free Quote"
                        )}
                      </button>
                      <p className="text-center font-body text-xs text-ocean-700/30 mt-3">
                        No spam. No commitment. Just a conversation.
                      </p>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>

                    <h3 className="font-display font-bold text-2xl md:text-3xl text-ocean-900 mb-3">
                      You&apos;re in good hands.
                    </h3>
                    <p className="font-body text-ocean-700/60 mb-8 max-w-sm mx-auto">
                      Check your email for a confirmation. We&apos;ll reach out within 24 hours to set up a quick call.
                    </p>

                    <div className="bg-sand-50 rounded-2xl p-6 text-left max-w-sm mx-auto mb-8">
                      <h4 className="font-display font-semibold text-sm text-ocean-900 mb-4">
                        What happens next:
                      </h4>
                      <div className="space-y-4">
                        {[
                          {
                            icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                            title: "We review your site",
                            desc: "We look at what you have and put together initial ideas.",
                          },
                          {
                            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                            title: "We hop on a quick call",
                            desc: "15 minutes to understand your goals. No sales pitch.",
                          },
                          {
                            icon: "M13 10V3L4 14h7v7l9-11h-7z",
                            title: "We get to work",
                            desc: "Simple pricing, fast turnaround. You'll be amazed how quick.",
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
