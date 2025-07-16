import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    // private htttpClient: HttpClient
  ) { }

  list() {
    return [
      { _id: "1", name: "Introdução a machine learning", category: "IA" },
      { _id: "2", name: "Processamento de linguagem Natural", category: "IA , NLP" }
    ];
  }
}
