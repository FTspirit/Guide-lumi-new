import "./Cards.scss";
import HomeControllerCards from "./homecontrollercards";
import SwitchButtonCard from "./switchbuttoncards";
import ModuleSensorRemoteCards from "./modulesensorremotecards";
import SmartLightingCards from "./smartlightingcards";
import LockGateCards from "./lockgatecards";
import MultiZoneAudioCards from "./multizoneaudiocards";
import WorkWithLumiCards from "./workwithlumicards";
import AppLumiLifeCards from "./applumilifecards";
function Cards({ lang, path }) {
  switch (path) {
    case "HomeController":
      return <HomeControllerCards lang={lang} path={path} />;
    case "switchButton":
      return <SwitchButtonCard lang={lang} path={path} />;
    case "moduleSensorRemote":
      return <ModuleSensorRemoteCards lang={lang} path={path} />;
    case "smartLighting":
      return <SmartLightingCards lang={lang} path={path} />;
    case "lockGate":
      return <LockGateCards lang={lang} path={path} />;
    case "amThanhDaVung":
      return <MultiZoneAudioCards lang={lang} path={path} />;
    case "workWithLumi":
      return <WorkWithLumiCards lang={lang} path={path} />;
    case "appLumiLife":
      return <AppLumiLifeCards lang={lang} path={path} />;
    default:
      return;
  }
}

export default Cards;
