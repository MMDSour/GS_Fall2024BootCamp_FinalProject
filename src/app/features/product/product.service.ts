import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../core/models/product/product.model';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient ) { }

  private productData: any;

  setUserData = (data: Product) => {
    this.productData = data;
  }

  getUserData = () => {
    return this.productData;
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
}
