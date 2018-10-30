import { Component, OnInit } from '@angular/core';
import { HumedalesService } from '../humedales.service';

@Component({
  selector: 'app-humedales',
  templateUrl: './humedales.component.html',
  styleUrls: ['./humedales.component.css']
})
export class HumedalesComponent implements OnInit {

	humedal:Array<any>;

  constructor(private humedales:HumedalesService) {
  	this.humedal=[{id:"",nombre:"",localidad:"",hectareas:""}];
  }

  ngOnInit() {
  	this.humedales.traerHumedales().subscribe(respuesta=>{
  		this.humedal=respuesta;
  	},error=>{
  		alert('No se ha podido ver los humedales');
  	})
  }

  eliminar_Humedal(id){
  	let confirmacion= confirm('Estas seguro');
	  if(confirmacion){
		this.humedales.eliminarHumedal(id).subscribe(respuestaEliminar=>{
		  alert('Humedal Eliminado')
		  this.humedales.traerHumedales().subscribe(respuesta=>{
			this.humedal=respuestaEliminar;
		  },error=>{
			alert('No se han podido traer los Humedales');
		  });
		},errorEliminar=>{
		  alert("No se ha podido eliminar el Humedal")
	  });
	}
  }
}
