// Standard file names for JS files are app.js and script.js
// I prefer app.js, but you can use either
// TODO: Write explanations

// TODO: Simplify
function show_textbox_content(textbox_id) {
  let textbox = document.getElementById(textbox_id);

  let text;

  if (!textbox) {
    text = "< The specified textbox could not be found >";
  } else {
    text = textbox.value;
  }

  switch (text) {
    case undefined:
    case null:
      text =
        "< The specified textbox is of invalid type, please use a textarea or input element >";
      break;

    case "":
      text = "< EMPTY >";
      break;
  }

  window.alert(text);
}
