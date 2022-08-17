// template para criação dos testes de cobertura da camada de controller


import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { NextFunction, Request, Response } from 'express';
import CarModel from '../../../models/carsModel';
import CarService from '../../../services/carService';
import CarController from '../../../controllers/CarController';
import { allCars, carMock } from '../mocks/carMock';


describe('Camanda Controller', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
    const carController = new CarController(carService);
    const req = {} as Request;
    const res = {} as Response;
  before(async () => {
    sinon
      .stub(carService, 'create')
      .resolves(carMock);
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)
  });

  after(()=>{
    sinon.restore();
  })

  describe('Create Car', () => {
    it("Sucesso", async () => {
        req.body = carMock
        await carController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
        expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    })
  });

});

describe('Camanda Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;
before(async () => {
  sinon
    .stub(carService, 'readOne')
    .resolves(carMock);
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(res)
});

after(()=>{
  sinon.restore();
})

describe('Find a Car', () => {
  it("Sucesso", async () => {
      req.params = { id: carMock._id }
      await carController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  })
});


});

describe('Camanda Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;
before(async () => {
  sinon
    .stub(carService, 'read')
    .resolves(allCars);
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(res)
});

after(()=>{
  sinon.restore();
})

describe('Find all Cars', () => {
  it("Sucesso", async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCars)).to.be.true;
  })
});
});