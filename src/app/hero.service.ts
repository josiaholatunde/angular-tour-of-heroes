import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

import Heroes from './models/Heroes';
import { MessageService } from './services/message.service';
import { Message } from './models/Message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl: string = "api/heroes";
  constructor(private http: HttpClient, private messageService: MessageService) {}
  private log(message: Message) {
    this.messageService.addMessage(message);
  }

  getHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(this.heroesUrl).pipe(
      tap(heroes => this.log({title: `Heroes fetched Successfully`})),
      catchError(this.handleError("get Heroes",  []))
    )
  }
  getHero(id: number): Observable<Heroes> {
    const url =  `${this.heroesUrl}/${id}`;
    return this.http.get<Heroes>(url).pipe(
      tap(_ => this.log({title: `Fetched Hero ${id}`})),
      catchError(this.handleError<any>(`Get hero with id ${id}`))
    )
  }
  addHero(hero: Heroes) {
    return this.http.post<Heroes>(this.heroesUrl,hero, httpOptions).pipe(
      tap(hero => this.log({title: `Added Hero with ${hero.id}`})),
      catchError(this.handleError<any>(`Add hero with id ${hero.id}`))
    )
  }

  updateHero(hero : Heroes): Observable<Heroes> {
    const url =  `${this.heroesUrl}/${hero.id}`;

    return this.http.put<Heroes>(url,hero, httpOptions).pipe(
      tap(_ => this.log({title: `Updated Hero Id ${hero.id}`})),
      catchError(this.handleError<any>(`Updated Hero Id ${hero.id}`)));
  }

  deleteHero(hero: Heroes) :Observable<Heroes> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete<Heroes>(url,httpOptions).pipe(
      tap(_ => this.log({title: `Deleted Hero Id: ${hero.id}`}))
    )
  }
  private handleError<T>(operation='operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log({title:`An error occurred...${error.message}`})

      return of(result as T);
    }

  }
}
