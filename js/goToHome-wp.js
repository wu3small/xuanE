let homeURL = location.protocol +'//'+ location.host;
console.log(homeURL);

let homeButton ='<a href="" style="align-items: center;">' +
'<div class="button01 cool02" onclick="location.href' + "'" + homeURL + "'" + '" style="bottom: 20px; left: 50%; opacity: 0.5; transform: translate(-50%, 0);">' +
    '<p>回首頁</p>' +
'</div>' +
'</a>';

document.write('homeButton')