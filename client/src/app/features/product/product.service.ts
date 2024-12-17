import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../core/models/product/product.model';
import {environment} from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient ) { }

  private productData: any;

  setProductData = (data: Product) => {
    this.productData = data;
  }

  getProductData = () => {
    return this.productData;
  }

  GetAllProducts = () => {
    const token = localStorage.getItem('authToken');
    return this.http.get(`${environment.apiBaseUrl}products`,
      { headers: { authorization: token! }, responseType: "json" })
  }

  EditProduct = (product: Product) => {
    const body = {
      id: this.productData.id,
      code: product.code || this.productData.code,
      name: product.name || this.productData.name,
      weight: product.weight || this.productData.weight,
    }
    const token = localStorage.getItem('authToken');
    return this.http.put(`${environment.apiBaseUrl}products`, body,
      { headers: {authorization: token!},responseType: "text" })
      .subscribe({
        error: (err) => {
          console.error("Error editing user:", err);
        }
      });
  }

  AddProduct = (product: Product) => {
    const token = localStorage.getItem('authToken');
    return this.http.post(`${environment.apiBaseUrl}products`, product, { headers: {authorization: token!}, responseType: "json" })
      .subscribe({
        error: (err) => {
          console.error(err);
        }
      });
  }

  mapResponseToProducts(response: any): Product[] {
    return Object.entries(response).map(([id, product]: [string, any]) => {
      return {
        id: +id,
        code: product.code || '',
        name: product.name || '',
        weight: +product.weight || 0,
      };
    });
  }


}
