import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(value: any,args: any) {
    console.log(args)
    if(args=='All books'){
      return value
    }
    else{
      // args=args.toLowerCase();
    }
    return value.filter((book:any)=>{
      return book.bookName.toLowerCase().includes(args);
    })
  }

}
