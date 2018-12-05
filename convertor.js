function GiveResult(){

  var c = new Array();
  var n = new Array();
  c[0] = 1;
  n[0] = "Тенге";
  c[1] = 400;
  n[1] = "EUR";
  c[2] = 5;
  n[2] = "RUB";
  c[3] = 350;
  n[3] = "USD";
  c[4] = 5,05;
  n[3] = "KGS";
  var res, vfrom, vto, vcash;
    vcash = document.getElementById("cash").value;
    vfrom = document.getElementById("from").value;
    vcash = vcash.replace(',', '\.');
    vcash = vcash.replace(' ', '');
    vcash = vcash.replace(' ', '');
    vto = document.getElementById("to").value;
    res =  vcash/ c[vto]  ;

    res = res.toFixed(2);
    res = res.toString();
    res = res.replace('\.', ',');
    res = "<span class='result'> Результат перевода: " + res + "</span>&nbsp;" ;

    document.getElementById("result").innerHTML = res;

}
