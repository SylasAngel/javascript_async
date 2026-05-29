const button =document.getElementById("leker")
const statusDiv = document.getElementById('status')
button.addEventListener('click', ()=>{
    statusDiv.innerText = 'Töltés'; 
    fetch('http://127.0.0.1:63013/fruits',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((data)=> {
        return data.json()
    }).then((value)=>{
        statusDiv.innerText = '';
        console.log(value)
        for(const fruit of value){
            const div =document.createElement('div')
            div.innerText = `${fruit.id} - ${fruit.name} - ${fruit.price}`;
            document.body.appendChild(div)
        }
    })
});

