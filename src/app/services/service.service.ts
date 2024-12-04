import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State, District, Post } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }
    

  getStates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/states/`); 
}

  getDistricts(stateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/districts/${stateId}/`); 
}

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts/`, postData);
  }

  updatePost(postId: number, postData: any){
    console.log('Updating post with id ', postId);
    console.log('Post data ', postData);
    return this.http.put(`${this.apiUrl}/posts/${postId}/`, postData);
  }


  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/posts/${postId}/`);
  }
  getPostById(postId: number) {
    return this.http.get<any>(`${this.apiUrl}/posts/${postId}/`);
}

}