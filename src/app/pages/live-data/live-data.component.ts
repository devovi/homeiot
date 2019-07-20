import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss']
})
export class LiveDataComponent implements OnInit {
 LineChart;
 BarChart;
  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart(`lineChart` , {
    type: `line`,
    
    data: {
      labels:['1' , '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
      datasets:[{
        label: "Temperature (°C)",
        data: [9,2,4,6,5,7,8,9,3],
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
          // label: "Temperature (°C)",
          data: [9,2,4,6,5,7,8,9,3],
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
          label:"count",
          data : [1,2,3,4,5,6,7],
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
          label:"count",
          data : [1,2,3,4,5,6,7],
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
          label:"count",
          data : [1,2,3,4,5,6,7],
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
          // label: "Temperature (°C)",
          data: [9,2,4,6,5,7,8,9,3],
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
            label:"count",
            data : [1,2,3,4,5,6,7],
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
            // label: "Temperature (°C)",
            data: [9,2,4,6,5,7,8,9,3],
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
              label:"count",
              data : [1,2,3,4,5,6,7],
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
              // label: "Temperature (°C)",
              data: [9,2,4,6,5,7,8,9,3],
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
                label:"count",
                data : [1,2,3,4,5,6,7],
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
                // label: "Temperature (°C)",
                data: [9,2,4,6,5,7,8,9,3],
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
