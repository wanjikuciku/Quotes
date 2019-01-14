import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

transform(value: any): number {
    let day,hours,minutes;
     if(value <= 59){
     return `a few seconds ago`;
     }
     else if(value >= 60 && value <= 3599){
       minutes = Math.round(value/60);
       if(minutes == 1){
       return `${minutes} minute ago`;
     }else{
       return `${minutes} minutes ago`;
       }
     }else{
       hours = Math.round(value/3600);
       if(hours == 1){
       return`${hours} hour ago`;
     }else{
       return `${hours} hour ago`;
       }
      }
     }
   }
