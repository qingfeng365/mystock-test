import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return list;
    }

    return list.filter(item => {
      const reg = new RegExp(keyword, 'gi');
      const fieldValue: string = item[filterField];
      return fieldValue.search(reg) >= 0;
    });
  }

}
