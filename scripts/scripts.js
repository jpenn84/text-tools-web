function copyOutputText() {
    // Get the text field
    var copyText = document.getElementById("outputText");
  
    // Select the text field
    copyText.select();

    // For mobile devices. numbers are default min and max bounds of Bootstrap textarea
    copyText.setSelectionRange(0, 524287);
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }