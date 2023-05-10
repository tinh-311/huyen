import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {
  second = 1000;
  minute = this.second * 60;
  hour = this.minute * 60;
  day = this.hour * 24;

  today = new Date();
  dd = this.today.getDate().toString().padStart(2, '0');
  mm = (this.today.getMonth() + 1).toString().padStart(2, '0');
  yyyy = this.today.getFullYear();
  nextYear = this.yyyy + 1;
  dayMonth = '05/25/';
  birthday = this.dayMonth + this.yyyy;
  countDown = new Date(this.birthday).getTime();
  now = new Date().getTime();
  distance = this.countDown - this.now;
  birthdayText = "Countdown to Huyen's birthday";
  birthdayText2 = "It's Dieu Huyen's Birthday!";

  ngOnInit(): void {
    const formattedToday = `${this.mm}/${this.dd}/${this.yyyy}`;
    if (formattedToday > this.birthday) {
      this.birthday = this.dayMonth + this.nextYear;
    }

    const x = setInterval(() => {
      document.getElementById('days')!.innerText = Math.floor(
        this.distance / this.day
      ).toString();
      document.getElementById('hours')!.innerText = Math.floor(
        (this.distance % this.day) / this.hour
      ).toString();
      document.getElementById('minutes')!.innerText = Math.floor(
        (this.distance % this.hour) / this.minute
      ).toString();
      document.getElementById('seconds')!.innerText = Math.floor(
        (this.distance % this.minute) / this.second
      ).toString();

      this.today = new Date();
      this.dd = this.today.getDate().toString().padStart(2, '0');
      this.mm = (this.today.getMonth() + 1).toString().padStart(2, '0');
      this.yyyy = this.today.getFullYear();
      this.nextYear = this.yyyy + 1;
      this.dayMonth = '05/25/';
      this.birthday = this.dayMonth + this.yyyy;
      this.countDown = new Date(this.birthday).getTime();
      this.now = new Date().getTime();
      this.distance = this.countDown - this.now;
      if (this.distance < 0) {
        document.getElementById('headline')!.innerText =
          "It's Dieu Huyen's Birthday!";
        document.getElementById('countdown')!.style.display = 'none';
        document.getElementById('content')!.style.display = 'block';
        clearInterval(x);
      }
    }, 0);
  }
}
