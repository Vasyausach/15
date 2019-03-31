function popup() {
  var popupBtn = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      form = document.querySelector('.main-form'),
      // form
  popupClose = document.querySelector('.popup-close'),
      more = document.querySelector('.more'),
      container = document.querySelector('#about'),
      show = function show() {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
    form.style.display = "block";
  };

  popupClose.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    popupBtn.forEach(function (item) {
      item.classList.remove('more-splash');
    });
    document.body.style.overflow = "";
  });
  container.addEventListener('click', function (event) {
    if (event.target && (event.target.classList.contains('description-btn') || event.target == more)) {
      console.log("hello world");
      show();
    }

    if (event.target && event.target.classList.contains('description-btn')) {
      popupBtn.forEach(function (item) {
        item.classList.add('more-splash');
      });
    } else {
      more.classList.add('more-splash');
    }
  });
}

module.exports = popup;