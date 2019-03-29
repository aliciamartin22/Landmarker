var app = function(app){  //module pattern


    app.makeModel = function () {
      const m = {};

	  // localStorage.clear(); //if you ever need to clear local storage, run this command
      if(localStorage && localStorage.exampleData) {
        m.data = JSON.parse(localStorage.exampleData);
      } else {
        m.data = [2,0];
      }

      m.updateData = function() {
        zog("updating");
        localStorage.exampleData = JSON.stringify(m.data);
      }

      m.title = "Alicia's Mobile App"
      return m;
  }
return app; //module pattern

}(app||{}); //module pattern
