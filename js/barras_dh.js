// https://bl.ocks.org/anonymous/bc5a9691a3417b403d4e8ade3297afa3/3a2434c1c2849e476791e581754ec27e055db4d6

var data2 = [
    {key: 'Argentina', value: 0.83, income: 22100, dh: 59.7},
    {key: 'Bolivia', value: 0.703, income: 8720, dh: 57.5},
    {key: 'Brazil', value: 0.761, income: 14700, dh: 63.8},
    {key: 'Canada', value: 0.922, income: 48900, dh: 72.3},
    {key: 'Chile', value: 0.847, income: 25100, dh: 62.3},
    {key: 'Colombia', value: 0.761, income: 14600, dh: 61.6},
    {key: 'Costa Rica', value: 0.794, income: 20300, dh: 71.2},
    {key: 'Ecuador', value: 0.758, income: 11400, dh: 59.3},
    {key: 'El Salvador', value: 0.667, income: 8780, dh: 63.5},
    {key: 'United States', value: 0.92, income: 62500, dh: 69.4},
    {key: 'Guatemala', value: 0.651, income: 8640, dh: 64.0},
    {key: 'Haiti', value: 0.503, income: 2910, dh: 37.2},
    {key: 'Honduras', value: 0.623, income: 5730, dh: 59.5},
    {key: 'Jamaica', value: 0.726, income: 9760, dh: 58.9},
    {key: 'Mexico', value: 0.767, income: 19800, dh: 64.7},
    {key: 'Nicaragua', value: 0.651, income: 5410, dh: 61.4},
    {key: 'Panama', value: 0.795, income: 31500, dh: 63.0},
    {key: 'Paraguay', value: 0.724, income: 12700, dh: 56.9},
    {key: 'Peru', value: 0.759, income: 12800, dh: 58.0},
    {key: 'Dominican Republic', value: 0.745, income: 18400, dh: 56.9},
    {key: 'Uruguay', value: 0.808, income: 21600, dh: 64.4},
    {key: 'Venezuela', value: 0.726, income: 8320, dh: 50.5}
  ];

    
  var w = 700;
  var h = 500;
  var margin = {
      top: 50,
      bottom: 100,
      left: 30,
      right: 20
  };
  var width = w - margin.left - margin.right;
  var height = h - margin.top - margin.bottom;
      
  var x = d3.scaleBand()
          .domain(data2.map(function(d){
              return d.key;
          }))
          .range([margin.left, width])
              .padding(0.1);
      
  var y = d3.scaleLinear()
          .domain([0, d3.max(data2, function(d){
              return d.value;
          })])
                  .range([height, margin.top])
  
  var yAxis = d3.axisLeft().scale(y)
  
  var paises = $(".pais")
  
  var svg = d3.select("body").append("svg")
            .attr("id", "chart2")
            .attr("width", w)
            .attr("height", h);
                      
            svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + margin.left + ",0)")
            .call(yAxis);
           
  
      svg.selectAll("rect")
          .data(data2)
          .enter()
              .append("rect")
                         .attr("class","bar")
                     .on("mouseover",function(){
                
                  d3.select(this)
                    .attr("fill","red")
                  
                      }) 				
                      .on("mouseout",function(){
               
                  d3.select(this)
                    .transition("colorfade")
                                  .duration(250)
                              .attr("fill",function(d){
                                return "rgb(" + Math.round(d.value*2) + "," 
                  + Math.round(d.value*2) + "," + Math.round(d.value*2) + ")";})
                          
              })
      
                      .attr("fill",function(d){
                        return "rgb(" + Math.round(d.value*2) + "," 
                  + Math.round(d.value*2) + "," + Math.round(d.value*2) + ")";})
                          
              .attr("x", function(d,i){
                 return x(d.key);
              })
                      .attr("width", x.bandwidth())    
                      .attr("y", height)   				
                      
                          .transition("bars")
                          .delay(function(d, i) {
                              return i * 50;
                          })
                          .duration(1000)
      
                     .attr("y", function(d,i){
                 return y(d.value);
              })   				
              .attr("height", function(d,i){
                        return height-y(d.value);
                      })  
                          
  
     svg.selectAll("rect") 			
                      .append("title")
                         .text(function(d) {
                             return d.key + ": " + d.value;
                         })
     
  
  
      svg.selectAll(".val-label")
          .data(data2)
          .enter()
              .append("text")
              .classed("val-label", true)
  
              .attr("x", function(d,i){
                  return x(d.key) + x.bandwidth()/2;
              })
                      .attr("y", height)   				
                      
                          .transition("label")
                          .delay(function(d, i) {
                              return i * 50;  // gives it a smoother effect
                          })
                          .duration(1000)
      
                     .attr("y", function(d,i){
                  return y(d.value) - 4;
              })
                      .attr("text-anchor","middle")
                      .text(function(d){return d.value});
    
        svg.selectAll(".bar-label")
              .data(data2)
                  .enter()
              .append("text")
              .classed("bar-label", true)
      
                          .attr("transform",function(d,i){
                        return "translate(" + (x(d.key) + x.bandwidth()/2 - 8 ) + "," + (height+15) + ")" 
                    + " rotate(45)" })
                       
                    .attr("text-anchor","left")
                      .text(function(d){return d.key})
      
      d3.select("#peo").on("click", function() {
    data2.sort(function(a, b,c) {
      return d3.ascending(a.key, b.key)
    })
    x.domain(data2.map(function(d) {
      return d.key;
    }));
    svg.selectAll(".bar")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key);
      })
  
    svg.selectAll(".val-label")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key) + x.bandwidth() / 2;
      })
  
    svg.selectAll(".bar-label")
      .transition()
      .duration(500)
      .attr("transform", function(d, i) {
        return "translate(" + (x(d.key) + x.bandwidth() / 2 - 8) + "," + (height + 15) + ")" + " rotate(45)"
      })
  
  })
  
  d3.select("#byValue2").on("click", function() {
    data2.sort(function(a, b,c) {
      return d3.descending(a.value, b.value)
    })
    x.domain(data2.map(function(d) {
      return d.key;
    }));
    svg.selectAll(".bar")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key);
      })
  
    svg.selectAll(".val-label")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key) + x.bandwidth() / 2;
      })
  
    svg.selectAll(".bar-label")
      .transition()
      .duration(500)
      .attr("transform", function(d, i) {
        return "translate(" + (x(d.key) + x.bandwidth() / 2 - 8) + "," + (height + 15) + ")" + " rotate(45)"
      })
  })
  
  
  d3.select("#byincome2").on("click", function() {
    data2.sort(function(a, b,c) {
      return d3.descending(a.income, b.income)
    })
    x.domain(data2.map(function(d) {
      return d.key;
    }));
    svg.selectAll(".bar")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key);
      })
  
    svg.selectAll(".val-label")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key) + x.bandwidth() / 2;
      })
  
    svg.selectAll(".bar-label")
      .transition()
      .duration(500)
      .attr("transform", function(d, i) {
        return "translate(" + (x(d.key) + x.bandwidth() / 2 - 8) + "," + (height + 15) + ")" + " rotate(45)"
      })
  })
  
  
  d3.select("#bydh2").on("click", function() {
    data2.sort(function(a, b,c,d) {
      return d3.descending(a.dh, b.dh)
    })
    x.domain(data2.map(function(d) {
      return d.key;
    }));
    svg.selectAll(".bar")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key);
      })
  
    svg.selectAll(".val-label")
      .transition()
      .duration(500)
      .attr("x", function(d, i) {
        return x(d.key) + x.bandwidth() / 2;
      })
  
    svg.selectAll(".bar-label")
      .transition()
      .duration(500)
      .attr("transform", function(d, i) {
        return "translate(" + (x(d.key) + x.bandwidth() / 2 - 8) + "," + (height + 15) + ")" + " rotate(45)"
      })
  })