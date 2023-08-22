import React, { useEffect, useState } from 'react';
import "./index.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


function TabPanel({ children, value, index }) {
    return (
        <div role="tabpanel" hidden={value !== index}>
            {value === index && (
                <Box p={3}>
                    <Typography component="span" className="body-items">
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function BasicTabs() {
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const categories = ["all", "men's clothing", "women's clothing", "jewelry", "electronics"];
                const category = encodeURIComponent(categories[value]);
                const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        if (value > 0) {
            fetchProductsByCategory();
        }
    }, [value]);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="header-bottom">
                <Button>
                    <MenuSharpIcon style={{ color: 'white' }} />
                </Button>
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    {["All Products", "Men's Clothing", "Women's Clothing", "Jewelry", "Technology", "Flash Sale"].map((label, index) => (
                        <Tab key={index} label={label} {...allProps(index)} style={{ color: 'white' }} />
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
}

function allProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default BasicTabs;
