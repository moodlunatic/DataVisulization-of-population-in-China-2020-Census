
// left 1
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.option and data
  var option;



option = {
  series: [
    {
      type: 'gauge',
      radius: '180%',
      startAngle:180,
      endAngle:0,
      center:['50%','90%'],
    
      roam: true,
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        },
        length:'55%'
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 1
        }
      },
      splitLine: {
        distance: -70,
        length: 15,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      axisLabel: {
        color: 'auto',
        distance: 6,
        fontSize: 20
      },
      detail: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        offsetCenter:[0,'-60%'],
        valueAnimation: true,
        formatter: '{value}',
        color: 'auto',
        textStyle:{
          fontSize:22,
        }
      },
      data: [
          {
            value:0
          },
        
        ],
      min:5,
      max:15,
    }
  ]
};
total_population=[5.83,6.95,10.09,11.33,12.66,13.40,14.12];


function test1(total_population){
  setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          { name:'1953',
            value: total_population[0],}
        ]
      }
    ]
  });
}, 1000);

setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'1964',
            value: total_population[1]
          }
        ]
      }
    ]
  });
}, 2500);

setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'1982',
            value: total_population[2]
          }
        ]
      }
    ]
  });
}, 4000);
setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'1990',
            value: total_population[3]
          }
        ]
      }
    ]
  });
}, 5500);

setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'2000',
            value: total_population[4]
          }
        ]
      }
    ]
  });
}, 7000);

setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'2010',
            value: total_population[5]
          }
        ]
      }
    ]
  });
}, 8500);
setTimeout(function () {
  myChart.setOption({
    series: [
      {
        data: [
          {name:'2020',
            value: total_population[6]
          }
        ]
      }
    ]
  });
}, 10000);

};

setInterval(function(){test1(total_population)},11000);

  // 3.set option
  myChart.setOption(option);

  // 4.resize the figure
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// right 1 part
(function () {
  
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

 
  var myColor = ["#1089E7", "#56D0E3", "#F8B448"];
 
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      textStyle: {
        color: '#4c9bfd',
        fontSize:10,
      },
    },
    grid: {
      top: '10%',
      right: '0%',
      bottom: '0%',
    },
    xAxis: {
      show: false,
      type: 'value',
    },
    yAxis: {
      type: 'category',
      inverse: true,
       // no show y axis
       axisLine: {
        show: false
      },
      axisTick: {
      show: false
      },
      // set white 
      axisLabel: {
       color: "#fff"},
      data: [1953,1964,1982,1990,2000,2010,2020]
    },
    series: [
      {
        name: '0-14',
        type: 'bar',
        barWidth:18,
        stack: 'total',
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle:{barBorderRadius:4,
          color: "#1089E7" },
        data: [36.28,40.69,33.59,27.69,22.89,16.6,17.95]
      },
      {
        name: '15-59',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle:{barBorderRadius:4,
          color: "#56D0E3" 
        },
        data: [56.4,53.18,58.79,63.74,66.78,70.14,63.35]
      },
      {
        name: '60+',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          position: "inside",
          formatter: "{c}%"
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle:{barBorderRadius:4,
         color: "#FF99FF" 
        },
        data: [7.32,6.13,7.62,8.57,10.33,13.26,18.7]
      },

    ]
  } ;
  
  myChart.setOption(option);

  
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// left 2 part 
(function () {
  // year and data
  let population_of_year=
  [[28070,33806,48874,54873,61228,65287,68844],
  [30190,35652,51944,58495,65355,68685,72334],
  [7726,12710,21082,29971,45844,66557,90199],
  [50534,56748,79736,83397,80739,67415,50979]];

  var yearData = [{
      data: population_of_year
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // change color
    color: ['#00f2f1', '#7a299d','#ffff00','#105733'],
    tooltip: {
      trigger: 'axis'
    },
    // set legend
    legend: {
    
     
      textStyle: {
        color: '#4c9bfd',
        fontSize:10,
      },
      right: '0%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // show border
      borderColor: '#012f4a' 
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, 
      data: [1953,1964,1982,1990,2000,2010,2020],
      
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" 
      },
      axisLine: {
        show: false 
      }
    },
    yAxis: {
      scale:true,
      type: 'value',
      
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" 
      },
      axisLine: {
        show: false 
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, 
        name: 'Female',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, 
        name: 'Male',
        data: yearData[0].data[1]
      },
      {
        type: 'line',
        smooth: true, 
        name: 'Urban',
        data: yearData[0].data[2]
      },
      {
        type: 'line',
        smooth: true, 
        name: 'Rural',
        data: yearData[0].data[3]
      }
    ]
  };

  myChart.setOption(option);

  
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  
})();

