import { Pipe, PipeTransform } from '@angular/core';
import { isFinite, toNumber } from 'lodash-es';

@Pipe({
  name: 'addUnit',
  pure: true,
})
export class AddUnitPipe implements PipeTransform {
  transform(value: number | string, unit: string): string {
    const str = `${value}`;
    const reg = /^\d+(\.?\/?\d+)*$/;
    return reg.test(str) ? `${str}${unit}` : str;
  }
}
