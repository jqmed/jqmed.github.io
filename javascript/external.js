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

x = 22;
y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33);
*/

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
