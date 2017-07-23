import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if ( value.length > 5 ) {
      value = value[0] + '***' + value[value.length - 1];
    }
    return value;
  }

}
