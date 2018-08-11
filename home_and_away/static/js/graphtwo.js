queue()
    .defer(d3.json, "/test/haadb")
    .await(makeGraphs);

function makeGraphs(error, testhaadb) {
    if (error) {
        console.error("makeGraphs error on receiving dataset:", error.statusText);
        throw error;
    }


    //Define Dimensions

    var firstNameDim = ndx.dimension(function (d) {
        return d["first_name"];
    });
    var secondNameDim = ndx.dimension(function (d) {
        return d["second_name"];
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

    var familyDim = ndx.dimension(function (d) {
        return d["family"];
    });


    //Calculate metrics
    var numDeathsByGender = genderDim.group();
    var numDeathsByCause = causeOfDeathDim.group();
    var numDeathsByJob = jobDim.group();
    var numDeathsByFamily = familyDim.group();

    //Charts
    var jobChart = dc.lineChart("#job-chart");
    var genderChart = dc.rowChart("#gender-chart");
    var familyChart = dc.rowChart("#family-chart");


    jobChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .width(300)
        .height(250)
        .dimension(jobDim)
        .group(numDeathsByJob)
        .xAxis().ticks(4);

    genderChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .width(300)
        .height(250)
        .dimension(genderDim)
        .group(numDeathsByGender)
        .xAxis().ticks(4);

    familyChart
        .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
        .height(220)
        .radius(90)
        .innerRadius(40)
        .transitionDuration(1500)
        .dimension(family)
        .group(numDeathsByFamily);

    dc.renderAll();
}