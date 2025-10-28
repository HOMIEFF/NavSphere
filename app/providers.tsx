'use client'

import { useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'

export function Providers({ children }: { children: React.ReactNode }) {
  // 添加网站统计代码
  useEffect(() => {
    var _mtj = _mtj || [];
    (function () {
      var mtj = document.createElement("script");
      mtj.src = "https://node90.aizhantj.com:21233/tjjs/?k=layg2n82jf6";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(mtj, s);
    })();
  }, []);

  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  )
}
