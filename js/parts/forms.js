function forms() {
  var message = {
    loading: "Загрузка...",
    Success: "Спасибо",
    Failure: "Что-то пошле нетак..."
  };
  var form = document.querySelector('.main-form'),
      input = document.getElementsByTagName('input'),
      feedbackForm = document.querySelector('#form'),
      overlay = document.querySelector('.overlay'),
      //overlay
  phoneInput = document.querySelectorAll('#phone');
  var popupWindow = document.querySelector('.popup-form'),
      img = document.createElement("IMG");
  img.classList.add('status');
  form.addEventListener('submit', function (event) {
    json(form);
  });
  feedbackForm.addEventListener('submit', function (event) {
    json(feedbackForm);
  });

  function json(name) {
    event.preventDefault();

    function imgSettings() {
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
      form.style.display = "none";
      popupWindow.appendChild(img);
      setTimeout(function () {
        popupWindow.removeChild(img);
        overlay.style.display = "none";
        document.body.style.overflow = "";
      }, 3000);
    }

    var request = new XMLHttpRequest();
    request.open('POST', 'server.php'); // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Обычный Метод

    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // Метод для JSON

    var formData = new FormData(name); // здесь мы получаем всю информацию который написал пользователь 

    var obj = {}; // этот пункт нужен для Json. 
    // Мы превратили объект formData в обычный читаемый формат 

    formData.forEach(function (value, key) {
      obj[key] = value;
    }); // до сюда

    var json = JSON.stringify(obj); //превращает обычный JS объект в JSON файл

    request.send(json); //request.send(formData); //обычный метод отправки

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
        form.style.display = "none";
        popupWindow.appendChild(img);
        img.src = "/img/Preloader_4.gif";
      } else if (request.readyState === 4 && request.status == 200) {
        img.src = "/img/thanks.png";
        imgSettings();
      } else {
        img.src = "/img/fail.png";
        imgSettings();
      }
    });

    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }

  phoneInput.forEach(function (item) {
    item.addEventListener('keydown', function (event) {
      if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 107 || // Разрешаем: Ctrl+A
      event.keyCode == 65 && event.ctrlKey === true || // Разрешаем: home, end, влево, вправо
      event.keyCode >= 35 && event.keyCode <= 39) {
        // Ничего не делаем
        input = "";
      } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
          event.preventDefault();
        }
      }
    });
  });
}

module.exports = forms;