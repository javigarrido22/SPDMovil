import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  //url de ejemplo
  apiURL = 'https://uber.matiivilla.cl/inicio';

  p_id: string='142';
  token:string='eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamF2aWVyYW1vcmFsZXMyMjA5OTgiLCJhdWQiOiJqYXZpZXJhbW9yYWxlczIyMDk5OCIsImF1dGhfdGltZSI6MTczMDU4NjA4NiwidXNlcl9pZCI6InhvTkUwR05FOXBVYXJPSE9vc1JINGN1SjZMNDIiLCJzdWIiOiJ4b05FMEdORTlwVWFyT0hPb3NSSDRjdUo2TDQyIiwiaWF0IjoxNzMwNTg2MDg2LCJleHAiOjE3MzA1ODk2ODYsImVtYWlsIjoiamF2aTE5OTgyMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF2aTE5OTgyMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SHyCHmGSR9BjF2kla_xV-Amf9OpNlMFQHQFqfYGgrUBDjeMGGcstSwa7EJVll33CXNSsrm5LDth39O9E7_J205obNk8GGj5p4rEIk_TIs_9ylQ719YYFq_BhMnsonpqjw-z5upyYqEmRGBcBwciu1zxv7LBgdtjP0UEvv1wkHi1SrXxRaWHXXNE5ZsBJADgKo9_9te71L9qNalDMwXPg1QWDkFiRX1hxpdUOT1koxIy0Gj6WdSndS2oZlzmi_k5ckVmq5oxJk5gq6H8oDC1OvSF5tHt8gZTt_2UuUKgFJb-DNXqHj1znGVyKNi2PfbaJsuA11kDuwAp2eB3NNYczJg';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(retry(3));
  }

  getPost(id: any): Observable<any> {
    return this.http.get(this.apiURL + '/posts/' + id).pipe(retry(3));
  }

  createPost(post: any): Observable<any> {
    return this.http
      .post(this.apiURL + '/posts/', post, this.httpOptions)
      .pipe(retry(3));
  }

  updatePost(id: any, post: any): Observable<any> {
    return this.http
      .put(this.apiURL + '/posts/' + id, post, this.httpOptions)
      .pipe(retry(3));
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }

  async agregarUsuario(data: bodyUser, imageFile: File) {
    try {
      const formData = new FormData();
      formData.append('p_nombre', data.p_nombre);
      formData.append('p_correo_electronico', data.p_correo_electronico);
      formData.append('p_telefono', data.p_telefono);
      if (data.token) {
        formData.append('token', data.token);
      }
      if (imageFile) {
        formData.append('image_usuario', imageFile, imageFile.name);
      }
      const response = await lastValueFrom(
        this.http.post<any>(environment.apiUrl + 'user/agregar', formData)
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async agregarVehiculo(data: bodyVehiculo, imageFile: File) {
    try {
      const formData = new FormData();
      formData.append('p_id_usuario', data.p_id_usuario.toString());
      formData.append('p_patente', data.p_patente);
      formData.append('p_marca', data.p_marca);
      formData.append('p_modelo', data.p_modelo);
      formData.append('p_anio', data.p_anio.toString());
      formData.append('p_color', data.p_color);
      formData.append('p_tipo_combustible', data.p_tipo_combustible);
      if (data.token) {
        formData.append('token', data.token);
      }
      if (imageFile) {
        formData.append('image', imageFile, imageFile.name);
      }
      const response = await lastValueFrom(
        this.http.post<any>(environment.apiUrl + 'vehiculo/agregar', formData)
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async agregarViaje(data:bodyViaje){
    try {
      const formData = new FormData ();
      formData.append('p_id_usuario', data.p_id_usuario.toString());
      formData.append('p_ubicacion_origen', data.p_ubicacion_origen);
      formData.append('p_ubicacion_destino', data.p_ubicacion_destino);
      formData.append('p_costo', data.p_costo.toString());
      formData.append('p_id_vehiculo', data.p_id_vehiculo.toString());
      if (data.token){
        formData.append('token', data.token);
      }
      const response = await lastValueFrom(
        this.http.post<any>(environment.apiUrl + 'viaje/agregar', formData)
      );
      return response;
    }catch (error) {
      throw error;
    }
  }

  async obtenerViaje(){
    try{
      const params = {
        p_id_usuario: 142,
        token:'eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamF2aWVyYW1vcmFsZXMyMjA5OTgiLCJhdWQiOiJqYXZpZXJhbW9yYWxlczIyMDk5OCIsImF1dGhfdGltZSI6MTczMDU4NjA4NiwidXNlcl9pZCI6InhvTkUwR05FOXBVYXJPSE9vc1JINGN1SjZMNDIiLCJzdWIiOiJ4b05FMEdORTlwVWFyT0hPb3NSSDRjdUo2TDQyIiwiaWF0IjoxNzMwNTg2MDg2LCJleHAiOjE3MzA1ODk2ODYsImVtYWlsIjoiamF2aTE5OTgyMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF2aTE5OTgyMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SHyCHmGSR9BjF2kla_xV-Amf9OpNlMFQHQFqfYGgrUBDjeMGGcstSwa7EJVll33CXNSsrm5LDth39O9E7_J205obNk8GGj5p4rEIk_TIs_9ylQ719YYFq_BhMnsonpqjw-z5upyYqEmRGBcBwciu1zxv7LBgdtjP0UEvv1wkHi1SrXxRaWHXXNE5ZsBJADgKo9_9te71L9qNalDMwXPg1QWDkFiRX1hxpdUOT1koxIy0Gj6WdSndS2oZlzmi_k5ckVmq5oxJk5gq6H8oDC1OvSF5tHt8gZTt_2UuUKgFJb-DNXqHj1znGVyKNi2PfbaJsuA11kDuwAp2eB3NNYczJg'
      }
      const response = await lastValueFrom (this.http.get<any>(environment.apiUrl + 'viaje/obtener',{params}));
      return response;
    } catch (error){
      throw error;
    }
  }

  async obtenerUsuario(data:dataGetUser){
    try {
      const params = {
        p_correo: data.p_correo,
        token:data.token
      }
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'user/obtener',{params}));
      return response;
    } catch (error) {
      throw error;
    }
  }

  async obtenerVehiculo(){
    console.log('obtenervehiculo')
    try {
      const params = {
        p_id: 142,
        token:'eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamF2aWVyYW1vcmFsZXMyMjA5OTgiLCJhdWQiOiJqYXZpZXJhbW9yYWxlczIyMDk5OCIsImF1dGhfdGltZSI6MTczMDU4NjA4NiwidXNlcl9pZCI6InhvTkUwR05FOXBVYXJPSE9vc1JINGN1SjZMNDIiLCJzdWIiOiJ4b05FMEdORTlwVWFyT0hPb3NSSDRjdUo2TDQyIiwiaWF0IjoxNzMwNTg2MDg2LCJleHAiOjE3MzA1ODk2ODYsImVtYWlsIjoiamF2aTE5OTgyMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF2aTE5OTgyMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SHyCHmGSR9BjF2kla_xV-Amf9OpNlMFQHQFqfYGgrUBDjeMGGcstSwa7EJVll33CXNSsrm5LDth39O9E7_J205obNk8GGj5p4rEIk_TIs_9ylQ719YYFq_BhMnsonpqjw-z5upyYqEmRGBcBwciu1zxv7LBgdtjP0UEvv1wkHi1SrXxRaWHXXNE5ZsBJADgKo9_9te71L9qNalDMwXPg1QWDkFiRX1hxpdUOT1koxIy0Gj6WdSndS2oZlzmi_k5ckVmq5oxJk5gq6H8oDC1OvSF5tHt8gZTt_2UuUKgFJb-DNXqHj1znGVyKNi2PfbaJsuA11kDuwAp2eB3NNYczJg'
            }
      const response = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'vehiculo/obtener',{params}));
      return response;
    } catch (error) {
      throw error;
    }

  }

  async ActualizaEstado (data: bodyEstado){
    try {
      const formData = new FormData ();
      formData.append('p_id_estado', data.p_id_estado.toString());
      formData.append('p_id', data.p_id.toString());
      if (data.token){
        formData.append('token', data.token);
      }
      const response = await lastValueFrom(
        this.http.post<any>(environment.apiUrl + 'viaje/actualiza_estado_viaje', formData)
      );
      return response;
    }catch (error) {
      throw error;
    }
  }
}

interface bodyEstado{
  p_id_estado:number;
  p_id:number;
  token:string;
}  
interface bodyUser {
  p_nombre: string;
  p_correo_electronico: string;
  p_telefono: string;
  token?: string;
}

interface bodyViaje {
  p_id_usuario: number;
  p_ubicacion_origen: string;
  p_ubicacion_destino: string;
  p_costo: number;
  p_id_vehiculo: string;
  token: string;

}


interface dataGetUser{
  p_correo:string;
  token:string;
}

interface bodyVehiculo {
  p_id_usuario: number;
  p_patente: string;
  p_marca: string;
  p_modelo: string;
  p_anio: number;
  p_color: string;
  p_tipo_combustible: string;
  token: string;
}