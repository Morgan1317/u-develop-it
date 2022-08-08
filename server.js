const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());



// route to handle user req that arent supported by app
// it's a catch all route
app.use((req,res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Example app listening at http://localhost:${PORT}`);
  });