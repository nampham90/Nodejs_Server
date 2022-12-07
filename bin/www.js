var app = require('../app');

const PORT = 3000;

app.get("/", (req,res)=> {
    res.send('Nam Pham');
})

app.listen(PORT, () => {
    console.log(`Server running at : http://localhost: ${PORT}`);
})