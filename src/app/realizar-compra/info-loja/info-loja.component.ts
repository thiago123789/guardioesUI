import { Component, OnInit } from '@angular/core';
import { Loja } from 'app/shared/model/loja.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-loja',
  templateUrl: './info-loja.component.html',
  styleUrls: ['./info-loja.component.scss']
})
export class InfoLojaComponent implements OnInit {

  loja: Loja;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loja = <Loja>this.activeRoute.snapshot.queryParams;
    

  }

}
