import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../data/category-data';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = categories;

  constructor(private router: Router) {}

  goToSub(category: string) {
    this.router.navigate(['/subcategories', category]);
  }
}
