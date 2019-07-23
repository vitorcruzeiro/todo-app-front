import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
	url = "http://127.0.0.1:8000/tasks/";
	httpHeaders = new HttpHeaders({'content-type': 'application/json'});

  constructor(private http: HttpClient) { }

  //i.e. GET http://127.0.0.1:8000/tasks/ -H 'content-type: application/json'
  listTasks(): Observable<any>{
  	return this.http.get(this.url, {headers: this.httpHeaders});
  }

  //requests one task (url/id/). might be useful later
  getSingleTask (id): Observable<any> {
    return this.http.get(this.url+id+'/', {headers: this.httpHeaders});
  }
  
  updateTask (task): Observable<any> {
    const body = {name: task.name};
    return this.http.put(this.url+task.id+'/', body, {headers: this.httpHeaders});
  }

  //changes "done" parameter to true
  completeTask (task): Observable<any> {
    const body = {name: task.name, done: "true"};
    return this.http.put(this.url+task.id+'/', body, {headers: this.httpHeaders});
  }

  addTask (task): Observable<any> {
    const body = {name: task.name};
    return this.http.post(this.url, body, {headers: this.httpHeaders});
  }

  removeTask (id): Observable<any> {
    return this.http.delete(this.url+id+'/', {headers: this.httpHeaders});
  }

}
