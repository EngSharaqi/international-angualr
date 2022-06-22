import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor() { }
  products = [
    {
      name: 'Product name',
      description: 'product description will be added here and this is just for testig and you can replace it',
      img: '../../assets/images/I.jpg'
  },
  {
    name: 'Orange',
    description: 'product description will be added here and this is just for testig and you can replace it',
    img: '../../assets/images/II.jpg'
},
{
  name: 'Product Name',
  description: 'product description will be added here and this is just for testig and you can replace it',
  img: '../../assets/images/III.jpg'
},
{
  name: 'Product Name',
  description: 'product description will be added here and this is just for testig and you can replace it',
  img: '../../assets/images/IIII.jpg'
},
{
  name: 'Product Name',
  description: 'product description will be added here and this is just for testig and you can replace it',
  img: '../../assets/images/IV.jpg'
},
{
name: 'Product Name',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/V.jpg'
},
{
  name: 'Product name',
  description: 'product description will be added here and this is just for testig and you can replace it',
  img: '../../assets/images/I.jpg'
},
{
name: 'Orange',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/II.jpg'
},
{
name: 'Product Name',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/III.jpg'
},
{
name: 'Product Name',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/IIII.jpg'
},
{
name: 'Product Name',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/IV.jpg'
},
{
name: 'Product Name',
description: 'product description will be added here and this is just for testig and you can replace it',
img: '../../assets/images/V.jpg'
},
  ];
}
