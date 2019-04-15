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
            backgroundColor:"paleturquoise",
            rollBackgroundColor:"steelblue",
            label:"",
		      }
        }
      }

      const manager = v.manager = new Manager();

      // PAGE 1
      const page1 = v.page1 = new Container(stageW, stageH);

      let header = new Container().addTo(page1);
      v.page1.title = new Label({text:m.title, color:"steelblue"}).addTo(header);

      let content = new Container(600,700).addTo(page1);
      var logo = frame.asset("logo.png").centerReg(content).sca(.5).mov(0,-150);
      new Label({text:m.slogan, color:"#f09c23", size:52, lineHeight:64, lineWidth:500, align:"center"}).center(content).mov(0,200);

      let start = v.page1.tabs = new Tabs({
        tabs:[
          new Button({
    		    icon: pizzazz.makeIcon("play", "steelblue"),
    		    rollIcon: pizzazz.makeIcon("play", "paleturquoise"),
          })
          ]
	    }).addTo(page1);

      manager.add(new Layout(page1, [
        {object:header, maxWidth:90, height:10, valign:"middle", marginTop:4},
        {object:content, height:62, marginTop:2},
        {object:start, height:12, maxWidth:90, marginTop:0, valign:"middle", marginBottom:5}
      ], 5, white, true, null, stage)); //add new Shape() in place of null to see bounds
      // start.outline();
      // header.outline();
      // content.outline();

      // PAGE 2
      const page2 = v.page2 = new Container(stageW, stageH);

      header = new Container().addTo(page2);
      v.page2.title = new Label({text:m.title, color:"steelblue", rollColor:"paleturquoise"}).addTo(header);
      v.page2.logo2 = frame.asset("icon.png").addTo(header).sca(.18).mov(-50);

      content = new Container(600,700).addTo(page2);
      v.page2.instructions = new Label({text:m.instructions, color:"#f09c23", lineWidth: 500, align:"center", size:32, lineHeight: 40}).center(content).mov(0,-280);

    	var titles = new Container()
    		.center(content)
    		.mov(-150,-150);

    	makeTitles();

    	function makeTitles() {
    		shuffle(m.titlesArray);

    		var label;
    		loop(m.titlesArray, function(title, i) {
    			label = new Label(title, 40, "Arial", "steelblue", "turquoise")
    				.centerReg(titles)
    				.expand()
    				.pos(null, i * 100)
    			label.startX = label.x;
    			label.startY = label.y;
    		});
    	}

    	titles.drag();

    	var shapes = new Container()
    		.center(content)
    		.mov(150,-200)
    		.bot();

    	makeShapes();

    	function makeShapes() {

    		shuffle(m.titlesArray);

    		loop(m.titlesArray, function(title, i) {
    			var shape = m.shapes[title];
    			shape.title = title;
    			shape.loc(null, i * 100, shapes);
    		});
    	};

    	titles.on("pressup", function(e) {
    		title = e.target;
    		var result = loop(shapes, function(shape, i) {
    			if (shape.hitTestBounds(title)) {
    				if (title.text == shape.title) {
    					title.removeFrom();
    					shape.removeFrom();
    					stage.update(); // play a sound ;-) or add some points!
    					if (shapes.numChildren == 0) {
                frame.asset("complete.wav").play();
    						message.show();
    					}
    					return true;
    				}
    			}
    		});
    		if (!result) title.animate({x:title.startX, y:title.startY}, 700);
    	});

    	var message = new Pane({
    	  width:300,
    	  height:300,
    	  titleBar:"Woohoo!",
    	  titleBarColor:white,
    	  backgroundColor:"#f09c23",
    	  label: new Label({text:"You're a landmark wizard. Play again, or click the right arrow to try harder ones!", size:28, color:white, lineWidth:280, lineHeight:30}),
    	  close:true
       });
       message.on("close", function() {
    	  makeTitles();
    	  makeShapes();
    	  stage.update();
       });

          // footer = v.page2.tabs = v.page1.tabs.clone().addTo(page2);
          let footer = v.page2.tabs = new Tabs({
            tabs:[
              new Button({
    		    icon: pizzazz.makeIcon("home", "mediumturquoise"),
    		    rollIcon: pizzazz.makeIcon("home", "mediumturquoise"),
              }),
              new Button({
                icon: pizzazz.makeIcon("arrowhollow", "mediumturquoise").rot(180),
                rollIcon: pizzazz.makeIcon("arrowhollow", "mediumturquoise").rot(180),
              }),
              new Button({
    			icon: pizzazz.makeIcon("arrowhollow", "mediumturquoise"),
                rollIcon: pizzazz.makeIcon("arrowhollow", "mediumturquoise"),
    		  }),
    		  new Button({
    		  icon: pizzazz.makeIcon("info", "mediumturquoise").rot(180),
    		  rollIcon: pizzazz.makeIcon("info", "mediumturquoise").rot(180),
    		})
              ]
    	    }).addTo(page2);

          manager.add(new Layout(page2, [
            {object:header, maxWidth:90, height:12, valign:"middle"},
            {object:content, height:72, backgroundColor:"white"},
            {object:footer, maxWidth:90, height:12, marginTop:1}
    	    ], 2, "mediumturquoise", true, null, stage));


	  // PAGE 3
	  const page3 = v.page3 = new Container(stageW, stageH);

	  header = new Container().addTo(page3);
	  v.page3.title = new Label({text:m.title, color:"steelblue", rollColor:"paleturquoise"}).addTo(header);
    v.page3.logo3 = frame.asset("icon.png").clone().addTo(header);

	  content = new Container(600,700).addTo(page3);
	   var titles2 = new Container()
		   .center(content)
		   .mov(-150,-200);

	   makeTitles2();

	   function makeTitles2() {
		   shuffle(m.titlesArray2);

		   var label;
		   loop(m.titlesArray2, function(title, i) {
			   label = new Label(title, 40, "Arial", "steelblue", "turquoise")
				   .centerReg(titles2)
				   .expand()
				   .pos(null, i * 100)
			   label.startX = label.x;
			   label.startY = label.y;
		   });
	   }

	   titles2.drag();

	   var shapes2 = new Container()
		   .center(content)
		   .mov(150,-250)
		   .bot();

	   makeShapes2();

	   function makeShapes2() {

		   shuffle(m.titlesArray2);

		   loop(m.titlesArray2, function(title, i) {
			   var shape = m.shapes2[title];
			   shape.title = title;
			   shape.loc(null, i * 100, shapes2);
		   });
	   };

	   titles2.on("pressup", function(e) {
		   title = e.target;
		   var result = loop(shapes2, function(shape, i) {
			   if (shape.hitTestBounds(title)) {
				   if (title.text == shape.title) {
					   title.removeFrom();
					   shape.removeFrom();
					   stage.update(); // play a sound ;-) or add some points!
					   if (shapes2.numChildren == 0) {
               frame.asset("complete.wav").play();
						   message2.show();
					   }
					   return true;
				   }
			   }
		   });
		   if (!result) title.animate({x:title.startX, y:title.startY}, 700);
	   });

	   var message2 = new Pane({
		 width:300,
		 height:300,
		 titleBar:"Woohoo!",
		 titleBarColor:"white",
		 backgroundColor:"#f09c23",
		 label: new Label({text:"You've really proved yourself- Good Work! Click the right arrow to try the hardest set.", size:28, color:white, lineWidth:280, lineHeight:30}),
		 close:true
	   });
	   message2.on("close", function() {
  		 makeTitles2();
  		 makeShapes2();
  		 stage.update();
	   });

	  footer = v.page3.tabs = v.page2.tabs.clone().addTo(page3);

	  manager.add(new Layout(page3, [
    {object:header, maxWidth:90, height:12, valign:"middle"},
		{object:content, height:72, backgroundColor:"white"},
		{object:footer, maxWidth:90, height:12, marginTop:1}
	   ], 2, "mediumturquoise", true, null, stage));

	   // PAGE 4
 	  const page4 = v.page4 = new Container(stageW, stageH);

 	  header = new Container().addTo(page4);
 	  v.page4.title = new Label({text:m.title, color:"steelblue", rollColor:"paleturquoise"}).addTo(header);
    v.page4.logo4 = frame.asset("icon.png").clone().addTo(header);

 	  content = new Container(600,700).addTo(page4);
 	   var titles3 = new Container()
 		   .center(content)
 		   .mov(-150,-200);

 	   makeTitles3();

 	   function makeTitles3() {
 		   shuffle(m.titlesArray3);

 		   var label;
 		   loop(m.titlesArray3, function(title, i) {
 			   label = new Label(title, 40, "Arial", "steelblue", "turquoise")
 				   .centerReg(titles3)
 				   .expand()
 				   .pos(null, i * 100)
 			   label.startX = label.x;
 			   label.startY = label.y;
 		   });
 	   }

 	   titles3.drag();

 	   var shapes3 = new Container()
 		   .center(content)
 		   .mov(150,-250)
 		   .bot();

 	   makeShapes3();

 	   function makeShapes3() {

 		   shuffle(m.titlesArray3);

 		   loop(m.titlesArray3, function(title, i) {
 			   var shape = m.shapes3[title];
 			   shape.title = title;
 			   shape.loc(null, i * 100, shapes3);
 		   });
 	   };

 	   titles3.on("pressup", function(e) {
 		   title = e.target;
 		   var result = loop(shapes3, function(shape, i) {
 			   if (shape.hitTestBounds(title)) {
 				   if (title.text == shape.title) {
 					   title.removeFrom();
 					   shape.removeFrom();
 					   stage.update(); // play a sound ;-) or add some points!
 					   if (shapes3.numChildren == 0) {
               frame.asset("complete.wav").play();
 						   message3.show();
 					   }
 					   return true;
 				   }
 			   }
 		   });
 		   if (!result) title.animate({x:title.startX, y:title.startY}, 700);
 	   });

 	   var message3 = new Pane({
 		 width:300,
 		 height:300,
 		 titleBar:"Woohoo!",
 		 titleBarColor:"white",
 		 backgroundColor:"#f09c23",
 		 label: new Label({text:"You're the ultimate geographer! Click the right arrow to see more information about these important landmarks.", size:28, color:white, lineWidth:280, lineHeight:30}),
 		 close:true
 	   });
 	   message3.on("close", function() {
   		 makeTitles3();
   		 makeShapes3();
   		 stage.update();
 	   });

 	  footer = v.page4.tabs = v.page2.tabs.clone().addTo(page4);

 	  manager.add(new Layout(page4, [
    {object:header, maxWidth:90, height:12, valign:"middle"},
 		{object:content, height:72, backgroundColor:"white"},
 		{object:footer, maxWidth:90, height:12, marginTop:1}
 	   ], 2, "mediumturquoise", true, null, stage));


     // PAGE 5
     const page5 = v.page5 = new Container(stageW, stageH);

     header = new Container().addTo(page5);
     v.page5.title = new Label({text:m.title, color:"steelblue", rollColor:"paleturquoise"}).addTo(header);
     v.page5.logo5 = frame.asset("icon.png").clone().addTo(header);

     content = new Container(600,700).addTo(page5);
	    var list = new List({
	        list:m.accordionData,
	        titleBar:"World Landmarks",
	        titleBarBackgroundColor:"#f09c23",
	        titleBarColor:white,
	        titleBarHeight:40,
	        scrollBarActive:false,
	        currentSelected:false,
	        // indent:20,
	        height:650,
	        viewNum:13.5,
	        boundary:new Boundary(0,0,stageW-200,stageH-200),
	        borderWidth:-1,
	        shadowBlur:-1,
	        backdropColor:white,
	        backgroundColor:"steelblue",
	        color:white,
	        rollBackgroundColor:"#f09c23",
	        rollColor:white,
	     }).center(content);
	     list.selectedIndex = -1;

	     list.originalList.subStyles = {};

	     footer = v.page5.tabs = v.page2.tabs.clone().addTo(page5);

       manager.add(new Layout(page5, [
        {object:header, maxWidth:90, height:12, valign:"middle"},
        {object:content, height:72, backgroundColor:"white"},
        {object:footer, maxWidth:90, height:12, marginTop:1}
       ], 2, "mediumturquoise", true, null, stage));

       // Layout Manager
       manager.add(v.pages = new Pages([
         {page:page1, swipe:[page2, null, null , null]},
         {page:page2, swipe:[page3, page1, null, null]},
         {page:page3, swipe:[page4, page2, null, null]},
    		 {page:page4, swipe:[page5, page3, null, null]},
    		 {page:page5, swipe:[null, page4, null, null]},
       ], "slide", 500).addTo());

      return v; // this goes to whatever called app.makeView
  }

return app; //module pattern

}(app||{}); //module pattern
