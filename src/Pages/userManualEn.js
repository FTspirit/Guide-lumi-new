import background from "../Assets/images/banner_lumi.png";
import styled from "styled-components";
import Listcard from "../Component/ListCard";
import { Container } from "react-bootstrap";

const StyledImg = styled.img`
  width: 100%;
`;
const StyledContainer = styled(Container)`
  padding: 0;
`;
function UserManualVi({ lang }) {
  return (
    <StyledContainer fluid>
      <div>
        <StyledImg
          src={background}
          alt="banner-lumi"
          className="imagepadding"
        ></StyledImg>
        <Listcard lang={lang} />
      </div>
    </StyledContainer>
  );
}

export default UserManualVi;
