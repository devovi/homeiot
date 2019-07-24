import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { LivedataService } from '../../shared/services/livedata.service';
// import { LivedataService } from '../../shared/services/livedata.service';
LivedataService
@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {
 LineChart;
 BarChart;
 public floorvalue ="";
 public buildingvalue="";
 public housevalue ="";
 tempreatureDataList =[];
 ledDataList =[];
 opticalDataList = [];
 proximityDataList =[];
  constructor( public liveDataService:LivedataService) { }
  floorValue(e){
    this.floorvalue =e.target.value;
  }
  buildingValue(e){
    this.buildingvalue = e.target.value;
  }
  houseValue(e){
    this.housevalue = e.target.value;
  }
    getAllSensorData(){
       this.liveDataService.getData().subscribe(res =>{
         const liveDataList = res.data;
         for(let i=0;i<liveDataList.length;i++) {
          const item = liveDataList[i]
          console.log(item)
           for(let z=i;z<item.sensordata.length;z++) {
            const dataItem = item.sensordata[z]
            this.tempreatureDataList.push(dataItem.temperature)
            this.ledDataList.push(dataItem.led)
            this.opticalDataList.push(dataItem.optical)
            this.proximityDataList.push(dataItem.proximity)
           }
          }
         this.renderCharts();
       });
    }
  ngOnInit() {
    this.getAllSensorData();
    this.renderCharts();
  }

  renderCharts() {
    this.LineChart = new Chart(`lineChart` , {
      type: `line`,
      
      data: {
        labels: ['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
        datasets:[{
          label: "Temperature (°C)",
           data: this.tempreatureDataList,
          // data: this.liveDataList,
          fill:false,
          lineTension:0.2,
          borderColor: 'red',
          borderWidth:1
        }]
      },
      options:{
         title:{
            // text: "Line Chart",
            display: true
         },
         scales:{
           yAxes: [{
               ticks:{
                 
                 beginAtZero:true
               }
           }]
         }
      } 
      });
      this.LineChart = new Chart(`lineChart1` , {
        type: `line`,
        
        data: {
          labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
          datasets:[{
            label: "Optical",
            data: this.opticalDataList,
            fill:false,
            lineTension:0.2,
            borderColor: 'red',
            borderWidth:1
          }]
        },
        options:{
           title:{
              // text: "Line Chart",
              display: true
           },
           scales:{
             yAxes: [{
                 ticks:{
                   
                   beginAtZero:true
                 }
             }]
           }
        } 
        });
  
      this.BarChart = new Chart ( 'barChart', {
        type: 'bar' , 
        data:{
          labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
          datasets:[{
            label:"led",
            data : this.ledDataList,
            backgroundColor:[
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)",
  
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)"
            ],
            borderColor:[
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",,
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",
            ],
          }]
          },
          options:{
            title:{
              //  text: "bar Chart",
               display: true
            },
            scales:{
              yAxes: [{
                  ticks:{
                    
                    beginAtZero:true
                  }
              }]
            }
         } 
        
  
      });
      this.BarChart = new Chart ( 'barChart1', {
        type: 'bar' , 
        data:{
          labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
          datasets:[{
            label:"proximity",
            data : this.proximityDataList,
            backgroundColor:[
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)",
  
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)"
            ],
            borderColor:[
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",,
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",
            ],
          }]
          },
          options:{
            title:{
               text: "",
               display: true
            },
            scales:{
              yAxes: [{
                  ticks:{
                    
                    beginAtZero:true
                  }
              }]
            }
         } 
        
  
      });
      this.BarChart = new Chart ( 'kitchen-barChart', {
        type: 'bar' , 
        data:{
          labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
          datasets:[{
            label:"led",
            data : this.proximityDataList,
            backgroundColor:[
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)",
  
              "rgba(255,99,132,0.2)",
              "rgba(54 ,162 , 235,0.2)"
            ],
            borderColor:[
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",,
              "rgba(255,99,132,0.2)",
              "rgba(255,99,132,0.2)",
            ],
          }]
          },
          options:{
            title:{
               text: "",
               display: true
            },
            scales:{
              yAxes: [{
                  ticks:{
                    
                    beginAtZero:true
                  }
              }]
            }
         } 
        
  
      });
      this.LineChart = new Chart(`kitchen-lineChart` , {
        type: `line`,
        
        data: {
          labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
          datasets:[{
            label: "Temperature (°C)",
            data: this.tempreatureDataList,
            fill:false,
            lineTension:0.2,
            borderColor: 'red',
            borderWidth:1
          }]
        },
        options:{
           title:{
              // text: "Line Chart",
              display: true
           },
           scales:{
             yAxes: [{
                 ticks:{
                   
                   beginAtZero:true
                 }
             }]
           }
        } 
        });
        this.BarChart = new Chart ( 'kitchen-barChart1', {
          type: 'bar' , 
          data:{
            labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
            datasets:[{
              label:"proximity",
              data : this.ledDataList,
              backgroundColor:[
                "rgba(255,99,132,0.2)",
                "rgba(54 ,162 , 235,0.2)",
    
                "rgba(255,99,132,0.2)",
                "rgba(54 ,162 , 235,0.2)"
              ],
              borderColor:[
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",,
                "rgba(255,99,132,0.2)",
                "rgba(255,99,132,0.2)",
              ],
            }]
            },
            options:{
              title:{
                 text: "",
                 display: true
              },
              scales:{
                yAxes: [{
                    ticks:{
                      
                      beginAtZero:true
                    }
                }]
              }
           } 
          
    
        });
        this.LineChart = new Chart(`kitchen-lineChart1` , {
          type: `line`,
          
          data: {
            labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
            datasets:[{
              label: "Optical",
              data:this.opticalDataList,
              fill:false,
              lineTension:0.2,
              borderColor: 'red',
              borderWidth:1
            }]
          },
          options:{
             title:{
                // text: "Line Chart",
                display: true
             },
             scales:{
               yAxes: [{
                   ticks:{
                     
                     beginAtZero:true
                   }
               }]
             }
          } 
          });
          this.BarChart = new Chart ( 'room-barChart', {
            type: 'bar' , 
            data:{
              labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
              datasets:[{
                label:"led",
                data : this.ledDataList,
                backgroundColor:[
                  "rgba(255,99,132,0.2)",
                  "rgba(54 ,162 , 235,0.2)",
      
                  "rgba(255,99,132,0.2)",
                  "rgba(54 ,162 , 235,0.2)"
                ],
                borderColor:[
                  "rgba(255,99,132,0.2)",
                  "rgba(255,99,132,0.2)",,
                  "rgba(255,99,132,0.2)",
                  "rgba(255,99,132,0.2)",
                ],
              }]
              },
              options:{
                title:{
                   text: "",
                   display: true
                },
                scales:{
                  yAxes: [{
                      ticks:{
                        
                        beginAtZero:true
                      }
                  }]
                }
             } 
            
      
          });
          this.LineChart = new Chart(`room-lineChart` , {
            type: `line`,
            
            data: {
              labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
              datasets:[{
                label: "Temperature (°C)",
                data: this.tempreatureDataList,
                fill:false,
                lineTension:0.2,
                borderColor: 'red',
                borderWidth:1
              }]
            },
            options:{
               title:{
                  // text: "Line Chart",
                  display: true
               },
               scales:{
                 yAxes: [{
                     ticks:{
                       
                       beginAtZero:true
                     }
                 }]
               }
            } 
            });
            this.BarChart = new Chart ( 'room-barChart1', {
              type: 'bar' , 
              data:{
                labels: ["1" , "2" ,"3","4","5","6","7","8","9","10"],
                datasets:[{
                  label:"proximity",
                  data : this.proximityDataList,
                  backgroundColor:[
                    "rgba(255,99,132,0.2)",
                    "rgba(54 ,162 , 235,0.2)",
        
                    "rgba(255,99,132,0.2)",
                    "rgba(54 ,162 , 235,0.2)"
                  ],
                  borderColor:[
                    "rgba(255,99,132,0.2)",
                    "rgba(255,99,132,0.2)",,
                    "rgba(255,99,132,0.2)",
                    "rgba(255,99,132,0.2)",
                  ],
                }]
                },
                options:{
                  title:{
                     text: "",
                     display: true
                  },
                  scales:{
                    yAxes: [{
                        ticks:{
                          
                          beginAtZero:true
                        }
                    }]
                  }
               } 
              
        
            });
            this.LineChart = new Chart(`room-lineChart1` , {
              type: `line`,
              
              data: {
                labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
                datasets:[{
                  label: "optical",
                  data: this.opticalDataList,
                  fill:false,
                  lineTension:0.2,
                  borderColor: 'red',
                  borderWidth:1
                }]
              },
              options:{
                 title:{
                    // text: "Line Chart",
                    display: true
                 },
                 scales:{
                   yAxes: [{
                       ticks:{
                         
                         beginAtZero:true
                       }
                   }]
                 }
              } 
              });
  }

}
