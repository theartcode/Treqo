import "./globals.css";
import { Inter, Instrument_Serif } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Script */}
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
      </head>

      <body className={inter.className}>
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
