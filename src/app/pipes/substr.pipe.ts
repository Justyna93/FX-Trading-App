import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: number, beginInd: number, endInd?: number): any {
    return value.toString().substring(beginInd, endInd);
  }

}
