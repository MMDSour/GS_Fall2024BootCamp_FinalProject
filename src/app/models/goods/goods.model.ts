import {FormControl} from '@angular/forms';

export interface goodsForm{
  id: FormControl <number>;
  name: FormControl <string>;
  weight: FormControl <number>;
}

export interface Goods{
  id:number;
  name:string;
  weight:string;
}

export const goodsHeaders :string[] = [
  'id',
  'name',
  'weight',
];
