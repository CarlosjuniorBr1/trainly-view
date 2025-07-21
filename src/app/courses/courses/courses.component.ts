import { Component } from '@angular/core';
import { Course } from '../model/course';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTable, MatTableModule, MatCardModule, MatToolbarModule, HttpClientModule, MatProgressSpinnerModule, AsyncPipe, AsyncPipe,
    NgIf, NgFor,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Observable<Course[]>;  // precisa ser um observable pois o metodo que vai popular essa lista retorna um observable
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService
  ) {
    this.courses = this.coursesService.list(); // o metodo retorna um observable
  }

  ngOnInit(): void {

  }

}
