import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import AppVI from "./AppVI";
import AppEN from "./AppEN";

function App() {
  // const [lang, setLang] = useState("vi");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lumi Support Web</title>
        <meta name="Lumi Support Web" content="Lumi Support Web" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/vi" replace />} />
          <Route path="/vi/*" element={<AppVI lang={`vi`} />} />
          <Route path="/en/*" element={<AppEN lang={`en`} />} />
        </Routes>
      </Router>
      {/* <Navbar lang={lang} setLang={setLang} />
          <Routes>
            <Route
              path="/"
              element={<UserManual lang={lang} setLang={setLang} />}
            />
            <Route
              path="/huongdansudung"
              element={<UserManual lang={lang} setLang={setLang} />}
            />
            <Route
              path="/chinhsachbaohanh"
              element={<WarrantyPolicy lang={lang} setLang={setLang} />}
            />
            <Route
              path="/kinhnghiemthicong"
              element={<ConstructionExperience lang={lang} setLang={setLang} />}
            />
            <Route
              path="/kienthucnhathongminh"
              element={<SmarthomeKnowledge lang={lang} setLang={setLang} />}
            />
            <Route
              path="/cauhoithuonggap"
              element={<Faq lang={lang} setLang={setLang} />}
            />
          </Routes>

          <Route
            path="/usermanual"
            element={<UserManual lang={lang} setLang={setLang} />}
          />
          <Route
            path="/constructionexperience"
            element={<ConstructionExperience lang={lang} setLang={setLang} />}
          />
          <Route
            path="/smarthomeknowledge"
            element={<SmarthomeKnowledge lang={lang} setLang={setLang} />}
          />
          <Route
            path="/warrantypolicy"
            element={<WarrantyPolicy lang={lang} setLang={setLang} />}
          />
          <Route path="/Faq" element={<Faq lang={lang} setLang={setLang} />} />

          <Route
            path="/Search"
            element={<ComponentTwo lang={lang} setLang={setLang} />}
          />
          <Route
            path="/en"
            element={<UserManual lang={lang} setLang={setLang} />}
          />
          <Route
            path="/vi"
            element={<UserManual lang={lang} setLang={setLang} />}
          />
        </Routes>

        <HomecontrollerRoute lang={lang} src={data.HomeController} />
        <SwitchbuttonRoute lang={lang} src={data.switchButton} />
        <SensorremoteRoute lang={lang} src={data.moduleSensorRemote} />
        <SmartlightingRoute lang={lang} src={data.smartLighting} />
        <LockgateRoute lang={lang} src={data.lockGate} />
        <MultizoneaudioRoute lang={lang} src={data.amThanhDaVung} />
        <WorkwithlumiRoute lang={lang} src={data.workWithLumi} />
        <AppLumiLifeRoute lang={lang} src={data.appLumiLife} />
        <Footer />
      </Router> */}
    </>
  );
}

export default App;
