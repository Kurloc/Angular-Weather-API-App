import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZeros'
})
export class LeadingZerosPipe implements PipeTransform {

  transform(value: number, totalLength: number): string {
    return String(value).padStart(totalLength, '0');
  }

}
