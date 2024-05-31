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

function submitText() {
  let trimmedInputString = $("#inputText").val().trim();
  if (trimmedInputString.length > 0) {
    $.post("https://api1.joshualeepenn.com/mocking-text",
      JSON.stringify({
        inputText: trimmedInputString,
        startUpperCase: $("#startUpperCase").is(":checked")
      }),
      function (response) {
        // TODO: Handle response, Issue #5
        console.log(JSON.stringify(response));
      });
  } else {
    alert("Input text is blank")
  }
}
