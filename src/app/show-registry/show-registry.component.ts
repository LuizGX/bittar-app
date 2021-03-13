import { Component, OnInit } from '@angular/core';
import { ImcService } from '../imc.service';
import { Imc } from '../shared/imc.model';

@Component({
  selector: 'app-show-registry',
  templateUrl: './show-registry.component.html',
  styleUrls: ['./show-registry.component.css'],
  providers: [ImcService]
})
export class ShowRegistryComponent implements OnInit {

  public cpf: String;
  public data: Imc[];

  constructor(
    private ImcService: ImcService
  ) {

  }

  ngOnInit(): void {

  }

  findCalculationsByCpf() {
    this.ImcService.getImcByCpf(this.cpf).then(val => {
      this.data = val;
    });
  }

}
