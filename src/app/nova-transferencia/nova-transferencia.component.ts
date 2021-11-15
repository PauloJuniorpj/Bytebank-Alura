import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector:'app-nova-transferencia',
  templateUrl:'./nova-transferencia.html',
  styleUrls: ['./nova-transferencia.component.scss']
})



export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    console.log('Solicitada nova transferencia')

    //Recebe os Valores
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    // printo os valores na tela é
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)

      //Limpa os campos
      this.limparCampos();

      this.router.navigateByUrl('extrato')

    }, error => console.error("[ERRO] nao foi encontrado valores")
    )

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }


}
