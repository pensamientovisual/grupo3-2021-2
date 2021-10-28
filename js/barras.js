// https://bl.ocks.org/anonymous/bc5a9691a3417b403d4e8ade3297afa3/3a2434c1c2849e476791e581754ec27e055db4d6

var data = [
    {key: 'Argentina', value: 59.7, income: 22100, dh: 0.83},
    {key: 'Bolivia', value: 57.5, income: 8720, dh: 0.703},
    {key: 'Brazil', value: 63.8, income: 14700, dh: 0.761},
    {key: 'Canada', value: 72.3, income: 48900, dh: 0.922},
    {key: 'Chile', value: 62.3, income: 25100, dh: 0.847},
    {key: 'Colombia', value: 61.6, income: 14600, dh: 0.761},
    {key: 'Costa Rica', value: 71.2, income: 20300, dh: 0.794},
    {key: 'Ecuador', value: 59.3, income: 11400, dh: 0.758},
    {key: 'El Salvador', value: 63.5, income: 8780, dh: 0.667},
    {key: 'United States', value: 69.4, income: 62500, dh: 0.92},
    {key: 'Guatemala', value: 64.0, income: 8640, dh: 0.651},
    {key: 'Haiti', value: 37.2, income: 2910, dh: 0.503},
    {key: 'Honduras', value: 59.5, income: 5730, dh: 0.623},
    {key: 'Jamaica', value: 58.9, income: 9760, dh: 0.726},
    {key: 'Mexico', value: 64.7, income: 19800, dh: 0.767},
    {key: 'Nicaragua', value: 61.4, income: 5410, dh: 0.651},
    {key: 'Panama', value: 63.0, income: 31500, dh: 0.795},
    {key: 'Paraguay', value: 56.9, income: 12700, dh: 0.724},
    {key: 'Peru', value: 58.0, income: 12800, dh: 0.759},
    {key: 'Dominican Republic', value: 56.9, income: 18400, dh: 0.745},
    {key: 'Uruguay', value: 64.4, income: 21600, dh: 0.808},
    {key: 'Venezuela', value: 50.5, income: 8320, dh: 0.726}
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
        .domain(data.map(function(d){
            return d.key;
        }))
        .range([margin.left, width])
    		.padding(0.1);
    
var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.value;
        })])
				.range([height, margin.top])

var yAxis = d3.axisLeft().scale(y)

var paises = $(".pais")

var svg = d3.select("body").append("svg")
            .attr("id", "chart")
            .attr("width", w)
            .attr("height", h);
    				
						svg.append("g")
						.attr("class","axis")
						.attr("transform","translate(" + margin.left + ",0)")
						.call(yAxis);
         

    svg.selectAll("rect")
        .data(data)
        .enter()
            .append("rect")
   					.attr("class","bar")
       			.on("mouseover",function(){
                d3.select(this)
                .attr("fill","orange")
                
    				})
    				.on("mouseout",function(){
              d3.select(this)
              .transition("colorfade")
              .duration(250)
              .attr("fill","#db6800")
            })
            .attr("fill","#db6800")
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
        .data(data)
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
            .data(data)
        		.enter()
            .append("text")
            .classed("bar-label", true)
    
						.attr("transform",function(d,i){
      				return "translate(" + (x(d.key) + x.bandwidth()/2 - 8 ) + "," + (height+15) + ")" 
              	+ " rotate(45)" })
    				 
      			.attr("text-anchor","left")
    				.text(function(d){return d.key})
    
    d3.select("#byKey").on("click", function() {
  data.sort(function(a, b,c) {
    return d3.ascending(a.key, b.key)
  })
  x.domain(data.map(function(d) {
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

d3.select("#byValue").on("click", function() {
  data.sort(function(a, b,c) {
    return d3.descending(a.value, b.value)
  })
  x.domain(data.map(function(d) {
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


d3.select("#byincome").on("click", function() {
  data.sort(function(a, b,c) {
    return d3.descending(a.income, b.income)
  })
  x.domain(data.map(function(d) {
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


d3.select("#bydh").on("click", function() {
  data.sort(function(a, b,c,d) {
    return d3.descending(a.dh, b.dh)
  })
  x.domain(data.map(function(d) {
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
