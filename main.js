// BÀI TẬP 01----------------------------
// - Đầu vào:
//     + Tên, thu nhập năm, Số người phụ thuộc
// - Xử lý:
//     + Tính tổng thu nhập phải chịu thuế theo công thức.
//     + Xem tổn thu nhập ở khoảng nào rồi áp thuế.
// - Đầu ra:
//     + In ra số tiền thuế phải nộp

function ex01_tinhthue(ex01_thunhap, ex01_songuoi){
    var ex01_chiuthue = ex01_thunhap - 4000000 - 1600000*ex01_songuoi;
    return ex01_chiuthue;
}

var currencyFormat = Intl.NumberFormat("vn-VN");

document.getElementById("ex01_check").onclick = function () {
    var ex01_ten = document.getElementById("ex01_ten").value;
    var ex01_songuoi = parseInt(document.getElementById("ex01_songuoi").value);
    var ex01_thunhap = parseInt(document.getElementById("ex01_thunhap").value);
    var ex01_chithue = ex01_tinhthue(ex01_thunhap,ex01_songuoi);
    var ex01_result;

    if (ex01_chithue >= 0 && ex01_chithue <= 60000000){
        ex01_result = ex01_chithue * 5 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else if(ex01_chithue > 60000000 && ex01_chithue <= 120000000){
        ex01_result = ex01_chithue * 10 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");

    }
    else if(ex01_chithue > 120000000 && ex01_chithue <= 210000000){
        ex01_result = ex01_chithue * 15 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else if(ex01_chithue > 210000000 && ex01_chithue <= 384000000){
        ex01_result = ex01_chithue * 20 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else if(ex01_chithue > 384000000 && ex01_chithue <= 624000000){
        ex01_result = ex01_chithue * 25 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else if(ex01_chithue > 624000000 && ex01_chithue <= 960000000){
        ex01_result = ex01_chithue * 30 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else if(ex01_chithue > 960000000){
        ex01_result = ex01_chithue * 35 / 100;
        document.getElementById("ex01_result").innerHTML = "Bạn "+ ex01_ten + " phải đóng " + currencyFormat.format(ex01_result) + " tiền thuế";
        document.getElementById("ex01_result").classList.add("output");
    }
    else{
        document.getElementById("ex01_result").innerHTML = "Bạn nhập sai";
        document.getElementById("ex01_result").classList.add("output");
    }
}

// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + Tên, thu nhập năm, Số người phụ thuộc
// - Xử lý:
//     + Tính tổng thu nhập phải chịu thuế theo công thức.
//     + Xem tổn thu nhập ở khoảng nào rồi áp thuế.
// - Đầu ra:
//     + In ra số tiền thuế phải nộp


function myFunction(){
    if (document.getElementById("ex02_type").value == "dan"){
        document.getElementById("ex02_soKetNoi").style.display = "none";
    }
    else{
        document.getElementById("ex02_soKetNoi").style.display = "inline-block";
    }
}

document.getElementById("ex02_check").onclick = function(){
    var ex02_number = document.getElementById("ex02_number").value;
    var ex02_type = document.getElementById("ex02_type").value;
    var ex02_soCaoCap = parseInt(document.getElementById("ex02_soCaoCap").value);
    var ex02_soKetNoi = parseInt(document.getElementById("ex02_soKetNoi").value);
    var ex02_result;

    if(ex02_type == "dan"){
        ex02_result = 4.5 + 20.5 + 7.5*ex02_soCaoCap;
        document.getElementById("ex02_result").innerHTML = "Mã khách hàng: " + ex02_number + " cần phải đóng " + ex02_result + "$";
        document.getElementById("ex02_result").classList.add("output");
    }
    else{
        if (ex02_soKetNoi <= 10){
            ex02_result = 15 + 75 + 50*ex02_soCaoCap;
        }
        else{
            ex02_result = 15 + 75 + (ex02_soKetNoi-10)*5 + 50*ex02_soCaoCap;
        }
        document.getElementById("ex02_result").innerHTML = "Mã khách hàng: " + ex02_number + " cần phải đóng " + ex02_result + "$";
        document.getElementById("ex02_result").classList.add("output");
    }
}