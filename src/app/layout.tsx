import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vital Socials",
  description: "Vital Socials partners with top eCommerce brands to craft captivating ad creatives that stop the scroll. We cherish the collaboration with our esteemed team of creators, who bring their passion and expertise to every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <Script
          id="tracking-code"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                <script>
                  (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:4942822,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                </script>
            `,
          }}
        />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
