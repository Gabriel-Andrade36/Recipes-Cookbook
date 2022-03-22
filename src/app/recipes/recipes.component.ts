import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Bolo","Um bolo","https://t1.rg.ltmcdn.com/pt/posts/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg"),
    new Recipe("Outro Bolo","Outro bolo","https://t2.rg.ltmcdn.com/pt/posts/0/7/7/bolo_de_chocolate_simples_e_fofo_4770_orig.jpg")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
