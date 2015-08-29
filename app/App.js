var React = require("react");
var router = require('./router.js');

router.run((Root) => {
  React.render(<Root/>, document.getElementById('app'));
});