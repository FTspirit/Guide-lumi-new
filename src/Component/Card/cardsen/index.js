import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import zigbee from "../../../Assets/images/zigbee.png";
import blt from "../../../Assets/images/Bluetooth_Mesh.png";
import "../../Cards/Cards.scss";

function CardBodyEn({ item }) {
  return (
    <>
      <Col key={item.title.en}>
        {item.isOther === false &&
          item.bltMesh.en.length > 0 &&
          item.zigbee.en === "" && (
            <Link
              to={`/usermanual/en/${item.path.en}/${item.bltMesh.path}`}
              className="cardlink"
            >
              <Card className="cardContainer">
                <Card.Body>
                  <Card.Title className="cardtext">{item.title.en}</Card.Title>
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
          item.zigbee.en.length > 0 &&
          item.bltMesh.en === "" && (
            <Link
              to={`/usermanual/en/${item.path.en}/${item.zigbee.path}`}
              className="cardlink"
            >
              <Card className="cardContainer">
                <Card.Body>
                  <Card.Title className="cardtext">{item.title.en}</Card.Title>
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
          item.zigbee.en.length > 0 &&
          item.bltMesh.en.length > 0 && (
            <Card className="cardContainer">
              <Card.Body>
                <Card.Title className="cardtext">{item.title.en}</Card.Title>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="cardheading"
                />
                <div className="gap-3 d-flex justify-content-center align-items-center">
                  <Link
                    to={`/usermanual/en/${item.path.en}/${item.bltMesh.path}`}
                    className="cardlink"
                  >
                    <Card.Img variant="bottom" src={blt} className="blt" />
                  </Link>
                  <Link
                    to={`/usermanual/${item.path.en}/${item.zigbee.path}`}
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
            to={`en/usermanual/${item.path.en}/${item.normal.path}`}
            className="cardlink"
          >
            <Card className="cardContainer">
              <Card.Body>
                <Card.Title className="cardtext">{item.title.en}</Card.Title>
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
export default CardBodyEn;
