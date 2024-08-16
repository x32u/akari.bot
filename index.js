const express = require('express');
const app = express();
const port = 3001;
app.use(express.static('public'));
app.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/akaribot')
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});