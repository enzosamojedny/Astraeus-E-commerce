import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Button from '@mui/material/Button';
import "./index.css"
import { NavLink } from 'react-router-dom';

function CartWidget() {

    return (
        <div style={{ position: "relative", left: 50 }} className='cart-wrapper'>
            <NavLink to={"/cart"} style={{ color: 'white' }}>
                <Button variant="dark" style={{ padding: 20 }}>
                    <ShoppingCartSharpIcon style={{ marginRight: 5 }} />
                    <span style={{ position: "absolute", left: 14, right: 14, backgroundColor: "white", width: 14, height: 14, borderRadius: 7, textAlign: "center", fontSize: 12, fontWeight: 400 }}></span>
                    <span>Cart</span>
                </Button>
            </NavLink>
        </div>
    );
}

export default CartWidget;
