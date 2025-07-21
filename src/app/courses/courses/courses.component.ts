import { Component } from '@angular/core';
import { Course } from '../model/course';
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';

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
    private coursesService: CoursesService,
    public dialog: MatDialog,
  ) {
    this.courses = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Error ao carregar cursos.')
          return of([])
        })
      ); // o metodo retorna um observable
  }

  onError(erroMsg: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }



  ngOnInit(): void {

  }

}
