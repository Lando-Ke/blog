module.exports = visnup
var npm = require('./npm.js')
var output = require('./utils/output.js')

var handsomeFace = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 237, 236, 236, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 236, 235, 233, 237, 235, 233, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 235, 233, 232, 235, 235, 234, 233, 236, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 237, 235, 232, 232, 234, 233, 233, 232, 232, 233, 232, 232, 235, 232, 233, 234, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 232, 232, 232, 239, 238, 235, 233, 232, 232, 232, 232, 232, 232, 232, 233, 235, 232, 233, 233, 232, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 234, 234, 232, 233, 234, 233, 234, 235, 233, 235, 60, 238, 238, 234, 234, 233, 234, 233, 238, 251, 246, 233, 233, 232, 0, 0, 0, 0, 0, 0],
  [0, 0, 233, 233, 233, 232, 232, 239, 249, 251, 252, 231, 231, 188, 250, 254, 59, 60, 255, 231, 231, 231, 252, 235, 239, 235, 232, 233, 0, 0, 0, 0, 0, 0],
  [0, 0, 232, 233, 232, 232, 232, 248, 231, 231, 231, 231, 231, 231, 231, 254, 238, 254, 231, 231, 231, 231, 231, 252, 233, 235, 237, 233, 234, 0, 0, 0, 0, 0],
  [0, 0, 233, 232, 232, 232, 248, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 251, 233, 233, 233, 236, 233, 0, 0, 0, 0],
  [232, 233, 233, 232, 232, 246, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 249, 233, 234, 234, 0, 0, 0, 0],
  [232, 232, 232, 232, 233, 249, 231, 255, 255, 255, 255, 254, 109, 60, 239, 237, 238, 237, 235, 235, 235, 235, 236, 235, 235, 235, 234, 232, 232, 232, 232, 232, 233, 0],
  [0, 232, 232, 233, 233, 233, 233, 233, 233, 233, 233, 233, 235, 236, 238, 238, 235, 188, 254, 254, 145, 236, 252, 254, 254, 254, 254, 249, 236, 235, 232, 232, 233, 0],
  [0, 0, 233, 237, 249, 239, 233, 252, 231, 231, 231, 231, 231, 231, 254, 235, 235, 254, 231, 231, 251, 235, 237, 231, 231, 231, 231, 7, 237, 235, 232, 233, 233, 0],
  [0, 0, 0, 0, 233, 248, 239, 233, 231, 231, 231, 231, 254, 233, 233, 235, 254, 255, 231, 254, 237, 236, 254, 239, 235, 235, 233, 233, 232, 232, 233, 232, 0, 0],
  [0, 0, 0, 232, 233, 246, 255, 255, 236, 236, 236, 236, 236, 255, 231, 231, 231, 231, 231, 231, 252, 234, 248, 231, 231, 231, 231, 248, 232, 232, 232, 0, 0, 0],
  [0, 0, 0, 0, 235, 237, 7, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 255, 238, 235, 7, 231, 231, 231, 246, 232, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 235, 103, 188, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 231, 252, 232, 238, 231, 231, 255, 244, 232, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 235, 236, 103, 146, 253, 255, 231, 231, 231, 231, 231, 253, 251, 250, 250, 250, 246, 232, 235, 152, 255, 146, 66, 233, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 233, 103, 146, 146, 146, 146, 254, 231, 231, 231, 109, 103, 146, 255, 188, 239, 240, 103, 255, 253, 103, 238, 234, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 232, 235, 109, 146, 146, 146, 146, 146, 252, 152, 146, 146, 146, 146, 146, 146, 146, 146, 146, 146, 103, 235, 233, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 235, 235, 103, 146, 146, 146, 146, 146, 146, 188, 188, 188, 188, 188, 188, 152, 146, 146, 146, 66, 235, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 233, 235, 66, 146, 146, 146, 146, 152, 255, 146, 240, 239, 241, 109, 146, 146, 146, 103, 233, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 237, 109, 146, 146, 146, 146, 146, 254, 231, 231, 188, 146, 146, 146, 103, 233, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 233, 237, 60, 103, 146, 146, 146, 146, 146, 103, 66, 60, 235, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 232, 233, 233, 236, 235, 237, 235, 237, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function visnup (args, cb) {
  handsomeFace.forEach(function (line) {
    output(line.map(function (ch) {
      return '\u001b[' + (ch ? '48;5;' + ch : ch) + 'm'
    }).join(' '))
  })

  var c = args.shift()
  if (c) npm.commands[c](args, cb)
  else cb()
}
