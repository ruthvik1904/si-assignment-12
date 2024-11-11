import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true, // This marks the field as the primary key
    generated: true, // Automatically generate the ID
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data); // Make sure to call the super constructor
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
