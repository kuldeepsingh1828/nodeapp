const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads/'))
    }, filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

const router = express.Router();
router.get('/', (req, res) => {
    res.json({ "status": "200", "page": "users" })
});
router.get('/login', (req, res) => {
    res.json({ "status": "200", "page": "user/login" })
});

router.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/upload.html'));
});

router.post('/upload', upload.single('file'), (req, res) => {
    res.send('hi this post upload')
});

module.exports = router;