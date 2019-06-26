const express = require('express');
const app = express();  /* you can have more than one */

/* Route handler */
app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

/* Dynamically configure port */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
