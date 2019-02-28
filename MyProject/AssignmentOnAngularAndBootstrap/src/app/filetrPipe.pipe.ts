import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterSearchPipe' })

export class FilterPipe  implements PipeTransform {

  transform(val: any, searchTerm: string): string {
    if (!val || !searchTerm) {
      return val;
    }


   return val.filter((value) => value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
