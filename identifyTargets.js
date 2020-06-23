let text = document.body.innerText;
text = text.replace(/[^A-Za-z]/g, " ");
let words = text.split(" ");
words = words.filter(e => e !== "")

console.log(words)

let wordCounts = words.reduce(function(accumulator, currentValue) {
    if (typeof accumulator[currentValue] == 'undefined'){
        accumulator[currentValue] = 1;
    } else {
        accumulator[currentValue] += 1;
    }
    return accumulator;
}, {});

console.log(wordCounts)

// Consider tokenizing

// Sorting (hope it doesn't take too long)

let pct = 0.20; // Placeholder for user-defined % of words
let n = Object.keys(wordCounts).length;
let nTargets = Math.round(pct * n);

let nMostFrequent = Object.entries(wordCounts)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, nTargets)
                            .map(a => a[0])

console.log(nMostFrequent) // An array of English words

// Exclude certain words (option)

// Deal with tense and voice complications (extra)