import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public form : FormGroup;
  public erreur : boolean = true;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login : new FormControl('',Validators.compose([Validators.required])),
      pwd :  new FormControl('', Validators.compose([]))
    })
  }
}
