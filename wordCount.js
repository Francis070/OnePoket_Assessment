const { isUtf8 } = require("buffer");
const fs = require("fs");

function countWrds(str) {      // function to count the number of words present in the string.
    str = str.trim();

    if (str === '') {     // When the string is empty.
      return 0;
    }

    const words = str.split(/\s+/);
    return words.length;
}

let countWords = async () =>{

    let words = 0;
    fs.readFile('data.txt', 'utf-8', (err, data) => {  // async function to read the file
        if (err) throw err;
        // console.log(data);

        words = countWrds(data);   // calling the function to count the words.
        console.log(words);     // printing the result in the terminal.
    })

};

countWords();