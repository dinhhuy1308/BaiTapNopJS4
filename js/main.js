
const listEmpl = new ListOfEmployee ();
const validation = new Validation ();


function getELE (id) {
    return document.getElementById(id);
}

function showTable (array) {
    var content = '';
    array.map(function(empl, index) {
        var trELE = 
        `<tr>
            <td>${empl.account}</td>
            <td>${empl.fullname}</td>
            <td>${empl.email}</td>
            <td>${empl.workDay}</td>
            <td>${empl.position}</td>
            <td>${empl.sumSalary} VNĐ</td>
            <td>${empl.typeEmployee}</td>
            <td style='display: flex'>
                <button onclick='detete("${empl.account}")' class='btn btn-danger mr-2'>Xóa</button>
                <button onclick='showDetail("${empl.account}")' class='btn btn-info'>Xem</button>
            </td>                
        </tr>`
        content += trELE;
    })
    getELE('tableDanhSach').innerHTML = content;
}

function setLocalStorage (array) {
    localStorage.setItem('listempt',JSON.stringify(array));
}

function getLocalStorage () {
    if (localStorage.getItem('listempt') != null) {
        listEmpl.employeeArr = JSON.parse(localStorage.getItem('listempt'));
        showTable(listEmpl.employeeArr);
    }
}
getLocalStorage();


