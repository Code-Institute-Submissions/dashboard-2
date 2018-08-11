queue()
    .defer(d3.json, "/test/haadb")
    .await(makeGraphs);

function makeGraphs(error, testhaadb) {
    if (error) {
        console.error("makeGraphs error on receiving dataset:", error.statusText);
        throw error;
    }

//clean date data
//     var yearFormat = d3.time.format("%Y-%m-%d %H:%M:%S");
    testhaadb.forEach(function (d) {
        // d.date = yearFormat(d.date);
        // d.Year = d.date.getFullYear();
        // // d["year_died"] = yearFormat.parse(d["year_died"]);
        // // // d["year_died"].setDate(1);
        d["year_died"] = +d["year_died"];
    });

 //Create a Crossfilter instance
    var ndx = crossfilter(testhaadb);
    //Define Dimensions

    var fNameDim = ndx.dimension(function (d) {
        return d["first"];
    });
    // var lNameDim = ndx.dimension(function (d) {
    //     return d["last"];
    // });
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
        return d["year_died"];
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

    // var causeofinjDim = ndx.dimension(function (d) {
    //     return d["cause_of_inj"];
    // });
    //
    // var typeofinjDim = ndx.dimension(function (d) {
    //     return d["type_of_inj"];
    // });

    var deadinjDim = ndx.dimension(function (d) {
        return d["deadinj"];
    });

    var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");

    // testhaadb.forEach(function (d) {
    //     d["year_died"] = dateFormat.parse(d["year_died"]);
    //     d["year_died"].setDate(1);
    //     d["deadinj"] = +d["deadinj"];
    // });



    //Calculate metrics
    var numDeathsByGender = genderDim.group();
    var numDeathsByCause = causeOfDeathDim.group();
    var numDeathsByJob = jobDim.group();
    var numDeathsByFamily = familyDim.group();
    var numDeathsByHouse = houseDim.group();
    var numDeathsByYear = yearDim.group();
    var numDeathsByStat = maritalDim.group();
    var numDeathsByFname = fNameDim.group();
    // var numDeathsByLname = lNameDim.group();
    var numDeathsBySline = storyDim.group();
    var numDeathsByPartner = partnerDim.group();
    // var numInjsByCause = causeofinjDim.group();
    // var numInjsByType = typeofinjDim.group();
    var numDeadorInj = deadinjDim.group();
    // var deathsByYear = yearDim.group().reduceSum(function (d) {
    //     return d["total_deaths"];
    // });
    // var deathGroup = yearDim.group();
    //
    // var all = ndx.groupAll();
    // var totalDeaths = ndx.groupAll().reduceSum(function (d) {
    //     return d["total_deaths"];
    // });
    // var all = ndx.groupAll()
    // var totalDeaths = ndx.groupAll().reduceSum(function (d){
    //     return d["deadinj"];
    // });



    //Charts
    var jobChart = dc.pieChart("#job-chart");
    var genderChart = dc.pieChart("#gender-chart");
    var familyChart = dc.rowChart("#family-chart");
    var deathChart = dc.pieChart("#death-chart");
    var houseChart = dc.pieChart("#house-chart");
    var yearChart = dc.lineChart("#year-chart")
    //var yearChart = dc.pieChart("#year-chart");
    var maritalChart = dc.pieChart("#marital-chart");
    var minDate = yearDim.bottom(1)[0]["year_died"];
    var maxDate = yearDim.top(1)[0]["year_died"];
    var fnameChart = dc.rowChart("#fname-chart");
    // var lnameChart = dc.rowChart("#lname-chart");
    var storyChart = dc.pieChart("#story-chart");
    var partnerChart = dc.pieChart("#partner-chart");
    // var causeinjChart = dc.pieChart("#causeinj-chart");
    // var typeinjChart = dc.pieChart("#typeinj-chart");
    var deadorinjChart = dc.pieChart("#deadinj-chart");
    // var totalDeathsND = dc.numberDisplay("#total-deaths-nd");
    //
    //
    // totalDeathsND
    //     .formatNumber(d3.format("d"))
    //     .valueAccessor(function (d) {
    //         return d;
    //     })
    //     .group(all);

    jobChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(jobDim)
        .group(numDeathsByJob);

    maritalChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(maritalDim)
        .group(numDeathsByStat);

    houseChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(400)
        .radius(150)
        .innerRadius(60)
        .transitionDuration(1500)
        .dimension(houseDim)
        .group(numDeathsByHouse);

    genderChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(genderDim)
        .group(numDeathsByGender);

    // causeinjChart
    //     .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
    //     .height(220)
    //     .radius(90)
    //     .innerRadius(40)
    //     .transitionDuration(1500)
    //     .dimension(causeofinjDim)
    //     .group(numInjsByCause);
    //
    // typeinjChart
    //     .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
    //     .height(220)
    //     .radius(90)
    //     .innerRadius(40)
    //     .transitionDuration(1500)
    //     .dimension(typeofinjDim)
    //     .group(numInjsByType);

    deadorinjChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(400)
        .radius(120)
        .innerRadius(10)
        .transitionDuration(1500)
        .dimension(deadinjDim)
        .group(numDeadorInj);

    deathChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(800)
        .width(800)
        .radius(250)
        .innerRadius(0)
        .transitionDuration(1500)
        .dimension(causeOfDeathDim)
        .group(numDeathsByCause);

    familyChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(500)
        .width(800)
        .transitionDuration(1500)
        .dimension(familyDim)
        .group(numDeathsByFamily)
        .xAxis().ticks(6);



    storyChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(440)
        .radius(100)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(storyDim)
        .group(numDeathsBySline);


    // yearChart
    //     .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
    //     .height(600)
    //     .radius(100)
    //     .innerRadius(40)
    //     .transitionDuration(1500)
    //     .dimension(yearDim)
    //     .group(numDeathsByYear);


    partnerChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(440)
        .radius(100)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(partnerDim)
        .group(numDeathsByPartner);


    fnameChart
        .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
        .height(800)
        .width(800)
        .transitionDuration(1500)
        .dimension(fNameDim)
        .group(numDeathsByFname)
        .xAxis().ticks(3);

    // lnameChart
    //     .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
    //     .height(400)
    //     .width(400)
    //     .transitionDuration(1500)
    //     .dimension(lNameDim)
    //     .group(numDeathsByLname)
    //     .xAxis().ticks(3);


    // yearChart
    //     .ordinalColors(["#0060ca", "#fcdc74", "#91ceff", "#ff4d4d", "#74dbef"])
    //     .height(500)
    //     .width(800)
    //     .transitionDuration(1500)
    //     .dimension(yearDim)
    //     .group(numDeathsByYear)
    //     .xAxis().ticks(6);


    yearChart
        .ordinalColors(["#374283", "#fff000"])
        .width(800)
        .height(300)
        .margins({top: 30, right: 50, bottom: 50, left: 50})
        .dimension(yearDim)
        .group(numDeathsByYear)
        .renderArea(true)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .elasticY(true)
        .xAxisLabel("Year")
        .yAxis().ticks(6);



    dc.renderAll();
}