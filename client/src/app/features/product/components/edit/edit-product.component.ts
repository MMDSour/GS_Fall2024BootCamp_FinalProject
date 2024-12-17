import { Component } from '@angular/core';
import {ProductService} from '../../product.service';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {productFormTemplate} from '../../../../core/models/product/product.model';

@Component({
  selector: 'edit-product',
  imports: [
    FormComponent
  ],
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  constructor(private productService: ProductService) {}

  editUser = (e: any) => {
    this.productService.EditProduct(e);
  }
  protected readonly productTemplate = productFormTemplate;
}
