var save_inf = document.querySelector('.save-inf')
var get_inf_bg = document.querySelector('.menue-start-bg')
// error element
var error_side = document.querySelector('.error-side');
var error_text = document.querySelector('.error-side span');
//header element
var username_header = document.querySelector('#username');
var min_time = document.querySelector('#min')
var sec_time = document.querySelector('#second')
var coin_header = document.querySelector('#coin');
var score_header = document.querySelector('#score');
coin_header.innerHTML = 0;
score_header.innerHTML = 0;
//game over
var game_over_side = document.querySelector('.gameover-side')
var show_name = document.querySelector('.show-pleyer')
var show_score = document.querySelector('.show-score')
var show_time = document.querySelector('.show-time')

//pleyer
var pleyer_birds = document.querySelector('#pleyer');
var pleyer_side = document.querySelector('#pleye-side');
var fps = 90;
is_jump = false;
var gravity = 8;
var rotate_pleyer = 0;
var jump_time = 500;
var window_width = pleyer_side.offsetWidth - 50
//game over
var playe_again = document.querySelector('.playe-again')
var return_lobby = document.querySelectorAll('.return-lobby')
//mute
var mute_button = document.querySelector('#mute')
//audio
var get_coin_audio = new Audio('../songs/coin-effect.mp3');

for(var i = 0; i <return_lobby.length; i ++){
    return_lobby[i].addEventListener('click' , ()=>{
        window.location.assign('../');
    })
}

function create_error_massage(massage){
    error_side.style.display = 'flex';
    error_text.innerHTML = massage
    error_side.style.animation = 'show-error 1s 1 forwards , hide-error 2s 2s 1 forwards';
}

function start_menue(){
    get_inf_bg.style.display = 'none';
    save_inf.addEventListener('click', ()=>{
        var username_inp = document.querySelector('.menue-start input[type="text"]').value;
        var email_inp = document.querySelector('.menue-start input[type="email"]').value;
        if(username_inp.length > 0 && email_inp.length > 0){
            username_header.innerHTML = username_inp;
            if(username_inp == 'HOJJAT'){
                //
            }
            get_inf_bg.style.display = 'none';
        }else{
            this.create_error_massage(
                'please fill the blank'
            )
        }
    })
}

function timer_game(){
    if(sec_time.innerHTML == '00'){
        sec_time.innerHTML = 0
        min_time.innerHTML = 0
    }
    sec_time.innerHTML = parseInt(sec_time.innerHTML) + 1;
    if(sec_time.innerHTML % 2 == 0){
        score_header.innerHTML = parseInt(score_header.innerHTML) + 5
    }
    if(sec_time.innerHTML == 60){
        sec_time.innerHTML = 0; 
        min_time.innerHTML = parseInt(min_time.innerHTML) + 1;            
    }
}

function render_gravity(){
    if(is_jump == false) {
        var render = pleyer_birds.offsetTop + gravity ;
        if(render < pleyer_side.offsetHeight){
            pleyer_birds.style.top = `${render}px`
        }
        if(rotate_pleyer < 45) {
            rotate_pleyer += 10;
            pleyer_birds.style.transform = `rotate(${rotate_pleyer}deg)`
        }
    }
    else if(is_jump == true){
        var render = pleyer_birds.offsetTop - gravity ;
        if(render > 0){
            pleyer_birds.style.top = `${render}px`
        }
        if(rotate_pleyer > -45) {
            rotate_pleyer -= 10;
            pleyer_birds.style.transform = `rotate(${rotate_pleyer}deg)`
        }
    }
    get_coin()
    game_over()
}

function jump_pleyer(e) {
    if(e.key == 'w' || e.key == ' ' || e.key == 'Arrowup'){
        if(is_jump == false){
            is_jump = true;
            setTimeout(()=>{
                is_jump = false;
            }, jump_time);
        }
    }
}

function create_pipe(){
    // transform 200 ta 0

    var height_pipe = parseInt(Math.random() * 200) 
    if(height_pipe < 50) { 
        var height_pipe = parseInt(Math.random() * 200) 
    }

    const pipe_side = document.createElement('div');
    pipe_side.className = 'pipe-side';
    const top = document.createElement('img');
    top.src = '../Image/Object/pipe.png'
    top.className = 'top'
    top.style = `--h : ${-height_pipe}px;`

    const bottom = document.createElement('img')
    bottom.src = '../Image/Object/pipe.png'
    bottom.className = 'bottom'
    bottom.style = `--h:${height_pipe}px;`
    pipe_side.appendChild(top);
    pipe_side.appendChild(bottom);
    pipe_side.style.right == 0;
    pleyer_side.appendChild(pipe_side)
}

