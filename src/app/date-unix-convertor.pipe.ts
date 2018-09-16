import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'unixConvertor'
})
export class DateWunixConvertorPipe implements PipeTransform {
    transform( unixDate ) {

        // Months array
        let monthsArr = [ 'January','February','March','April','May','June','July','August','September','October','November','December' ];

        // Convert timestamp to milliseconds
        let date = new Date( unixDate * 1000 );

        // Year
        let year = date.getFullYear();

        // Month
        let month = monthsArr[date.getMonth()];

        // Day
        let day = date.getDate();

        // Hours
        let hours = date.getHours();

        // Minutes
        let minutes = '0' + date.getMinutes();

        // Seconds
        let seconds = '0' + date.getSeconds();

        // Display date time in MM-dd-yyyy h:m:s format
        let convdataTime = month+','+day+' '+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return convdataTime;

    }
}