getELE('btnThemNV').onclick = function () {
    var account = getELE('tknv').value;
    var fullname = getELE('name').value;
    var email = getELE('email').value;
    var pass = getELE('password').value;
    var workDay = getELE('datepicker').value;
    var salary = getELE('luongCB').value;
    var position = getELE('chucvu').value;
    var workTime = getELE('gioLam').value;

    //Validation
    var isValid = true;

    // acount
    isValid &= validation.checkEmpty(account,'tbTKNV','Tài khoản không được để trống') 
    && validation.checkID(account,'tbTKNV','Tài khoản không được trùng',listEmpl.employeeArr)
    && validation.checkAccount(account,'tbTKNV','Tài khoản từ 4-6 ký số');

    // fullname
    isValid &= validation.checkEmpty(fullname,'tbTen','Họ và tên không được để trống')
    && validation.checkName(fullname,'tbTen','Họ và tên không đúng định dạng');

    // email
    isValid &= validation.checkEmpty(email,'tbEmail','Email không được để trống')
    && validation.checkEmail(email,'tbEmail','Email không đúng định dạng');

    // pass
    isValid &= validation.checkEmpty(pass,'tbMatKhau','PassWord không được để trống')
    && validation.checkPass(pass,'tbMatKhau','PassWord 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    // workDay
    isValid &= validation.checkEmpty(workDay,'tbNgay','Ngày làm không được để trống');

    // salary
    isValid &= validation.checkEmpty(salary,'tbLuongCB','Lương cơ bản không được để trống')
    && validation.checkSalary(salary,'tbLuongCB','Lương cơ bản phải từ  1 000 000 - 20 000 000');

    // position
    isValid &= validation.checkSelect('chucvu','tbChucVu','Chức vụ chưa hợp lệ');

    // workTime
    isValid &= validation.checkEmpty(workTime,'tbGiolam','Giờ làm không được để trống')
    && validation.checkWorkTime(workTime,'tbGiolam','Giờ làm phải từ  80 - 200 giờ');
    


    if(isValid) {
        // Tạo thể hiện (instance)
        var empl = new Employee(account,fullname,email,pass,workDay,Number(salary),position,Number(workTime));
        empl.calcSumSalary();
        empl.typeEmployee();
    
        // Thêm NV vào mảng
        listEmpl.moreEmployee(empl);
    
        showTable(listEmpl.employeeArr);
        setLocalStorage(listEmpl.employeeArr);        
    }
}

// Onkeyup
var isValid = true;
getELE('tknv').onkeyup = function () {
    var account = getELE('tknv').value;

    // acount
    isValid &= validation.checkEmpty(account,'tbTKNV','Tài khoản không được để trống') 
    && validation.checkID(account,'tbTKNV','Tài khoản không được trùng',listEmpl.employeeArr)
    && validation.checkAccount(account,'tbTKNV','Tài khoản từ 4-6 ký số');
}
getELE('name').onkeyup = function () {
    var fullname = getELE('name').value;

    isValid &= validation.checkEmpty(fullname,'tbTen','Họ và tên không được để trống')
    && validation.checkName(fullname,'tbTen','Họ và tên không đúng định dạng');
}
getELE('email').onkeyup = function () {
    var email = getELE('email').value;

    isValid &= validation.checkEmpty(email,'tbEmail','Email không được để trống')
    && validation.checkEmail(email,'tbEmail','Email không đúng định dạng');
}
getELE('password').onkeyup = function () {
    var pass = getELE('password').value;

    isValid &= validation.checkEmpty(pass,'tbMatKhau','PassWord không được để trống')
    && validation.checkPass(pass,'tbMatKhau','PassWord 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');
}
getELE('datepicker').onkeyup = function () {
    var workDay = getELE('datepicker').value;

    isValid &= validation.checkEmpty(workDay,'tbNgay','Ngày làm không được để trống');
}
getELE('luongCB').onkeyup = function () {
    var salary = getELE('luongCB').value;

    isValid &= validation.checkEmpty(salary,'tbLuongCB','Lương cơ bản không được để trống')
    && validation.checkSalary(salary,'tbLuongCB','Lương cơ bản phải từ  1 000 000 - 20 000 000');
}
getELE('chucvu').onkeyup = function () {
    var position = getELE('chucvu').value;

    isValid &= validation.checkSelect('chucvu','tbChucVu','Chức vụ chưa hợp lệ');
}
getELE('gioLam').onkeyup = function () {
    var workTime = getELE('gioLam').value;

    isValid &= validation.checkEmpty(workTime,'tbGiolam','Giờ làm không được để trống')
    && validation.checkWorkTime(workTime,'tbGiolam','Giờ làm phải từ  80 - 200 giờ');
}


function detete(id) {
    listEmpl.deleteEmployee(id);
    setLocalStorage(listEmpl.employeeArr);
    getLocalStorage();
}

function showDetail (id) {
    // console.log(id)
    var index = listEmpl.findIndexEmployee(id);
    if (index > -1) {
        // console.log(listEmpl.employeeArr[index]);
        getELE('tknv').value = listEmpl.employeeArr[index].account;
        getELE('tknv').disabled = true;

        getELE('name').value = listEmpl.employeeArr[index].fullname;
        getELE('email').value = listEmpl.employeeArr[index].email;
        getELE('password').value = listEmpl.employeeArr[index].pass;
        getELE('datepicker').value = listEmpl.employeeArr[index].workDay;
        getELE('luongCB').value = listEmpl.employeeArr[index].salary;
        getELE('chucvu').value = listEmpl.employeeArr[index].position;
        getELE('gioLam').value = listEmpl.employeeArr[index].workTime;
    }
}

getELE('btnCapNhat').onclick = function () {
    var account = getELE('tknv').value;
    var fullname = getELE('name').value;
    var email = getELE('email').value;
    var pass = getELE('password').value;
    var workDay = getELE('datepicker').value;
    var salary = getELE('luongCB').value;
    var position = getELE('chucvu').value;
    var workTime = getELE('gioLam').value;

    //Validation
    var isValid = true;

    // acount
    isValid &= validation.checkEmpty(account,'tbTKNV','Tài khoản không được để trống') 
    && validation.checkAccount(account,'tbTKNV','Tài khoản từ 4-6 ký số');

    // fullname
    isValid &= validation.checkEmpty(fullname,'tbTen','Họ và tên không được để trống')
    && validation.checkName(fullname,'tbTen','Họ và tên không đúng định dạng');

    // email
    isValid &= validation.checkEmpty(email,'tbEmail','Email không được để trống')
    && validation.checkEmail(email,'tbEmail','Email không đúng định dạng');

    // pass
    isValid &= validation.checkEmpty(pass,'tbMatKhau','PassWord không được để trống')
    && validation.checkPass(pass,'tbMatKhau','PassWord 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    // pass
    isValid &= validation.checkEmpty(workDay,'tbNgay','Ngày làm không được để trống');

    // salary
    isValid &= validation.checkEmpty(salary,'tbLuongCB','Lương cơ bản không được để trống')
    && validation.checkSalary(salary,'tbLuongCB','Lương cơ bản phải từ  1 000 000 - 20 000 000');

    // position
    isValid &= validation.checkSelect('chucvu','tbChucVu','Chức vụ chưa hợp lệ');

    // workTime
    isValid &= validation.checkEmpty(workTime,'tbGiolam','Giờ làm không được để trống')
    && validation.checkWorkTime(workTime,'tbGiolam','Giờ làm phải từ  80 - 200 giờ');


    if (isValid) {
        var empl = new Employee(account,fullname,email,pass,workDay,Number(salary),position,Number(workTime));
        empl.calcSumSalary();
        empl.typeEmployee();
        // console.log(empl);
    
        listEmpl.updateEmployee(empl);
    
        setLocalStorage(listEmpl.employeeArr);
        getLocalStorage();
    }

}

function search () {
    var keyword = getELE('searchName').value;
    var resultArr = listEmpl.searchName(keyword);
    showTable(resultArr);
}
getELE('btnTimNV').onclick = search;

getELE('searchName').onkeyup = function () {
    var keyword = getELE('searchName').value;
    var resultArr = listEmpl.searchName(keyword);
    showTable(resultArr);
}



