const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
  res.send('this is our first get, getit ?')
})

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
