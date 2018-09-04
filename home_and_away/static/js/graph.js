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
    var fnameChart = dc.rowChart("#fname-chart");
    var storyChart = dc.pieChart("#story-chart");
    var partnerChart = dc.pieChart("#partner-chart");
    var deadorinjChart = dc.pieChart("#deadinj-chart");
   

    
    deadorinjChart
        .ordinalColors(["#ff5359", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(350)
        .width(350)
        .radius(120)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(deadinjDim)
        .group(numDeadorInj)
        .legend(dc.legend());



    deathChart
        .ordinalColors(["#ff5349", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(650)
        .width(650)
        .radius(200)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(causeOfDeathDim)
        .group(numDeathsByCause)
        .legend(dc.legend());
    
    
    genderChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(220)
        .radius(90)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(genderDim)
        .group(numDeathsByGender)
        .legend(dc.legend());
        
        
    storyChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])

        .height(700)
        .width(700)
        .radius(250)
        // .innerRadius(60)
        .transitionDuration(1500)
        .dimension(storyDim)
        .group(numDeathsBySline)
        .legend(dc.legend());
    
    
    fnameChart
        .ordinalColors(["#e3256b"])
        .height(800)
        .width(600)
        .transitionDuration(1500)
        .dimension(fNameDim)
        .group(numDeathsByFname)
        .xAxis().ticks(3);
        
    
    maritalChart
        .ordinalColors(["#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(300)
        .width(300)
        .radius(90)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(maritalDim)
        .group(numDeathsByStat)
        .legend(dc.legend());
    
    
    
    jobChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(400)
        .width(400)
        .radius(150)
        .transitionDuration(1500)
        .dimension(jobDim)
        .group(numDeathsByJob)
        .legend(dc.legend());



    houseChart
        .ordinalColors(["#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(400)
        .width(400)
        .radius(150)
        .transitionDuration(1500)
        .dimension(houseDim)
        .group(numDeathsByHouse)
        .legend(dc.legend());



   




    familyChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(500)
        .width(800)
        .transitionDuration(1500)
        .dimension(familyDim)
        .group(numDeathsByFamily)
        .xAxis().ticks(6);






    partnerChart
        .ordinalColors(["#ff5359", "#ff6e4a", "#ff7538", "#ffa343", "#ffcf48", "#fdfc74", "#b2ec5d", "#1df914", "#1cac78", "#1cd3a2", "#1fcecb", "#1dacd6", "#1f75fe", "#5d76cb", "#7442c8", "#8f509d", "#fb7efd", "#ff1dce", "#c0448f", "#ff43a4", "#f75394", "#e3256b", "#de5d83", "#c8385a", "#fc2847", "#ff9baa", "#cb4154"])
        .height(700)
        .width(700)
        .radius(200)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(partnerDim)
        .group(numDeathsByPartner)
        .legend(dc.legend());



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
            return 30;
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
        // .x(d3.time.scale().domain([minDate, maxDate]))
        // .elasticY(true)
        // .xAxisLabel("Year")
        // .yAxis().ticks(6);



    dc.renderAll();
}