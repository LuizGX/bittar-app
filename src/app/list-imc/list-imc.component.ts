import { Component, OnInit } from '@angular/core';
import { ImcService } from '../imc.service';
import { Imc } from '../shared/imc.model';

@Component({
  selector: 'app-list-imc',
  templateUrl: './list-imc.component.html',
  styleUrls: ['./list-imc.component.css'],
  providers: [ImcService]
})
export class ListImcComponent implements OnInit {

  public data: Imc[];

  constructor(
    private ImcService: ImcService
  ) { }

  ngOnInit(): void {
    this.ImcService.getAllImc().then(val => {
      this.data = val;
    });
  }

}
