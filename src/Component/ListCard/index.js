import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import "./ListCard.scss";
import Cards from "../Cards";
import { Container } from "react-bootstrap";
import data from "../../Assets/Data/headingTab.json";
function Listcardtest({ lang }) {
  //xs={1} md={2} xxl={8} className="justify-content-center flex-column"
  return (
    //fluid className="listCardContainer"
    <Container fluid className="listCardContainer">
      <Row>
        <Tabs
          defaultActiveKey="switchButton"
          id="justify-tab-example"
          className="tabs"
          variant="pill"
          fill
        >
          {lang === "vi"
            ? data.headingTab.map((item) => (
                <Tab
                  eventKey={item.path}
                  title={item.vi}
                  tabClassName="tabitem"
                  key={item.vi}
                >
                  <Container>
                    <Cards lang={lang} path={item.path} />
                  </Container>
                </Tab>
              ))
            : data.headingTab.map((item) => (
                <Tab
                  eventKey={item.path}
                  title={item.en}
                  tabClassName="tabitem"
                  key={item.en}
                >
                  <Container>
                    <Cards lang={lang} path={item.path} />
                  </Container>
                </Tab>
              ))}
        </Tabs>
      </Row>
    </Container>
  );
}

export default Listcardtest;
