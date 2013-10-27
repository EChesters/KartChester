var Point = require('./point_server.js');

function NodeParser() {
  this.parse = function(map) {
    var nodes = [];

    for(var index = 0; index < map.length; index++)
    {
      var id = map[index]["id"];
      var x = map[index]["x"];
      var y = map[index]["y"];

      nodes.push(new Point(x, y, id));
    }

    return nodes;
  }
}

module.exports = NodeParser;
