import React from "react";
import RouteCard from "../../RoutePath";
function HomecontrollerRoute({ lang, src }) {
  console.log(lang, src);
  return <RouteCard lang={lang} src={src} />;
}
export default HomecontrollerRoute;