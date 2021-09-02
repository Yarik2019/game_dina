let dina = document.getElementById('dinas');

let cuctus = document.getElementById('cuctus');

document.addEventListener('keydown', function(){

	jump();
})



function jump(argument) {
    
    if(dina.classList != 'jump'){
    	dina.classList.add('jump')
    }
    setTimeout(function(){
      
      dina.classList.remove('jump')

    },500)

}

let isAlive = setInterval(function(){
	let dinaTop = parseInt(window.getComputedStyle(dina).getPropertyValue('top'));

	let cuctusLeft = parseInt(window.getComputedStyle(cuctus).getPropertyValue('left'))

	if(cuctusLeft < 50 &&  cuctusLeft > 0 && dinaTop >= 140){
   
      alert('GAME OVER!!!')
	}
}, 10)