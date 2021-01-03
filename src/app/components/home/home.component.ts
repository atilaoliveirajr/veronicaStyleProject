import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../template/main-nav/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headlines: Array<string> = ['Sejam bem-vindas!','Soluções em gestão de Mídias Digitais', 'Tenha mais tempo livre para você mesma.','Deixe que eu turbine seus negócios!'];
  currentHeadlines: number = 0;
  showHeadline: boolean = true;

  constructor(private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Home'
    }
  }

  ngOnInit(): void {
    this.updateheadlines();
  }

  updateheadlines() {
    setInterval(() => {
      this.currentHeadlines++;
      this.currentHeadlines = this.currentHeadlines % this.headlines.length;
      this.showHeadline = false;

      setTimeout(() => {
        this.showHeadline = true;
      }, 100)
    }, 5000);
  }
}
