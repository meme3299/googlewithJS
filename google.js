const btn1 = document.querySelector('#search-button');
const btn2 = document.querySelector('#lucky-button');
const srch = document.querySelector('#search-sub');


btn1.addEventListener('click', (e) => {
    e.preventDefault();
        document.querySelector('#header').style.background = '#000000';
        if(srch.value===''){
            alert('please enter something to search about')

        } else{
            arr=srch.value.split(' ');
            console.log(arr);
            var wordcount = 0;
            for(var i = 0; i<arr.length; i++){
                wordcount++
            }
            console.log(wordcount);

        }


    }
    
    );
btn2.addEventListener('click', (c)=>{
    c.preventDefault();
    document.querySelector('#header').style.background = '#ff66cc';
    if(srch.value===''){
        alert('please enter something to search about')

    }

});