let input =  document.getElementById('input');

const mulai = document.getElementById('mulai').addEventListener('click', function(e) {

       if(isNaN(input.value)){

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hanya input angka!',
        });

       } else{


        if(input.value == ''){
      
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Form input belum di isi! ',
          });
         
  
         } else{

          if(input.value > 1000 || input.value < 2){
            Swal.fire({
              icon: 'warning',
              title: 'Waduh...',
              text: 'Emang yakin jumlahnya mau segitu 😋',
            });
          } else{
            localStorage.setItem('angka', input.value);
            input.value = '';
            // window.location.replace('./app.html')
            window.location.replace('app.html');
          }

         }

       }

       e.preventDefault();


});



