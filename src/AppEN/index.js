import React from "react";
import Navbar from "../Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WarrantyPolicy from "../Pages/warrantyPolicy";
import UserManual from "../Pages/userManual";
import SmarthomeKnowledge from "../Pages/smarthomeKnowledge";
import ConstructionExperience from "../Pages/constructionExperience";
import Faq from "../Pages/faq";
import ComponentTwo from "../Pages/direct";

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

function AppEN({ lang }) {
  return (
    <>
      <Navbar lang={`en`} />

      <Routes>
        <Route path="/" element={<UserManual lang={`en`} />} />
        <Route path="/usermanual" element={<UserManual lang={`en`} />} />
        <Route
          path="/warrantypolicy"
          element={<WarrantyPolicy lang={`en`} />}
        />
        <Route
          path="/constructionexperience"
          element={<ConstructionExperience lang={`en`} />}
        />
        <Route
          path="/smarthomeknowledge"
          element={<SmarthomeKnowledge lang={`en`} />}
        />
        <Route path="/Faq" element={<Faq lang={`en`} />} />
        <Route path="/Search" element={<ComponentTwo lang={`en`} />} />
      </Routes>
      <HomecontrollerRoute lang={`en`} src={data.HomeController} />
      <SwitchbuttonRoute lang={`en`} src={data.switchButton} />
      <SensorremoteRoute lang={`en`} src={data.moduleSensorRemote} />
      <SmartlightingRoute lang={`en`} src={data.smartLighting} />
      <LockgateRoute lang={`en`} src={data.lockGate} />
      <MultizoneaudioRoute lang={`en`} src={data.amThanhDaVung} />
      <WorkwithlumiRoute lang={`en`} src={data.workWithLumi} />
      <AppLumiLifeRoute lang={`en`} src={data.appLumiLife} />
      <Footer />
    </>
  );
}
export default AppEN;
