import Row from "react-bootstrap/Row";
import data from "../../../Assets/Data/data.json";
import CardBody from "../../Card/cardsvi";
import CardBodyEn from "../../Card/cardsen";
import "../Cards.scss";
function LockGateCards({ lang, setLang }) {
  return (
    <Row xs={1} sm={2} md={2} lg={4} className="g-5 cardjustifycenter">
      {lang === "vi"
        ? data.lockGate.map((item) => (
            <CardBody item={item} key={item.title.vi} />
          ))
        : data.lockGate.map((item) => (
            <CardBodyEn item={item} key={item.title.en} />
          ))}
    </Row>
  );
}
export default LockGateCards;