// right 2 part
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option;
  option = {
    grid:{
      show:false,
      top:'30%',
      right:'11%',
      bottom:'10%',
      left:'12%',

    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Junior College and above', 'Senior secondary school', 'Junior secondary school', 'Primary school'],
      textStyle: {
        color:'#FFFFFF',
        fontSize:'11'
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      right : '2%',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: false, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'],title:{line:'Line',bar:'Bar','stack':'Stack'} },
        restore: { show: true,title:'Restore' },
        saveAsImage: { show: false }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['1964', '1982', '1990', '2000', '2010','2020'],
        axisLabel:{
        show:true,
        textStyle:{
        color:"#FFFFFF"
      }
      },
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale:true,
        axisLabel:{
        show:true,
        textStyle:{
        color:"#FFFFFF"}
      },
      }
    ],
    series: [
      
      {
        name: 'Junior College and above',
        type: 'bar',
        barGap: 0,
        
        emphasis: {
          focus: 'series'
        },
        data: [416, 615, 1422, 3611, 8930, 15467]
      },
      {
        name: 'Senior secondary school',
        type: 'bar',
        
        emphasis: {
          focus: 'series'
        },
        data: [1319, 6779, 8039, 11146, 14032, 15088]
      },
      {
        name: 'Junior secondary school',
        type: 'bar',
       
        emphasis: {
          focus: 'series'
        },
        data: [4680, 17892, 23344, 33961, 38788, 34507]
      },
      {
        name: 'Primary school',
        type: 'bar',
        
        emphasis: {
          focus: 'series'
        },
        data: [28330, 35237, 37057, 35701, 26779, 24767]
      }
    ]
  };
  
  if (option && typeof option === 'object') {
      myChart.setOption(option);
  }
  
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();




