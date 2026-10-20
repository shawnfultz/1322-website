/**
 * Per-app support pages.
 *
 * App Store Connect requires a working support URL per app, so each app gets a
 * stable page at /support/<slug>. Add a new app by appending to `supportDocs` —
 * the route, sitemap entry, and index card all derive from it.
 *
 * Wake's content is ported from BoatingMusicPlayer/docs/support.md so the two
 * stay in step. Keep them together when either changes.
 */

import type { ProseBlock } from "./prose";

export interface SupportDoc {
  slug: string;
  appName: string;
  /** Shipping status, so the page never overstates availability. */
  status: string;
  /** One line for the /support index card. */
  summary: string;
  badge: string;
  title: string;
  titleAccent: string;
  lede: string;
  updated: string;
  updatedISO: string;
  blocks: ProseBlock[];
}

export const SUPPORT_EMAIL = "shawn@1322customs.com";

const wake: SupportDoc = {
  slug: "wake",
  appName: "Wake",
  status: "In TestFlight",
  summary:
    "Automatic stereo volume for boats. Setup, troubleshooting, levels, and billing.",
  badge: "App Support",
  title: "Wake",
  titleAccent: "Support",
  lede:
    "Wake sets your boat stereo's volume from your GPS speed, so you stop reaching for the volume every time you change speed. Here is how to set it up, and what to do when it misbehaves.",
  updated: "19 October 2026",
  updatedISO: "2026-10-19",
  blocks: [
    { type: "h2", text: "Getting started" },
    {
      type: "ol",
      items: [
        "Connect your Bluetooth speaker or head unit and start your music.",
        "Open Wake and switch it on. It will ask for location access — say **Allow While Using App or Widgets**, then **Change to Always Allow** when iOS offers, because volume has to keep tracking your speed with the phone in your pocket.",
        "Go boating. Wake takes it from there.",
      ],
    },

    { type: "h2", text: "Wake isn't changing my volume" },
    { type: "p", text: "Work down this list, in order:" },
    {
      type: "ul",
      items: [
        "**Is a Bluetooth speaker connected?** Wake deliberately does nothing when audio is on the phone's own speaker. This is on purpose — nobody wants their handset volume moving around.",
        "**Is Wake switched on?** The pill at the top right reads *On* in teal and *Off* in red.",
        "**Does it have Always location?** iOS Settings → Privacy & Security → Location Services → Wake. With *While Using* only, iOS suspends Wake as soon as the screen locks and it cannot adjust anything.",
        "**Are you moving?** Below about 1 mph Wake hands the volume back to you deliberately, so a long stop at a sandbar does not become a volume fight.",
        "**Did you just change the volume yourself?** Wake stays out of the way after a correction until your speed genuinely changes.",
      ],
    },
    {
      type: "p",
      text:
        `If none of that is it, email me and say roughly when you were out. Wake keeps a technical log of each outing on your phone with no location in it, and Settings → Diagnostics will share it.`,
    },

    { type: "h2", text: "It's too loud at the dock, or too quiet on plane" },
    { type: "p", text: "Settings → Levels, and move the slider for that speed." },
    {
      type: "p",
      text:
        "**Idle and On plane are yours.** Wake never changes them, because down there the volume you want depends on where you are and who is aboard rather than on how fast you are going. Set them where you like them and they stay.",
    },
    {
      type: "p",
      text:
        "**Cruising and Wide open, Wake works out for itself** from the corrections you make on the water. If you would rather it stopped, tap the lock under either slider.",
    },
    {
      type: "p",
      text:
        "Every speaker gets its own set of levels, so the boombox at the sandbar and the head unit at the helm do not fight each other.",
    },

    { type: "h2", text: "It keeps fighting me when I change the volume" },
    {
      type: "p",
      text:
        "It should not, and if it does I want to know. Wake is meant to back off after a correction until your speed actually changes. Email me with a rough time and send the trip log from Settings → Diagnostics — that log is exactly how this behaviour got fixed once already.",
    },

    { type: "h2", text: "What “Last time out” is asking me" },
    {
      type: "p",
      text:
        "If you spent a trip adjusting the volume at low speed, Wake shows you what happened the next time you open it — how many times you changed it and roughly where you landed — and offers to move your baseline there. **Leave it** is a perfectly good answer, and it will not ask about that band again until a new trip gives it something new to say.",
    },

    { type: "h2", text: "Does it work with Spotify, Apple Music, podcasts?" },
    {
      type: "p",
      text:
        "All of them. Wake moves your phone's system volume, so it does not care what is making the sound and needs no connection to any music service.",
    },

    { type: "h2", text: "Will it drain my battery?" },
    {
      type: "p",
      text:
        "It uses GPS continuously while it is on, which is real but modest, and it drops to a low-power mode when you are stopped. A helm phone on USB power will not notice. Switch Wake off when you are off the water.",
    },

    { type: "h2", text: "Subscription and billing" },
    {
      type: "p",
      text:
        "Everything is included **free for 14 days**. After that Wake is **$9.99 per year** — the whole app, as many speakers as you own, no ads and no tiers.",
    },
    {
      type: "p",
      text:
        "Subscriptions are handled entirely by Apple. To view, change or cancel one: iOS Settings → your name → Subscriptions. Refunds are Apple's to give, at [reportaproblem.apple.com](https://reportaproblem.apple.com).",
    },
    {
      type: "p",
      text:
        "Restoring after a new phone or a reinstall: Settings → Subscription → Restore.",
    },

    { type: "h2", text: "Privacy" },
    {
      type: "p",
      text:
        "Your position is never stored and never transmitted — each GPS reading becomes a speed and a heading and is then discarded. There is no account and no server. Full detail: [Privacy Policy](/privacy/wake).",
    },

    { type: "h2", text: "Still stuck" },
    {
      type: "p",
      text:
        `**[${SUPPORT_EMAIL}](mailto:${SUPPORT_EMAIL})** — tell me the boat, the speaker, and roughly when you were out, and attach a trip log from Settings → Diagnostics if you can.`,
    },
  ],
};

export const supportDocs: SupportDoc[] = [wake];

export function getSupportDoc(slug: string): SupportDoc | undefined {
  return supportDocs.find((d) => d.slug === slug);
}
