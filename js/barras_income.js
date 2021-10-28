// https://bl.ocks.org/anonymous/bc5a9691a3417b403d4e8ade3297afa3/3a2434c1c2849e476791e581754ec27e055db4d6

var data1 = [
    {key: 'Argentina', value: 22100, income: 59.7, dh: 0.83},
    {key: 'Bolivia', value: 8720, income: 57.5, dh: 0.703},
    {key: 'Brazil', value: 14700, income: 63.8, dh: 0.761},
    {key: 'Canada', value: 48900, income: 72.3, dh: 0.922},
    {key: 'Chile', value: 25100, income: 62.3, dh: 0.847},
    {key: 'Colombia', value: 14600, income: 61.6, dh: 0.761},
    {key: 'Costa Rica', value: 20300, income: 71.2, dh: 0.794},
    {key: 'Ecuador', value: 11400, income: 59.3, dh: 0.758},
    {key: 'El Salvador', value: 8780, income: 63.5, dh: 0.667},
    {key: 'United States', value: 62500, income: 69.4, dh: 0.92},
    {key: 'Guatemala', value: 8640, income: 64.0, dh: 0.651},
    {key: 'Haiti', value: 2910, income: 37.2, dh: 0.503},
    {key: 'Honduras', value: 5730, income: 59.5, dh: 0.623},
    {key: 'Jamaica', value: 9760, income: 58.9, dh: 0.726},
    {key: 'Mexico', value: 19800, income: 64.7, dh: 0.767},
    {key: 'Nicaragua', value: 5410, income: 61.4, dh: 0.651},
    {key: 'Panama', value: 31500, income: 63.0, dh: 0.795},
    {key: 'Paraguay', value: 12700, income: 56.9, dh: 0.724},
    {key: 'Peru', value: 12800, income: 58.0, dh: 0.759},
    {key: 'Dominican Republic', value: 18400, income: 56.9, dh: 0.745},
    {key: 'Uruguay', value: 21600, income: 64.4, dh: 0.808},
    {key: 'Venezuela', value: 8320, income: 50.5, dh: 0.726}
  ];
      
  var w = $(window).width();
  var h = $(window).height();
  var margin = {
      top: 50,
      bottom: 100,
      left: $(window).width()/10,
      right: -$(window).width()*7/10
  };
  var width = (w - 30 - margin.right)/2;
  var height = (h - margin.top - margin.bottom)/2;
    
var x = d3.scaleBand()
        .domain(data1.map(function(d){
            return d.key;
        }))
        .range([margin.left, width])
    		.padding(0.1);
    
var y = d3.scaleLinear()
        .domain([0, d3.max(data1, function(d){
            return d.value;
        })])
				.range([height, margin.top])

var yAxis = d3.axisLeft().scale(y)

var paises = $(".pais")

var svg = d3.select("body").append("svg")
            .attr("id", "chart1")
            .attr("width", w)
            .attr("height", h);
    				
            svg.append("g")
            .attr("class","axis")
            .attr("transform","translate(" + margin.left + ",0)")
            .call(yAxis);
         

    svg.selectAll("rect")
        .data(data1)
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
        .data(data1)
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
            .data(data1)
        		.enter()
            .append("text")
            .classed("bar-label", true)
    
						.attr("transform",function(d,i){
      				return "translate(" + (x(d.key) + x.bandwidth()/2 - 8 ) + "," + (height+15) + ")" 
              	+ " rotate(45)" })
    				 
      			.attr("text-anchor","left")
    				.text(function(d){return d.key})
    
    d3.select("#byKey1").on("click", function() {
  data1.sort(function(a, b,c) {
    return d3.ascending(a.key, b.key)
  })
  x.domain(data1.map(function(d) {
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

d3.select("#byValue1").on("click", function() {
  data1.sort(function(a, b,c) {
    return d3.descending(a.value, b.value)
  })
  x.domain(data1.map(function(d) {
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


d3.select("#byincome1").on("click", function() {
  data1.sort(function(a, b,c) {
    return d3.descending(a.income, b.income)
  })
  x.domain(data1.map(function(d) {
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


d3.select("#bydh1").on("click", function() {
  data1.sort(function(a, b,c,d) {
    return d3.descending(a.dh, b.dh)
  })
  x.domain(data1.map(function(d) {
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
