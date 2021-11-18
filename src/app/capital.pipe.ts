import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(str: string, ...args: unknown[]): string {
    return str.replace(/(?:^|\s)\S/g, a => a.toUpperCase())
  }

}
