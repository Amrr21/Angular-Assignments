import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, toEGP: number = 20): number {
    return value * toEGP
  }

}
