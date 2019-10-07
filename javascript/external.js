var webmaps =
  [
    ["NowCOAST",
    "https://nowcoast.noaa.gov/",
    "A versatile tool for researchers, mariners and coastal residents alike. The default map screen is shown below. On the right side of the page there are a series of toolbars that control what is being projected onto the map including remotely sensed weather imagery and radar reflectivity. Also shown is the sites capability to track hurricanes by date, in this case Hurricane Dorian. While lacking in heavy statistical capabilities, the site provides users a customizable display of the U.S. coastline based on the parameters and extent of their choosing with the ability to return the values and qualities of selected variables by simply clicking on the point of interest. If I could recreate this site, the only change I could see making is the addition of a “NowCOAST for Research” page, similar to the NowCOAST for Mariners page visible on the top right of the page, which would be able to conduct some basic statistical tests of selected variables, though I do not know how that would be cleanly implemented."
    ],
    ["Earthquakes, Eruptions and Emissions",
    "https://volcano.si.axismaps.io/",
    "This interactive map produced by the Smithsonian displays basically what is in the title; recorded earthquakes, volcanic eruptions and high concentration of SO2 emissions over the course of almost 60 years. The user can select which types of events to focus on and even view the details of each event my mousing over the earthquake or eruption and clicking on any of these events will link you directly to the USGS page detailing the quake or eruption. The display can be changed to a globe view, which provides an interesting visual, and the speed of the time lapse can be changed to the user’s liking. What I found interesting is visualizing the order of events. Predictably, many cases unfolded in one or a few seismic events followed by an eruption, then SO2 emission with a magnitude often reflected by that of the eruption. If I had to rebuild this mapping tool, the only change I think would implement is the option to view the fault lines and names of major fault zones. This data is already available by clicking on the event but adding this to the visual could prove handy."
    ]
  ];

/*document.write("Where is my JS code?");

window.alert(5 + 6);

window.alert('5 + 6');

document.write('<h1>A heading</h1>');
document.write('<p>A sentence.</p>');


const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);


//A prompt box is used to prompt users to input a value before entering a page.
var user_name = window.prompt("Please enter your name", "Type your name here");
document.write("Hello, welcome "+user_name+"!");


x = 22;
y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33);


document.writeln("<button onclick='condition()'COnditionalTest</button>")

function condition()
  {
    x = confirm("Are you sure you want to proceed?");
    if(x)
    {
      document.writeln("You chose Okay!");
    }
    else
    {
      document.writeln("You chose Cancel!");
    }
  }
*/

function welcome()
{
  let a = " Please enter your name.";
  let b = "Type your name here.";

  //A prompt box is used to  prompt users to input a value before entering a page.
  user_name = window.prompt(a,b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}


document.write(message);

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
