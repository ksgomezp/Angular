import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })


  get emailErrorMsg(): string{

    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'Email es obligatorio'
    }else if(errors?.['pattern']){
      return 'Email no tiene formato de correo'
    }else if(errors?.['emailTomado']){
      return 'El email no esta disponible'
    }

    return ''
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Kevyn Gomez',
      email: 'test1@test.com',
      username: 'kevyngomezzz',
      password: '123456',
      password2: '123456'
    })
  }

  campoNovalido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
