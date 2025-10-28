'use client'

import { useEffect } from 'react'

export function SiteFooter() {
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
    <footer className="text-center py-4 text-sm text-gray-500">
      <p>© 2024 编程爱好者网址导航. All rights reserved.</p>
    </footer>
  )
}
