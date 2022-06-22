import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  height = "height:" + (window.innerHeight - 100) + "px";

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
}
  ]
  
  about = {
    main: { 
      title: 'ABOUT US',
      body: 'Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla'
    },
    img: {
      _1: '../../assets/images/a.jpg',
      _2: '../../assets/images/d.jpg',
      _3: '../../assets/images/e.jpg'
    },
    txt: {
      _1: {
        title: 'Card title',
        description: 'This card has supporting text below as a natural lead-in to additional content.'
      },
      _2: {
        title: 'Card title',
        description: 'This card has supporting text below as a natural lead-in to additional content.'
      },
      _3: {
        title: 'Card title',
        description: 'This card has supporting text below as a natural lead-in to additional content.'
      },
    },
    imgWithTxt: {
      _1: {
        title: 'Card title',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        img: '../../assets/images/b.jpg',
      },
      _2: {
        title: 'Card title',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        img: '../../assets/images/c.jpg',
      },
      _3: {
        title: 'Card title',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        img: '../../assets/images/g.jpg',
      }
    }
   }
}
