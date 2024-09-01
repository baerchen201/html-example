// Standard file names for JS files are app.js and script.js
// I prefer app.js, but you can use either
// TODO: Write even more explanations

//* Example code

// Create a function
function function_name(argument1, argument2) {
  // Do something
  console.log(argument1, argument2);

  // Return a value
  return "Hello, Functions!";
}

// Call the function
function_name("Hello,", "World!");

// Add a year to a "Date" object
function add_year(date_object) {
  // Just increment year
  date_object.setFullYear(date_object.getFullYear() + 1);
  return date_object;
}

function variable_examples() {
  // Create local variable, cannot be accessed outside of this function
  // It may be assigned a value immediately "let <name> = <value>;", or just be left empty.
  let local;

  // Create a new "Date" object and store it in the "local" variable
  local = new Date();

  // Local variables can still be passed as arguments and used by functions.
  add_year(local);

  ////////////////

  // Create constant variable, cannot be changed after assignment or accessed outside of this function
  const constant = new URL("https://example.com");

  // Trying to change the value directly will fail
  constant = new URL("https://baerchen201.github.io/html-example"); //! ERROR

  // However, the properties of the object may be changed, even in a constant
  constant.host = "baerchen201.github.io";
  constant.pathname = "/html-example";

  ////////////////

  // Create normal variable, same as "let" (local), but older and will probably get deprecated soon
  var variable;

  // You can assign functions to variables
  variable = function (argument) {
    variable = argument; // Replaces itself
  };

  // Or pass functions as arguments
  variable(console.log);

  // Now "variable" is the same as "console.log"
  variable("Hello, Variables!");
}

//* Actual code used on the website

// TODO: Simplify more
function show_textbox_content(textbox_id) {
  // Get textbox by id
  let textbox = document.getElementById(textbox_id);

  // Initialize local variable "text"
  let text;

  // Check if the textbox exists
  if (textbox) {
    // If yes, get the text from the textbox
    text = textbox.value;
  } else {
    // If no, put some error text instead
    text = "< The specified textbox could not be found >";
  }

  // Do something if the text is undefined, null or empty.
  switch (text) {
    case undefined:
    case null:
      // Put error message, because most elements do not have an ".value" property.
      // In that case, the resulting value stored in "text" would be undefined
      // Also put a null check for good measure
      text =
        "< The specified textbox is of invalid type, please use a textarea or input element >";
      break;

    case "":
      // If the text is empty, put this instead of an actual empty message
      // It's just more user-friendly that way
      text = "< EMPTY >";
      break;
  }

  // Finally, print/alert the text
  window.alert(text);
}
