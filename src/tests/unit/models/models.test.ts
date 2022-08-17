// template para criação dos testes de cobertura da camada de model


import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/carsModel';
import { Model } from 'mongoose'
import { carMock, allCars} from '../mocks/carMock';

describe('Car Model', () => {

    const carModel  = new CarModel();
  before(async () => {
    sinon.stub(Model, 'create').resolves(carMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Criando um carro', async () => {
    const newCar = await carModel.create(carMock);
    expect(newCar).to.be.deep.equal(carMock)
  });

});

describe('Car Model readOne', () => {

  const carModel  = new CarModel();
before(async () => {
  sinon.stub(Model, 'findOne').resolves(carMock);
});

after(()=>{
  sinon.restore();
})

it('achando um carro', async () => {
  const newCar = await carModel.readOne("4edd40c86762e0fb12000003");
  expect(newCar).to.be.deep.equal(carMock)
});

it('id not found', async () => {
  try {
    await carModel.readOne('123asldjaklsdjasd');
  } catch (error: any) {
    expect(error.message).to.be.eq('InvalidMongoId');
  }
});

});

describe('Car Model read', () => {

  const carModel  = new CarModel();
before(async () => {
  sinon.stub(Model, 'find').resolves(allCars);
});

after(()=>{
  sinon.restore();
})

it('achando um carro', async () => {
  const newCar = await carModel.read();
  expect(newCar).to.be.deep.equal(allCars)
});

});