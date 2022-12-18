import React from "react";
import Navbar from "../Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WarrantyPolicy from "../Pages/warrantyPolicy";
import UserManual from "../Pages/userManual";
import SmarthomeKnowledge from "../Pages/smarthomeKnowledge";
import ConstructionExperience from "../Pages/constructionExperience";
import Faq from "../Pages/faq";

import Footer from "../Component/Footer";
import data from "../Assets/Data/data.json";

import HomecontrollerRoute from "../Component/Route/homecontrollerRoute";
import SwitchbuttonRoute from "../Component/Route/switchbuttonRoute";
import SensorremoteRoute from "../Component/Route/sensorremoteRoute";
import SmartlightingRoute from "../Component/Route/smartlightingRoute";
import LockgateRoute from "../Component/Route/lockgateRoute";
import MultizoneaudioRoute from "../Component/Route/amthanhdavungRoute";
import WorkwithlumiRoute from "../Component/Route/workwithlumiRoute";
import AppLumiLifeRoute from "../Component/Route/applumilifeRoute";
import ComponentTwo from "../Pages/direct";
import { useParams } from "react-router-dom";

function AppVI({ lang }) {
  let { id } = useParams();
  return (
    <>
      <Navbar lang={`vi`} id={id} />
      <Routes>
        <Route path="/" element={<UserManual lang={`vi`} />} />
        <Route path="/huongdansudung" element={<UserManual lang={`vi`} />} />
        <Route
          path="/chinhsachbaohanh"
          element={<WarrantyPolicy lang={`vi`} />}
        />
        <Route
          path="/kinhnghiemthicong"
          element={<ConstructionExperience lang={`vi`} />}
        />
        <Route
          path="/kienthucnhathongminh"
          element={<SmarthomeKnowledge lang={`vi`} />}
        />
        <Route path="/cauhoithuonggap" element={<Faq lang={`vi`} />} />
        <Route path="/Search" element={<ComponentTwo lang={`vi`} />} />
      </Routes>
      <HomecontrollerRoute lang={`vi`} src={data.HomeController} id={id} />
      <SwitchbuttonRoute lang={`vi`} src={data.switchButton} id={id} />
      <SensorremoteRoute lang={`vi`} src={data.moduleSensorRemote} id={id} />
      <SmartlightingRoute lang={`vi`} src={data.smartLighting} id={id} />
      <LockgateRoute lang={`vi`} src={data.lockGate} id={id} />
      <MultizoneaudioRoute lang={`vi`} src={data.amThanhDaVung} id={id} />
      <WorkwithlumiRoute lang={`vi`} src={data.workWithLumi} id={id} />
      <AppLumiLifeRoute lang={`vi`} src={data.appLumiLife} id={id} />
      <Footer />
    </>
  );
}
export default AppVI;
