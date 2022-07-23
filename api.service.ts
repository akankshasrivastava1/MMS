import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  

  public loginAPIUrl : string = "https://localhost:44394/api/Login/";
  public moviesAPIUrl : string = "https://localhost:44394/api/Movies/";
  url = "https://localhost:44394/api/Search"
  constructor(private http : HttpClient) { }

  DisplayAll(){
    return this.http.get("https://localhost:44394/api/Movies/");
  }
  
  Search(id: any){
    return this.http.get(this.url+"/"+id);
  }
  
  PostMovies(data : any){
    return this.http.post<any>(`${this.moviesAPIUrl}add_movies`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  DeleteMovies(id: number){
    return this.http.delete<any>(`${this.moviesAPIUrl}delete_movies/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateMovies(data : any){
    return this.http.put<any>(`${this.moviesAPIUrl}update_movies`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  GetMovies(){
    return this.http.get<any>(`${this.moviesAPIUrl}get_all_movies`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  signUp(movObj:any):Observable<any>
  {
    // let httpheaders=new HttpHeaders().set('Content-Type','application/json');
    // let options={headers:httpheaders}
    // return this._http.post<any>(this.loginAPIUrl,movObj,options);
    return this.http.post<any>(`${this.loginAPIUrl}signup`,movObj)
  }
  
  login(movObj:any){
    return this.http.post<any>(`${this.loginAPIUrl}login`,movObj)
  }

  forgot(movObj:any){
    return this.http.post<any>(`${this.loginAPIUrl}forgot`,movObj)
  }
}
