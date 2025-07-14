import { Component } from '@angular/core';
import { Course } from '../model/course';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTable, MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [
    {_id: "1", name:"Introdução a machine learning", category: "IA"},
    {_id: "2", name:"Processamento de linguagem Natural", category: "IA , NLP"}
  ];
  displayedColumns = ['name', 'category'];

  constructor(){

  }

  ngOnInit(): void {

  }

}
