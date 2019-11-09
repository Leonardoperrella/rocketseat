const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store); /// depois que importa SessionController.

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

/*
routes.post('/users', (req, res) =>{ // request e response
    return res.json(req.body); // depois que adicionou app.use(express.json);
    //return res.json({ idade: req.body});
})//cria a rota
*/
module.exports = routes;