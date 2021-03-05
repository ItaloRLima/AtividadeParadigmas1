var botao = document.getElementById("btn")
var botaoV = document.getElementById("btn2")
var fundo = document.getElementById("fundo")
var botaoVerm = document.getElementById("btn3")
var imagem = document.getElementById("imagem")

document.getElementById("btn").style.visibility = 'hidden';

function mudarcor(){
 
    imagem.remove();
    document.getElementById("tit").innerHTML = "Para qual deseja mudar?"
    document.getElementById("btn").innerHTML = "Verde"
    document.getElementById("btn").style.visibility = 'visible'
    document.getElementById("btn2").innerHTML = "Vermelho"
    document.getElementById("btn3").innerHTML = "Voltar"
    botao.addEventListener('click', verde)
    botaoV.addEventListener('click',vermelho)
    botVerm.addEventListener('click',function(){
        location.reload()
    })    
    
}

function obrigado(){
    imagem = imagem.setAttribute('src','Obrigado.jpg')
    document.getElementById("tit").innerHTML = "Obrigado, então!"
    botao.remove()
    botaoV.remove()
    document.getElementById("btn3").style.visibility = 'visible'
    botaoVerm.addEventListener('click',function(){
        location.reload()
    })
    document.getElementById("btn3").innerHTML = "Voltar"
}

function verde(){
        document.getElementById("title").innerHTML = "Verde"
        fundo.style.background = 'green'

}

function vermelho(){
    document.getElementById("title").innerHTML = "Vermelho"
    fundo.style.background = 'red'

}


botaoV.addEventListener('click', mudarcor)
botaoVerm.addEventListener('click',obrigado)
