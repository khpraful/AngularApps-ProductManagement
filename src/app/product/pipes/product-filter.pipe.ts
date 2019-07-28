import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: IProduct[], ...args: string[]) {
    /*
    if (value && value !== null && value.length > 0 && args[0]) {
      const filterText = args[0];
      const final: IProduct[] = [];
      for (let i = 0; i < value.length; i++) {
        const p: IProduct = value[i];
        if (p.productName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1) {
          final.push(p);
        }
      }
      return final;
    }
    else
      return value;
      */
    return (value && value !== null && value.length > 0 && args[0]) ?
      value.filter(p => p.productName.toLocaleLowerCase().indexOf(args[0].toLocaleLowerCase()) !== -1) : value;
  }
}
