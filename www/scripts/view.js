var app = function(app){  //module pattern

    app.makeView = function (m , stage) {

      var stageW = stage.width;
      var stageH = stage.height;
      const v = {};

      STYLE = {
        type:{
          Tabs:{
            currentSelected:true,
            width:250,
            spacing:20,
          },
          Button:{
            width:80,
            height:70,
            corner:20,
            backgroundColor:"plum",
            rollBackgroundColor:"orchid",
            label:"",
		      }
        } 
      }

      const manager = v.manager = new Manager();

      // PAGE 1
      const page1 = v.page1 = new Container(stageW, stageH);

      let header = new Container().addTo(page1);
      v.page1.logo = new Label({text:m.title, color:"white", rollColor:"gold"}).addTo(header);
      let content = new Container(600,700).addTo(page1);
      v.dial = new Dial({backgroundColor:"royalblue"}).sca(2).center(content);
      v.dial.currentValue = m.data[0];

      let footer = v.page1.tabs = new Tabs({
        tabs:[
          new Button({
          icon: pizzazz.makeIcon("arrowhollow", "steelblue").rot(180),
          rollIcon: pizzazz.makeIcon("arrowhollow", "steelblue").rot(180),
          }),
          new Button({
            icon: pizzazz.makeIcon("arrowhollow", "steelblue"),
            rollIcon: pizzazz.makeIcon("arrowhollow", "steelblue"),
          }),
          new Button({
            icon: pizzazz.makeIcon("info", "steelblue"),
            rollIcon: pizzazz.makeIcon("info", "steelblue"),
          })
          ]
	    }).addTo(page1);

      manager.add(new Layout(page1, [
        {object:header, maxWidth:90, height:10, valign:"middle", marginTop:2},
        {object:content, height:75, marginTop:2, backgroundColor:"white"},
        {object:footer, maxWidth:90, height:7, marginTop:1}
      ], 2, "steelblue", true, null, stage)); //add new Shape() in place of null to see bounds
      // footer.outline();
      // header.outline();
      // content.outline();

      // PAGE 2
      const page2 = v.page2 = new Container(stageW, stageH);

      header = new Container().addTo(page2);
      v.page2.logo = new Label({text:m.title, color:"white", rollColor:"gold"}).addTo(header);
      content = new Container(600,700).addTo(page2);
      v.slider = new Slider({barColor:"turquoise"}).sca(1.5).center(content);
      v.slider.currentValue = m.data[0];
      footer = v.page2.tabs = v.page1.tabs.clone().addTo(page2);

      manager.add(new Layout(page2, [
        {object:header, maxWidth:90, height:10, valign:"middle", marginTop:2},
        {object:content, height:75, marginTop:2, backgroundColor:"white"},
        {object:footer, maxWidth:90, height:7, marginTop:1}
	    ], 2, "steelblue", true, null, stage));

      manager.add(v.pages = new Pages([
        {page:page1, swipe:[null, null, page2 , page2]},
        {page:page2, swipe:[null, null, page1, page1]}
      ], "slide", 500).addTo());

       // PAGE 3
       const page3 = v.page3 = new Container(stageW, stageH);

       header = new Container().addTo(page3);
       v.page3.logo = new Label({text:m.title, color:"white", rollColor:"gold"}).addTo(header);
       content = new Container(600,700).addTo(page3);
       v.slider = new Slider({barColor:"tomato"}).sca(1.5).center(content);
       v.slider.currentValue = m.data[0];
       footer = v.page3.tabs = v.page1.tabs.clone().addTo(page3);
 
       manager.add(new Layout(page3, [
        {object:header, maxWidth:90, height:10, valign:"middle", marginTop:2},
        {object:content, height:75, marginTop:2, backgroundColor:"white"},
        {object:footer, maxWidth:90, height:7, marginTop:1}
       ], 2, "steelblue", true, null, stage));
 
       manager.add(v.pages = new Pages([
         {page:page1, swipe:[null, null, page2 , page2]},
         {page:page2, swipe:[null, null, page3, page3]},
         {page:page3, swipe:[null, null, page1, page1]}
       ], "slide", 500).addTo());

      return v; // this goes to whatever called app.makeView
  }

return app; //module pattern

}(app||{}); //module pattern
