// !function(e,t,s){
// 	"use strict";
// 	s("#audience-list-scroll").perfectScrollbar({wheelPropagation:!0}),s("#sp-bar-total-cost").sparkline([5,6,7,8,9,10,12,13,15,14,13,12,10,9,8,10,12,14,15,16,17,14,12,11,10,8],{type:"bar",width:"100%",height:"30px",barWidth:2,barSpacing:4,barColor:"#FF5722"}),s("#sp-tristate-bar-total-revenue").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1,0,-1,1,-1],{type:"tristate",height:"30",posBarColor:"#00BCD4",negBarColor:"#E91E63",barWidth:4,barSpacing:5,zeroAxis:!1});
// 	var i=s("#visitors-graph");
// 	new Chart(i,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},hover:{mode:"label"},scales:{xAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1}}],yAxes:[{display:!0,gridLines:{color:"#f3f3f3",drawTicks:!1},ticks:{display:!0,maxTicksLimit:5}}]},title:{display:!1}},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",data:[0,5,22,14,28,12,24,0],fill:!1,borderColor:"#FF4961",pointBorderColor:"#FF4961",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4},{label:"My Second dataset",data:[0,8,30,15,12,21,14,0],fill:!1,borderColor:"#00A5A8",pointBorderColor:"#00A5A8",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4},{label:"My Third dataset - No bezier",data:[0,20,10,45,20,36,21,0],fill:!1,borderColor:"#FF7D4D",pointBorderColor:"#FF7D4D",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4}]}})

