//console.log (num);
//let num ="Mark";
//document.getElementById("hContent").innerHTML="num";
let mark = prompt("กรุณาพิมพ์ปีเกิดของคุณค่ะ");
if(mark>=2444 && mark<=2467)
{
    console.log("Greatest Generation");
    alert("คุณอยู่ในกลุ่ม Greatest Generation")
    document.getElementById("hContent").innerHTML="หมวดหมู่ Greatest Generation";
}
else if(mark>=2468 && mark<=2488)
{
    console.log("Slient Generation");
    alert("คุณอยู่ในกลุ่ม Slient Generation")
    document.getElementById("hContent").innerHTML="หมวดหมู่ Slient Generation";
}
else if(mark>=2489 && mark<=2507)
{
    console.log("Baby Boomer");
    alert("คุณอยู่ในกลุ่ม Baby Boomer")
    document.getElementById("hContent").innerHTML="หมวดหมู่ Baby Boomer";
}
else if(mark>2508 && mark<=2522)
{
    console.log("Gen X");
    alert("คุณอยู่ในกลุ่ม Gen X")
    document.getElementById("hContent").innerHTML="หมวดหมู่ Gen X";
}
else if(mark>2523 && mark<=2540)
{
    console.log("Gen Y");
    alert("คุณอยู่ในกลุ่ม Gen Y")
    document.getElementById("hContent").innerHTML="Gen Y"
}
else if(mark>2540 && mark<=2564)
{
    console.log("Gen Z");
    alert("คุณอยู่ในกลุ่ม Gen Z")
    document.getElementById("hContent").innerHTML="Gen Z";
}
else if(mark>2565)
{
    console.log("ERROR");
    alert("ขออภัยค่ะ คุณตั้งปีเกินกำหนด กรุณาลองใหม่นะคะ")
    document.getElementById("hContent").innerHTML="ERROR";
}
else
{
    console.log("ERROR");
    alert("ขออภัยค่ะ คุณตั้งปีน้อยกว่าที่กำหนด หรือคุณไม่ได้ตั้งปีที่ทำการกรอกไป กรุณาลองใหม่นะคะ")
    document.getElementById("hContent2").innerHTML="ERROR";
}
