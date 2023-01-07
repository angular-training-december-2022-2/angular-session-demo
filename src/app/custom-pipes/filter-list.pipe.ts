import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../student-list/student';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: Student[], param1: string): Student[] {
    console.log("filter pipe called...");
    if(value.length == 0 || param1 == '') return value;
    return value.filter((eachStudent)=> eachStudent.studentGender.toLowerCase() == param1.toLowerCase())
  }

}
