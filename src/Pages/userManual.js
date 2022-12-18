import background from "../Assets/images/banner_lumi.png";
import styled from "styled-components";
import Listcard from "../Component/ListCard";
import { Container } from "react-bootstrap";
import SearchButton from "../Component/searchbutton";
import { useParams } from "react-router-dom";

const StyledImg = styled.img`
  width: 100%;
  position: relative;
`;
const StyledContainer = styled(Container)`
  padding: 0;
`;
function UserManualVi({ lang }) {
  let { id } = useParams();
  return (
    <StyledContainer fluid>
      <div>
        <StyledImg
          src={background}
          alt="banner-lumi"
          className="imagepadding"
        ></StyledImg>
        <Listcard lang={lang} id={id} />
        <SearchButton lang={lang} />
      </div>
    </StyledContainer>
  );
}

export default UserManualVi;
