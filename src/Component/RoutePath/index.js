import { Routes, Route } from "react-router-dom";
import CardIframe from "../CardIframe";
function RouteCard({ lang, src }) {
  console.log(lang, src);
  return (
    <Routes>
      {lang === "vi" &&
        src.map((item) => {
          return (
            item.isOther === false &&
            item.bltMesh.vi.length > 0 &&
            item.zigbee.vi === "" && (
              <>
                {console.log(
                  `/vi/huongdansudung/${item.path.vi}/${item.bltMesh.path}`
                )}
                <Route
                  path={`/vi/huongdansudung/${item.path.vi}/${item.bltMesh.path}`}
                  element={<CardIframe src={item.bltMesh.vi} />}
                  key={item.title.vi}
                />
              </>
            )
          );
        })}
      {lang === "en" &&
        src.map((item) => {
          return (
            item.isOther === false &&
            item.bltMesh.en.length > 0 &&
            item.zigbee.en === "" && (
              <>
                <Route
                  path={`/usermanual/${item.path.en}/${item.bltMesh.path}`}
                  element={<CardIframe src={item.bltMesh.en} />}
                  key={item.title.en}
                />
              </>
            )
          );
        })}
      {lang === "vi" &&
        src.map((item) => {
          return (
            item.isOther === false &&
            item.zigbee.vi.length > 0 &&
            item.bltMesh.vi === "" && (
              <>
                <Route
                  path={`/vi/huongdansudung/${item.path.vi}/${item.zigbee.path}`}
                  element={<CardIframe src={item.zigbee.vi} />}
                  key={item.title.vi}
                />
              </>
            )
          );
        })}
      {lang === "en" &&
        src.map((item) => {
          return (
            item.isOther === false &&
            item.zigbee.en.length > 0 &&
            item.bltMesh.en === "" && (
              <>
                <Route
                  path={`/usermanual/${item.path.en}/${item.zigbee.path}`}
                  element={<CardIframe src={item.zigbee.en} />}
                  key={item.title.en}
                />
              </>
            )
          );
        })}
      {lang === "vi" &&
        src.map(
          (item) =>
            item.isOther === false &&
            item.zigbee.vi.length > 0 &&
            item.bltMesh.vi.length > 0 && (
              <>
                <Route
                  path={`/vi/huongdansudung/${item.path.vi}/${item.bltMesh.path}`}
                  element={<CardIframe src={item.bltMesh.vi} />}
                  key={item.title.vi}
                />
                <Route
                  path={`/vi/huongdansudung/${item.path.vi}/${item.zigbee.path}`}
                  element={<CardIframe src={item.zigbee.vi} />}
                  key={item.title.vi}
                />
              </>
            )
        )}
      {lang === "en" &&
        src.map(
          (item) =>
            item.isOther === false &&
            item.zigbee.en.length > 0 &&
            item.bltMesh.en.length > 0 && (
              <>
                <Route
                  path={`/usermanual/${item.path.en}/${item.bltMesh.path}`}
                  element={<CardIframe src={item.bltMesh.en} />}
                  key={item.title.en}
                />
                <Route
                  path={`/usermanual/${item.path.en}/${item.zigbee.path}`}
                  element={<CardIframe src={item.zigbee.en} />}
                  key={item.title.en}
                />
              </>
            )
        )}
      {lang === "vi" &&
        src.map((item) => {
          return (
            item.isOther === true && (
              <>
                <Route
                  path={`huongdansudung/${item.path.vi}/${item.normal.path}`}
                  element={<CardIframe src={item.normal.vi} />}
                  key={item.title.vi}
                />
              </>
            )
          );
        })}
      {lang === "en" &&
        src.map((item) => {
          return (
            item.isOther === true && (
              <>
                <Route
                  path={`en/usermanual/${item.path.en}/${item.normal.path}`}
                  element={<CardIframe src={item.normal.en} />}
                  key={item.title.en}
                />
              </>
            )
          );
        })}
    </Routes>
  );
}
export default RouteCard;
