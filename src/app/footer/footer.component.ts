import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public lang = localStorage.getItem('_todoApp_lang') ?? 'es';

  constructor(private translation: TranslateService) { }

  ngOnInit(): void {
  }

  cambiarLenguaje(): void {
    localStorage.setItem('_todoApp_lang', this.lang);
    this.translation.use(this.lang);
  }

}
