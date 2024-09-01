// Standard file names for JS files are app.js and script.js
// I prefer app.js, but you can use either
// TODO: Write more explanations

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
