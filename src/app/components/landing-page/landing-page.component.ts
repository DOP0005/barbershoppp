import { Component, ViewChild, ElementRef } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  images = [
    {id:1, url: 'assets/img/image00001.jpeg', alt: 'Image 1'},
    {id:2, url: 'assets/img/image00002.jpeg', alt: 'Image 2'},
    {id:3, url: 'assets/img/image00003.jpeg', alt: 'Image 3'},
    {id:4, url: 'assets/img/image00004.jpeg', alt: 'Image 4'},
    {id:5, url: 'assets/img/image00005.jpeg', alt: 'Image 5'},
    {id:6, url: 'assets/img/image00006.jpeg', alt: 'Image 6'},
    {id:13, url: 'assets/img/image00013.jpeg', alt: 'Image 13'},
    {id:14, url: 'assets/img/image00014.jpeg', alt: 'Image 14'},
    {id:15, url: 'assets/img/image00015.jpeg', alt: 'Image 15'},
    {id:16, url: 'assets/img/image00016.jpeg', alt: 'Image 16'},
    {id:17, url: 'assets/img/image00017.jpeg', alt: 'Image 17'},
    {id:18, url: 'assets/img/image00018.jpeg', alt: 'Image 18'},
    {id:19, url: 'assets/img/image00019.jpeg', alt: 'Image 19'},
    {id:20, url: 'assets/img/image00020.jpeg', alt: 'Image 20'},
    {id:21, url: 'assets/img/image00021.jpeg', alt: 'Image 21'},
    {id:22, url: 'assets/img/image00022.jpeg', alt: 'Image 22'},
  ];

  currentIndex: number = 0; // Índice de la primera imagen que se muestra

  get displayedImages() {
    // Devuelve un array de las imágenes que se deben mostrar según el índice actual
    return this.images.slice(this.currentIndex, this.currentIndex + 6);
  }

  moveLeft() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 6 : 0; // Mueve a la izquierda
  }

  moveRight() {
    this.currentIndex = (this.currentIndex < this.images.length - 6) ? this.currentIndex + 6 : this.images.length - 6; // Mueve a la derecha
  }

}
