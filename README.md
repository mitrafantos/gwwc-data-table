# Available on Heroku
[Take a look](https://gwwc-data-table-test.herokuapp.com/)

# Project structure
The table is rendered with [DataTables](https://datatables.net/). The scripts are loaded through CDN.
Using [jquery-csv](https://github.com/typeiii/jquery-csv) to parse a CSV data source into a two-dimensional array.
PHP files are included to let the app run on Heroku (thanks to [this guide](https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b))