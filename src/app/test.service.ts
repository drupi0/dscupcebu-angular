import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteModel } from 'src/models/note.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly baseURL: string = "https://jsonplaceholder.typicode.com";

  constructor(public httpClient: HttpClient ) { }

  getPosts(): Observable<NoteModel[]> {
    const postURL = `${this.baseURL}/posts`;
    return this.httpClient.get(postURL).pipe(
      map((data : any) => 
      {
        const noteArray: NoteModel[] = Array.from(data).reduce(
            (acc: NoteModel[], curr: any) => {
          const data: { userId: string, title: string, body: string} = curr;

          acc.push({
            id: data.userId,
            title: data.title,
            contents: data.body
          });

          return acc;

        }, <NoteModel[]>[]);

        return noteArray;
    }));
  }

  postContents(note: NoteModel): Observable<any> {
    const postURL = `${this.baseURL}/posts`;
    return this.httpClient.post(postURL, {
      userId: note.id,
      id: new Date().getMilliseconds(),
      title: note.title,
      body: note.contents
    });
  }
}
