var canvas = document.getElementsByTagName('canvas')[0],
    context = canvas.getContext('2d'),
    textarea = document.getElementsByTagName('textarea')[0],
    colors = {
      'white': 'white', '0xffffff': 'white', '#ffffff': 'white',
      'black': 'black', '0x000000': 'black', '#000000': 'black',
      'red': 'red', '0xff0000': 'red', '#ff0000': 'red',
      'green': 'green', '0x00ff00': 'green', '#00ff00': 'green',
      'blue': 'blue', '0x0000ff': 'blue', '#0000ff': 'blue',
      'yellow': 'yellow', '0xffff00': 'yellow', '#ffff00': 'yellow',
      'gray': 'gray', '0xc0c0c0': 'gray', '#c0c0c0': 'gray'
    },
    instructions = {
      pen: function (color) {
        context.strokeStyle = colors[color];
      },
      fill: function (color) {
        context.fillStyle = colors[color];
      },
      width: function (width) {
        context.lineWidth = width;
      },
      line: function (params) {
        context.moveTo(params[0], params[1]);
        context.lineTo(params[2], params[3]);
      },
      circle: function (params) {
        context.arc(params[0], params[1], params[2], 0, 6.283185307179586);
      },
      box: function (params) {
        context.rect(params[0], params[1],
                     params[2] - params[0],
                     params[3] - params[1]);
      },
      background: function (color) {
        canvas.style.background = colors[color];
      }
    };

// background
canvas.style.background = 'black';

// pen
context.strokeStyle = 'white';

function draw() {
  var data = JSON.parse(textarea.value), key;

  data.forEach(function (item) {
    context.beginPath();

    for ( key in item )
      instructions[key](item[key])

    if ( context.fillStyle != 'rgba(0, 0, 0, 0)' )
      context.fill();

    context.stroke();
  })
}
