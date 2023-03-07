function ListOfEmployee () {
    this.employeeArr = [];

    this.moreEmployee = function (empl) {
        this.employeeArr.push(empl);
    }

    this.findIndexEmployee = function (id) {
        var indexFind = -1;
        indexFind =  this.employeeArr.findIndex(function(empl) {

        return empl.account == id;
    })
    return indexFind;
    }

    this.deleteEmployee = function (id) {
        var index = this.findIndexEmployee(id);
        // console.log(index);

        if (index > -1) {
            this.employeeArr.splice(index,1);
        }
    }

    this.updateEmployee = function (empl) {
        var index = this.findIndexEmployee(empl.account);
        if (index > -1) {
            this.employeeArr[index] = empl;
        }
    }

}


ListOfEmployee.prototype.searchName = function (keyword) {
    var resultArr = [];

    var keywordLowerCase = keyword.toLowerCase();
    keywordLowerCase = keywordLowerCase.replace(/\s/g, '');
    
    this.employeeArr.map(function(empl) {
        var nameLowerCase = empl.typeEmployee.toLowerCase().replace(/\s/g, '');
        if (nameLowerCase.indexOf(keywordLowerCase) > -1) {
            resultArr.push(empl);
        }
    })
    return resultArr;
}

