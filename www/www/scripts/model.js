var app = function(app){  //module pattern

  app.makeModel = function () {
    const m = {};

    //Page 1
    m.title = "Landmarker"
	  m.slogan = "Come Learn Geography With Us!"

	  // Page 2
    m.instructions = "Drag the countries on the left to match the landmarks on the right!"
	  m.titlesArray = ["Brazil", "China", "Egypt", "India", "USA"];

	  m.shapes = {};
		  m.shapes.Brazil = frame.asset("BRASIL-christ-the-redeemer.png").sca(.18);
		  m.shapes.China = frame.asset("CHINA-great-wall-of-china.png").sca(.14);
		  m.shapes.Egypt = frame.asset("EGYPT-giza.png").sca(.18);
		  m.shapes.India = frame.asset("INDIA-taj-mahal.png").sca(.18);
		  m.shapes.USA = frame.asset("USA-statue-of-liberty.png").sca(.18);

	  // Page 3
 	 m.titlesArray2 = ["Australia", "France", "England", "Italy", "Japan"];

 	 m.shapes2 = {};
 		 m.shapes2.Australia = frame.asset("AUSTRALIA-opera-house.png").sca(.2);
 		 m.shapes2.France = frame.asset("FRANCE-louvre.png").sca(.18);
 		 m.shapes2.England = frame.asset("ENGLAND-tower-bridge.png").sca(.18);
 		 m.shapes2.Italy = frame.asset("ITALY-milan.png").sca(.18);
 		 m.shapes2.Japan = frame.asset("JAPAN-itsukushima-shrine.png").sca(.18);

	 // Page 4
 	 m.titlesArray3 = ["Belgium", "Germany", "Malaysia", "Mexico", "UAE"];

	 m.shapes3 = {};
		m.shapes3.Belgium = frame.asset("BELGIUM-atomium.png").sca(.18);
		m.shapes3.Germany = frame.asset("GERMANY-lubeck.png").sca(.18);
		m.shapes3.Malaysia = frame.asset("MALAYSIA-petronas-towers.png").sca(.18);
		m.shapes3.Mexico = frame.asset("MEXICO-temple-of-the-frescoes.png").sca(.2);
		m.shapes3.UAE = frame.asset("UAE-burj-al-arab.png").sca(.18);

	  // Page 5
	  m.accordionData = {
        menu:{
			"Europe":{
                "Belgium": [m.shapes3.Belgium],
                "France": [m.shapes2.France],
				"Germany": [m.shapes3.Germany],
				"Italy": [m.shapes2.Italy],
                "England": [m.shapes2.England],
            },
			"North America":{
				"United States": [m.shapes.USA],
				"Mexico": [m.shapes3.Mexico],
			},
			"South America":{
				"Brazil": [m.shapes.Brazil],
			},
            "Asia":{
				"India": [m.shapes.India],
				"Japan": [m.shapes2.Japan],
				"Malaysia": [m.shapes3.Malaysia],
				"United Arab Emirates": [m.shapes3.UAE],
				"China": [m.shapes.China],
			},
            "Africa":{
				"Egypt": [m.shapes.Egypt],
			},
            "Oceania":{
				"Australia": [m.shapes2.Australia],
			}
        },
        shade:true,
        dim:true,
        shift:true,
        bloom:true,
        whither:true,
        subStyles:[
            {
                backgroundColor:"mediumturquoise",
                color:white,
                rollBackgroundColor:"turquoise",
                rollColor:white,
            }
        ]
	  };

      return m;

  }
return app; //module pattern

}(app||{}); //module pattern
