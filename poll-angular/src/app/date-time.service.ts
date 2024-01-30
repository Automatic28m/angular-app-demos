import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  dateTimeConvert(dateTime: string[]): Date {
    const [year, month, day, hours, minutes] = dateTime.map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }
}
