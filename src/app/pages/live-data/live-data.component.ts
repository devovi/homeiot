import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { LivedataService } from '../../shared/services/livedata.service';
// import 'chartjs-plugin-zoom';
// import { LivedataService } from '../../shared/services/livedata.service';
import * as moment from 'moment';
import { max } from 'rxjs/operators';
// import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  // template: '<div [innerHtml]="iframe_html"></div>',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {
 LineChart;
 BarChart;
 public floorvalue =" ";
 public buildingvalue=" ";
 public housevalue =" ";
 tempreatureDataList = [];
 ledDataList = [];
 opticalDataList = [];
 proximityDataList =[];
 xaxisLabels = [];
 yaxisLabels = [];
 interval = null;

//  public iframe_html: any;
//  public youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
//  public youtubeId = 'iHhcHTlGtRs';
  constructor( public liveDataService:LivedataService) { 
    // console.log(this.embedService.embed(this.youtubeUrl));
    // console.log(this.embedService.embed_youtube(this.youtubeId));
    // this.iframe_html = this.embedService.embed(this.youtubeUrl);

   }
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
          if(this.tempreatureDataList.length || this.ledDataList.length || this.proximityDataList.length || this.opticalDataList.length) {
            this.tempreatureDataList = [],
            this.ledDataList = [],
            this.proximityDataList =[],
            this.opticalDataList =[]
          }
          liveDataList.forEach((item) => {
           // const time1 = moment(item.createdAt).format(`LTS`)
           var time = new Date(item.createdAt);
           for(let i=0;i<item.sensordata.length;i++) {
             const itemData = item.sensordata[i];
             const obj = {
               y: itemData.temperature,
               x: time,
               }
               const obj1 ={
                y: itemData.led,
                x: time,
               }
               const obj2 = {
                 y: itemData.optical,
                 x: time
               }
               const obj3 = {
                 y: itemData.proximity,
                 x: time
               }
             this.tempreatureDataList.push(obj)
             this.ledDataList.push(obj1)
             this.opticalDataList.push(obj2)
             this.proximityDataList.push(obj3)
           }
           console.log(`tempreatureDataList`, this.tempreatureDataList)
           console.log(`ledDataList`, this.ledDataList)
          })
          this.renderCharts();
        });
    }
    setInterval() {
      this.interval = setInterval(() => {
        this.getAllSensorData();
      },1000 * 5 * 60)
    }
    reset(){
      clearInterval(this.interval)
    }
    
  ngOnInit() {
    this.getAllSensorData();
    this.setInterval();
    this.renderCharts();
  }
  
    
  renderCharts() {
    this.LineChart = new Chart(`lineChart` , {
      type: `line`,
      
      data: {
        // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],
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
         xAxes: [{
          type: 'time',
          distribution: 'series',
          time:{
          displayFormats: {
            hour: 'DD MMM D, h:mm A'
          }
        }
         }],
        
           yAxes: [{
               ticks:{
                 min:0 , max: 50
                 
                //  beginAtZero:true
               }
           }]
         },
         plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
              speed: 0.1,
              threshold: 10
            },
            zoom: {
              enabled: true,
              drag: true,
              mode: 'y',
              speed:0.1,
              threshold: 10
            }
          }
        }

      },
      
      });
      this.LineChart = new Chart(`lineChart2` , {
        type: `line`,
        
        data: {
          // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],
          datasets:[{
            label: "led",
             data: this.ledDataList,
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
           xAxes: [{
            type: 'time',
            distribution: 'series',
            time:{
            displayFormats: {
              hour: 'DD MMM D, h:mm A'
            }
          }
           }],
          
             yAxes: [{
                 ticks:{
                   min: 0 , max: 1
                   
                  //  beginAtZero:true
                 }
             }]
           },
           plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'xy',
                speed: 0.1,
                threshold: 10
              },
              zoom: {
                enabled: true,
                drag: true,
                mode: 'y',
                speed:0.1,
                threshold: 10
              }
            }
          }
  
        },
        
        });
     
      this.LineChart = new Chart(`lineChart1` , {
        type: `line`,
        
        data: {
          // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
          //   xAxes: [{
          //     type: 'time',
          //     time: {
          //         displayFormats: {
          //             quarter: 'MMM YYYY'
          //         }
          //     }
          // }],
          xAxes: [{
            type: 'time',
            distribution: 'series',
            time:{
            displayFormats: {
              quarter: 'hA'
            }
          }
        }],
             yAxes: [{
                 ticks:{
                   
                   beginAtZero:true
                 }
             }]
           },
           plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                speed: 0.1,
                threshold: 10
              },
              zoom: {
                enabled: true,
                mode: 'y'
              }
            }
          }
        } 
        });
  
      // this.BarChart = new Chart ( 'barChart', {
      //   type: 'bar' , 
      //   data:{
      //     // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

      //     datasets:[{
      //       label:"led",
      //       data : this.ledDataList,
      //       backgroundColor:[
      //         "rgba(255,99,132,0.2)",
      //         "rgba(54 ,162 , 235,0.2)",
              
      //         "rgba(255,99,132,0.2)",
      //         "rgba(54 ,162 , 235,0.2)"
      //       ],
      //       borderColor:[
      //         "rgba(255,99,132,0.2)",
      //         "rgba(255,99,132,0.2)",,
      //         "rgba(255,99,132,0.2)",
      //         "rgba(255,99,132,0.2)",
      //       ],
      //     }]
      //     },
      //     options:{
      //       title:{
      //         //  text: "bar Chart",
      //          display: true
      //       },
      //       scales:{
      //         xAxes: [{
      //           type: 'time',
      //           distribution: 'series',
      //           time:{
      //           displayFormats: {
      //             quarter: 'hA'
      //           }
      //         }
      //       }],
      //           yAxes: [{
      //             ticks:{
                    
      //                min:0 ,max:1
      //             }
      //         }]
      //       },
      //       // plugins: {
      //       //   zoom: {
      //       //     pan: {
      //       //       enabled: true,
      //       //       mode: 'x',
      //       //       speed: 0.1,
      //       //       threshold: 10
      //       //     },
      //       //     zoom: {
      //       //       enabled: true,
      //       //       mode: 'y'
      //       //     }
      //       //   }
      //       // }
      //    } 
        
  
      // });
      this.BarChart = new Chart ( 'barChart1', {
        type: 'bar' , 
        data:{
          // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
              "rgba(255,99,132,0.2)",
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
              xAxes: [{
                type: 'time',
                distribution: 'series',
                time:{
                displayFormats: {
                  quarter: 'hA'
                }
              }
            }],
                 yAxes: [{
                  ticks:{
                    
                    beginAtZero:true
                  }
              }]
            },
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                  speed: 0.1,
                  threshold: 10
                },
                zoom: {
                  enabled: true,
                  mode: 'y'
                }
              }
            }
         } 
        
  
      });
      this.LineChart = new Chart(`kitchen-lineChart2` , {
        type: `line`,
        
        data: {
          // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],
          datasets:[{
            label: "led",
             data: this.ledDataList,
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
           xAxes: [{
            type: 'time',
            distribution: 'series',
            time:{
            displayFormats: {
              hour: 'DD MMM D, h:mm A'
            }
          }
           }],
          
             yAxes: [{
                 ticks:{
                   min: 0 , max: 1
                   
                  //  beginAtZero:true
                 }
             }]
           },
           plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'xy',
                speed: 0.1,
                threshold: 10
              },
              zoom: {
                enabled: true,
                drag: true,
                mode: 'y',
                speed:0.1,
                threshold: 10
              }
            }
          }
  
        },
        
        });
      this.LineChart = new Chart(`kitchen-lineChart` , {
        type: `line`,
        
        data: {
          // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
             }],
             xAxes: [{
              type: 'time',
              distribution: 'series',
              time:{
              displayFormats: {
                quarter: 'hA'
              }
            }
          }],
           
           },
           plugins: {
            zoom: {
              pan: {
                enabled: true,
                mode: 'x',
                speed: 0.1,
                threshold: 10
              },
              zoom: {
                enabled: true,
                mode: 'y'
              }
            }
          }
        } 
        });
        this.BarChart = new Chart ( 'kitchen-barChart1', {
          type: 'bar' , 
          data:{
            // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
                xAxes: [{
                  type: 'time',
                  distribution: 'series',
                  time:{
                  displayFormats: {
                    quarter: 'hA'
                  }
                }
              }],
                  yAxes: [{
                    ticks:{
                      
                      beginAtZero:true
                    }
                }]
              },
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'x',
                    speed: 0.1,
                    threshold: 10
                  },
                  zoom: {
                    enabled: true,
                    mode: 'y'
                  }
                }
              }
           } 
          
    
        });
        this.LineChart = new Chart(`kitchen-lineChart1` , {
          type: `line`,
          
          data: {
            // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
              xAxes: [{
                type: 'time',
                distribution: 'series',
                time:{
                displayFormats: {
                  quarter: 'hA'
                }
              }
            }],
                 yAxes: [{
                   ticks:{
                     
                     beginAtZero:true
                   }
               }]
             },
             plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                  speed: 0.1,
                  threshold: 10
                },
                zoom: {
                  enabled: true,
                  mode: 'y'
                }
              }
            }
          } 
          });
          this.LineChart = new Chart(`room-lineChart2` , {
            type: `line`,
            
            data: {
              // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],
              datasets:[{
                label: "led",
                 data: this.ledDataList,
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
               xAxes: [{
                type: 'time',
                distribution: 'series',
                time:{
                displayFormats: {
                  hour: 'DD MMM D, h:mm A'
                }
              }
               }],
              
                 yAxes: [{
                     ticks:{
                       min: 0 , max: 1
                       
                      //  beginAtZero:true
                     }
                 }]
               },
               plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'xy',
                    speed: 0.1,
                    threshold: 10
                  },
                  zoom: {
                    enabled: true,
                    drag: true,
                    mode: 'y',
                    speed:0.1,
                    threshold: 10
                  }
                }
              }
      
            },
            
            });
          this.LineChart = new Chart(`room-lineChart` , {
            type: `line`,
            
            data: {
              // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
                xAxes: [{
                  type: 'time',
                  distribution: 'series',
                  time:{
                  displayFormats: {
                    quarter: 'hA'
                  }
                }
              }],
                   yAxes: [{
                     ticks:{
                       
                       beginAtZero:true
                     }
                 }]
               },
               plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: 'x',
                    speed: 0.1,
                    threshold: 10
                  },
                  zoom: {
                    enabled: true,
                    mode: 'y'
                  }
                }
              }
            } 
            });
            this.BarChart = new Chart ( 'room-barChart1', {
              type: 'bar' , 
              data:{
                // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
                    xAxes: [{
                      type: 'time',
                      distribution: 'series',
                      time:{
                      displayFormats: {
                        quarter: 'hA'
                      }
                    }
                  }],
                      yAxes: [{
                        ticks:{
                          
                          beginAtZero:true
                        }
                    }]
                  },
                  plugins: {
                    zoom: {
                      pan: {
                        enabled: true,
                        mode: 'x',
                        speed: 0.1,
                        threshold: 10
                      },
                      zoom: {
                        enabled: true,
                        mode: 'y'
                      }
                    }
                  }
               } 
              
        
            });
            this.LineChart = new Chart(`room-lineChart1` , {
              type: `line`,
              
              data: {
                // labels: ['00AM','3AM','6AM','9AM','12PM','3PM','6PM','9PM'],

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
                  xAxes: [{
                    type: 'time',
                    distribution: 'series',
                    time:{
                    displayFormats: {
                      quarter: 'hA'
                    }
                  }
                }],
                     yAxes: [{
                       ticks:{
                         
                         beginAtZero:true
                       }
                   }]
                 },
                 plugins: {
                  zoom: {
                    pan: {
                      enabled: true,
                      mode: 'x',
                      speed: 0.1,
                      threshold: 10
                    },
                    zoom: {
                      enabled: true,
                      mode: 'y'
                    }
                  }
                }
              } 
              });
  }

}
