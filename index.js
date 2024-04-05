function cerrarMenu() {
    document.querySelector('.navbar-collapse').classList.remove('show');
  }

  document.addEventListener('click', function (event) {
    var isClickInside = document.querySelector('.navbar-collapse').contains(event.target);
    if (!isClickInside) {
      document.querySelector('.navbar-collapse').classList.remove('show');
    }
  });

  