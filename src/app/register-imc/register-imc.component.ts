import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ImcService } from '../imc.service';

@Component({
  selector: 'app-register-imc',
  templateUrl: './register-imc.component.html',
  styleUrls: ['./register-imc.component.css'],
  providers: [ImcService]
})
export class RegisterImcComponent implements OnInit {

  public imcForm: FormGroup;
  public result: Promise<String>;

  constructor(
    private imcService: ImcService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.imcForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'cpf': ['', Validators.required],
      'height': ['', Validators.required],
      'weight': ['', Validators.required]
    });
  }

  saveIMC() {
    this.imcService.newImc(this.imcForm.value).then(val => {
      this.result = val;
    });
    this.imcForm.reset();
  }

}
