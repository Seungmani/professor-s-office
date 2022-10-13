window.onload = function() {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {
        sheetCount: 1
    });
    var sheet = spread.getSheet(0);
    var person = {
        name: 'Wang feng',
        age: 25,
        gender: 'Male',
        address: {
            postcode: '710075'
        }
    };
    var source = new GC.Spread.Sheets.Bindings.CellBindingSource(person);
    sheet.setBindingPath(2, 2, 'name');
    sheet.setBindingPath(3, 2, 'age');
    sheet.setBindingPath(4, 2, 'gender');
    sheet.setBindingPath(5, 2, 'address.postcode');
    sheet.setDataSource(source);
};