/**
 * Legal document content.
 *
 * Kept as data rather than JSX so the wording is easy to diff and review.
 * Inline formatting supported in every `text` field: **bold**, `code`,
 * and [label](href).
 *
 * App privacy policies live at /privacy/<slug> so each App Store listing can
 * point at a stable, app-specific URL. Add a new app by appending to
 * `appPolicies` — the route, sitemap, and index page pick it up automatically.
 */

import type { ProseBlock } from "./prose";

export type LegalBlock = ProseBlock;

export interface LegalDoc {
  slug: string;
  badge: string;
  title: string;
  titleAccent: string;
  lede: string;
  /** Human-readable date shown on the page. */
  updated: string;
  /** ISO date for <time> and sitemap lastModified. */
  updatedISO: string;
  blocks: LegalBlock[];
}

export interface AppPolicy extends LegalDoc {
  appName: string;
  /** One line shown on the /privacy index card. */
  summary: string;
  /** Shipping status, so the page never overstates availability. */
  status: string;
}

const CONTACT = "shawn@1322customs.com";

/* ------------------------------------------------------------------ */
/* Website + business privacy policy                                   */
/* ------------------------------------------------------------------ */

export const privacyPolicy: LegalDoc = {
  slug: "privacy",
  badge: "Privacy",
  title: "Privacy",
  titleAccent: "Policy",
  lede:
    "This covers 1322customs.com and what happens to your information when you contact us or hire us. Our iPhone apps each have their own policy, linked below.",
  updated: "2 September 2026",
  updatedISO: "2026-09-02",
  blocks: [
    {
      type: "note",
      text:
        "**The short version:** this site has no accounts, no advertising, and no analytics. The only personal information we get is what you type into the contact form, and it goes straight to our email inbox. We do not sell anything about you to anyone.",
    },

    { type: "h2", text: "What this policy covers" },
    {
      type: "p",
      text:
        "This policy applies to the website at 1322customs.com and to 1322 Customs LLC's dealings with prospective and current clients.",
    },
    {
      type: "p",
      text:
        "It does **not** cover our iPhone apps. Those handle data differently, so each one has its own policy: [Wake](/privacy/wake) and [Clear Horizon](/privacy/clear-horizon).",
    },

    { type: "h2", text: "Information you give us" },
    {
      type: "p",
      text:
        "The contact form on this site asks for your name, your email address, and a description of what you need. It also has optional fields for your phone number and your current website address. Those five things are all it collects, and nothing is submitted until you press the button.",
    },
    {
      type: "p",
      text:
        "If you email or call us instead, we have whatever you chose to put in that message.",
    },

    { type: "h2", text: "What happens to a form submission" },
    {
      type: "p",
      text:
        "Submitting the form triggers two emails. One goes to us so we know you got in touch. The other goes back to the address you entered, confirming we received it and describing what happens next.",
    },
    {
      type: "p",
      text:
        "Both are delivered by [Resend](https://resend.com), an email service acting on our behalf. Your submission is not written to any database of ours — it lives in our email inbox, and in Resend's delivery logs under their retention policy.",
    },

    { type: "h2", text: "Cookies, analytics, and tracking" },
    {
      type: "p",
      text:
        "This site sets no cookies of its own. It runs no analytics, no advertising pixels, no session recording, and no third-party trackers. There is no cookie banner because there is nothing to consent to.",
    },
    {
      type: "p",
      text:
        "The site is hosted on [Vercel](https://vercel.com), which keeps standard server logs — IP address, timestamp, requested page, browser user agent — for security and operational purposes. We do not use those logs to build a profile of you.",
    },

    { type: "h2", text: "If you become a client" },
    {
      type: "p",
      text:
        "Delivering a project usually means we are given access to things like your domain registrar, hosting, analytics, content, brand assets, or existing codebase, and sometimes to systems containing your own customers' data.",
    },
    { type: "p", text: "When that happens:" },
    {
      type: "ul",
      items: [
        "We use that access only to do the work you hired us for.",
        "We do not use your customers' data for anything of our own, and we do not copy it out of your systems except where the project requires it.",
        "We ask for the narrowest access that will do the job, and we ask you to revoke it when the project ends.",
        "Anything you tell us about your business in confidence stays confidential.",
      ],
    },
    {
      type: "p",
      text:
        "Where a signed agreement, statement of work, or data processing agreement covers a project, that document governs and takes precedence over this page.",
    },

    { type: "h2", text: "Who else sees your information" },
    {
      type: "p",
      text:
        "We do not sell, rent, or trade personal information, and we do not share it for anyone else's advertising. The only third parties involved in running this site are:",
    },
    {
      type: "ul",
      items: [
        "**Vercel** — hosting and server logs.",
        "**Resend** — delivering the two contact-form emails.",
      ],
    },
    {
      type: "p",
      text:
        "Beyond that, we would only disclose information if the law required it, or if we needed to in order to protect someone's safety or our own legal rights.",
    },

    { type: "h2", text: "How long we keep it" },
    {
      type: "p",
      text:
        "Enquiries stay in our email for as long as they are commercially useful — a prospect this year may be a client next year. Ask us to delete yours and we will. Records tied to paid work are kept as long as tax and accounting rules require.",
    },

    { type: "h2", text: "Your choices" },
    {
      type: "p",
      text:
        `Email **${CONTACT}** and you can ask us to tell you what we hold about you, correct it, delete it, or send you a copy. We will do it, and we will not ask you to justify the request. Because we hold so little, this is usually a short conversation.`,
    },
    {
      type: "p",
      text:
        "Depending on where you live, you may have these rights under law rather than as a courtesy — for example under the GDPR or the California Consumer Privacy Act. We honour them either way. We do not discriminate against anyone for exercising them, and we have no financial incentive to collect your data because we do not monetise it.",
    },
    {
      type: "p",
      text:
        "The confirmation email you get after submitting the form is transactional, not marketing. We do not run a mailing list, so there is nothing to unsubscribe from.",
    },

    { type: "h2", text: "Security" },
    {
      type: "p",
      text:
        "The site is served over HTTPS, and credentials for the services above are held in environment variables rather than in the code. We keep the amount of personal data we hold small deliberately, because it is the most reliable protection available. That said, no method of transmission or storage is completely secure, and we cannot promise absolute security.",
    },

    { type: "h2", text: "Children" },
    {
      type: "p",
      text:
        "This site is aimed at businesses and is not directed at children. We do not knowingly collect information from anyone under 13. If you believe a child has sent us something, email us and we will delete it.",
    },

    { type: "h2", text: "International visitors" },
    {
      type: "p",
      text:
        "We operate from the United States, and the services listed above process data there. If you contact us from outside the US, your information will be handled in the US.",
    },

    { type: "h2", text: "Changes" },
    {
      type: "p",
      text:
        "If this policy changes, the date at the top changes with it. Substantive changes will be described here rather than slipped in quietly.",
    },

    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `**[${CONTACT}](mailto:${CONTACT})**`,
    },
    {
      type: "p",
      text: "1322 Customs LLC\nCharleston, South Carolina, United States",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Terms of service                                                    */
/* ------------------------------------------------------------------ */

export const termsOfService: LegalDoc = {
  slug: "terms",
  badge: "Terms",
  title: "Terms of",
  titleAccent: "Service",
  lede:
    "The terms for using this website. Paid project work and our iPhone apps are each covered by their own agreements, described below.",
  updated: "2 September 2026",
  updatedISO: "2026-09-02",
  blocks: [
    {
      type: "note",
      text:
        "**The short version:** this website is marketing material, not a contract. Nothing on it is a binding quote, and reading it does not hire us. If we work together, a separate written agreement governs that work — and it wins over anything said here.",
    },

    { type: "h2", text: "Who you are dealing with" },
    {
      type: "p",
      text:
        "1322customs.com is operated by 1322 Customs LLC, a limited liability company based in Charleston, South Carolina. “We” and “us” mean that company; “you” means whoever is using the site.",
    },
    {
      type: "p",
      text:
        "By using this site you accept these terms. If you do not accept them, please stop using it.",
    },

    { type: "h2", text: "Using the site" },
    {
      type: "p",
      text:
        "You may read this site, and contact us through it, for lawful purposes. Please do not attempt to break into it, scrape it at a volume that degrades it for anyone else, submit anything false or malicious through the contact form, or use it to send unsolicited commercial messages.",
    },

    { type: "h2", text: "Nothing here is a quote" },
    {
      type: "p",
      text:
        "Timelines, capabilities, and any figures shown on this site are illustrative. They describe how we typically work; they are not an offer, a fixed price, or a guarantee of any result.",
    },
    {
      type: "p",
      text:
        "Submitting the contact form starts a conversation. It does not create a contract, reserve capacity, or obligate either of us to anything. Work only begins once we have both agreed in writing on scope, price, and schedule.",
    },

    { type: "h2", text: "Project work is governed separately" },
    {
      type: "p",
      text:
        "Every engagement is covered by its own proposal, statement of work, or services agreement. That document controls the commercial terms — deliverables, payment, revisions, timelines, ownership of what we build, confidentiality, and how either side can end the engagement.",
    },
    {
      type: "p",
      text:
        "Where anything in that signed document conflicts with this page, the signed document wins.",
    },

    { type: "h2", text: "Our apps are covered separately too" },
    {
      type: "p",
      text:
        "These terms do not govern our iPhone apps. Apps distributed through the App Store are licensed to you under Apple's Licensed Application End User License Agreement, and each has its own privacy policy: [Wake](/privacy/wake) and [Clear Horizon](/privacy/clear-horizon).",
    },
    {
      type: "p",
      text:
        "Purchases and subscriptions in those apps are transacted by Apple. Billing, refunds, and cancellation are handled through your Apple Account under Apple's terms, not ours.",
    },

    { type: "h2", text: "Intellectual property" },
    {
      type: "p",
      text:
        "The design, text, code, and graphics of this site belong to us, except for third-party marks used to identify their owners. Please do not republish substantial parts of it as your own. You are welcome to link to it.",
    },
    {
      type: "p",
      text:
        "Ownership of work we produce for a client is set by that project's agreement. Our normal position is that you own what we build for you once it is paid for, but the agreement is what makes that binding — not this sentence.",
    },

    { type: "h2", text: "Links to other sites" },
    {
      type: "p",
      text:
        "Where we link out, we do not control the destination and are not responsible for its content, its terms, or how it handles your data.",
    },

    { type: "h2", text: "No warranty" },
    {
      type: "p",
      text:
        "This site is provided “as is” and “as available.” To the fullest extent the law allows, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components, or that anything on it is complete or current.",
    },

    { type: "h2", text: "Limitation of liability" },
    {
      type: "p",
      text:
        "To the fullest extent the law allows, neither 1322 Customs LLC nor anyone working with it is liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising out of your use of this site, including lost profits, lost business, or lost or corrupted data — even if we were warned such damages were possible.",
    },
    {
      type: "p",
      text:
        "Our total liability for any claim relating to this site is limited to one hundred US dollars (US$100). Liability arising from paid project work is limited by that project's own agreement instead.",
    },
    {
      type: "p",
      text:
        "Some jurisdictions do not allow certain exclusions or limitations, so parts of the two paragraphs above may not apply to you.",
    },

    { type: "h2", text: "Indemnity" },
    {
      type: "p",
      text:
        "If your misuse of this site, or your breach of these terms, leads to a claim against us, you agree to cover the resulting losses, liabilities, and reasonable legal costs.",
    },

    { type: "h2", text: "Governing law" },
    {
      type: "p",
      text:
        "These terms are governed by the laws of the State of South Carolina, without regard to its conflict-of-laws rules. Any dispute that cannot be resolved between us belongs in the state or federal courts serving Charleston County, South Carolina, and both sides consent to that venue.",
    },

    { type: "h2", text: "The rest" },
    {
      type: "p",
      text:
        "If any provision here is found unenforceable, the rest stays in force. Not enforcing a term on one occasion does not waive it. These terms, together with any signed agreement between us, are the entire agreement about the subject they cover.",
    },

    { type: "h2", text: "Changes" },
    {
      type: "p",
      text:
        "We may update these terms. The date at the top will change when we do, and continuing to use the site after that means you accept the update.",
    },

    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `**[${CONTACT}](mailto:${CONTACT})**`,
    },
    {
      type: "p",
      text: "1322 Customs LLC\nCharleston, South Carolina, United States",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Per-app privacy policies                                            */
/* ------------------------------------------------------------------ */

const wake: AppPolicy = {
  slug: "wake",
  appName: "Wake",
  status: "In TestFlight",
  summary:
    "Automatic stereo volume for boats. No account, no server, no analytics — your position never leaves the device.",
  badge: "App Privacy",
  title: "Wake Privacy",
  titleAccent: "Policy",
  lede:
    "Wake reads how fast your boat is going and sets your stereo's volume to match. This page describes exactly what it does with your information. It is written against what the shipping app actually does, and it is kept in the same repository as the code so the two cannot quietly drift apart.",
  updated: "2 September 2026",
  updatedISO: "2026-09-02",
  blocks: [
    {
      type: "note",
      text:
        "**The short version:** Wake has no account, no server, and no analytics. Nothing you do in Wake is transmitted anywhere unless you personally choose to email a diagnostic file to support.",
    },

    { type: "h2", text: "Location" },
    {
      type: "p",
      text:
        "Wake requests location access, including in the background, because it needs your speed while your phone is in a pocket and the screen is off. That is the entire product.",
    },
    {
      type: "p",
      text:
        "**Your position is never stored and never transmitted.** Each GPS reading is used to produce two numbers — a speed in miles per hour, and a compass heading — and the reading is then discarded. Wake keeps no coordinates, no track, and no history of where you have been. There is no server for them to be sent to.",
    },
    {
      type: "p",
      text:
        "Background location is required rather than optional: iOS suspends an app that does not have it, and a suspended app cannot adjust your volume, which is the one thing Wake exists to do.",
    },

    { type: "h2", text: "What is stored on your device" },
    {
      type: "p",
      text:
        "All of this stays in Wake's own storage on your iPhone or iPad. None of it is backed up to a service operated by us, because no such service exists.",
    },
    {
      type: "ul",
      items: [
        "**Your speakers.** The name iOS reports for each Bluetooth speaker or set of headphones you have used with Wake, together with the volume levels Wake has learned for each speed on that speaker.",
        "**Outing counts.** How many trips a speaker has been used for, and the top speed seen on it, so Wake can tell whether it is still learning.",
        "**Your settings.** Whether Wake is on, whether the screen should stay awake, and the levels you have set or locked.",
        "**Diagnostic trip logs.** While Wake is running it writes a technical log of the outing: speed samples, headings, the volume it set, band changes, and any corrections you made. The most recent eight are kept and older ones are deleted automatically. **These contain no coordinates.**",
      ],
    },
    { type: "p", text: "Deleting Wake deletes all of it." },

    { type: "h2", text: "When information leaves your device" },
    { type: "p", text: "There are exactly two cases, and you initiate both." },
    {
      type: "p",
      text:
        `**You email or share a diagnostic report.** Settings → Diagnostics offers to email a report, or share a trip log, to support at \`${CONTACT}\`. Nothing is sent until you tap Send in your own mail app, and you can read the whole file first. A trip log contains speeds, headings, volume levels, your speaker's name, your device model and iOS version. It contains no coordinates and no contact information beyond whatever your mail app puts in the message. These reports are used to diagnose behaviour and are deleted once the issue they describe is resolved.`,
    },
    {
      type: "p",
      text:
        "**You subscribe.** Wake is free for 14 days and then runs on a yearly subscription. The transaction is handled entirely by Apple through the App Store. We never see your payment details, your card, or your Apple Account. We receive only Apple's confirmation that a subscription for this app is valid, and that confirmation is not tied to a name or an email address.",
    },

    { type: "h2", text: "Analytics and tracking" },
    {
      type: "p",
      text:
        "**Wake collects no analytics.** The app contains an analytics library that is switched off — no measurement identifier is configured, so no events are recorded and nothing is sent. Should that ever change, this page and the app's privacy declaration on the App Store will be updated before the version that changes it is released.",
    },
    {
      type: "p",
      text:
        "Wake does not track you. It contains no advertising, no advertising identifier, no third-party trackers, and shares nothing with data brokers. It does not combine your information with information from any other source.",
    },
    {
      type: "p",
      text:
        "Crash and performance diagnostics use Apple's own MetricKit, which reports to the app on your device. Any crash reports Apple shares with us as the developer come through Apple, are aggregated by Apple, and are governed by Apple's privacy policy — not by ours.",
    },

    { type: "h2", text: "Microphone" },
    {
      type: "p",
      text:
        "**Wake never accesses the microphone.** It sets volume from speed, not from sound. It does not request microphone permission, and a build that did would be a different app.",
    },

    { type: "h2", text: "Children" },
    {
      type: "p",
      text:
        "Wake is not directed at children and does not knowingly collect information from anyone. It has no account, no profile, and no way to submit personal information.",
    },

    { type: "h2", text: "Your choices" },
    {
      type: "ul",
      items: [
        "**Revoke location** at any time in iOS Settings → Privacy & Security → Location Services → Wake. Wake will stop adjusting volume and say so plainly rather than failing silently.",
        "**Delete the diagnostic logs** in Settings → Diagnostics → Trip recordings.",
        "**Delete everything** by deleting the app.",
      ],
    },
    {
      type: "p",
      text:
        "There is no data of yours held anywhere else, so there is nothing to request, export or erase from us. If you would like confirmation of that in writing, email the address below and you will get it.",
    },

    { type: "h2", text: "Changes" },
    {
      type: "p",
      text:
        "If this policy changes, the date at the top changes with it, and the history of every revision is visible in the repository this file lives in.",
    },

    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `**[${CONTACT}](mailto:${CONTACT})**`,
    },
    {
      type: "p",
      text: "1322 Customs\nCharleston, South Carolina, United States",
    },
  ],
};

const clearHorizon: AppPolicy = {
  slug: "clear-horizon",
  appName: "Clear Horizon",
  status: "In development",
  summary:
    "Tides and marine conditions read into one go/no-go verdict, plus your boat's costs and upkeep. Has an account, so it has a server.",
  badge: "App Privacy",
  title: "Clear Horizon Privacy",
  titleAccent: "Policy",
  lede:
    "Clear Horizon turns tides and marine conditions into a single go/no-go answer for your boat, and keeps that boat's costs, upkeep, and paperwork in order the rest of the time. Unlike Wake, it has an account and stores your records on a server — so this policy is longer.",
  updated: "2 September 2026",
  updatedISO: "2026-09-02",
  blocks: [
    {
      type: "note",
      text:
        "**Clear Horizon has not been released yet.** This policy is published in advance and describes the app as designed. It will be reviewed and updated before the app is submitted to the App Store, and the date at the top will change if anything in it does.",
    },
    {
      type: "note",
      text:
        "**The short version:** you sign in, and the records you create are stored on our server so they survive a lost phone. We do not sell your data, we run no advertising, and analytics carry no personal information. You can export or delete everything.",
    },

    { type: "h2", text: "Signing in" },
    {
      type: "p",
      text:
        "Clear Horizon uses [Clerk](https://clerk.com) to handle authentication, with Sign in with Apple as the default option. Clerk holds your account identifier and whatever your chosen sign-in provider releases to it — typically an email address.",
    },
    {
      type: "p",
      text:
        "If you use Sign in with Apple and choose Apple's Hide My Email option, we never see your real address; we see only the relay address Apple generates. We recommend it.",
    },

    { type: "h2", text: "What you create, and where it lives" },
    {
      type: "p",
      text:
        "The records you enter are stored in our database, hosted on [Supabase](https://supabase.com), so they are still there if you lose or replace your phone. That includes:",
    },
    {
      type: "ul",
      items: [
        "**Your boat.** Make, model, and the details needed to judge conditions for it.",
        "**Expenses.** Amounts, dates, categories, and notes you record.",
        "**Maintenance and tasks.** What is due, what is done, and when.",
        "**Documents.** Files you upload — registration, insurance, receipts — and their expiry dates, held in Supabase Storage.",
        "**Locations you ask about.** The place a forecast is requested for, so the verdict can be produced and cached.",
      ],
    },
    {
      type: "p",
      text:
        "Every row is locked to your account at the database level, so one account cannot read another's records.",
    },

    { type: "h2", text: "Location" },
    {
      type: "p",
      text:
        "Clear Horizon needs a location to know which tides and conditions to read. You can let the app use your device location, or type a place in yourself.",
    },
    {
      type: "p",
      text:
        "The app does not follow you around: there is no background location, no continuous tracking, and no history of your movements. Forecast requests are cached by area and hour rather than per person, so the cache holds no record of who asked.",
    },
    {
      type: "p",
      text:
        "The verdict itself is calculated **on your device** from the data fetched, which is also why a cached forecast still works with no signal.",
    },

    { type: "h2", text: "Where the conditions come from" },
    {
      type: "p",
      text:
        "Tide and weather data comes from the US National Oceanic and Atmospheric Administration (NOAA) and from a commercial weather provider. Those requests are made by our own server rather than by your phone, so the providers never see your device, your IP address, or your account.",
    },
    {
      type: "p",
      text:
        "Maps are drawn by Apple MapKit, which is governed by Apple's privacy policy.",
    },

    { type: "h2", text: "Subscriptions and payment" },
    {
      type: "p",
      text:
        "Subscriptions are sold and billed by Apple through the App Store. **We never see your card, your payment details, or your Apple Account.**",
    },
    {
      type: "p",
      text:
        "To attach a purchase to the right account, the app sends Apple an anonymous identifier generated for you at signup — a random value that means nothing outside Clear Horizon. Apple returns purchase status against that identifier, which is how the app knows your subscription is active.",
    },
    {
      type: "p",
      text:
        "Manage or cancel a subscription in your Apple Account settings. Refunds are Apple's to give, under Apple's terms.",
    },

    { type: "h2", text: "Analytics and crash reporting" },
    {
      type: "p",
      text:
        "Product analytics use [TelemetryDeck](https://telemetrydeck.com), which is built around not identifying people. Signals carry **no personal information** — no email address, no account identifier, no boat name, no location. They tell us which screens get used and which do not.",
    },
    {
      type: "p",
      text:
        "Crash and performance data uses Apple's MetricKit. It reports to the app on your device and transmits nothing on its own; anything Apple shares with us as the developer is aggregated by Apple under Apple's privacy policy.",
    },
    {
      type: "p",
      text:
        "There is no advertising in Clear Horizon, no advertising identifier, no third-party ad or tracking network, and nothing is shared with data brokers. We do not track you across other apps or websites.",
    },

    { type: "h2", text: "Reporting a problem" },
    {
      type: "p",
      text:
        "The in-app issue reporter is deliberately conservative. Before anything is sent it strips out authentication tokens, account identifiers, and API keys, and blunts any coordinates to roughly the nearest kilometre. It then **shows you the exact payload** and sends only when you tap send.",
    },

    { type: "h2", text: "Notifications" },
    {
      type: "p",
      text:
        "If you allow notifications, the app can remind you about an expiring document or an overdue maintenance item. Reminders are generated from records you already entered. You can turn them off in iOS Settings without losing anything.",
    },

    { type: "h2", text: "Who else is involved" },
    {
      type: "p",
      text:
        "We do not sell, rent, or trade your information, and we do not share it for anyone else's advertising. The services that process data on our behalf are:",
    },
    {
      type: "ul",
      items: [
        "**Clerk** — accounts and sign-in.",
        "**Supabase** — database and file storage.",
        "**TelemetryDeck** — anonymous product analytics.",
        "**Apple** — distribution, purchases, maps, crash aggregation.",
        "**NOAA and a commercial weather provider** — tide and forecast data, requested by our server without anything identifying you.",
      ],
    },
    {
      type: "p",
      text:
        "Beyond those, we would only disclose data if the law required it, or to protect someone's safety or our legal rights.",
    },

    { type: "h2", text: "Your data is yours" },
    {
      type: "p",
      text:
        "Records you created stay readable and exportable whether or not you are a paying subscriber. A lapsed subscription limits new features; it never locks you out of your own maintenance history or documents.",
    },
    {
      type: "ul",
      items: [
        "**Export** your records from within the app.",
        "**Delete your account** from within the app. That removes your records and uploaded files from our database and storage, and your account from Clerk. Backups age out on their own schedule.",
        "**Ask us instead** if you would rather not do it yourself — email the address below and we will handle it.",
      ],
    },
    {
      type: "p",
      text:
        "Depending on where you live these may be legal rights, for example under the GDPR or the California Consumer Privacy Act. We honour them either way, and we do not treat anyone differently for asking.",
    },

    { type: "h2", text: "How long we keep things" },
    {
      type: "p",
      text:
        "Your records are kept until you delete them or close your account. Cached forecasts expire on their own within hours. Issue reports are deleted once the problem they describe is resolved.",
    },

    { type: "h2", text: "Safety" },
    {
      type: "p",
      text:
        "Clear Horizon is an aid to planning, not a navigation or safety system, and it is not a substitute for official forecasts, charts, or your own judgement on the water. Always check current NOAA information and conditions before you go out.",
    },

    { type: "h2", text: "Children" },
    {
      type: "p",
      text:
        "Clear Horizon is intended for adult boat owners. It is not directed at children and we do not knowingly collect information from anyone under 13. If you believe a child created an account, email us and we will delete it.",
    },

    { type: "h2", text: "International users" },
    {
      type: "p",
      text:
        "We operate from the United States and the services above process data there. Using Clear Horizon from elsewhere means your information is handled in the US.",
    },

    { type: "h2", text: "Changes" },
    {
      type: "p",
      text:
        "If this policy changes, the date at the top changes with it. Anything material will be described here, and the app's App Store privacy declaration will be updated before a version that changes its behaviour is released.",
    },

    { type: "h2", text: "Contact" },
    {
      type: "p",
      text: `**[${CONTACT}](mailto:${CONTACT})**`,
    },
    {
      type: "p",
      text: "1322 Customs\nCharleston, South Carolina, United States",
    },
  ],
};

export const appPolicies: AppPolicy[] = [wake, clearHorizon];

export function getAppPolicy(slug: string): AppPolicy | undefined {
  return appPolicies.find((p) => p.slug === slug);
}
