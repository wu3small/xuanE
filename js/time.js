var today = new Date();
var hr = today.getHours();
var pre = (hr>12)? "上午":"下午";
var newhr = (hr>12)? hr-12:hr;
var min = today.getMinutes();
var sec = today.getSeconds();
var yr = today.getFullYear();
var mon = today.getMonth();
var dat = today.getDate();
var day = today.getDay();
var dday = ["日", "一", "二", "三", "四", "五", "六"]
var ee = '時間：' + pre + newhr + '點' + min + '分' + sec + '秒<br>日期：' + yr + '年' + (mon+1) + '月' + dat + '日，星期' + dday[day] + ' !!';
document.write(ee);