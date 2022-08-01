import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shortHandDay'
})
export class ShortHandDayPipe implements PipeTransform {
  transform(value: string | number): string | number {
    let lowerCasedValue = value;
    if (typeof value === 'string')
      lowerCasedValue = value.toLowerCase()

    switch (lowerCasedValue) {

      case 0:
        return 'Mon';
      case 'monday':
        return 'Mon';

      case 1:
        return 'Tue';
      case 'tuesday':
        return 'Tue';
      case 2:
        return 'Wed';
      case 'wednesday':
        return 'Wed';

      case 3:
        return 'Thu';
      case 'thursday':
        return 'Thu';

      case 4:
        return 'Fri';
      case 'friday':
        return 'Fri';

      case 5:
        return 'Sat';
      case 'saturday':
        return 'Sat';

      case 6:
        return 'Sun';
      case 'sunday':
        return 'Sun';
    }
    return value;
  }
}
