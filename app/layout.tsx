import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ThemeToggle } from '@/components/theme-toggle'
import { Providers } from '@/components/providers'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'NavSphere',
    template: '%s - NavSphere'
  },
  description: 'A modern navigation platform',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QG9PGG4K13"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QG9PGG4K13');
            `,
          }}
        />
        {/* 网站统计代码 */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _mtj = _mtj || [];
              (function () {
                var mtj = document.createElement("script");
                mtj.src = "https://node90.aizhantj.com:21233/tjjs/?k=layg2n82jf6";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(mtj, s);
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            {children}
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
