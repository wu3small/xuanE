let homeURL = location.protocol +'//'+ location.host
console.log(homeURL)

let header ='<div class="title02boxes">'+
'<div class="title02c"></div>'+
'<div class="title02a">米干網</div>'+
'<div class="title02c"></div>'+
'<div class="title02b" onclick="history.back()">上一頁</div>'+
'<div class="title02c"></div>'+
'<div class="title02b" onclick="location.href=' + "'" + homeURL + "'" + '">回首頁</div>'+
'<div class="title02c"></div>'+
'<div class="title02b" onclick="location.href=' + "'" + homeURL + '/webPage/sign-in.html' + "'" + '">登入！</div>'+
'<div class="title02c"></div>'+
'</div>';

document.write(header);