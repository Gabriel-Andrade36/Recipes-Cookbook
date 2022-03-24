import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Bolo',
      'Um bolo',
      'https://t1.rg.ltmcdn.com/pt/posts/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg'
    ),
    new Recipe(
      'Outro Bolo',
      'Um outro bolo',
      'https://t2.rg.ltmcdn.com/pt/posts/0/7/7/bolo_de_chocolate_simples_e_fofo_4770_orig.jpg'
    ),
    new Recipe(
      'Pão',
      'Um pão',
      'https://fermais.com.br/site20/wp-content/uploads/2019/09/melhor-pao-frances-dicas-scaled.jpg'
    ),
    new Recipe(
      'Outro Pão',
      'Um outro pão',
      'https://naminhapanela.com/wp-content/uploads/2020/07/P%C3%83O-FRANC%C3%8AS-3.jpg'
    ),

  ];

  constructor() {}

  ngOnInit(): void {}
}
