import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import "./ListCard.scss";
import Cards from "../Cards";
import { Container } from "react-bootstrap";
import data from "../../Assets/Data/headingTab.json";
import { useNavigate } from "react-router-dom";
function Listcardtest({ lang, id }) {
  const navigate = useNavigate();
  const handleClick = (num) => {
    navigate(`/vi/${num}`);
    console.log(num);
  };
  //xs={1} md={2} xxl={8} className="justify-content-center flex-column"
  console.log(id);
  return (
    //fluid className="listCardContainer"
    <Container fluid className="listCardContainer">
      <Row>
        <Tabs
          defaultActiveKey={id}
          id="justify-tab-example"
          className="tabs"
          variant="pill"
          fill
        >
          {lang === "vi"
            ? data.headingTab.map((item) => (
                <Tab
                  eventKey={item.id}
                  title={item.vi}
                  tabClassName="tabitem"
                  key={item.vi}
                  onClick={handleClick(item.id)}
                >
                  <Container>
                    <Cards lang={lang} path={item.path} id={id} />
                  </Container>
                </Tab>
              ))
            : data.headingTab.map((item) => (
                <Tab
                  eventKey={item.id}
                  title={item.en}
                  tabClassName="tabitem"
                  key={item.en}
                >
                  <Container>
                    <Cards lang={lang} path={item.path} id={id} />
                  </Container>
                </Tab>
              ))}
        </Tabs>
      </Row>
    </Container>
  );
}

export default Listcardtest;
