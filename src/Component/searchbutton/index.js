import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaSearch } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import SearchBar from "../../Component/searchbar";
import "./searchbutton.scss";
function SearchButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="tel:0335.44.55.99">
        <Button variant="outline-" className="buttonfixed buttonhotline">
          <BsFillTelephoneFill className="iconsearch" />
        </Button>
      </a>

      <Button variant="outline-" onClick={handleShow} className="buttonfixed">
        <FaSearch className="iconsearch" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="modalconfig"
        // size="lg"
      >
        <SearchBar />
      </Modal>
    </>
  );
}
export default SearchButton;
