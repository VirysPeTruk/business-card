var info        = document.getElementById('info');
var contacts    = document.getElementById('contacts');
var summary     = document.getElementById('summary');
var hmb         = document.getElementById('hambyrger');
var tip         = document.getElementById('tip');
var sectionInfo = document.getElementById('section-info');
var hide        = document.getElementById('info-hide');
var nav         = document.getElementById('nav');
var f1          = document.getElementById('contacts-info');
var f2          = document.getElementById('contacts-hide');
var summaryhome = document.getElementById('summary-home');
var summaryhide = document.getElementById('summary-hide');
var back        = document.getElementById('back');
var close       = document.getElementById('close');
var closeTip    = document.getElementById('closeTip');
var one         = document.getElementById('one');
var two         = document.getElementById('two');
var theer       = document.getElementById('theer');




 info.onclick = function(){
 	info.style.width = '100%';
 	contacts.style.right = '-33.333%';
 	summary.style.right = '-66.666%';
 	sectionInfo.style.display = 'block';
 	hide.style.display = 'none';
 	back.style.opacity = '1';
 	back.style.transition = 'all ease 2s';
 };


 

 contacts.onclick = function(){
 	contacts.style.width = '100%';
 	info.style.left = '-33.33%';
 	contacts.style.right = '0';
 	summary.style.right = '-33.333%';
 	f2.style.display = 'none';
 	f1.style.display = 'block';
 	back.style.opacity = '1';
 	back.style.transition = 'all ease 3s';
 };


  summary.onclick = function(){
 	summary.style.width = '100%';
 	contacts.style.right = '100%';
 	info.style.left = '-66.666%';
 	summaryhide.style.display = 'none';
 	summaryhome.style.display = 'block';
 	back.style.opacity = '1';
 	back.style.transition = 'all ease 4s';
 };



hmb.onmouseover = function(){
        tip.style.opacity = '1';
        tip.style.transition = 'all ease 2s';
};

hmb.onmouseout = function(){
          tip.style.opacity = '0';
    
};




 hmb.onclick = function(){
 	close.style.display = 'block';
 	closeTip.style.display = 'block';
 	nav.style.opacity = '1';
 	nav.style.zIndex = '200';
 	one.style.width = '33.333%';
 	one.style.transition = 'all ease 2s';
 	two.style.width = '33.333%';
 	two.style.transition = 'all ease 2s';
 	theer.style.width = '33.333%';
 	theer.style.transition = 'all ease 2s';
 };

 close.onclick = function(){
 	close.style.display = 'none';
 	closeTip.style.display = 'none';
 	one.style.width = '0';
 	one.style.transition = 'all ease 2s';
 	two.style.width = '0';
 	two.style.transition = 'all ease 2s';
 	theer.style.width = '0';
 	theer.style.transition = 'all ease 2s';
 	nav.style.opacity = '0';
 	nav.style.transition = 'all ease 2s';
 };

 back.onclick = function(){
 	info.style.width = '33.333%';
 	contacts.style.right = '33.333%';
 	summary.style.right = '0';
 	sectionInfo.style.display = 'none';
 	hide.style.display = 'block';
 	contacts.style.width = '33.333%';
 	info.style.left = '0';
 	contacts.style.right = '33.333%';
 	summary.style.right = '0';
 	f2.style.display = 'block';
 	f1.style.display = 'none';
 	summary.style.width = '33.333%';
 	contacts.style.right = '33.333%';
 	info.style.left = '0';
 	summaryhide.style.display = 'block';
 	summaryhome.style.display = 'none';
 	back.style.opacity = '0';
 	back.style.transition = 'all ease 0.4s';
 }

 // document.querySelectorAll('box');
 //   boxses.fartach (box) {
 //   	  box.onclick = function () {
 //   	  	boxses.foreach (f (box)){
 //   	  		box.onclick = nul;
 //   	  	}

 //   	  	this.classlist.add('avtive');
 //   	  }
 //   }

 // function boxAdd(click ()){
 // 	boxAdd(click());
 // 	back.onclick = function (){
 // 		box.add(click());
 // 	}
 // }