import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  nuevoJuego : JuegoAnagrama;
  ocultarVerificar: boolean = false;
  mostrarResultado : boolean = false;
  Mensajes : string ;
  contadorResult : number;
  constructor() {
    this.nuevoJuego = new JuegoAnagrama();
   }

  ngOnInit() {
  }

  verificar() {
    this.contadorResult++;
    if(this.nuevoJuego.verificar()) {
      //this.nuevoJuego = new JuegoAnagrama();
      this.mostrarResultado = true;
      this.MostarMensaje('Ganaste!', true);
    } else if (this.contadorResult > 5) {
      this.mostrarResultado = true;
      this.nuevoJuego.gano = false;
    }
  }

  generarAnagrama() {
    this.contadorResult = 0;
    this.mostrarResultado = false;
    this.nuevoJuego.nuevo();
    this.ocultarVerificar = false;
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  



}
