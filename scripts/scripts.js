// Logic to show alert only if clearing text before copying
var textCopied = false;

function copyOutputText() {
  // Get the text from the visible output textarea
  let copyText;
  if ($("#startUpperCase").is(":checked")) {
    copyText = document.getElementById("outputTextUpper");
  } else {
    copyText = document.getElementById("outputTextLower");
  }

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
  let inputText = $("#inputText");
  let outputTextUpper = $("#outputTextUpper")
  let outputTextLower = $("#outputTextLower")
  let startUpperCase = $("#startUpperCase")

  // If text exists in either text box and has not yet been copied, show confirmation dialog
  if (!textCopied && (
      inputText.val().trim().length > 0
      || (outputTextUpper.val().trim().length > 0) && startUpperCase.is(":checked")
      || (outputTextLower.val().trim().length > 0) && !startUpperCase.is(":checked")
    )
  )
    if (!confirm("Clear all?")) return;
  inputText.val("");
  outputTextUpper.val("");
  outputTextLower.val("");
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
        let obj = JSON.parse(JSON.stringify(response));
        //$("#outputText").val(obj.convertedText);
        $("#outputTextUpper").val(obj.outputUpperCase);
        $("#outputTextLower").val(obj.outputLowerCase);
      });
  } else {
    alert("Input text is blank")
  }
}

function switchCase() {
  if ($("#startUpperCase").is(":checked")) {
    $("#outputLower").hide()
    $("#outputUpper").show()
  } else {
    $("#outputUpper").hide()
    $("#outputLower").show()
  }
}