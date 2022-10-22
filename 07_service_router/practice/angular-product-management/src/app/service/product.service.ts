import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {id: 1, name: 'IPhone 12', price: 2400000, description: 'New'},
    {id: 2, name: 'IPhone 11', price: 1560000, description: 'Like new'},
    {id: 3, name: 'IPhone X', price: 968000, description: '97%'},
    {id: 4, name: 'IPhone 8', price: 7540000, description: '98%'},
    {id: 5, name: 'IPhone 13 Pro', price: 2895000, description: 'Ok'},
    {id: 6, name: 'IPhone 3', price: 5895000, description: 'Good'},
    {id: 7, name: 'IPhone 14', price: 6895000, description: '0%'},
    {id: 8, name: 'IPhone 15', price: 7895000, description: 'Bad'},
    {id: 9, name: 'IPhone 16', price: 2895000, description: '???'},
    {id: 10, name: 'IPhone 17', price: 4895000, description: 'Ok'},
  ];

  constructor() {
  }

  findAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  findById(productId: number) {
    return this.products.find(product => product.id === productId);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
        break;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
