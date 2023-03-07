
function Employee(account,fullname,email,pass,workDay,salary,position,workTime) {
    this.account = account;
    this.fullname = fullname;
    this.email = email;
    this.pass = pass;
    this.workDay = workDay;
    this.salary = salary;
    this.position = position;
    this.workTime = workTime;
    this.sumSalary = 0;
    this.typeEmployee = '';

    this.calcSumSalary = function () {
        if (this.position == 'Sếp') {
            this.sumSalary = this.salary * 3;
        } else if (this.position == 'Trưởng phòng') {
            this.sumSalary = this.salary * 2;
        } else if (this.position == 'Nhân viên') {
            this.sumSalary = this.salary;
        }
    }
    

    this.typeEmployee = function () {
        if (this.workTime >= 192) {
            this.typeEmployee = 'Xuất sắc';
        } else if (this.workTime >= 176) {
            this.typeEmployee = 'Giỏi';
        } else if (this.workTime >= 160) {
            this.typeEmployee = 'Khá';
        } else {
            this.typeEmployee = 'Trung Bình';
        }
    }
}