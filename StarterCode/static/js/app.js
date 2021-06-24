//populate drop down menu
function dropdown(){
    var drop = d3.select("#selDataset")
    d3.json("samples.json").then((sampledata)=>{
        // console.log(sampledata);
        var names = sampledata.names;
        names.forEach((data)=>{
            drop.append("option")
            .text(data)
            .property("value",data);
        })
        var sample = names[0];
        metadata(sample);
        buildChart(sample);
    }
    )
  }
  dropdown();


//build metadata
function metadata(sampleid){
    d3.json("samples.json").then((sampledata)=>{
        var metaData = sampledata.metadata;
        var dataArray = metaData.filter(row=>row.id==sampleid);
        console.log(dataArray);
        var mainData = dataArray[0];
        var demoDisplay = d3.select("#sample-metadata");
        demoDisplay.html("");
        Object.entries(mainData).forEach(([key,value])=>{
            demoDisplay.append("h6").text(`${key} ${value}`);
  
        })
  })
  }


