import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoConatiner = styled.div`
    display: flex;
    font-size: 30px;

    @media (max-width: 878px) {
        font-size: 20px;
    }

    @media (max-width: 706px) {
        font-size: 10px;
    }
`

const LogoImage = styled.img`
    margin-right: 10px;

    @media (max-width: 878px) {
        width: 20px;
    }

    @media (max-width: 706px) {
        width: 10px;
    }
`

function Logo() {
  return (
    <LogoConatiner>
      <LogoImage
        src={logo} 
        alt="logo" 
        className="logo-img"
      />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoConatiner>
  );
}

export default Logo;
