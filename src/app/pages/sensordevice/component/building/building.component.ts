import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  // public chartType: string = 'line';

public tempValue = "";
public pressureValue = "";
public opticalvalue = "";
public proximityvalue ="";
  constructor() { }

  ngOnInit() {
  }
  tempRangevalue(e){
    this.tempValue = e.target.value;
    console.log(this.tempValue);
  }
  pressureRangevalue(e){
    this.pressureValue = e.target.value;
    console.log(this.pressureValue);
  }
  opticalValue(e){
    console.log(e);
    this.opticalvalue = e.target.value;
    console.log(this.opticalvalue);
  }
  proximityValue(e){
    this.proximityvalue = e.target.checked;
    console.log(this.proximityvalue);
  }

  
  
  
  
  
  
  
  
  
  
  
  // public chartType: string = 'line';

  // public chartDatasets: Array<any> = [
  //   { data: [23, 18, 16, 25, 15, 25], label: 'Tempreature' }
  // ];

  // public chartLabels: Array<any> = ['6', '7', '8', '9', '10', '11', '12' , '1' , '2' , '3' , '4' , '5' ];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(105, 0, 132, .2)',
  //     borderColor: 'rgba(200, 99, 132, .7)',
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true
  // };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }





}





