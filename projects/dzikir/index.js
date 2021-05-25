const show =  document.getElementById('show');
let batas = localStorage.getItem('angka');
let angka = 1;
let hitung =  0;


let tab= document.getElementById('DZIKIR').addEventListener('click', function(e){
    
    show.innerHTML = `<p id="hasil">${angka++}</p>`;
    hitung++;
    navigator.vibrate([20]);
    if(hitung == parseInt(batas)){
        navigator.vibrate([600]);
        
        Swal.fire({
            title: 'Alhamdulillah...',
            text: `Kamu sudah berdzikir sebanyak ${batas} kali! 👍😇`,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3498DB',
            confirmButtonText: 'OKE'
          }).then((result) => {
            if (result.isConfirmed) {
            
                // window.location.replace('./index.html')
                window.location.replace('index.html')
            
            }
          });
        
    }
    e.preventDefault();

})