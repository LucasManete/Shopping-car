// template para criação dos testes de cobertura da camada de service


import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/carsModel';
import CarService from '../../../services/carService';
import { carMock } from '../mocks/carMock';
import { ZodError } from 'zod';


describe('Car sevices', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  describe('create car', () => {
    it('Sucesso', async () => {
        const carCreated = await carService.create(carMock);
        expect(carCreated).to.be.deep.equal(carMock)
    })
    it('fail', async () => {
        try {
        await carService.create({} as any);
        
    } catch(error) {
        expect(error).to.be.instanceOf(ZodError)
    }
    })
  });

});