// left 3 part
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var option;



 option = {
        
 
        tooltip: { trigger: 'item',
            
            formatter: function (params) { 
                var info = '<p style="font-size:18px">' + params.name +'</p><p style="font-size:14px"></p>' +params.value
             
                return info; 
            }, 
            backgroundColor: "#e69c7e",
            textStyle: { color: "#fff" }
           
        
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color:['#83e0ff','#45f5ce','#b158ff'],
        series: [
            {
                type: 'graph',
                layout: 'force',
                force:{
                    repulsion:1000,
                    edgeLength:10
                },
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [
                    {
                        name: 'Total Population',
                    item:'shihua',
                        symbolSize: 50,
                        value:141178,
                        draggable: true,
                        category: 0,
                        itemStyle: {
                            
                            
                            normal: {
                                borderColor: '#e69c7e',
                                borderWidth: 6,
                                shadowBlur: 20,
                                shadowColor: '#fff1e6',
                                color: '#fdc498',
                            }
                        }
                    },
                    {
                        name: 'Increase',
                        title :'wejf',
                        category: 1,
                        value:9001,
                        symbolSize: 50,
                        itemStyle: {
                            normal: {
                                borderColor: '#7bb099',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#aee0ca',
                                color: '#fdc498',
                            }
                        },
                        

                    },
                    {
                        name: 'Decrease',
                        symbolSize:50,
                        category: 2,
                        value:1302,
                        itemStyle: {
                            normal: {
                                borderColor: '#5878b0',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#bbd2f9',
                                color: '#fdc498',
                            }
                        },

                    },
                    
                      {name: '北京', value: 228, category: 4},
                      {name: '天津', value: 93, category: 4},
                      {name: '河北', value: 276, category: 4},
                      {name: '山西', value: -79, category: 3},
                      {name: '内蒙古', value: -66, category: 3},
                      {name: '辽宁', value: -116, category: 3},
                      {name: '吉林', value: -339, category: 3},
                      {name: '黑龙江', value: -646, category: 3},
                      {name: '上海', value: 185, category: 4},
                      {name: '江苏', value: 609, category: 4},
                      {name: '浙江', value: 1014, category: 4},
                      {name: '安徽', value: 153, category: 4},
                      {name: '福建', value: 465, category: 4},
                      {name: '江西', value: 62, category: 4},
                      {name: '山东', value: 574, category: 4},
                      {name: '河南', value: 535, category: 4},
                      {name: '湖北', value: 51, category: 4},
                      {name: '湖南', value: 76, category: 4},
                      {name: '广东', value: 2171, category: 4},
                      {name: '广西', value: 410, category: 4},
                      {name: '海南', value: 141, category: 4},
                      {name: '重庆', value: 320, category: 4},
                      {name: '四川', value: 325, category: 4},
                      {name: '贵州', value: 381, category: 4},
                      {name: '云南', value: 124, category: 4},
                      {name: '西藏', value: 65, category: 4},
                      {name: '陕西', value: 220, category: 4},
                      {name: '甘肃', value: -56, category: 3},
                      {name: '青海', value: 29, category: 4},
                      {name: '宁夏', value: 90, category: 4},
                      {name: '新疆', value: 404, category: 4}

         
                    ],
                links: [
                    {
                        source: 'Total Population',
                        target: 'Increase',
                        value:9001,

                    },
                    {
                        source: 'Total Population',
                        target: 'Decrease',
                        value:-1302,
                    },

                    
                      {source: '北京', target: 'Increase', value: 228},
                      {source: '天津', target: 'Increase', value: 93},
                      {source: '河北', target: 'Increase', value: 276},
                      {source: '山西', target: 'Decrease', value: -79},
                      {source: '内蒙古', target: 'Decrease', value: -66},
                      {source: '辽宁', target: 'Decrease', value: -116},
                      {source: '吉林', target: 'Decrease', value: -339},
                      {source: '黑龙江', target: 'Decrease', value: -646},
                      {source: '上海', target: 'Increase', value: 185},
                      {source: '江苏', target: 'Increase', value: 609},
                      {source: '浙江', target: 'Increase', value: 1014},
                      {source: '安徽', target: 'Increase', value: 153},
                      {source: '福建', target: 'Increase', value: 465},
                      {source: '江西', target: 'Increase', value: 62},
                      {source: '山东', target: 'Increase', value: 574},
                      {source: '河南', target: 'Increase', value: 535},
                      {source: '湖北', target: 'Increase', value: 51},
                      {source: '湖南', target: 'Increase', value: 76},
                      {source: '广东', target: 'Increase', value: 2171},
                      {source: '广西', target: 'Increase', value: 410},
                      {source: '海南', target: 'Increase', value: 141},
                      {source: '重庆', target: 'Increase', value: 320},
                      {source: '四川', target: 'Increase', value: 325},
                      {source: '贵州', target: 'Increase', value: 381},
                      {source: '云南', target: 'Increase', value: 124},
                      {source: '西藏', target: 'Increase', value: 65},
                      {source: '陕西', target: 'Increase', value: 220},
                      {source: '甘肃', target: 'Decrease', value: -56},
                      {source: '青海', target: 'Increase', value: 29},
                      {source: '宁夏', target: 'Increase', value: 90},
                      {source: '新疆', target: 'Increase', value: 404}


                    
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 1,
                        curveness: 0
                    }
                },
                categories:[
                    {name: '0'},
                    {name: '1'},
                    {name: '2'},
                    {name: '3'},
                    {name: '4'},
                ]
            }
        ]
    }



  myChart.setOption(option);
   window.addEventListener('resize', function () {
    myChart.resize();
  })
})();




