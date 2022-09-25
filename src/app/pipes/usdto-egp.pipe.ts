import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP',
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, rate: number = 19.25): number {
    return value * rate;
  }

}
