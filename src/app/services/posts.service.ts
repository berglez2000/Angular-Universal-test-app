import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interface/Post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  apiUrl: string = 'http://localhost:5000/api/pages/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