// right 3 part
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option;
  
  var years = ['1990','2000', '2010', '2020'];
  var jdData = [
     ['North China', 'Northeast China', 'East China', 'Central China', 'South China', 'Southwest China', 'Northwest China'],
     ['North China', 'Northeast China', 'East China', 'Central China', 'South China', 'Southwest China', 'Northwest China'],
     ['North China', 'Northeast China', 'East China', 'Central China', 'South China', 'Southwest China', 'Northwest China'],
     ['North China', 'Northeast China', 'East China', 'Central China', 'South China', 'Southwest China', 'Northwest China'],
 ]
 var data = [
  [13091, 9933, 33018, 20014, 11164, 17878, 7953],
  [16931, 9851, 42343, 22355, 18621, 20512, 10350],
  [16482, 10952, 39286, 21694, 15900, 19281, 9665],
  [14800, 10655, 36465, 21724, 14918, 19494, 9172]
];

option = {

  baseOption: {
      
      timeline: {
          data: years,
          axisType: 'category',
          autoPlay: true,
          playInterval: 3000, //speed 

          left: '5%',
          right: '20%',
          bottom: '-3%',
          width: '90%',
          //  height: null,
          label: {
              normal: {
                  textStyle: {

                      color: 'red',
                      fontSize:10,
                  }
              },
              emphasis: {
                  textStyle: {
                      color: 'red'
                  }
              }
          },
          symbolSize: 10,
          lineStyle: {
              color: '#red'
          },
          checkpointStyle: {
              borderColor: '#red',
              borderWidth: 2
          },
          controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                  color: '#ff8800',
                  borderColor: '#ff8800'
              },
              emphasis: {
                  color: 'red',
                  borderColor: 'red'
              }
          },

      },
      title: {
          text: '',
          right: '2%',
          bottom: '15%',
          textStyle: {
              fontSize: 24,
              color: 'red' 
          }
      },
      tooltip: {
          'trigger': 'axis'
      },
      calculable: true,
      grid: {
          left: '19%',
          right: '12%',
          bottom: '30%',
          top: '0%',
          containLabel: true
      },
      label: {
          normal: {
              textStyle: {
                  color: 'red'
              }
          }
      },
      yAxis: [{

          nameGap: 20,
          offset: '37',
          'type': 'category',
          interval: 50,
          
          data: '',
          nameTextStyle: {
              color: 'red'
          },


          axisLabel: {
              //rotate:45,
              show: false,
              textStyle: {
                  fontSize: 32,

                  color: function(params, Index) {


                      var colorarrays = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                          '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                          '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                      ];


                      return colorarrays[jdData[0].indexOf(params)];
                  },


              }, //rotate:45,
              interval: 50
          },
          axisLine: {

              lineStyle: {
                  color: 'balck' 
              },
          },
          splitLine: {
              show: false,
              lineStyle: {
                  color: 'balck'
              }
          },

      }],
      xAxis: [{
          'type': 'value',
          'name': '',

          splitNumber: 4, 
          nameTextStyle: {
              color: 'balck'
          },
          axisLine: {
              lineStyle: {
                  color: '#ffa597' 
              }
          },
          axisLabel: {
              formatter: '{value} '
          },
          splitLine: {
              show: true,
              lineStyle: {
                  color: '#fedd8b'
              }
          },
      }],
      series: [{
              'name': '',
              'type': 'bar',
              markLine: {
                  label: {
                      normal: {
                          show: false
                      }
                  },
                  lineStyle: {
                      normal: {
                          color: 'red',
                          width: 3
                      }
                  },
              },
              label: {
                  normal: {
                      show: true,
                      position: 'right', 
                      formatter: '{c}'
                  }
              },
              itemStyle: {
                  normal: {
                      color: function(params) {
                          var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                              '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                              '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                          ];

                          console.log("111", params.name); 
                          return colorList[jdData[0].indexOf(params.name)];
                      },

                  }
              },
          },

          {
              'name': '',
              'type': 'bar',
              markLine: {
                  
                  
                  label: {
                      normal: {
                          show: false
                      }
                  },
                  lineStyle: {
                      
                      normal: {
                          color: 'red',
                          width: 3
                      }
                  },
              },
              barWidth: '50%',
              barGap: '-100%',
              label: {
                  normal: {
                      show: true,
                      fontSize: 8,  
                      position: 'left', 
                      formatter: function(p) {
                          return p.name;
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      
                      
                      color: function(params) {
                          var colorList = ['#6bc0fb', '#7fec9d', '#fedd8b', '#ffa597', '#84e4dd', '#749f83',
                              '#ca8622', '#bda29a', '#a8d8ea', '#aa96da', '#fcbad3', '#ffffd2',
                              '#f38181', '#fce38a', '#eaffd0', '#95e1d3', '#e3fdfd', '#749f83', '#ca8622'
                          ];

                          return colorList[jdData[0].indexOf(params.name)];
                      },

                  }
              },
          }
      ],

      animationEasingUpdate: 'quinticInOut',
      animationDurationUpdate: 1500, 
  },

  options: []
};
for (var n = 0; n < years.length; n++) {

  var res = [];
  for (j = 0; j < data[n].length; j++) {
      res.push({
          name: jdData[n][j],
          value: data[n][j]
      });

  }

  res.sort(function(a, b) {
      return b.value - a.value;
  }).slice(0, 6);

  res.sort(function(a, b) {
      return a.value - b.value;
  });


  var res1 = [];
  var res2 = [];
  //console.log(res);
  for (t = 0; t < res.length; t++) {
      res1[t] = res[t].name;
      res2[t] = res[t].value;
  }
  option.options.push({
      title: {
          text: years[n]
      },
      yAxis: {
          data: res1,
      },
      series: [{
          data: res2
      }, {
          data: res2
      }]
  });
}


  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();




