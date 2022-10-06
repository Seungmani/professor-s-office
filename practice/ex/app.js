window.onload = function () {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {calcOnDemand: true});
    spread.fromJSON(jsonData);
    var excelIo = new GC.Spread.Excel.IO();
    document.getElementById('loadExcel').onclick = function () {
        var excelFile = document.getElementById("fileDemo").files[0];
        var password = document.getElementById('password').value;
        var incrementalEle = document.getElementById("incremental");
        var loadingStatus = document.getElementById("loadingStatus");
        incrementalEle.addEventListener('change', function (e) {
            document.getElementById('loading-container').style.display = incrementalEle.checked ? "block" : "none";
        });
        // here is excel IO API
        excelIo.open(excelFile, function (json) {
            var workbookObj = json;
            if (incrementalEle.checked) {
                spread.fromJSON(workbookObj, {
                    incrementalLoading: {
                        loading: function (progress, args) {
                            progress = progress * 100;
                            loadingStatus.value = progress;
                            console.log("current loading sheet", args.sheet && args.sheet.name());
                        },
                        loaded: function () {
                        }
                    }
                });
            } else {
            spread.fromJSON(workbookObj);
            }
        }, function (e) {
            // process error
            alert(e.errorMessage);
            if (e.errorCode === 2/*noPassword*/ || e.errorCode === 3 /*invalidPassword*/) {
                document.getElementById('password').onselect = null;
            }
        }, {password: password});
    };
    document.getElementById('saveExcel').onclick = function () {

        var fileName = document.getElementById('exportFileName').value;
        var password = document.getElementById('password').value;
        if (fileName.substr(-5, 5) !== '.xlsx') {
            fileName += '.xlsx';
        }

        var json = spread.toJSON();

        // here is excel IO API
        excelIo.save(json, function (blob) {
            saveAs(blob, fileName);
        }, function (e) {
            // process error
            console.log(e);
        }, {password: password});

    };
};
