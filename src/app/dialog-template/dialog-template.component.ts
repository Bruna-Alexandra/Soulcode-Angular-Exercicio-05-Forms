import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.css']
})
export class DialogTemplateComponent implements OnInit {
  nome: string = ''
  sobrenome: string = ''
  usuario: string = ''
  senha1: string = ''
  senha2: string = ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''

  constructor() { }
  

  ngOnInit(): void {
  }

}
