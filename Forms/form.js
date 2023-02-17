var data = 1;

    if (data == 1) {
      document.getElementById('manit_f').classList.remove('d-none');
      document.getElementById('other_f').classList.add('d-none');
    }
    if (data == 2) {
      document.getElementById('manit_f').classList.add('d-none');
      document.getElementById('other_f').classList.remove('d-none');
    }


    document.getElementById("college").addEventListener('change', (e) => {
      var val = document.getElementById("college").value;
      data = val;

      if (val == 1) {
        document.getElementById('manit_f').classList.remove('d-none');
        document.getElementById('other_f').classList.add('d-none');
      }
      if (val == 2) {
        document.getElementById('manit_f').classList.add('d-none');
        document.getElementById('other_f').classList.remove('d-none');
      }
    })