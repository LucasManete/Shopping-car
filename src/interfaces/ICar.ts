import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

const carSchema = vehicleSchema.extend({
  doorsQty: z.number({}).min(2, { message: 'Deve ser maior ou igual a 2' })
    .max(4, { message: 'Deve ser menor ou igual a 4' }),
  seatsQty: z.number({}).min(2, { message: 'Deve ser maior ou igual a 2' })
    .max(7, { message: 'Deve ser menor ou igual a 7' }),
});

type ICar = z.infer<typeof carSchema>;

export { ICar, carSchema };
