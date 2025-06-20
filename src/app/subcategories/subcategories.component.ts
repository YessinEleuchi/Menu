import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories } from '../data/category-data';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  subcategories: any[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category')!;
    const category = categories.find(cat => cat.name === this.categoryName);
    this.subcategories = category?.sub || [];
  }

  goToItem(subcategory: string) {
    this.router.navigate(['/items', this.categoryName, subcategory]);
  }
}