function Validation () {
    this.checkEmpty = function (valueInput,spanID,message) {
        if (valueInput == '') {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = message;
            return false
        }

        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = '';
        return true
    }

    this.checkID = function (valueInput,spanID,message,array) {
        var isExist = false

        isExist = array.some(function(empl) {
            return valueInput === empl.account
        });

        if(isExist) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = message;
            return false
        } else {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
    }

    this.checkAccount = function (valueInput,spanID,message) {
        var pattern = /^[a-zA-Z0-9]{4,6}$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }



    this.checkName = function (valueInput,spanID,message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkEmail = function (valueInput,spanID,message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkPass = function (valueInput,spanID,message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkSalary = function (valueInput,spanID,message) {
        var pattern = /^[0-9]+$/;
        if (valueInput.match(pattern) && valueInput >= 1e+6 && valueInput <= 20e+6) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkSelect = function (selectID,spanID,message) {
        var indexOption = document.getElementById(selectID).selectedIndex;
        if (indexOption > 0) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

    this.checkWorkTime = function (valueInput,spanID,message) {
        var pattern = /^[0-9]+$/;
        if (valueInput.match(pattern) && valueInput >= 80 && valueInput <= 200) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }


}