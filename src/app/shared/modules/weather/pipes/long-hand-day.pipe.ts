import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longHandDay'
})
export class LongHandDayPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }

    return '';
  }

}
