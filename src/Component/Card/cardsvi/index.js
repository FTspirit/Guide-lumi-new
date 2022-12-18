import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import zigbee from "../../../Assets/images/zigbee.png";
import blt from "../../../Assets/images/Bluetooth_Mesh.png";
import "../../Cards/Cards.scss";

function CardBody({ item }) {
  return (
    <>
      <Col key={item.title.vi}>
        {item.isOther === false &&
          item.bltMesh.vi.length > 0 &&
          item.zigbee.vi === "" && (
            <Link
              to={`/vi/huongdansudung/${item.path.vi}/${item.bltMesh.path}`}
              className="cardlink"
            >
              <Card className="cardContainer">
                <Card.Body>
                  <Card.Title className="cardtext">{item.title.vi}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    className="cardheading"
                  />
                  <div className="gap-3 d-flex justify-content-center align-items-center">
                    <Card.Img variant="bottom" src={blt} className="blt" />
                  </div>
                </Card.Body>
              </Card>
            </Link>
          )}
        {item.isOther === false &&
          item.zigbee.vi.length > 0 &&
          item.bltMesh.vi === "" && (
            <Link
              to={`/vi/huongdansudung/${item.path.vi}/${item.zigbee.path}`}
              className="cardlink"
            >
              <Card className="cardContainer">
                <Card.Body>
                  <Card.Title className="cardtext">{item.title.vi}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    className="cardheading"
                  />
                  <div className="gap-3 d-flex justify-content-center align-items-center">
                    <Card.Img
                      variant="bottom"
                      src={zigbee}
                      className="ziggbee"
                    />
                  </div>
                </Card.Body>
              </Card>
            </Link>
          )}
        {item.isOther === false &&
          item.zigbee.vi.length > 0 &&
          item.bltMesh.vi.length > 0 && (
            <Card className="cardContainer">
              <Card.Body>
                <Card.Title className="cardtext">{item.title.vi}</Card.Title>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="cardheading"
                />
                <div className="gap-3 d-flex justify-content-center align-items-center">
                  <Link
                    to={`/vi/huongdansudung/${item.path.vi}/${item.bltMesh.path}`}
                    className="cardlink"
                  >
                    <Card.Img variant="bottom" src={blt} className="blt" />
                  </Link>
                  <Link
                    to={`/vi/huongdansudung/${item.path.vi}/${item.zigbee.path}`}
                    className="cardlink"
                  >
                    <Card.Img
                      variant="bottom"
                      src={zigbee}
                      className="ziggbee"
                    />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          )}
        {item.isOther === true && (
          <Link
            to={`/vi/huongdansudung/${item.path.vi}/${item.normal.path}`}
            className="cardlink"
          >
            <Card className="cardContainer">
              <Card.Body>
                <Card.Title className="cardtext">{item.title.vi}</Card.Title>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="cardheading"
                />
                <div className="cardconnect"></div>
              </Card.Body>
            </Card>
          </Link>
        )}
      </Col>
    </>
  );
}
export default CardBody;
