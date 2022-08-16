import { z } from 'zod';

const vehicleSchema = z.object({
  model: z.string({
    invalid_type_error: 'Deve ser uma String',
  }).min(3, { message: 'Deve ter no minimo 3 caracteres' }),

  year: z.number({
    invalid_type_error: 'Deve ser um numero',
  }).min(1900, { message: 'Deve ser maior ou igual a 1900' })
    .max(2022, { message: 'Deve ser menor ou igual a 2022' }),

  color: z.string({
    invalid_type_error: 'Cor principal do veículo',
  }).min(3, { message: 'Deve ter no minimo 3 caracteres' }),

  status: z.boolean().optional(),

  buyValue: z.number({
    invalid_type_error: 'Deve ser um numero',
  }),

});

type IVehicle = z.infer<typeof vehicleSchema>;

export { IVehicle, vehicleSchema };