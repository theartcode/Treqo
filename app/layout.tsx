import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import TabTitle from "@/components/TabTitle";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

export const metadata = {
  title: "Treqo - The Marketing School | Think. Build. Grow.",
  description:
    "New Age Digital Marketing Program — 12 Phases across 16 Industries with 30+ Real Brand Projects. Learn Strategy, Growth & Implementation using AI. Execute on Real Brands. The best MBA alternative for BBA graduates in India.",
  
  keywords: [
    "what to do after BBA",
    "best course after BBA in India",
    "career options after BBA marketing",
    "digital marketing after BBA",
    "best program after BBA graduation",
    "after BBA what next India",
    "BBA graduate career options India",
    "marketing program for BBA graduates",
    "best career after BBA in marketing",
    "BBA to digital marketing career",
    "MBA alternative in India",
    "marketing program instead of MBA",
    "best MBA alternative program India",
    "skip MBA learn marketing India",
    "best digital marketing institute in India",
    "best digital marketing course in Hyderabad",
    "top digital marketing program India",
    "AI marketing course India",
    "growth marketing program India",
    "performance marketing course India",
    "digital marketing course with real brand projects",
    "marketing program with placement India",
    "AI native marketing program",
    "digital marketing school India",
    "marketing school Hyderabad",
    "digital marketing course Hyderabad",
    "Meta ads course Hyderabad",
    "growth marketing course Hyderabad",
    "performance marketing course Hyderabad",
    "digital marketing training Hyderabad",
    "real projects digital marketing course",
    "founder mindset marketing program",
    "placement oriented marketing course",
    "AI tools for marketers course"
  ],

  openGraph: {
    title: "Treqo - The Marketing School",
    description:
      "Think. Build. Grow. Learn marketing with AI, real brand projects, and execution-first training.",
    url: "https://treqo.com", // update if needed
    siteName: "Treqo",
    images: [
      {
        url: "/og-image.jpg", // add your OG image in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Treqo - The Marketing School",
    description:
      "New Age Digital Marketing Program with AI + Real Brand Execution.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
  {/* Facebook Pixel */}
  <Script id="facebook-pixel" strategy="afterInteractive">
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1511250130615837');
      fbq('track', 'PageView');
    `}
  </Script>

  {/* ✅ Google Analytics Script (LOAD) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-01S7JF3G13"
    strategy="afterInteractive"
  />

  {/* ✅ Google Analytics Config */}
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-01S7JF3G13');
    `}
  </Script>
</head>

      <body className={inter.className}>
          <TabTitle />
        {children}

        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1511250130615837&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}

// import "./globals.css";
// import { Inter, Instrument_Serif } from 'next/font/google'

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// })

// const instrument = Instrument_Serif({
//   weight: '400',
//   subsets: ['latin'],
//   style: 'italic',
// });
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (  
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }
