import Script from "next/script";
import React from "react";

const HotjarScript = () => {
  if (!process.env.NEXT_PUBLIC_HJ_ID) return null;

  return (
    <Script id="hotjar">
      {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJ_ID},hjsv:${process.env.NEXT_PUBLIC_HJ_VERSION}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
    </Script>
  );
};

export default HotjarScript;
