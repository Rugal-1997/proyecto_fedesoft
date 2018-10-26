import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HumedalesService {

	url:string;
	encabezados:any;

  constructor(private http:HttpClient) {
  	this.url="https://api-humedal.herokuapp.com/humedals";
  	this.encabezados={ headers: new HttpHeaders({
  		'Content-Type': 'Application/json',
  		'Authorization': 'Bearer '+localStorage.getItem('sessionToken')})
  	}
  }

  traerHumedales():Observable<any>{
	return this.http.get<any>(this.url,this.encabezados);
	}

  mostrarHumedal(id:string):Observable<any>{
	return this.http.get<any>(this.url+'/'+id,this.encabezados);
	}

  crearHumedal(humedal:string):Observable<any>{
	return this.http.post<any>(this.url,humedal,this.encabezados);
	}

  editarHumedal(humedal:string):Observable<any>{
	return this.http.put<any>(this.url+'/'+humedal.id,humedal,this.encabezados);
	}

  eliminarHumedal(id:string){
	this.http.delete<any>(this.url+'/'+id,this.encabezados);
	}
}
