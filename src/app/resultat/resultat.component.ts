import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit {

  public ValidImg : string = "../../assets/images/images/resultat/username-valide-web.svg";
  public StepBars : any[] = [
    {step : "Remboursement", date : "JJ/MM/aA", level: "step"},
    {step : "Decision", date : "JJ/MM/aA", level: "step"},
    {step : "votre demande est en cours d’examen", date : "05 Mars 2021", level: "step completed"},
    {step : "votre demande a été soumise", date : "01 Mars 2021", level: "step completed"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
