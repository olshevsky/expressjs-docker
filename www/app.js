const express = require('express');
const app = express();
const router = express.Router();
const port = 8080;

router.get('/',function(req, res){
  res.send('<h1>Hello world!</h1>');
});

app.use(express.static(__dirname));
app.use(router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
})