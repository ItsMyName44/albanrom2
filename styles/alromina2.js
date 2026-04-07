let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick = () =>{ 
		document.getElementById("zapoln").style.display = "none";
		document.getElementById("pokaz").style.display = "block";
		listVideo.forEach(vid => vid.classList.remove('active'));
		video.classList.add('active');
		if(video.classList.contains('active')){
			let src = video.children[0].getAttribute('src');
			mainVideo.src = src;
			let text = video.children[1].innerHTML;
			title.innerHTML	= text;
		};
	};
});

function ubrat(){
	document.getElementById("pokaz").style.display = "none";
	document.getElementById("zapoln").style.display = "block";
}
function vernut(){
	document.getElementById("pokaz").style.display = "block";
	document.getElementById("zapoln").style.display = "none";
}

document.getElementById("skrito2").style.display = 'none';
var a;
function mychfont()
{
if(a==1) { document.getElementById("zapoln").style.fontFamily = "BressayTrial"; 
document.getElementById("skrito2").style.display = 'none';
return a=0; }
else{ document.getElementById("zapoln").style.fontFamily = "none"; 
document.getElementById("skrito2").style.display = 'inline';
return a=1; }
}

var ele = document.getElementsByClassName('skrit');
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = 'none';
}

const makefon = document.getElementById("makefon");
var ele = document.getElementsByClassName('skrit');
makefon.addEventListener('click', function() {
if (ele[0].style.display == 'none') {
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = 'inline-block';
    }
} else {
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.display = 'none';
    }    
}
});

