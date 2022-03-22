import { DialogReactiveComponent } from './../dialog-reactive/dialog-reactive.component';
import { Component, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
/*   mostrarDialog: boolean = false */
  senhasDesiguais: boolean = false
  botaoLigado: boolean = false

  changes(): void {
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
  }

  Dados: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    usuario: new FormControl(''),
    senha1: new FormControl('', [Validators.required, Validators.minLength(8)]),
    senha2: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    telefone: new FormControl('', [Validators.maxLength(12)]),
    endereco: new FormControl('', [Validators.maxLength(50)]),
    complemento: new FormControl('', [Validators.maxLength(20)])
  })

  /*   -------------------------------------------------- */
  constructor(
    private dialog: MatDialog
  ) {}

  mostrarDialog(): void {
    let ref = this.dialog.open(
      DialogReactiveComponent
    )
    ref.componentInstance.nome = this.Dados.controls['nome'].value
    ref.componentInstance.sobrenome = this.Dados.controls['sobrenome'].value
    ref.componentInstance.usuario = this.Dados.controls['usuario'].value
    ref.componentInstance.senha1 = this.Dados.controls['senha1'].value
    ref.componentInstance.senha2 = this.Dados.controls['senha1'].value
    ref.componentInstance.cpf = this.Dados.controls['cpf'].value
    ref.componentInstance.telefone = this.Dados.controls['telefone'].value
    ref.componentInstance.endereco = this.Dados.controls['endereco'].value
    ref.componentInstance.complemento = this.Dados.controls['complemento'].value

    this.Dados.reset()
  }


}