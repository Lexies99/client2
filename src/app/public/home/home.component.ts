import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drugs = [
    {
      img: '/images/drugs1.jpeg',
      des: 'Some powerful drugs',
      price: 'GHc 20.00',
      id: 1
    }, {
      img: '/images/drugs2.jpeg',
      des: 'Dragon Drugs',
      price: 'GHc 10.00',
      id: 2
    }, {
      img: '/images/drugs3.jpeg',
      des: 'Para',
      price: 'GHc 1.00',
      id: 3
    }
  ];

  todos = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getAxios().get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res.data)
        this.todos = res.data
      });
  }

}
