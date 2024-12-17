import {Component, OnInit} from '@angular/core';
import {TableComponent} from '../../../../shared/components/table/table.component';
import {Product, productHeaders} from '../../../../core/models/product/product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'product-list',
  imports: [
    TableComponent
  ],
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  implements OnInit {
  constructor(public productService: ProductService) {}

  products: Product[] =[];

  ngOnInit() {
    this.productService.GetAllProducts().subscribe({
      next: (response) => {
        this.products = this.productService.mapResponseToProducts(response);
        this.addActions();
      },
      error: (err) => {
        console.error("Error fetching users:", err);
        return [];
      }
    });
  }

  deleteProduct = (id: number) => {
    // THERE IS NO API
  }

  addActions = () => {
    this.products = this.products.map(product => ({
      ...product,
      actions:['Edit', 'Delete']
    }));
  }
  protected readonly productHeaders = productHeaders;
}
