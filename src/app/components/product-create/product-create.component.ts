import { Component , OnInit , NgModule } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product : Products = {
    _id : '',
    name :'',
    price : 0 ,
    quantity : 0 ,
    description : ''
  };

  submitted = false ;

  constructor(private productService : ProductService){}

  ngOnInit(): void {
  }

  saveProducts() : void {
    const data = {
      name : this.product.name,
      price : this.product.price,
      quantity : this.product.quantity,
      description : this.product.description
    }

    // const { data } = this.product;

    this.productService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error : (e) => console.log(e)      
    })
  }

  newProduct() : void {
    this.submitted = false;
    this.product = {
      _id : '',
      name :'',
      price : 0 ,
      quantity : 0 ,
      description : ''
    };
  }

}
