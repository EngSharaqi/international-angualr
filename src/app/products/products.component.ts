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
      name: 'Product Name',
      description: 'bla bla bla',
      img: '../../assets/images/I.jpg'
  },
  {
    name: 'Product Name',
    description: 'bla bla bla',
    img: '../../assets/images/II.jpg'
},
{
  name: 'Product Name',
  description: 'bla bla bla',
  img: '../../assets/images/III.jpg'
},
{
  name: 'Product Name',
  description: 'bla bla bla',
  img: '../../assets/images/IIII.jpg'
},
{
  name: 'Product Name',
  description: 'bla bla bla',
  img: '../../assets/images/I.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/II.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/III.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/IIII.jpg'
},
{
  name: 'Product Name',
  description: 'bla bla bla',
  img: '../../assets/images/I.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/II.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/III.jpg'
},
{
name: 'Product Name',
description: 'bla bla bla',
img: '../../assets/images/IIII.jpg'
},
  ];
}
