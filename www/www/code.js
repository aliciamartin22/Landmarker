
// Welcome to ZIM at http://zimjs.com - JavaScript Canvas Framework - Code Creativity!
// ZIM adds many conveniences, components and controls to CreateJS http://createjs.com
// Founded by Inventor Dan Zen - http://danzen.com - Canadian New Media Award Winner
// ZIM is free to use. You can donate to help improve ZIM at http://zimjs.com/donate

// REFERENCES
// http://zimjs.com/tips.html       http://zimjs.com/docs.html
// http://zimjs.com/learn.html      http://zimjs.com/about.html
// http://zimjs.com/examples.html   http://zimjs.com/code.html

require('@danzen/createjs');
const makeZIM = require('zimjs');
const zim = makeZIM(); // pass in true to use zim namespace **
const [zog,zid,zss,zgo,zum,zot,zop,zil,zet,zob,zik,zta] = zim.getGlobals();

// ** NAMESPACE (optional)
// ZIM often runs with just CreateJS and so a namespace is usually unnecessary
// Use const zim = makeZIM(true); to use a zim namespace
// The getGlobals() still must be run for the global functions
// If the namespace is used then note the following:
// 1. all ZIM colors must be prefixed with the namespace
    // const color = zim.light;
    // ZIM colors are just a convenience - html colors like "blue", "#333", "rgba(0,0,0,.2)" work
// 2. the ZIM classes and functions must start with the namespace:
    // const frame = new zim.Frame();
    // const circle = new zim.Circle();
    // let r = zim.rand();
    // zim.Ticker.add();

// SCALING OPTIONS
// scaling can have values as follows with full being the default
// "fit"    sets canvas and stage to dimensions and scales to fit inside window size
// "outside"    sets canvas and stage to dimensions and scales to fit outside window size
// "full"    sets stage to window size with no scaling
// "tagID"    add canvas to HTML tag of ID - set to dimensions if provided - no scaling

const scaling = "fit"; // this will resize to fit inside the screen dimensions
const width = 1024;
const height = 768;
const color = light;
const outerColor = darker;
// assets and path are the next two parameters - see https://zimjs.com/docs.html?item=Frame

const frame = new Frame(scaling, width, height, color, outerColor);
frame.on("ready", function() {
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    const stage = frame.stage;
    const stageW = frame.width;
    const stageH = frame.height;

    new Circle(100, blue).center().drag();

    // or without chaining - ew
    // const circle = new Circle(100, blue);
    // circle.center();
    // circle.drag();

    // or with STYLE
    // STYLE = {
    //     color:blue,
    //     center:true,
    //     drag:true
    // };
    // new Circle();

    // or with STYLE specifically to Circle objects
    // STYLE = {
    //     type:{
    //         Circle:{
    //             color:blue,
    //             center:true,
    //             drag:true
    //         }
    //     }
    // };
    // new Circle();

    // or with STYLE specifically for a group of objects
    // STYLE = {
    //     group:{
    //         blueThings:{
    //             color:blue,
    //             center:true,
    //             drag:true
    //         }
    //     }
    // };
    // new Circle({group:"blueThings"});


    stage.update(); // this is needed to show any changes

}); // end of ready