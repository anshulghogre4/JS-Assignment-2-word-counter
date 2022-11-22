let textArea = document.querySelector('.textarea');
let checkBtn = document.querySelector('.check');
let clearBtn = document.querySelector('.clear');
let totalWords = document.querySelector('.totalWords');
let totalChars = document.querySelector('.totalCharacters');


// to clear textarea

clearBtn.addEventListener('click',clearField);

function clearField(e)
{
e.preventDefault();

textArea.value ="";
totalWords.innerText = "";
totalChars.innerText = "";
}

// on check to get total number of words and characters


checkBtn.addEventListener('click',returnValues);


function returnValues(e){
    e.preventDefault();
    let text = textArea.value;
     totalWords.innerText = totalWrds(text);
     totalChars.innerText = totalChrs(text);
}


function totalWrds(str){

    let wrdsArr = str.trim().split(' ');
    return wrdsArr.length;


}
function totalChrs(str){

    let wrdsArr = str.trim().split(' ');
    let newWordArr = wrdsArr.join('');
    return newWordArr.length;

}