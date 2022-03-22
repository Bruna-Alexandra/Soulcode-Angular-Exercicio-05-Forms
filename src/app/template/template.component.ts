import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  mostrar: boolean = false
  senhasDesiguais: boolean = true
  botaoSwitcher: boolean = false

  nome: string = ''
  sobrenome: string = ''
  usuario: string = ''
  senha1: string = ''
  senha2: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''

  changes(): void {

    if (this.senha1 == this.senha2){
      this.senhasDesiguais = false
    }else{
      this.senhasDesiguais = true

    }
    if (this.senhasDesiguais == true){
    }/* else if (this.Dados.invalid == true){
      this.botaoSwitcher = false
    }    */ 
    else{
      this.botaoSwitcher = true
    }
    console.log('botão ' + this.botaoSwitcher)
  }


/*   -------------------------------------------------- */
constructor(
  private snack: MatSnackBar,
  ){}

  enviar(): void {
    console.log('cadastrado')

    this.snack.open('Você foi cadastrado', 'Ok', {duration: 3000})
 }
}

