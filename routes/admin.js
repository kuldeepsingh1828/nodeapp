const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json({ "status": "200", "page": "admin" })
});

router.get('/login', (req, res) => {
    res.json({ "status": "200", "page": "admin/login" })
});
module.exports = router;