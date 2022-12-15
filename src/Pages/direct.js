import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const SearchedWebview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  console.log(location);
  const myparam = location.state;
  return (
    <div>
      <iframe
        src={myparam}
        className="viewheight pt-9"
        frameBorder="0"
        title="Webview"
      />
    </div>
  );
};
export default SearchedWebview;
