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

    <div (click)="onDivClicked()">
    <button (click)="onSave($event)">Save</button>
    </div>

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
<br>
<br>
    {{text | summary : 10}}
  `

})

export class CoursesComponent {
    title = 'List of courses';
    courses;
    imageUrl = '';
    colSpan = 2;
    isActive = false;
    text = 'this is dummy test and it is a longer string than usual because thats what mosh had.';

    constructor(service: CoursesService) {
      // let service = new CoursesService();
      this.courses = service.getCourses();
    }
    email;

    onSave($event) {
      $event.stopPropagation();
      console.log('Button was clicked', $event);

    }

    onDivClicked() {
      console.log('Div was clicked');
    }

    onKeyUp() {
      console.log(this.email);
    }
}
