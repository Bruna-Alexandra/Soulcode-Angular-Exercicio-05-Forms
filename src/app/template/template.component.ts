import { DialogTemplateComponent } from './../dialog-template/dialog-template.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  senhasDesiguais: boolean = false
  botaoLigado: boolean = false

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

    if (this.senha1 === this.senha2){
      this.senhasDesiguais = false
    }else{
      this.senhasDesiguais = true

    }
    if (this.senhasDesiguais == true){
      this.botaoLigado = false
    }
    else{
      this.botaoLigado = true
    }
    console.log('senha desigual: '+ this.senhasDesiguais)
  }

/*   -------------------------------------------------- */
constructor(
  private dialog: MatDialog
  ){}

  mostrarDialog(): void {
    let dialogT = this.dialog.open(
      DialogTemplateComponent
    )
    dialogT.componentInstance.nome = this.nome
    dialogT.componentInstance.sobrenome = this.sobrenome
    dialogT.componentInstance.usuario = this.usuario
    dialogT.componentInstance.senha1 = this.senha1
    dialogT.componentInstance.senha2 = this.senha1
    dialogT.componentInstance.cpf = this.cpf
    dialogT.componentInstance.telefone = this.telefone
    dialogT.componentInstance.endereco = this.endereco
    dialogT.componentInstance.complemento = this.complemento
  }

}

