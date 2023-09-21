import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Checkout.css';
let savedItems = JSON.parse(localStorage.getItem('cart'))

let ids = [];
let titles = [];
let prices = [];
let counts = [];
let images = [];
let totals = [];
savedItems.forEach(item => {
    ids.push(item.id);
    titles.push(item.title);
    prices.push(item.price);
    counts.push(item.count);
    images.push(item.image);
    totals.push(item.total);
});
let totalSum = totals.reduce((sum, total) => sum + total, 0)
let imageComponents = images.map((url, index) => <img key={index} src={url} alt='' className='images column' />)
let totalCount = counts.map((element) => <p className='column'>{element}</p >)

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal() {
    return totalSum;
}

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;



export default function SpanningTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Products</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {savedItems.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell><img src={item.image} className='images'></img></TableCell>
                            <TableCell>{item.title}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">{item.count}</TableCell>
                            <TableCell align="right">{item.total}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={4}>Total Sum</TableCell>
                        <TableCell align="right">{ccyFormat(totalSum)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}