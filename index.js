var inputText=document.querySelector('#normal-input')
var btn=document.querySelector('#btn-translate')
var outputArea=document.querySelector('.banana-output')

function makeUrl(text){
    return 'https://api.funtranslations.com/translate/minion.json?text=' +text;
}



btn.addEventListener('click',()=>{

    var url=makeUrl(inputText.value);

    fetch(url).then(response=>response.json())
    .then(data=>{
        outputArea.innerHTML=data.contents.translated;
    });
})