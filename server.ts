/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.static(__dirname + '/dist/tcg-pokemon'));

app.get('/*', cors(),function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/tcg-pokemon/index.html'));
});

app.listen(process.env.PORT || 3000);