// template para criação dos testes de cobertura da camada de model


import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/carsModel';
import { Model } from 'mongoose'
import { carMock } from '../mocks/carMock';




describe('Car Model', () => {

    const carModel  = new CarModel();
  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Criando um carro', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMock)
  });

});