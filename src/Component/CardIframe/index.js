import { useEffect } from "react";
function CardIframe({ src }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <iFrame src={src} className="viewheight pt-9" frameBorder="0" />;
}

export default CardIframe;
