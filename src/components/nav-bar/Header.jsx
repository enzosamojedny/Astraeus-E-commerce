import "./index.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CartWidget from "./CartWidget";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        {/*IMG LOGO*/}
        <div>
          <NavLink to="/">
            <Button variant="dark">
              <img
                style={{ width: 120, height: 65 }}
                className="image"
                src={"/workpls.png"}
                alt=""
              />
            </Button>
          </NavLink>
        </div>
        {/*SEARCH BAR*/}
        <div className="header-input-container">
          <FloatingLabel>
            <Form.Control
              className="header-input"
              type="text"
              placeholder="Search any product"
            />
          </FloatingLabel>
          <Button variant="dark">
            <SearchOutlinedIcon style={{ marginTop: 2, color: "black" }} />
          </Button>
        </div>
        <div className="profile-wrapper">
          <Button variant="dark">
            <h4 className="header-tag">My Profile</h4>
          </Button>
        </div>
        <CartWidget />
      </div>
      <nav>
        <div className="nav-buttons">
          <NavLink to="/category/mens%20clothing">
            <Button
              size="medium"
              style={{
                color: "#000000",
                marginRight: 50,
                backgroundColor: "white",
                fontWeight: 600,
              }}
            >
              Men clothes
            </Button>
          </NavLink>
          <NavLink to="/category/womens%20clothing">
            <Button
              size="medium"
              style={{
                color: "#000000",
                marginRight: 50,
                backgroundColor: "white",
                fontWeight: 600,
              }}
            >
              Women clothes
            </Button>
          </NavLink>
          <NavLink to="/category/electronics">
            <Button
              size="medium"
              style={{
                color: "#000000",
                marginRight: 50,
                backgroundColor: "white",
                fontWeight: 600,
              }}
            >
              Electronics
            </Button>
          </NavLink>
          <NavLink to="/category/jewelry">
            <Button
              size="medium"
              style={{
                color: "#000000",
                marginRight: 50,
                backgroundColor: "white",
                fontWeight: 600,
              }}
            >
              Jewelry
            </Button>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
