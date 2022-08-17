// template para criação dos testes de cobertura da camada de service


import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/carsModel';
import CarService from '../../../services/carService';
import { carMock, allCars, deleteMock,  } from '../mocks/carMock';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../catalogErros/erros';


describe('Car sevices', () => {
    const carModel = new CarModel();
    const carService = new CarService(carModel);
  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMock);
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

describe('Car sevices', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
before(async () => {
  sinon.stub(carModel, 'readOne').resolves(carMock);
});

after(()=>{
  sinon.restore();
})

describe('find a car', () => {
  it('Sucesso', async () => {
      const carCreated = await carService.readOne(carMock._id);
      expect(carCreated).to.be.deep.equal(carMock)
  })
  it('fail', async () => {
      try {
      await carService.readOne(carMock._id);
      
  } catch(error:any) {
      expect(error.error).to.be.deep.equal(ErrorTypes.EntityNotFound)
  }
  })
});

});

describe('Car sevices', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
before(async () => {
  sinon.stub(carModel, 'read').resolves(allCars);
});

after(()=>{
  sinon.restore();
})

describe('find all cars', () => {
  it('Sucesso', async () => {
      const findedCar = await carService.read();
      expect(findedCar).to.be.deep.equal(allCars)
  })
});

});

describe('Car sevices', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
before(async () => {
  sinon.stub(carModel, 'delete').resolves(carMock);
});

after(()=>{
  sinon.restore();
})

describe('delete a cars', () => {
  it('Sucesso', async () => {
      const deletedCar = await carService.delete("4edd40c86762e0fb12000003");
      expect(deletedCar).to.be.deep.equal(deleteMock)
  })
});
});