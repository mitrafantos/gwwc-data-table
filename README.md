# Available on Heroku
[Take a look](https://gwwc-data-table.herokuapp.com/)

# Project structure
The table is rendered with [DataTables](https://datatables.net/) loaded through a CDN.  
A [jquery-csv](https://github.com/typeiii/jquery-csv) libraryis used to parse a CSV data source into a two-dimensional array.  
PHP files are included to let the app run on Heroku (thanks to [this guide](https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b)).  