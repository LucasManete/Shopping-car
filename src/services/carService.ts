import IService from '../interfaces/IService';
import { ICar, carSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../catalogErros/erros';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = carSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(obj);
  }

  public async read():Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error(ErrorTypes.EntityNotFound);
    return cars;
  }
}

export default CarService;