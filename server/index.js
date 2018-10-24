const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/message_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );

app.post("/api/messages",mc.create);
app.get("/api/messages",mc.read);
app.put("/api/messages/:id",mc.update);
app.delete("/api/messages/:id",mc.delete);

const port = 3001;
app.listen(port,()=> {
    console.log(`Server is listening on ${port}`);
});
