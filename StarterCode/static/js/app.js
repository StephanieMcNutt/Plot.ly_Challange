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