// Logic to show alert only if clearing text before copying
var textCopied = false;

function copyOutputText() {
  // Get the text field
  var copyText = document.getElementById("outputText");

  // Select the text field
  copyText.select();

  // For mobile devices. numbers are default min and max bounds of Bootstrap textarea
  copyText.setSelectionRange(0, 524287);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // allow clearText method to suppress confirmation dialog
  textCopied = true;
}

function clearText() {
  // If text exists in either text box and has not yet been copied, show confirmation dialog
  if (!textCopied && ($("#inputText").val().trim().length > 0 || $("#outputText").val().trim().length > 0))
    if (!confirm("Clear all?")) return;
  $("#inputText").val("");
  $("#outputText").val("");
  textCopied = false;
}