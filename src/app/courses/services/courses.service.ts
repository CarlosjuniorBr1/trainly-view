
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(
     private htttpClient: HttpClient
  ) { }

  list() {
    return this.htttpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap( courses => console.log(courses)) // tap é usado pra manipular melhor a informação que foi recebida
    );
  }
}
