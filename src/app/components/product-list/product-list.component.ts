import { Component , OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{

  products? : Products[];
  currentProduct : Products  = {};
  currentIndex = 1 ;
  id = '';
  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

 getProducts() : void {
  this.productService.getAll().subscribe({
    next : (data) => {
      this.products = data;
      console.log(data);
    },
    error : (e) => console.log(e)
  })
 }

 refereshList() : void {
  this.getProducts();
  this.currentIndex = -1;
  this.currentProduct = {};
 }

 setActiveProduct(product : Products , index : number) :void {
  this.currentIndex = index;
  this.currentProduct = product;  
 }

 removeProduct(id:any) : void {
  this.productService.delete(id).subscribe({
    next : (data)  => {
      console.log(data);      
      if(data) 
        this.getProducts();
    },error : (e) => console.log(e)    
  })
 }

 updateProduct(id:any) : void {
  //  this.currentProduct._id = this.products?.find(x => x._id === id);
   console.log('Update : ' + this.currentProduct.name);
   
 }

}
