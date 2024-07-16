const express = require('express');  
const fetch = require('node-fetch');  
const app = express();  
const port = 3000;  
  
app.set('view engine', 'ejs');  
  
app.get('/', (req, res) => {  
  res.render('index');  
});  
  
app.get('/chat', async (req, res) => {  
  const message = req.query.message;  
  const response = await fetch(`testbackenedapp.azurewebsites.net/chat?message=${message}`);  
  const data = await response.text();  
  res.send(data);  
});  
  
app.listen(port, () => {  
  console.log(`Frontend listening at http://localhost:${port}`);  
});  