// middle part -map
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));

  var option = {
    tooltip: {
      trigger: 'item',
    },
    title: {
      text: 'Population of Provinces in China',
      subtext: 'data from 2020 census',
      sublink: 'http://www.stats.gov.cn/tjsj/pcsj/rkpc/d7c/202111/P020211126523667366751.pdf',
      left: 'center',
      top:'5%',
      textStyle: {
          color: '#FFFFFF'
      }
  },
    visualMap: {
      left: '4%',
      bottom: '4%',
      min: 500000,
      max: 38000000,
      textStyle: {
        color: '#FFFFFF'
    },
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      },
      text: ['High', 'Low'],
      calculable: true
    },
    series: [{
      name: 'Census 2020',
      type: 'map',
      roam: true,
      map: 'china',
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        {name: '北京', value: 21893095},
        {name: '天津', value: 13866009},
        {name: '河北', value: 74610235},
        {name: '山西', value: 34915616},
        {name: '内蒙古', value: 24049155},
        {name: '辽宁', value: 42591407},
        {name: '吉林', value: 24073453},
        {name: '黑龙江', value: 31850088},
        {name: '上海', value: 24870895},
        {name: '江苏', value: 84748016},
        {name: '浙江', value: 64567588},
        {name: '安徽', value: 61027171},
        {name: '福建', value: 41540086},
        {name: '江西', value: 45188635},
        {name: '山东', value: 101528453},
        {name: '河南', value: 99365519},
        {name: '湖北', value: 57752557},
        {name: '湖南', value: 66444864},
        {name: '广东', value: 126012510},
        {name: '广西', value: 50126804},
        {name: '海南', value: 10081232},
        {name: '重庆', value: 32054159},
        {name: '四川', value: 83674866},
        {name: '贵州', value: 38562148},
        {name: '云南', value: 47209277},
        {name: '西藏', value: 3648100},
        {name: '陕西', value: 39528999},
        {name: '甘肃', value: 25019831},
        {name: '青海', value: 5923957},
        {name: '宁夏', value: 7202654},
        {name: '新疆', value: 25852345},
        {name: '香港', value: 7474200},
        {name: '澳门', value: 683218},
        {name: '台湾', value: 23561236}
    ]
    }],
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();