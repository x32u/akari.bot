const express = require('express');
const app = express();
const fs = require('fs');
const port = 3001;
app.use(express.static('public'));
app.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/akaribot')
});
app.use((req, res, next) => {
    const filePath = `${__dirname}/public${req.path}.html`;
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        next();
    }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});