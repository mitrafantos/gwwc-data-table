$(document).ready(function () {
    $('#example').DataTable({
            "ajax": {
                    "url": "../data/table_src.csv",
                    "dataType": "text",
                    "dataSrc": function (csvdata) {
                            const result = $.csv.toArrays(csvdata);
                            return result;
                    },
            
            }
    });
});