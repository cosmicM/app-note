import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addValue'
})
export class AddValuePipe implements PipeTransform {

  transform(value: number, addedValue?: number): unknown {
    return isNaN(addedValue)? value : value + addedValue;;
  }

}
