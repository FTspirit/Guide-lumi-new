import React from "react";
import RouteCard from "../../RoutePath";
import { Routes, Route } from "react-router-dom";
import CardIframe from "../../CardIframe";

import systemConfig from "../../../Assets/Data/systemConfig.json";
import smartlightningConfig from "../../../Assets/Data/smartlightningConfig.json";
import config from "../../../Assets/Data/config.json";
function AppLumiLifeRoute({ lang, src }) {
  return (
    <>
      <RouteCard lang={lang} src={src} />
      <Routes>
        {lang === "vi" &&
          systemConfig.SystemConfig.map((item) => (
            <Route
              path={`huongdansudung/Cau-hinh-he-thong/${item.path.vi}`}
              element={<CardIframe src={item.link.vi} />}
              key={item.title.vi}
            />
          ))}
        {lang === "en" &&
          systemConfig.SystemConfig.map((item) => (
            <Route
              path={`usermanual/SystemConfiguration/${item.path.en}`}
              element={<CardIframe src={item.link.en} />}
              key={item.title.en}
            />
          ))}
        {lang === "vi" &&
          smartlightningConfig.smartlightningConfig.map((item) => (
            <Route
              path={`huongdansudung/Cau-hinh-Smart-Lighting/${item.path.vi}`}
              element={<CardIframe src={item.link.vi} />}
              key={item.title.vi}
            />
          ))}
        {lang === "en" &&
          smartlightningConfig.smartlightningConfig.map((item) => (
            <Route
              path={`usermanual/SmartLightingConfiguration/${item.path.en}`}
              element={<CardIframe src={item.link.en} />}
              key={item.title.en}
            />
          ))}
        {lang === "vi" &&
          config.Config.map((item) => (
            <Route
              path={`huongdansudung/Configuration/${item.path.vi}`}
              element={<CardIframe src={item.link.vi} />}
              key={item.title.vi}
            />
          ))}
        {lang === "en" &&
          config.Config.map((item) => (
            <Route
              path={`usermanual/Configuration/${item.path.en}`}
              element={<CardIframe src={item.link.en} />}
              key={item.title.en}
            />
          ))}
      </Routes>
    </>
  );
}
export default AppLumiLifeRoute;
