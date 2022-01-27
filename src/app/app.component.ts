import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'daniel';
  age = 18;
  img= 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Daniel',
    age: 25,
    img: 'https://source.unsplash.com/random',
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  names: string[] = ['Luffy', 'Zoro', 'Nami']
  newNames = ''

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age ++
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
  addName() {
    this.names.push(this.newNames);
    this.newNames = '';
  }
  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
