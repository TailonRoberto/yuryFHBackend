const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const Dashboard = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");



const routes = express.Router();

const upload = multer(uploadConfig);


// routes.post('/users/', (req, res) => {
//     // req.body = acessar corpo da requisicao / criação e edicao de registros
//     return res.json(req.body); 
//  });

 routes.post('/Session', SessionController.store);

 routes.get('/Session', SessionController.store);

 routes.post('/Spots' , upload.single('thumbnail') ,  SpotController.store);
 routes.get('/Spots' , SpotController.index); 
 routes.get('/Dashboard', Dashboard.show);

 routes.post('/Spots/:spot_id/booking', BookingController.store);

 routes.post('/booking/:booking_id/approvals', ApprovalController.store);
 routes.post('/booking/:booking_id/rejections', RejectionController.store);



 module.exports = routes;
 