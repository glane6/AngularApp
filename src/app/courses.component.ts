import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
  <img [src]="imageUrl" />
  <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `

})

export class CoursesComponent {
    title = 'List of courses';
    courses;
    imageUrl = '';
    colSpan = 2;

    constructor(service: CoursesService) {
      // let service = new CoursesService();
      this.courses = service.getCourses();
    }
}
