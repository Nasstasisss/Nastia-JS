var btn1 = document.querySelector('#id1')

var btn2 = document.querySelector('#id2')

var src = ['https://google.com',
            'https://discord.com/login',
            'https://www.youtube.com'
]
var colors = ['red',
            'yellow',
            'blue',
            'green'
]

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

btn1.addEventListener('click', function(){
    window.location.href = src[getRandom(0,2)]
})

btn2.addEventListener('click', function(){
    document.body.style.backgroundColor = colors[getRandom(0,3)]
})