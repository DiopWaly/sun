import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.scss']
})
export class DossierComponent implements OnInit {

  public consult:boolean = true;
  public aFormGroup: FormGroup;
  //key of recapchat
  public siteKey: string = "6LdVHNAaAAAAAJr8SciUZPcjOI7FyD0ynOZv2ztl";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  soumettre(){
    this.consult = false;
    console.log(this.aFormGroup.pristine);
  }

}
