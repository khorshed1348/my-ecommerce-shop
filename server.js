const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('public'));

// ১০টি প্রোডাক্টের তালিকা ইমেজের লিংকসহ
const products = [
    { id: 1, name: "Premium T-Shirt", price: 1200, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" },
    { id: 2, name: "Stylish Shoes", price: 3500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 3, name: "Smart Watch", price: 4200, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 4, name: "Wireless Headphones", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 5, name: "Leather Wallet", price: 950, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80" },
    { id: 6, name: "Casual Denim Shirt", price: 1800, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
    { id: 7, name: "Sports Sunglasses", price: 1500, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
    { id: 8, name: "Travel Backpack", price: 2800, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
    { id: 9, name: "Mechanical Keyboard", price: 3800, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80" },
    { id: 10, name: "RGB Gaming Mouse", price: 1400, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 11, name: "Stylish Shoes", price: 3500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 12, name: "Rechargeable lithium", price: 3035, image: "/Rechargeable lithium.png"}
];

let orders = [];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/orders', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        productName: req.body.productName,
        price: req.body.price,
        customerPhone: req.body.customerPhone,
        transactionId: req.body.transactionId,
        status: "Pending"
    };
    orders.push(newOrder);
    res.json({ success: true, message: "অর্ডার সফল!" });
});

app.get('/api/admin/orders', (req, res) => {
    res.json(orders);
});

app.post('/api/admin/orders/confirm', (req, res) => {
    const orderId = req.body.id;
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = "Confirmed";
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`সার্ভার চলছে: http://localhost:${PORT}`);
});
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static('public'));

// ১০টি প্রোডাক্টের তালিকা ইমেজের লিংকসহ
const products = [
    { id: 1, name: "Premium T-Shirt", price: 1200, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80" },
    { id: 2, name: "Stylish Shoes", price: 3500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 3, name: "Smart Watch", price: 4200, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
    { id: 4, name: "Wireless Headphones", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 5, name: "Leather Wallet", price: 950, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80" },
    { id: 6, name: "Casual Denim Shirt", price: 1800, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80" },
    { id: 7, name: "Sports Sunglasses", price: 1500, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
    { id: 8, name: "Travel Backpack", price: 2800, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80" },
    { id: 9, name: "Mechanical Keyboard", price: 3800, image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80" },
    { id: 10, name: "RGB Gaming Mouse", price: 1400, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80" },
    { id: 11, name: "Stylish Shoes", price: 3500, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 12, name: "Rechargeable lithium", price: 3035, image: "/Rechargeable lithium.png"}
];

let orders = [];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/orders', (req, res) => {
    const newOrder = {
        id: orders.length + 1,
        productName: req.body.productName,
        price: req.body.price,
        customerPhone: req.body.customerPhone,
        transactionId: req.body.transactionId,
        status: "Pending"
    };
    orders.push(newOrder);
    res.json({ success: true, message: "অর্ডার সফল!" });
});

app.get('/api/admin/orders', (req, res) => {
    res.json(orders);
});

app.post('/api/admin/orders/confirm', (req, res) => {
    const orderId = req.body.id;
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = "Confirmed";
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`সার্ভার চলছে: http://localhost:${PORT}`);
});