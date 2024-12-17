import { Component } from '@angular/core';
import {ProductService} from '../../product.service';
import {productFormTemplate} from '../../../../core/models/product/product.model';
import {FormComponent} from '../../../../shared/components/form/form.component';

@Component({
  selector: 'add-product',
  imports: [
    FormComponent
  ],
  standalone: true,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  protected readonly productTemplate = productFormTemplate;

  constructor(private productService: ProductService) {}

  addProduct = (e: any) => {
    this.productService.AddProduct(e);
  }
}
