var app = function(app){ //module pattern

  app.makeController = function (m, v, stage) {
    const c = {};

	const hs = new HotSpots ([
    {page:v.page2, rect:v.page2.title, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page3, rect:v.page3.title, call:()=>{v.pages.go(v.page1, "left");}},
		{page:v.page4, rect:v.page4.title, call:()=>{v.pages.go(v.page1, "left");}},
		{page:v.page5, rect:v.page5.title, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page2, rect:v.page2.logo2, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page3, rect:v.page3.logo2, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page4, rect:v.page4.logo2, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page5, rect:v.page5.logo2, call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page1, rect:v.page1.tabs.buttons[0], call:()=>{v.pages.go(v.page2, "right");}},
		{page:v.page2, rect:v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
    {page:v.page2, rect:v.page2.tabs.buttons[1], call:()=>{v.pages.go(v.page1, "left");}},
    {page:v.page2, rect:v.page2.tabs.buttons[2], call:()=>{v.pages.go(v.page3, "right");}},
		{page:v.page2, rect:v.page2.tabs.buttons[3], call:()=>{v.pages.go(v.page5, "down");}},
		{page:v.page3, rect:v.page3.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
    {page:v.page3, rect:v.page3.tabs.buttons[1], call:()=>{v.pages.go(v.page2, "left");}},
    {page:v.page3, rect:v.page3.tabs.buttons[2], call:()=>{v.pages.go(v.page4, "right");}},
		{page:v.page3, rect:v.page3.tabs.buttons[3], call:()=>{v.pages.go(v.page5, "down");}},
		{page:v.page4, rect:v.page4.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
    {page:v.page4, rect:v.page4.tabs.buttons[1], call:()=>{v.pages.go(v.page3, "left");}},
    {page:v.page4, rect:v.page4.tabs.buttons[2], call:()=>{v.pages.go(v.page5, "right");}},
		{page:v.page4, rect:v.page4.tabs.buttons[3], call:()=>{v.pages.go(v.page5, "down");}},
		{page:v.page5, rect:v.page5.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
    {page:v.page5, rect:v.page5.tabs.buttons[1], call:()=>{v.pages.go(v.page4, "left");}},
    {page:v.page5, rect:v.page5.tabs.buttons[2], call:()=>{zog("clicking on hotspot")}},
    {page:v.page5, rect:v.page5.tabs.buttons[3], call:()=>{v.pages.go(v.pages.lastPage, "up")}}
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
