import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProudctDetailsComponent } from './components/proudct-details/proudct-details.component';

const routes: Routes = [
  { path : ' ',redirectTo : 'products' ,pathMatch :'full'  },
  {path : 'products' , component :ProductListComponent },
  {path : 'add' , component : ProductCreateComponent},
  { path: 'product/:id', component: ProudctDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
