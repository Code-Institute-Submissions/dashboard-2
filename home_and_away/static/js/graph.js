queue()
    .defer(d3.json, "/test/haadb")
    .await(makeGraphs);

function makeGraphs(error, testhaadb) {
    if (error) {
        console.error("makeGraphs error on receiving dataset:", error.statusText);
        throw error;
    }

//clean date data

    testhaadb.forEach(function (d) {
        d["year_died"] = +d["year_died"];
    });

 //Create a Crossfilter instance
    var ndx = crossfilter(testhaadb);
    //Define Dimensions

    var testhaadbDeaths = testhaadb;
     testhaadbDeaths.forEach(function (d) {
        d["year_died"] = new Date(d["year_died"], 0, 1);
    });


    var fNameDim = ndx.dimension(function (d) {
        return d["first"];
    });
   
    var genderDim = ndx.dimension(function (d) {
        return d["gender"];
    });
    var causeOfDeathDim = ndx.dimension(function (d) {
        return d["cause_of_death"];
    });

    var jobDim = ndx.dimension(function (d) {
        return d["job"];
    });

    var storyDim = ndx.dimension(function (d) {
        return d["storyline"];
    });

   
    var yearDim = ndx.dimension(function (d) {
        return d["year_died"] ? d["year_died"] : 0;
    });

    var familyDim = ndx.dimension(function (d) {
        return d["family"];
    });

    var houseDim = ndx.dimension(function (d) {
        return d["house"];
    });

    var partnerDim = ndx.dimension(function (d) {
        return d["partner"];
    });

    var maritalDim = ndx.dimension(function (d) {
        return d["marital_stat"];
    });

   

    var deadinjDim = ndx.dimension(function (d) {
        return d["deadinj"];
    });



    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");

   
    //Calculate metrics
    var numDeathsByGender = genderDim.group();
    var numDeathsByCause = causeOfDeathDim.group();
    var numDeathsByJob = jobDim.group();
    var numDeathsByFamily = familyDim.group();
    var numDeathsByHouse = houseDim.group();
    var numDeathsByYear = yearDim.group();
    var numDeathsByStat = maritalDim.group();
    var numDeathsByFname = fNameDim.group();
    var numDeathsBySline = storyDim.group();
    var numDeathsByPartner = partnerDim.group();
    var numDeadorInj = deadinjDim.group();
    



    //Charts
    var jobChart = dc.pieChart("#job-chart");
    var genderChart = dc.pieChart("#gender-chart");
    var familyChart = dc.rowChart("#family-chart");
    var deathChart = dc.pieChart("#death-chart");
    var houseChart = dc.pieChart("#house-chart");
    var yearChart = dc.barChart("#year-chart")
    var maritalChart = dc.pieChart("#marital-chart");
    var minDate = yearDim.bottom(1)[0]["year_died"];
    var maxDate = yearDim.top(1)[0]["year_died"];
    var fnameChart = dc.pieChart("#fname-chart");
    var storyChart = dc.pieChart("#story-chart");
    // var partnerChart = dc.rowChart("#partner-chart");
    var deadorinjChart = dc.pieChart("#deadinj-chart");
   

    //The Dead & the Injured//
    deadorinjChart
        .ordinalColors(["#ff5359", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(350)
        .radius(150)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(deadinjDim)
        .group(numDeadorInj)
        .legend(dc.legend());


    //Cause of death chart//
    deathChart
        .ordinalColors(["#ff5349", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(650)
        .radius(280)
        // .innerRadius(10)
        .transitionDuration(1500)
        .dimension(causeOfDeathDim)
        .group(numDeathsByCause)
        .legend(dc.legend());
    
    //Gender Chart//
    genderChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(235)
        .radius(100)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(genderDim)
        .group(numDeathsByGender)
        .legend(dc.legend());
        
    //Storyline chart//    
    storyChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(640)
        .radius(250)
        // .innerRadius(60)
        .transitionDuration(1500)
        .dimension(storyDim)
        .group(numDeathsBySline)
        .legend(dc.legend());
    
    
    //Job chart//
    jobChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(380)
        .radius(110)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(jobDim)
        .renderLabel(false)
        .group(numDeathsByJob)
        .legend(dc.legend());
    
    
    
    //Marital status chart//
    maritalChart
        .ordinalColors(["#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(200)
        .radius(90)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(maritalDim)
        .group(numDeathsByStat)
        .renderLabel(false)
        .legend(dc.legend());
        
    
    //House chart//
    houseChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(300)
        .radius(90)
        .transitionDuration(1500)
        .dimension(houseDim)
        .group(numDeathsByHouse)
        .renderLabel(false)
        .legend(dc.legend());
    
    //Year of death chart//
    yearChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .width(800)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(yearDim)
        .group(numDeathsByYear)
        .brushOn(false)
        // .renderArea(true)
        .x(d3.time.scale().domain([minDate, maxDate]))
        // makes bars thicker, solution found on StackOverflow mentioned in README
        .xUnits(function () {
            return 25;
        })
        .transitionDuration(500)
        //makes the bar chart clickable, solution found on StackOverflow and mentioned in README
        .on("renderlet", function (yearChart) {
        yearChart.selectAll("rect.bar").on("click", yearChart.onClick);
        })
        .centerBar(true)
        .elasticY(true)
        .renderHorizontalGridLines(true)
        .xAxisLabel("Year of death or injury")
        .yAxisLabel("Strewth, deaths or injurys per year")
        .yAxis()
        .ticks(8);
    
    
   
    
    
    
    
    
    
    
    
        
    
    fnameChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(800)
        .radius(300)
        .transitionDuration(1500)
        .dimension(fNameDim)
        .group(numDeathsByFname)
        .legend(dc.legend());
        
    
    
    
    
    







   




    familyChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(500)
        .width(420)
        .transitionDuration(1500)
        .dimension(familyDim)
        .group(numDeathsByFamily)
        .elasticX(true)
        .gap(3)
        .xAxis().ticks(3);







    // partnerChart
    //     .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
    //     .height(700)
    //     .width(400)
    //     .transitionDuration(1500)
    //     //solution found online at dc-js.github.io//
    //     .dimension(partnerDim)
    //     .group(numDeathsByPartner)
    //     .legend(dc.legend());



    



    dc.renderAll();
}