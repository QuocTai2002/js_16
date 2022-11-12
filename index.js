/**
 * INPUT:
 * -nhập vào giá trị tổng s = 0 và số nguyên n = 0
 *
 * PROCESS:
 * b1: sử dụng vòng lập white để tạo điều kiện s >10000
 * b2 số nguyên n tăng liên tục cho đên khi tổng nhỏ hơn s >10000  thì dừng lại
 *
 * OUTPUT:
 * - in ra kết quả số nguyên dương n nhỏ nhất khi s < 10000
 */

function MinSum() {
  var S = 0;
  var n = 0;

  while (S < 10000) {
    n++;
    S = S + n;
  }
  document.getElementById("numbers").innerHTML =
    "số nguyên dương nhỏ nhất là " + n;
}

/**
 * INPUT:
 * - user nhập 2 số nguyên x và n bất kì
 * - gán tổng sum = 0
 * PROCESS:
 * b1: sử dụng vòng lập for với i tăng liên tục đển khi bằng n
 * b2: tính tổng sum với x^i cho đến khi i = n thì dừng lại
 * OUTPUT:
 * - in ra kết quả tổng
 */

function tong() {
  var x = document.getElementById("N1").value;
  var n = document.getElementById("N2").value;
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("output").innerHTML = "kết quả là " + sum;
}

/**
 * INPUT:
 * - user nhập 1 số x bất kì;
 * - gán tích T = 1
 * PROCESS:
 * b1: sử dụng vòng lập for với i tăng liên tục đển khi bằng x
 * b2: tính tích T với x^i cho đến khi i = n thì dừng lại
 * OUTPUT:
 * - in ra kết quả tích
 */
function Tich() {
  var s = document.getElementById("S1").value;
  var T = 1;
  for (i = 1; i <= s; i++) {
    T *= i;
  }
  document.getElementById("tich").innerHTML = " gia thừa là " + T;
}
/**
 * INPUT:
 * - user nhập 1 số x bất kì x;
 *- gán p1 là chủi tạo thẻ red
 - gán p2 là chủi tạo thẻ blue
 * PROCESS:
 * 
 * b1: sử dụng vòng lập for với i tăng liên tục đển khi bằng x
 * b2: ép x về chủi sring
 * b3: nếu i là số chẳn in chủi p1
 * b4: còn lại là in chủi p2
 * OUTPUT:
 * - in ra kết quả
 */
function div() {
  var number = document.getElementById("div").value;
  number = parseInt(number);
  var p1 = '<div class="red_form">div'
  var p2 = '<div class="blue_form">div'
  var html = " ";
  for (var i = 1; i <= number; i++) {
    
    if (i %2 ==0){
      html += p1 + i + "</div> <br/>";
    }
    else{
      html += p2 + i + "</div> <br/>";
    }
   
  }
  document.getElementById("form_div").innerHTML = html;
}
