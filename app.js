const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const { canvas, faceDetectionNet, faceDetectionOptions, saveFile, drawDetections } = require('./faceApi');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'web_app'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('photo'), (req, res) => {
    const userId = req.body.userId;
    const image = req.file.buffer;

    connection.query('INSERT INTO capturas (usuario_id, imagem) VALUES (?, ?)', [userId, image], (err, result) => {
        if (err) throw err;
        res.send('Image uploaded and saved to database');
    });
});

app.post('/verify', upload.single('photo'), async (req, res) => {
    const userId = req.body.userId;
    const image = req.file.buffer;

    // Process and compare image with stored user image
    const detections = await faceapi.detectAllFaces(image, faceDetectionOptions);
    if (detections.length > 0) {
        connection.query('SELECT foto FROM usuarios WHERE id = ?', [userId], async (err, result) => {
            if (err) throw err;
            const userImage = result[0].foto;
            const userDetections = await faceapi.detectAllFaces(userImage, faceDetectionOptions);
            
            // Compare faces (simple version, you can improve this with better algorithms)
            if (userDetections.length > 0 && detections[0].descriptor === userDetections[0].descriptor) {
                res.send('User verified');
            } else {
                res.send('User verification failed');
            }
        });
    } else {
        res.send('No face detected');
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
