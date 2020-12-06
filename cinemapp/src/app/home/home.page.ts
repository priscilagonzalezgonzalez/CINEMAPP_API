import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../api/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  peliculas = []/*
    {
      titulo: "Matrix",
      anio: 1989,
      director: "The Wachosky", 
      imagen: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg"
    
    },
    {
      titulo: "28 Days Later",
      anio: 2003,
      director: "Danny Boyle", 
      imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/28_days_later.jpg/220px-28_days_later.jpg"
    
    }
  ];*/

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {
      this.peliculas = peliculas;
    });
    this.peliculasService.getPeliculas();

  }

}
