//ranking side
var ranking_side = document.querySelector('.rank-bg')
var close_rank = document.querySelector('.close-ranking')
var show_rank = document.querySelector('.show-rank')
// header button
var start_game = document.querySelector('.start-game')

close_rank.addEventListener('click', () => {
    ranking_side.style.display = 'none';
} )

show_rank.addEventListener('click', () => {
    ranking_side.style.display = 'flex';
})

// security
window.addEventListener('mousemove', (e) => {
    e.preventDefault();
})

// window.addEventListener('contextmenu' , (e) => {
//     e.preventDefault()
// })

// rank side
var rank_div = document.querySelectorAll('.rank-side > div')
function rank_div_style (){
    for(var i = 0; i < rank_div.length ; i ++){
        if( i == 0){
            number_one_rank(rank_div[i]);
        }
        else if (i == 1){
            number_two_rank(rank_div[i])
        }
        else if (i == 2){
            number_three_rank(rank_div[i])
        }
    }
}

function number_one_rank(div){
    var medal = document.createElement('img')
    medal.className = 'medal';
    medal.src = 'Image/medal/1.png';
    div.style.backgroundColor = '#B49B57'
    div.style.color = 'black'
    div.appendChild(medal);
}

function number_two_rank(div){
    var medal = document.createElement('img')
    medal.className = 'medal';
    medal.src = 'Image/medal/2.png';
    div.style.backgroundColor = '#d3d3d3'
    div.style.color = 'black'
    div.appendChild(medal);
}

function number_three_rank(div){
    var medal = document.createElement('img')
    medal.className = 'medal';
    medal.src = 'Image/medal/3.png';
    div.style.backgroundColor = '#bf8970'
    div.style.color = 'black'
    div.appendChild(medal);
}

rank_div_style()
// animation
var lobby_buttons = document.querySelectorAll('.button-side button')
i = 0;
function left_animation_button_lobby() {
    if(i < lobby_buttons.length){
        if(lobby_buttons[i].hasAttribute('go')){
            lobby_buttons[i].removeAttribute('go')
            lobby_buttons[i+1].setAttribute('go', '')
            if(lobby_buttons[i+1]){
                lobby_buttons[i+1].setAttribute('go', '')
            }
            i++;
        }
        else if( i  == lobby_buttons.length - 1){
            i = 0;
            lobby_buttons[i].setAttribute('go', '')
        }
    }
    
}

setInterval(left_animation_button_lobby , 1000)

//header button functions
start_game.addEventListener('click' , () => {
    window.location.assign('game/');
})