// 	s("#world-map-markers").vectorMap({map:"world_mill",backgroundColor:"#fff",zoomOnScroll:!1,series:{regions:[{values:visitorData,scale:["#97E1CE","#37BC9B"],normalizeFunction:"polynomial"}]},onRegionTipShow:function(e,t,i){t.html(t.html()+" (Visitor - "+visitorData[i]+")")}}),Morris.Donut({element:"sessions-browser-donut-chart",data:[{label:"Chrome",value:3500},{label:"Firefox",value:2500},{label:"Safari",value:2e3},{label:"Opera",value:1e3},{label:"Internet Explorer",value:500}],resize:!0,colors:["#F6BB42","#37BC9B","#3BAFDA","#DA4453","#967ADC"]})
// 	var o=t.getElementById("line-stacked-area").getContext("2d")
// 	new Chart(o,{type:"line",options:{responsive:!0,maintainAspectRatio:!1,pointDotStrokeWidth:4,legend:{display:!1,labels:{fontColor:"#FFF",boxWidth:10},position:"top"},hover:{mode:"label"},scales:{xAxes:[{display:!1}],yAxes:[{display:!0,gridLines:{color:"rgba(255,255,255, 0.3)",drawTicks:!1,drawBorder:!1},ticks:{display:!1,min:0,max:70,maxTicksLimit:4}}]},title:{display:!1,text:"Chart.js Line Chart - Legend"}},data:{labels:["2010","2011","2012","2013","2014","2015"],datasets:[{label:"iOS",data:[0,10,5,26,12,20],backgroundColor:"#eeda54",borderColor:"#eeda54",pointBorderColor:"#eeda54",pointBackgroundColor:"#eeda54",pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2},{label:"Windows",data:[0,20,20,30,26,32],backgroundColor:"rgba(166,100,255,0.8)",borderColor:"transparent",pointBorderColor:"transparent",pointBackgroundColor:"transparent",pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2},{label:"Android",data:[0,30,15,40,38,45],backgroundColor:"#40cae4",borderColor:"#40cae4",pointBorderColor:"#40cae4",pointBackgroundColor:"#40cae4",pointRadius:2,pointBorderWidth:2,pointHoverBorderWidth:2}]}})
// 	Morris.Area({element:"bounce-rate",data:[{y:"2010",a:28},{y:"2011",a:40},{y:"2012",a:36},{y:"2013",a:48},{y:"2014",a:32},{y:"2015",a:42},{y:"2016",a:30}],xkey:"y",ykeys:["a"],labels:["Sales"],behaveLikeLine:!0,ymax:60,resize:!0,pointSize:0,smooth:!0,gridTextColor:"#bfbfbf",gridLineColor:"#c3c3c3",numLines:6,gridtextSize:14,lineWidth:2,fillOpacity:.6,lineColors:["#F6BB42"],hideHover:"auto"}),Morris.Area({element:"area-chart",data:[{year:"2016-12-01",AvgSessionDuration:0,PagesSession:0},{year:"2016-12-02",AvgSessionDuration:150,PagesSession:90},{year:"2016-12-03",AvgSessionDuration:140,PagesSession:120},{year:"2016-12-04",AvgSessionDuration:105,PagesSession:240},{year:"2016-12-05",AvgSessionDuration:190,PagesSession:140},{year:"2016-12-06",AvgSessionDuration:230,PagesSession:250},{year:"2016-12-07",AvgSessionDuration:270,PagesSession:190}],xkey:"year",ykeys:["AvgSessionDuration","PagesSession"],labels:["Avg. Session Duration","Pages/Session"],behaveLikeLine:!0,ymax:300,resize:!0,pointSize:0,pointStrokeColors:["#C9BBAE","#F44336"],smooth:!1,gridLineColor:"#e3e3e3",numLines:6,gridtextSize:14,lineWidth:0,fillOpacity:.6,hideHover:"auto",lineColors:["#C9BBAE","#F44336"]}),s("#sp-line-total-sales").sparkline([14,12,4,9,3,6,11,10,13,9,14,11,16,20,15],{type:"line",width:"100%",height:"100px",lineColor:"#00BCD4",fillColor:"#00BCD4",spotColor:"",minSpotColor:"",maxSpotColor:"",highlightSpotColor:"",highlightLineColor:"",chartRangeMin:0,chartRangeMax:20}),s("#sp-bar-total-sales").sparkline([5,6,7,8,9,10,12,13,15,14,13,12,10,9,8,10,12,14,15,16,17,14,12,11,10,8],{type:"bar",width:"100%",height:"30px",barWidth:2,barSpacing:4,barColor:"#00BCD4"}),s("#sp-stacked-bar-total-sales").sparkline([[8,10],[12,8],[9,14],[8,11],[10,13],[7,11],[8,14],[9,12],[10,11],[12,14],[8,12],[9,12],[9,14]],{type:"bar",width:"100%",height:"30px",barWidth:4,barSpacing:6,stackedBarColor:["#FF5722","#009688"]}),s("#sp-tristate-bar-total-sales").sparkline([1,1,0,1,-1,-1,1,-1,0,0,1,1,0,-1,1,-1],{type:"tristate",height:"30",posBarColor:"#009688",negBarColor:"#FF5722",barWidth:4,barSpacing:5,zeroAxis:!1}),Morris.Bar({element:"monthly-sales",data:[{month:"Jan",sales:1835},{month:"Feb",sales:2356},{month:"Mar",sales:1459},{month:"Apr",sales:1289},{month:"May",sales:1647},{month:"Jun",sales:2156},{month:"Jul",sales:1835},{month:"Aug",sales:2356},{month:"Sep",sales:1459},{month:"Oct",sales:1289},{month:"Nov",sales:1647},{month:"Dec",sales:2156}],xkey:"month",ykeys:["sales"],labels:["Sales"],barGap:4,barSizeRatio:.3,gridTextColor:"#bfbfbf",gridLineColor:"#e3e3e3",numLines:5,gridtextSize:14,resize:!0,barColors:["#967ADC"],hideHover:"auto"})

// 	var r=!1
// 	r=!1;
// 	"rtl"==s("html").data("textdirection")&&(r=!0),!0===r&&s(".tweet-slider").attr("dir","rtl"),!0===r&&s(".fb-post-slider").attr("dir","rtl")}(window,document,jQuery)



