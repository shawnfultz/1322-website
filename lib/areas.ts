export interface AreaData {
  slug: string;
  name: string;
  county: string;
  description: string;
  intro: string;
  localFacts: string[];
  industries: string[];
}

export const areas: AreaData[] = [
  {
    slug: "charleston",
    name: "Charleston",
    county: "Charleston County",
    description:
      "Website design and modernization for businesses in Charleston, SC. From King Street to the waterfront, we help Charleston businesses compete online.",
    intro:
      "Charleston is one of the fastest-growing cities in the Southeast, and the competition for local customers is fierce. Whether you run a restaurant on King Street, a marine service on Shem Creek, or a trade business in West Ashley, your website is how customers find you first.",
    localFacts: [
      "Charleston's tourism-driven economy means your website is often a visitor's first impression of your business.",
      "With over 8 million visitors annually, a modern website with strong local SEO captures both residents and tourists.",
      "The Charleston tech scene is booming — don't let your business look outdated next to the competition.",
    ],
    industries: ["Hospitality & Tourism", "Marine Services", "Real Estate", "Trades & Home Services", "Healthcare", "Restaurants"],
  },
  {
    slug: "summerville",
    name: "Summerville",
    county: "Dorchester County",
    description:
      "Modern websites for Summerville, SC businesses. We help local companies in the Flowertown in the Pines stand out online with fast, mobile-friendly sites.",
    intro:
      "Summerville is one of the fastest-growing towns in South Carolina, with new families and businesses moving in every week. If your website hasn't kept up with the growth, you're leaving money on the table. We build modern, SEO-optimized sites that help Summerville businesses capture local search traffic.",
    localFacts: [
      "Summerville's population has nearly doubled in the last decade — that's a massive influx of new customers searching online.",
      "The Nexton and Cane Bay developments are bringing thousands of homeowners who need local services.",
      "Ranking for 'Summerville SC' keywords is still achievable — the competition isn't as fierce as Charleston proper.",
    ],
    industries: ["HVAC & Mechanical", "Plumbing", "Landscaping", "Roofing", "Dental & Medical", "Home Services"],
  },
  {
    slug: "hanahan",
    name: "Hanahan",
    county: "Berkeley County",
    description:
      "Website modernization for Hanahan, SC businesses. Fast turnaround, local SEO, and designs that convert for this growing Charleston suburb.",
    intro:
      "Hanahan sits right between Charleston and the growing Berkeley County corridor. It's a tight-knit community where word of mouth matters — but so does showing up when someone Googles your service. We build websites that make Hanahan businesses look as professional online as they are in person.",
    localFacts: [
      "Hanahan's central location between Charleston, Summerville, and Mount Pleasant means you can serve a huge radius with the right SEO.",
      "The Tanner Plantation and surrounding neighborhoods are full of homeowners searching for local services.",
      "A strong Google Business Profile paired with a modern website is the one-two punch for Hanahan businesses.",
    ],
    industries: ["Electrical", "Plumbing", "General Contracting", "Automotive", "Small Retail", "Professional Services"],
  },
  {
    slug: "mount-pleasant",
    name: "Mount Pleasant",
    county: "Charleston County",
    description:
      "Premium website design for Mount Pleasant, SC businesses. Modern, fast, and built to match the standards of one of SC's most affluent communities.",
    intro:
      "Mount Pleasant is one of the most affluent communities in South Carolina, and your customers expect a premium experience — including your website. If your site looks dated, Mount Pleasant customers will click to your competitor. We build sites that match the quality your clients expect.",
    localFacts: [
      "Mount Pleasant households have significantly higher median incomes — they research online before buying and expect polished experiences.",
      "The Coleman Boulevard and Shem Creek corridors are packed with businesses competing for the same local customers.",
      "Mount Pleasant's growth in the I-526 corridor means new competition is arriving constantly. Stay ahead.",
    ],
    industries: ["Marine & Boating", "Real Estate", "Restaurants", "Medical & Dental", "Professional Services", "Retail"],
  },
  {
    slug: "north-charleston",
    name: "North Charleston",
    county: "Charleston County",
    description:
      "Affordable website modernization for North Charleston, SC businesses. Fast, mobile-friendly sites with local SEO that brings in customers.",
    intro:
      "North Charleston is the third-largest city in South Carolina and home to thousands of trade businesses, service companies, and growing enterprises. The competition is real, but most of your competitors still have terrible websites. That's your advantage — if you move now.",
    localFacts: [
      "North Charleston's industrial and commercial corridors are packed with businesses that need a web presence to compete.",
      "Boeing, Mercedes, and the port bring a constant stream of workers and families who search online for local services.",
      "North Charleston keywords are less competitive than 'Charleston' — easier to rank, faster results.",
    ],
    industries: ["Industrial Services", "Automotive", "HVAC", "Plumbing", "Electrical", "Warehousing & Logistics"],
  },
  {
    slug: "goose-creek",
    name: "Goose Creek",
    county: "Berkeley County",
    description:
      "Website design for Goose Creek, SC businesses. Modern sites with local SEO targeting Berkeley County's largest city.",
    intro:
      "Goose Creek has grown from a small town to Berkeley County's largest city. With that growth comes opportunity — and competition. Your website needs to work harder than a yard sign. We build fast, modern sites that help Goose Creek businesses dominate local search.",
    localFacts: [
      "Goose Creek's proximity to Joint Base Charleston brings a rotating population that relies on Google to find local services.",
      "The Carnes Crossroads development is one of the hottest neighborhoods in the Lowcountry — new homeowners need your services.",
      "Berkeley County is the fastest-growing county in SC. Get your online presence right before it gets crowded.",
    ],
    industries: ["Home Services", "Landscaping", "Roofing", "Pest Control", "Cleaning Services", "General Contracting"],
  },
  {
    slug: "james-island",
    name: "James Island",
    county: "Charleston County",
    description:
      "Website modernization for James Island, SC businesses. Coastal-focused design with local SEO for this Charleston community.",
    intro:
      "James Island is a unique Charleston community — close to downtown, close to Folly Beach, and full of local businesses that serve both residents and visitors. Your website should reflect that dual audience. We build sites that capture local searches and look great doing it.",
    localFacts: [
      "James Island's location between downtown Charleston and Folly Beach gives you access to both local and tourist traffic.",
      "The Maybank Highway corridor is a competitive stretch — a modern website helps you stand out.",
      "James Island residents are loyal to local businesses, but they still Google you first.",
    ],
    industries: ["Restaurants", "Marine Services", "Home Services", "Retail", "Fitness & Wellness", "Trades"],
  },
  {
    slug: "johns-island",
    name: "Johns Island",
    county: "Charleston County",
    description:
      "Website design for Johns Island, SC businesses. Modern sites for this rapidly growing Lowcountry community.",
    intro:
      "Johns Island is one of the fastest-developing areas in the Charleston region. With massive new developments and a growing population, local businesses have a window to establish online dominance before the market gets crowded. We build sites that capture that growth.",
    localFacts: [
      "Johns Island's population is exploding with developments like Kiawah River and The Stonoview — thousands of new potential customers.",
      "The Bohicket Road and River Road corridors are becoming major commercial hubs.",
      "Getting ahead on local SEO now means you'll own these keywords as the area continues to grow.",
    ],
    industries: ["Landscaping", "General Contracting", "Real Estate", "Agriculture & Farm", "Marine Services", "Home Services"],
  },
  {
    slug: "west-ashley",
    name: "West Ashley",
    county: "Charleston County",
    description:
      "Website modernization for West Ashley businesses. Affordable, fast, and SEO-optimized sites for Charleston's largest suburb.",
    intro:
      "West Ashley is Charleston's largest suburb by population, and the Savannah Highway corridor is packed with businesses competing for the same customers. A modern, fast-loading website with local SEO is the difference between getting found and getting passed over.",
    localFacts: [
      "West Ashley's revitalization along Savannah Highway is bringing new energy and new businesses — competition is heating up.",
      "The Avondale neighborhood is a hotspot for small businesses that need to stand out online.",
      "West Ashley residents research locally and prefer to hire locally. Show up in their search results.",
    ],
    industries: ["Restaurants", "Retail", "Home Services", "Automotive", "Medical & Dental", "Professional Services"],
  },
  {
    slug: "daniel-island",
    name: "Daniel Island",
    county: "Berkeley County",
    description:
      "Premium website design for Daniel Island, SC businesses. Polished, professional sites for this master-planned community.",
    intro:
      "Daniel Island is a master-planned community with some of the highest property values in the Charleston area. Businesses here — and those serving Daniel Island residents — need websites that match the community's standards. We deliver premium, fast, conversion-focused sites.",
    localFacts: [
      "Daniel Island residents have high expectations and high budgets. Your website needs to reflect that.",
      "The island's commercial village and surrounding businesses compete on professionalism. Your site is part of that.",
      "Family-oriented community means parents are Googling everything — services, activities, contractors.",
    ],
    industries: ["Professional Services", "Real Estate", "Fitness & Wellness", "Restaurants", "Home Services", "Financial Services"],
  },
  {
    slug: "isle-of-palms",
    name: "Isle of Palms",
    county: "Charleston County",
    description:
      "Website design for Isle of Palms businesses. Tourism-focused, mobile-first sites for this Charleston beach community.",
    intro:
      "Isle of Palms is a premier beach destination in the Charleston area, drawing thousands of visitors every year. If your business serves IOP — whether it's vacation rentals, restaurants, water sports, or services — your website needs to capture that seasonal traffic and convert it.",
    localFacts: [
      "Seasonal tourism means your website needs to work hardest in spring and summer — SEO takes months, so start now.",
      "Vacation rental competition is fierce. A modern, fast booking experience wins over dated sites every time.",
      "IOP visitors plan their trips on mobile. Your site must be flawless on phones.",
    ],
    industries: ["Vacation Rentals", "Restaurants", "Water Sports & Charters", "Retail", "Property Management", "Marine Services"],
  },
  {
    slug: "folly-beach",
    name: "Folly Beach",
    county: "Charleston County",
    description:
      "Website design for Folly Beach businesses. Coastal, fun, and conversion-focused sites for the Edge of America.",
    intro:
      "Folly Beach — the Edge of America. It's laid back, it's fun, and it's packed with small businesses that depend on tourist traffic and local loyalty. Your website should capture both. We build fast, mobile-first sites with local SEO that keeps your business visible year-round.",
    localFacts: [
      "Folly Beach's small-town vibe means word of mouth is strong, but tourists still Google 'restaurants near Folly Beach' before they walk in.",
      "The Center Street corridor is competitive. A modern website with good reviews integration helps you stand out.",
      "Off-season is when you build your online presence so you're ready when the crowds come back.",
    ],
    industries: ["Restaurants & Bars", "Surf & Water Sports", "Vacation Rentals", "Retail", "Charters & Tours", "Marine Services"],
  },
];

export function getArea(slug: string): AreaData | undefined {
  return areas.find((a) => a.slug === slug);
}
