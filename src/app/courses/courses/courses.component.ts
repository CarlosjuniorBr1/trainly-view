import { Component } from '@angular/core';
import { Course } from '../model/course';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTable, MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesService: CoursesService
  ) {

  }

  ngOnInit(): void {
      this.courses = this.coursesService.list();
  }

}
