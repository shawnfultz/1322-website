import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "iOS App Development Charleston SC | iPhone Apps | 1322 Customs",
  description:
    "Native iOS app development in Charleston SC. Swift and SwiftUI apps built for the App Store, by a team that ships its own products. Serving clients nationwide.",
  alternates: { canonical: "https://1322customs.com/services/app-development" },
};

export default function AppDevelopment() {
  return (
    <ServicePage
      badge="iOS & Mobile Apps"
      title="Native apps, built by people who"
      titleAccent="ship their own."
      subtitle="Swift and SwiftUI apps made for the App Store — not a website in a wrapper. We publish our own iPhone apps under this name, so the toolchain and the review process are already ours."
      gradient="from-seafoam-400 to-brand-blue"
      features={[
        {
          title: "Swift & SwiftUI",
          description:
            "Real native code. Smooth scrolling, instant cold start, and an interface that behaves the way iPhone owners expect it to.",
          icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        },
        {
          title: "Works Without Signal",
          description:
            "Offline-first storage with queued writes, so your crew can capture a job in an attic or on the water and sync when the bars come back.",
          icon: "M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m9.9 2.828a5 5 0 010 7.072m-7.072 0a5 5 0 010-7.072M12 12h.01",
        },
        {
          title: "Camera, GPS & Push",
          description:
            "Photos on a work order, location on a dispatch, a notification when something needs attention. The hardware features a wrapped website cannot reach.",
          icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
        },
        {
          title: "App Store Submission",
          description:
            "We write the review notes, prepare the screenshots, handle the privacy declaration, and answer the reviewer. Rejections get triaged, not guessed at.",
          icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
        },
        {
          title: "Subscriptions & Purchases",
          description:
            "StoreKit 2 done properly — entitlements resolved server-side, interrupted purchases recovered, and no reliance on a cached boolean.",
          icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        },
        {
          title: "TestFlight Every Week",
          description:
            "You open each build on your own phone as it comes together. No six-month silence, and no surprise at the end.",
          icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
        },
      ]}
      whyTitle="Why trust us with an app"
      whyPoints={[
        "We publish our own iOS apps under 1322 Customs — Wake, an automatic stereo-volume app for boats, and Clear Horizon, a conditions and boat-ownership app. The Swift, the App Store process, and the review scars are already ours.",
        "Native means native. Swift and SwiftUI, Apple's own frameworks, and no cross-platform layer between your users and the phone they paid for.",
        "The app is only half the job. We also build the backend it talks to, so you are not coordinating between an app shop and whoever runs your database.",
        "Your app ships under your developer account and your listing. The code is yours, and there is no platform you cannot leave.",
        "Apps take longer than websites — usually 8 to 12 weeks — because App Review has opinions. We tell you that up front instead of discovering it in month four.",
      ]}
    />
  );
}
