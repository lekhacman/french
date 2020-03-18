const fs = require('fs');
const pattern = /(([\w/-])+((\s\([\w/]+\))+)?)+/gi

const content = fs.readFileSync('./word-list.txt', 'utf8')

// const cleanData = content.split('\n')
//   .map(l => l.trim())
//   .flatMap(ln => {
//     const list = []
//     let vocab;
//     while ((vocab = pattern.exec(ln)) !== null) {
//       list.push(vocab[0])
//     }
//     return list
//   })
const wordList = content.split('\n')

function toText(data) {
  fs.writeFileSync('./out.txt', data.join("\n"))
}

function toJson(data) {
  fs.writeFileSync(
    './pure-word-list.json',
    JSON.stringify(data)
  )
}
toJson(wordList)
