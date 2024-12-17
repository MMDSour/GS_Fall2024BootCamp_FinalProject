import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../core/models/product/product.model';

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
    return this.http.get("http://localhost:3000/api/products",
      { headers: { authorization: token! }, responseType: "json" })
  }

  AddProduct = (product: Product) => {
    const token = localStorage.getItem('authToken');
    return this.http.post("http://localhost:3000/api/products", product, { headers: {authorization: token!}, responseType: "json" })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
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
