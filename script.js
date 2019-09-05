var play = document.querySelector('#play');
var image = document.querySelector("#image");
var fill = document.querySelector('#fill');




var songs = ["Daddy Mummy.mp3","Baby-Justin Beiber.mp3","Dil cheez tujhe de di.mp3 "];
var poster = ["b.jpg","c.jpg","hi.jpg"];
 var songName = document.querySelector(".songName");

 var song = new Audio();
 var c = 0;

 window.onload = playSong;
 function playSong(){
     song.src = songs[c];
     songName.textContent = songs[c];
     song.play();
 }

 function playnPauseSong(){
     if(song.paused){
         song.play();
         image.src = "218-512.png";
     }
     else{
        song.pause();
        image.src = "plays.png"
     }
 }

 function next(){
     c++;
     if(c>2){
         c=0;
     }
     playSong();
     image.src = "218-512.png";
     pos.src = poster[c];
 }
 function prev(){
    c--;
     if(c<0){
         c=2;
     }
     
     playSong();
     image.src = "218-512.png";
     pos.src = poster[c];
 }
 song.addEventListener('timeupdate',function(){
     var position = song.currentTime/song.duration;
     fill.style.width = position*100 + '%';
     if(song.currentTime == song.duration){
         next();
     }
 })