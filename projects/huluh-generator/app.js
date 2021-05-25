document.getElementById('generate').addEventListener('click', function(e){
  
  let input = document.getElementById('input').value;
  if(input === '' || input === null){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Belum ada text yang di input!',
    })
  } else{
    let stringArr = input.split('');
    let arr = [];
    for(let i = 0; i < stringArr.length; i++){
      if(stringArr[i] === "a" || stringArr[i] === "i" || stringArr[i] === "e" || stringArr[i] === "o"){
        arr.push("u");
      }else if( stringArr[i] === "A" || stringArr[i] === "I" || stringArr[i] === "E" || stringArr[i] === "O"){
        arr.push("U");
      }
      else{
        arr.push(stringArr[i]);
      }
    }
    hasil = arr.join('');
    console.log(hasil);
    
    document.querySelector('.output').innerHTML = `<h4>${hasil}</h4>`;
  }
  e.preventDefault();
});

document.getElementById('clear').addEventListener('click', function(e){
  document.querySelector('.output').innerHTML = '';
  document.getElementById('input').value = '';
  e.preventDefault();
});
