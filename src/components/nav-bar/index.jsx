
import "./index.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CartWidget from './CartWidget';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className='header'>
        {/*IMG LOGO*/}
        <div>
          <Button variant="dark">
            <Link to='/' reloadDocument>
              <img style={{ width: 120, height: 65 }} className='image' src={('/workpls.png')} alt='' />
            </Link>
          </Button>
        </div>
        {/*SEARCH BAR*/}
        <div className='header-input-container'>
          <FloatingLabel>
            <Form.Control className="header-input" type="text" placeholder='Search any product' />
          </FloatingLabel>
          <Button variant="dark">
            <SearchOutlinedIcon style={{ marginTop: 2, color: 'black' }} />
          </Button>
        </div>
        <div className='profile-wrapper'>
          <Button variant="dark">
            <h4 className='header-tag'>My Profile</h4>
          </Button>
        </div>
        <CartWidget />

      </div>
      <nav>
        <div className='nav-buttons'>
          <Link to="/category/maleclothes" reloadDocument><Button size='medium' style={{ color: '#000000', marginRight: 50, backgroundColor: 'white', fontWeight: 600 }}>Men clothes</Button></Link>
          <Link to="/category/womenclothes" reloadDocument><Button size='medium' style={{ color: '#000000', marginRight: 50, backgroundColor: 'white', fontWeight: 600 }}>Women clothes</Button></Link>
          <Link to="/category/technology" reloadDocument><Button size='medium' style={{ color: '#000000', marginRight: 50, backgroundColor: 'white', fontWeight: 600 }}>Technology</Button></Link>
          <Link to="/category/jewelry" reloadDocument><Button size='medium' style={{ color: '#000000', marginRight: 50, backgroundColor: 'white', fontWeight: 600 }}>Jewelry</Button></Link>
          <Link to="/category/flashsale" reloadDocument><Button size='medium' style={{ color: '#000000', marginRight: 50, backgroundColor: 'white', fontWeight: 600 }}>FlashSale</Button></Link>
        </div>
      </nav>
    </>
  )
}
export default Header

