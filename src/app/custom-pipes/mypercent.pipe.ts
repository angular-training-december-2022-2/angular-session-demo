import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypercent'
})
export class MypercentPipe implements PipeTransform {

  // transform(value: number, ...args: number[]): string {
  //   return (value / 500 * 100).toFixed(args[0]) +'%';
  // }


  transform(value: number, param1: number): string {
    return (value / 500 * 100).toFixed(param1) +'%';
  }
}
