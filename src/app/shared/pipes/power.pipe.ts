import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
  standalone: true
})
export class PowerPipe implements PipeTransform {

  transform(x: number, y:number=1 ): number {
    return Math.pow(x,y);
  }

}
