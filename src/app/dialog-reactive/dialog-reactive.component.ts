import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-reactive',
  templateUrl: './dialog-reactive.component.html',
  styleUrls: ['./dialog-reactive.component.css']
})
export class DialogReactiveComponent implements OnInit {
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
