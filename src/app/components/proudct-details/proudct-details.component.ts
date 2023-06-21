import { Component , INJECTOR, Input , OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';

@Component({
  selector: 'app-proudct-details',
  templateUrl: './proudct-details.component.html',
  styleUrls: ['./proudct-details.component.css']
})
export class ProudctDetailsComponent implements OnInit , OnChanges {

  @Input() viewModel = false;

  @Input() currentProduct : Products = {
    _id : '',
    name : '',
    price : 0,
    quantity : 0 ,
    description : ''
  }

  message = ''; 

  constructor(
    private productService : ProductService ,
    private route : ActivatedRoute ,
    private router : Router
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.viewModel){
      this.message = '' ; 
    }
    console.log('This Product ' + this.currentProduct.name);
    console.log('This viewModel ' +  this.viewModel);    
  }

  ngOnInit(): void {
    if(!this.viewModel){
      this.message = '' ; 
    }
    console.log('This Product ' + this.currentProduct.name);
    console.log('This viewModel ' +  this.viewModel);    
  }

  updateProduct() : void {
    this.message = '' ; 
    this.productService.update(this.currentProduct)
    .subscribe({
      next : (res) => {
        console.log(res);
        this.message = res.message ? res.message : "Successfully Updated";
        this.currentProduct = {};
      },
      error : (e) => console.log(e)      
    })
  }

  closeProduct()  : void {
    this.currentProduct = {};
  }

}
