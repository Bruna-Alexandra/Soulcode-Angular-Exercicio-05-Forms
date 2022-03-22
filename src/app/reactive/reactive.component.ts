import { Component, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  mostrarDialog: boolean = false
  senhasDesiguais: boolean = false
  botaoLigado: boolean = false

  changes(): void {
    console.log('senha1: '+ this.Dados.controls['senha1'].value)
    console.log('senha2: '+ this.Dados.controls['senha2'].value)

    if (this.Dados.controls['senha1'].value === this.Dados.controls['senha2'].value){
      this.senhasDesiguais = false
    }else{
      this.senhasDesiguais = true

    }
    if (this.senhasDesiguais == true){
      this.botaoLigado = false
    } else if (this.Dados.invalid == true){
      this.botaoLigado = false
    }    
    else{
      this.botaoLigado = true
    }
    console.log('senha desigual: '+ this.senhasDesiguais)
    /* console.log('botão ' + this.botaoLigado) */
  }

  Dados: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    usuario: new FormControl(''),
    senha1: new FormControl('', [Validators.required, Validators.minLength(8)]),
    senha2: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
    complemento: new FormControl('')
  })

  /*   -------------------------------------------------- */
  constructor(
    private snack: MatSnackBar,
  ) { }

  enviar(): void {
    console.log('cadastrado')
    console.log(`Name: ${this.Dados.controls['nome'].value}`)
    console.log(`Name: ${this.Dados.controls['sobrenome'].value}`)
    console.log(`Dados: ${this.Dados.controls}`)
    this.snack.open('Você foi cadastrado', 'Ok', { duration: 3000 })
    this.mostrarDialog = true
  }
}