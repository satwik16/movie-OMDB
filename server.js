const express = require('express');
const path = require('path'); // Add this line
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname, { extensions: ['html', 'js'] }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