! function(e, t, s) {
    "use strict";
    // s("#audience-list-scroll").perfectScrollbar({
    //     wheelPropagation: !0
    // }), 
    s("#sp-bar-total-cost").sparkline([5, 6, 7, 8, 9, 10, 12, 13, 15, 14, 13, 12, 10, 9, 8, 10, 12, 14, 15, 16, 17, 14, 12, 11, 10, 8], {
        type: "bar",
        width: "100%",
        height: "30px",
        barWidth: 2,
        barSpacing: 4,
        barColor: "#FF5722"
    }),
    s("#sp-tristate-bar-total-revenue").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1, 0, -1, 1, -1], {
        type: "tristate",
        height: "30",
        posBarColor: "#00BCD4",
        negBarColor: "#E91E63",
        barWidth: 4,
        barSpacing: 5,
        zeroAxis: !1
    });
    var i = s("#visitors-graph");
    new Chart(i, {
        type: "line",
        options: {
            responsive: !0,
            maintainAspectRatio: !1,
            legend: {
                display: !1
            },
            hover: {
                mode: "label"
            },
            scales: {
                xAxes: [{
                    display: !0,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: !1
                    }
                }],
                yAxes: [{
                    display: !0,
                    gridLines: {
                        color: "#f3f3f3",
                        drawTicks: !1
                    },
                    ticks: {
                        display: !0,
                        maxTicksLimit: 5
                    }
                }]
            },
            title: {
                display: !1
            }
        },
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                data: [0, 5, 22, 14, 28, 12, 24, 0],
                fill: !1,
                borderColor: "#FF4961",
                pointBorderColor: "#FF4961",
                pointBackgroundColor: "#FFF",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4
            }, {
                label: "My Second dataset",
                data: [0, 8, 30, 15, 12, 21, 14, 0],
                fill: !1,
                borderColor: "#00A5A8",
                pointBorderColor: "#00A5A8",
                pointBackgroundColor: "#FFF",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4
            }, {
                label: "My Third dataset - No bezier",
                data: [0, 20, 10, 45, 20, 36, 21, 0],
                fill: !1,
                borderColor: "#FF7D4D",
                pointBorderColor: "#FF7D4D",
                pointBackgroundColor: "#FFF",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4
            }]
        }
    })

    // s("#world-map-markers").vectorMap({
    //     map: "world_mill",
    //     backgroundColor: "#fff",
    //     zoomOnScroll: !1,
    //     series: {
    //         regions: [{
    //             values: visitorData,
    //             scale: ["#97E1CE", "#37BC9B"],
    //             normalizeFunction: "polynomial"
    //         }]
    //     },
    //     onRegionTipShow: function(e, t, i) {
    //         t.html(t.html() + " (Visitor - " + visitorData[i] + ")")
    //     }
    // })
    // Morris.Donut({
    //     element: "sessions-browser-donut-chart",
    //     data: [{
    //         label: "Chrome",
    //         value: 3500
    //     }, {
    //         label: "Firefox",
    //         value: 2500
    //     }, {
    //         label: "Safari",
    //         value: 2e3
    //     }, {
    //         label: "Opera",
    //         value: 1e3
    //     }, {
    //         label: "Internet Explorer",
    //         value: 500
    //     }],
    //     resize: !0,
    //     colors: ["#F6BB42", "#37BC9B", "#3BAFDA", "#DA4453", "#967ADC"]
    // })
    // var o = t.getElementById("line-stacked-area").getContext("2d")
    // new Chart(o, {
    //     type: "line",
    //     options: {
    //         responsive: !0,
    //         maintainAspectRatio: !1,
    //         pointDotStrokeWidth: 4,
    //         legend: {
    //             display: !1,
    //             labels: {
    //                 fontColor: "#FFF",
    //                 boxWidth: 10
    //             },
    //             position: "top"
    //         },
    //         hover: {
    //             mode: "label"
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: !1
    //             }],
    //             yAxes: [{
    //                 display: !0,
    //                 gridLines: {
    //                     color: "rgba(255,255,255, 0.3)",
    //                     drawTicks: !1,
    //                     drawBorder: !1
    //                 },
    //                 ticks: {
    //                     display: !1,
    //                     min: 0,
    //                     max: 70,
    //                     maxTicksLimit: 4
    //                 }
    //             }]
    //         },
    //         title: {
    //             display: !1,
    //             text: "Chart.js Line Chart - Legend"
    //         }
    //     },
    //     data: {
    //         labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
    //         datasets: [{
    //             label: "iOS",
    //             data: [0, 10, 5, 26, 12, 20],
    //             backgroundColor: "#eeda54",
    //             borderColor: "#eeda54",
    //             pointBorderColor: "#eeda54",
    //             pointBackgroundColor: "#eeda54",
    //             pointRadius: 2,
    //             pointBorderWidth: 2,
    //             pointHoverBorderWidth: 2
    //         }, {
    //             label: "Windows",
    //             data: [0, 20, 20, 30, 26, 32],
    //             backgroundColor: "rgba(166,100,255,0.8)",
    //             borderColor: "transparent",
    //             pointBorderColor: "transparent",
    //             pointBackgroundColor: "transparent",
    //             pointRadius: 2,
    //             pointBorderWidth: 2,
    //             pointHoverBorderWidth: 2
    //         }, {
    //             label: "Android",
    //             data: [0, 30, 15, 40, 38, 45],
    //             backgroundColor: "#40cae4",
    //             borderColor: "#40cae4",
    //             pointBorderColor: "#40cae4",
    //             pointBackgroundColor: "#40cae4",
    //             pointRadius: 2,
    //             pointBorderWidth: 2,
    //             pointHoverBorderWidth: 2
    //         }]
    //     }
    // })
    // Morris.Area({
    //     element: "bounce-rate",
    //     data: [{
    //         y: "2010",
    //         a: 28
    //     }, {
    //         y: "2011",
    //         a: 40
    //     }, {
    //         y: "2012",
    //         a: 36
    //     }, {
    //         y: "2013",
    //         a: 48
    //     }, {
    //         y: "2014",
    //         a: 32
    //     }, {
    //         y: "2015",
    //         a: 42
    //     }, {
    //         y: "2016",
    //         a: 30
    //     }],
    //     xkey: "y",
    //     ykeys: ["a"],
    //     labels: ["Sales"],
    //     behaveLikeLine: !0,
    //     ymax: 60,
    //     resize: !0,
    //     pointSize: 0,
    //     smooth: !0,
    //     gridTextColor: "#bfbfbf",
    //     gridLineColor: "#c3c3c3",
    //     numLines: 6,
    //     gridtextSize: 14,
    //     lineWidth: 2,
    //     fillOpacity: .6,
    //     lineColors: ["#F6BB42"],
    //     hideHover: "auto"
    // }), 
    // Morris.Area({
    //     element: "area-chart",
    //     data: [{
    //         year: "2016-12-01",
    //         AvgSessionDuration: 0,
    //         PagesSession: 0
    //     }, {
    //         year: "2016-12-02",
    //         AvgSessionDuration: 150,
    //         PagesSession: 90
    //     }, {
    //         year: "2016-12-03",
    //         AvgSessionDuration: 140,
    //         PagesSession: 120
    //     }, {
    //         year: "2016-12-04",
    //         AvgSessionDuration: 105,
    //         PagesSession: 240
    //     }, {
    //         year: "2016-12-05",
    //         AvgSessionDuration: 190,
    //         PagesSession: 140
    //     }, {
    //         year: "2016-12-06",
    //         AvgSessionDuration: 230,
    //         PagesSession: 250
    //     }, {
    //         year: "2016-12-07",
    //         AvgSessionDuration: 270,
    //         PagesSession: 190
    //     }],
    //     xkey: "year",
    //     ykeys: ["AvgSessionDuration", "PagesSession"],
    //     labels: ["Avg. Session Duration", "Pages/Session"],
    //     behaveLikeLine: !0,
    //     ymax: 300,
    //     resize: !0,
    //     pointSize: 0,
    //     pointStrokeColors: ["#C9BBAE", "#F44336"],
    //     smooth: !1,
    //     gridLineColor: "#e3e3e3",
    //     numLines: 6,
    //     gridtextSize: 14,
    //     lineWidth: 0,
    //     fillOpacity: .6,
    //     hideHover: "auto",
    //     lineColors: ["#C9BBAE", "#F44336"]
    // }), 
    s("#sp-line-total-sales").sparkline([14, 12, 4, 9, 3, 6, 11, 10, 13, 9, 14, 11, 16, 20, 15], {
        type: "line",
        width: "100%",
        height: "100px",
        lineColor: "#00BCD4",
        fillColor: "#00BCD4",
        spotColor: "",
        minSpotColor: "",
        maxSpotColor: "",
        highlightSpotColor: "",
        highlightLineColor: "",
        chartRangeMin: 0,
        chartRangeMax: 20
    }), 
    s("#sp-bar-total-sales").sparkline([5, 6, 7, 8, 9, 10, 12, 13, 15, 14, 13, 12, 10, 9, 8, 10, 12, 14, 15, 16, 17, 14, 12, 11, 10, 8], {
        type: "bar",
        width: "100%",
        height: "30px",
        barWidth: 2,
        barSpacing: 4,
        barColor: "#00BCD4"
    }), 
    s("#sp-stacked-bar-total-sales").sparkline([
        [8, 10],
        [12, 8],
        [9, 14],
        [8, 11],
        [10, 13],
        [7, 11],
        [8, 14],
        [9, 12],
        [10, 11],
        [12, 14],
        [8, 12],
        [9, 12],
        [9, 14]
    ], {
        type: "bar",
        width: "100%",
        height: "30px",
        barWidth: 4,
        barSpacing: 6,
        stackedBarColor: ["#FF5722", "#009688"]
    }), 
    s("#sp-tristate-bar-total-sales").sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1, 0, -1, 1, -1], {
        type: "tristate",
        height: "30",
        posBarColor: "#009688",
        negBarColor: "#FF5722",
        barWidth: 4,
        barSpacing: 5,
        zeroAxis: !1
    }), Morris.Bar({
        element: "monthly-sales",
        data: [{
            month: "Jan",
            sales: 1835
        }, {
            month: "Feb",
            sales: 2356
        }, {
            month: "Mar",
            sales: 1459
        }, {
            month: "Apr",
            sales: 1289
        }, {
            month: "May",
            sales: 1647
        }, {
            month: "Jun",
            sales: 2156
        }, {
            month: "Jul",
            sales: 1835
        }, {
            month: "Aug",
            sales: 2356
        }, {
            month: "Sep",
            sales: 1459
        }, {
            month: "Oct",
            sales: 1289
        }, {
            month: "Nov",
            sales: 1647
        }, {
            month: "Dec",
            sales: 2156
        }],
        xkey: "month",
        ykeys: ["sales"],
        labels: ["Sales"],
        barGap: 4,
        barSizeRatio: .3,
        gridTextColor: "#bfbfbf",
        gridLineColor: "#e3e3e3",
        numLines: 5,
        gridtextSize: 14,
        resize: !0,
        barColors: ["#967ADC"],
        hideHover: "auto"
    })

    var r = !1
    r = !1;
    "rtl" == s("html").data("textdirection") && (r = !0), !0 === r && s(".tweet-slider").attr("dir", "rtl"), !0 === r && s(".fb-post-slider").attr("dir", "rtl")
}(window, document, jQuery)
