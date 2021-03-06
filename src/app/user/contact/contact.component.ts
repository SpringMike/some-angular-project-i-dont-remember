import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  messageForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    $('.hero__categories__all').on('click', function () {
      $('.hero__categories ul').slideToggle(400);
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategoryStatusTrue().subscribe(listCategory => {
      this.listCategory = listCategory;
    })
  }

  search() {
    const address = this.searchForm.value.name;
    this.router.navigate(['../houses'], {queryParams: {address: address}});
  }
}
