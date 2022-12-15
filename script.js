//variaveis
var playerName = ''
var playerPoints = 0;
var playerOption = 0

var pcOption = 0 //computador escolha
var pcPoints = 0

// faz o sorteio entre 1 e 3
function sortear(){
    return Math.floor(Math.random() *3 +1)
}
// Faz o calculo de quem venceu
// 0 - empate
// 1 - jogador
// 2 -- pc
function calcWinner(player, pc){
    if( player == pc ){
        return 0
    }else if( player == 1 && pc == 2){
        return 2
    }else if( player == 1 && pc == 3){
        return 1
    }else if( player == 2 && pc == 1){
        return 1
    }else if( player == 2 && pc == 3){
        return 2
    }else if( player == 3 && pc == 1){
        return 2
    }else if( player == 3 && pc == 2){
        return 1
    }
}
function post(text){
    document.getElementById('post').innerText = text
}
function cleanPost(text){
    document.getElementById('post').innerText = text
}
function pointPlayer(text){
    document.getElementById('playerPoints').innerText = playerPoints+= text
}
function pointPc(text){
    document.getElementById('pcPoints').innerText = pcPoints+= text
}
function opacity(type, option){
    document.getElementById(type+'Option'+option).classList.add('selecionado')
}
function desopacity(type, option){
    document.getElementById(type+'Option'+option).classList.remove('selecionado')
}

function jogar(escolha){
    // a funcao recebe o parametro na funcao que esta no onclick, que recebe o parametro nesta funcao, que joga o valor para a variavel
    playerOption = escolha
    opacity('player',playerOption)
    // sortear a jogada do computador
    pcOption = sortear()
    opacity('pc',pcOption)
    
    var winner = calcWinner(playerOption, pcOption)
    if(winner == 0){
        post('Empatou')
    }else if( winner == 1){
        post('Você venceu')
        pointPlayer(1)
    }else if( winner == 2){
        post('Computador venceu')
        pointPc(1)
    }else{
        //error
        post('Houve algum erro. Tente novamente')
    }

    setInterval(function(){
        desopacity('player', playerOption);
        desopacity('pc', pcOption);
        cleanPost('jogue novamente')}, 10000)

    
}


document.getElementById('playerOption1').onclick = function (){jogar(1)}
document.getElementById('playerOption2').onclick = function (){jogar(2)}
document.getElementById('playerOption3').onclick = function (){jogar(3)}

//if(maquina == )
playerName = prompt('Qual é o seu nome ?')
post(`Olá ${playerName}!!!
para jogar escolha uma opcao acima`)
document.getElementById('nickName').innerText = playerName + ':'