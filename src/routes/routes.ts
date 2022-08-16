import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/carService';
import CarModel from '../models/carsModel';

const route = Router();

const car = new CarModel();

const carService = new CarService(car);

const carController = new CarController(carService);

route.post('/cars', (req, res) => carController.create(req, res));
route.get('/cars', (req, res) => carController.read(req, res));

export default route;