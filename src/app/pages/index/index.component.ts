import { Component, OnInit } from '@angular/core';
// import { ChartsService } from '../charts/components/echarts/charts.service';
// import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],   
  // providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  // showloading: boolean = false;

  // public AnimationBarOption;
  // public iframe_html  : any;
  // public iframe_html1 : any;
  // public iframe_html2 : any;
  
  // public youtubeUrlEnglish = 'https://www.youtube.com/watch?v=uHHEMyFamNg';
  // public youtubeUrlTelugu  = 'https://www.youtube.com/watch?v=uHHEMyFamNg';
  // public youtubeUrlTamil   = 'https://www.youtube.com/watch?v=lXCGufq-JvY';
  // public youtubeId = 'iHhcHTlGtRs';
   
  // constructor(private _chartsService: ChartsService, private embedService: EmbedVideoService) {
  //   console.log(this.embedService.embed(this.youtubeUrlEnglish ));
  //   console.log(this.embedService.embed_youtube(this.youtubeId));
  //   this.iframe_html  =  this.embedService.embed(this.youtubeUrlEnglish );
  //   this.iframe_html1 =  this.embedService.embed(this.youtubeUrlTelugu);
  //   this.iframe_html2 =  this.embedService.embed(this.youtubeUrlTamil);
  // }
  
  ngOnInit() {
    // this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
}
