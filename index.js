const express= require("express");
const app = express();
console.log(app);
let port =3001;
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})