import { Component } from '@angular/core';
import {ProductService} from '../../product.service';
import {productAddFormTemplate} from '../../../../core/models/product/product.model';
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
  protected readonly productTemplate = productAddFormTemplate;

  constructor(private productService: ProductService) {}

  addProduct = (e: any) => {
    this.productService.AddProduct(e);
  }
}
