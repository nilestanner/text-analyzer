const textAnalyzer = {};

textAnalyzer.analyzer = (input) => {
  let hash = {};
  let output = {
    count: 0,
    unique: 0
  };
  const addToMap = (word) => {
    if (word !== '') {
      word = word.toLowerCase();
      if (hash[word] !== undefined) {
        hash[word].count++
      } else {
        output.unique++;
        hash[word] = {
          text: word,
          count: 1
        };
      }
    }
  };

  let words = input.match(/[a-z'\-]+/gi);

  words.forEach((word) => {
    addToMap(word);
  });
  output.count = words.length;
  output.words = Object.keys(hash).map((key) => {
    hash[key].percent = hash[key].count/output.count;
    return hash[key];
  }).sort((a, b) => {
    return b.count - a.count;
  });


  return output;
}

module.export = textAnalyzer
