
function process(key) {
  var input;
  if(!key) {
    input = document.getElementById("textInput").value;
  } else if (key === 'dorian') {
    input = dorianBook;
  } else if (key === 'sense') {
    input = senseBook;
  }
  console.log(textAnalyzer.analyzer(input));
}
