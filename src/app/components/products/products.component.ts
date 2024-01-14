import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: Boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    ProductImageUrl: '',
  };
  categoryList: any[]= [];
  productsList: any[]= [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
      this.getAllCategory();
  }

  getAllCategory(){
    this.productService.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }

  getAllProducts(){
    this.productService.getAllProduct().subscribe((res: any) => {
      this.productsList = res.data;
    })
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }

  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res: any) => {
      if (res.result){
        alert("Product Created");
        this.getAllProducts();
      } else {
        alert(res.message);
      }
    });
  }
}
