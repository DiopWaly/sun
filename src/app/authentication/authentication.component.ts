import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public form : FormGroup;
  public erreur : boolean = true;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login : new FormControl('',Validators.compose([Validators.required])),
      pwd :  new FormControl('', Validators.compose([]))
    })
  }
  IsAuthenticated(){
    if(this.form.value['login'] == 'a'){
      console.log(this.form.value['login']);
      localStorage.setItem('isConnected','true');
      this.router.navigate(['accueil']);
    }else{
      this.erreur = false;
    }
  }

}
