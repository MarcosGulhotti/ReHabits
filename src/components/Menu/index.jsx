import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../providers/Login";
import imageLogo from "../../Assets/img/logosite.png"

const StyledMenuBar = styled.nav`
  width: 100%;
  height: 55px;
  background-color: var(--white);
  padding: 0 20px 0 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  .logo {
    margin-top: 2px;
    width: 50px;
    height: 50px;
  }
`;

const StyledRightNav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;

    &:hover {
      border-bottom: 2px solid #0d2538;
    }

    a {
      display: flex;
      gap: 7px;
      color: var(--background);

      @media (max-width: 768px) {
        font-size: 1.5rem;
        gap: 20px;
      }

      &:visited {
        color: var(--background);
      }
    }

    i {
      height: 27px;
      width: 27px;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--gold);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 10px;
    right: 0;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#5f6874" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    setIsLogged(null);
    history.push("/");
  };

  return (
    <StyledMenuBar>
      <img className="logo" src={imageLogo} alt="logo"></img>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <StyledRightNav open={open}>
        <li>
          <Link to="/">
            <i class="fas fa-home"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i class="fas fa-clipboard-list"></i>
            Register
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i class="fas fa-columns"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <i class="fas fa-user-circle"></i>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i class="fas fa-address-card"></i>
            Contact
          </Link>
        </li>
        {isLogged ? (
          <li>
            <Link onClick={handleLogout}>
              <i class="fas fa-sign-out-alt"></i>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <i class="fas fa-sign-in-alt"></i>
              Login
            </Link>
          </li>
        )}
      </StyledRightNav>
    </StyledMenuBar>
  );
};