function create_coin(){
    var coin_set = parseInt(Math.random() * 10)
    var top = parseInt(Math.random() * 400);
    if(coin_set == 5 || coin_set == 7 || coin_set == 3 || coin_set == 8){

        if(top < 400 && top >300){
            var coin_side = document.querySelector('.coin-side');
            var coin = document.createElement('img');
            coin.className = 'coin'
            coin.style.top = top ;
            coin.src = '../Image/Object/coin.png'
            coin.style.left = `${window_width}px`
            coin_side.appendChild(coin);
        }
        else{
            var top = parseInt(Math.random() * 400);
        }
    }
}


function move_coin(){
    var coin = document.querySelectorAll('.coin');
    for(i = 0 ; i < coin.length; i++){
        var left = coin[i].offsetLeft;
        coin[i].style.left = (left-5) + 'px'
        if(left == window_width - 100){
            create_coin();
        }
        if(left < 0 ){
            coin[i].remove()
        }
    }
    if(coin.length == 0){
        create_coin();
    }
}


function get_coin(){
    const coin = document.querySelectorAll('.coin');
    for(i = 0 ; i < coin.length; i++) {
        // alert(coin[i].offsetLeft)
        // console.log(pleyer_birds.offsetLeft)
        if(coin[i].offsetLeft == 50){
            coin_header_inner = coin_header.innerHTML
            var len_pleyer_coin = Math.abs(coin[i].offsetTop - pleyer_birds.offsetTop)
            if(len_pleyer_coin > 0 && len_pleyer_coin < 100){
                get_coin_audio.play();
                coin_header.innerHTML = parseInt(coin_header_inner) + 1
                coin[i].remove();
            }
        }
    }
}

var right = 0;
function move_pipe(){
    const pipe = document.querySelectorAll(".pipe-side");
  
    for (let i = 0; i< pipe.length; i++){
      var left = pipe[i].offsetLeft;
      pipe[i].style.left = (left-5)+'px';
      if(left == window_width - 100){
        create_pipe()
      }
      if(left < 0){
        pipe[i].remove()
      }
    }
}

function remove_pipe(pipe){
    pipe.remove();
}

function game_over(){
    var pipe = document.querySelectorAll('.pipe-side');
    var top = document.querySelectorAll('.top')
    var bottom = document.querySelectorAll('.bottom')
    if(pleyer_birds.offsetTop == 0 || Math.abs(pleyer_birds.offsetTop - pleyer_side.offsetHeight) < 5){
        show_name.innerHTML = username_header.innerHTML
        show_score.innerHTML = score_header.innerHTML
        show_time.innerHTML = `${min_time.innerHTML} : ${sec_time.innerHTML}`
        game_over_side.style.display = 'flex'
        clearInterval(movecoin)
        clearInterval(movepipe)
        clearInterval(render)
    }
    for(var i = 0; i < pipe.length ; i ++){
        if(pipe[i].offsetLeft == pleyer_birds.offsetLeft){
            var top_image = window.getComputedStyle(top[i])
            var top_style = new WebKitCSSMatrix(top_image.transform)
            var transform_pipe = Math.abs(top_style.m42)
            number_top = Math.abs((top[i].offsetHeight - transform_pipe))
            space = pleyer_side.offsetHeight - number_top - number_top;
            if(pleyer_birds.offsetTop < number_top){
                show_name.innerHTML = username_header.innerHTML
                show_score.innerHTML = score_header.innerHTML
                show_time.innerHTML = `${min_time.innerHTML} : ${sec_time.innerHTML}`
                game_over_side.style.display = 'flex'
                clearInterval(movecoin)
                clearInterval(movepipe)
                clearInterval(render)
            }
            if(pleyer_birds.offsetTop > space + number_top){
                show_name.innerHTML = username_header.innerHTML
                show_score.innerHTML = score_header.innerHTML
                show_time.innerHTML = `${min_time.innerHTML} : ${sec_time.innerHTML}`
                game_over_side.style.display = 'flex'
                clearInterval(movecoin)
                clearInterval(movepipe)
                clearInterval(render)
            }
        }
    }
}

playe_again.addEventListener('click' , 
    () => {
        location.reload()
    }
)

i = 0;
mute_button.addEventListener('click', () => {
    var mute_image = document.querySelector('#mute-img');
    i++;
    if(i % 2 != 0){
        mute_image.src = '../Image/Object/mute.png'
        get_coin_audio.muted = true;
    }
    else{
        mute_image.src = '../Image/Object/volume.png'
        get_coin_audio.muted = false;
    }
});

start_menue();
setInterval(timer_game , 1000)
var render = setInterval(render_gravity , 2000/fps)
window.addEventListener('keypress', jump_pleyer)
create_pipe()
create_coin()
var movecoin = setInterval(move_coin , 2000/fps)
var movepipe = setInterval(move_pipe , 2000/fps)

// security
window.addEventListener('mousemove', (e) => {
    e.preventDefault();
})
window.addEventListener('contextmenu' , (e) => {
    e.preventDefault()
})