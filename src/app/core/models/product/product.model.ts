export interface Product{
  code:number;
  name:string;
  weight:number;
}

export const productFormTemplate: any[] = [
  { key: 'code', label: 'product Code', type: 'text',
    validations: { required: true, noWhitespace: true , noSymbol: true}, },
  { key: 'name', label: 'Product Name', type: 'text',
    validations: { required: true , noSymbol: true}, },
  { key: 'weight', label: 'Product Weight', type: 'number',
    validations: { required: true, positiveNumber: true, errorMessage: 'National Code is not valid' } },
];

export const productHeaders :string[] = [
  'id',
  'code',
  'name',
  'weight',
  'actions',
];
