import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

transform(value: any): number {
    let currentTime:Date = new Date();
    let uploadTime:any = new Date(currentTime.getFullYear(),currentTime.getMonth(),currentTime.getDate())
    var dateDifference =Math.abs(value-uploadTime )// returns value in milliseconds
    const secondsInADay= 86400; //60 seconds*60 minutes in an hour *24 hours

    var dateDifferenceSeconds=dateDifference*0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1){
        return dateCounter;
    }else{
        return 0;
    }
  }

}
