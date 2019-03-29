var app = function(app){ //module pattern

    app.makeController = function (m, v, stage) {
      const c = {};

      v.dial.on("change", ()=>{
        zog(v.dial.currentValue);
        m.data[0] = v.dial.currentValue;
        m.updateData();
      })

        v.dial.change(()=>{

     })

     v.slider.on("change", ()=>{
        zog(v.slider.currentValue);
        m.data[1] = v.slider.currentValue;
        m.updateData();
      })


	const hs = new HotSpots ([
		{page:v.page1, rect:v.page1.logo, call:()=>{zog("clicking on hotspot")}},
    {page:v.page2, rect:v.page2.logo, call:()=>{v.pages.go(v.page2, "left");}},
    {page:v.page3, rect:v.page3.logo, call:()=>{v.pages.go(v.page3, "left");}},
    {page:v.page1, rect:v.page1.tabs.buttons[1], call:()=>{v.pages.go(v.page2, "down");}},
    {page:v.page2, rect:v.page2.tabs.buttons[2], call:()=>{v.pages.go(v.page1, "down");}},
    {page:v.page3, rect:v.page3.tabs.buttons[0], call:()=>{v.pages.go(v.page3, "up");}},
	]);
	hs.show();

      frame.on("resize", () => {

        v.manager.resize();

        stage.update();
      })

      stage.update();
      return c;

  }
return app; //module pattern
}(app||{}); //module pattern
