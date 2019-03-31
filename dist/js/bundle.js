/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calcs.js":
/*!***************************!*\
  !*** ./js/parts/calcs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calcs() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      starting = 0,
      //анимашка
  valueTotal = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('keydown', function () {
    onlyNumbersFilter();
  });
  persons.addEventListener('change', function () {
    // Стрелочную функцию нельзя потому что будет this
    personsSum = +this.value;
    callAnimation();
  });
  restDays.addEventListener('keydown', function () {
    onlyNumbersFilter();
  });
  restDays.addEventListener('change', function () {
    // Стрелочную функцию нельзя потому что будет this
    daysSum = +this.value;
    callAnimation();
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total; // totalValue.innerHTML = a *this.options[this.selectedIndex].value;

      valueTotal = a * this.options[this.selectedIndex].value;
      animateValue("total", starting, valueTotal, 400); // анимашка
    }
  }); // Я ЗДЕСЬ СДЕЛАЛ КОПИЮ СКРИПТА С POPUP И УБРАЛ + ТАК КАК В СКРИПТЕ POPUP МОЖНО ВВЕСТИ +

  function onlyNumbersFilter() {
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || // Разрешаем: Ctrl+A
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
  } //Анимация TOTAL


  function animateValue(id, start, end, duration) {
    var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range) * 10),
        obj = document.getElementById(id),
        timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;

      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  function callAnimation() {
    if (restDays.value != '' && persons.value != '' && restDays.value != 0 && persons.value != 0) {
      total = (daysSum + personsSum) * 400;
      starting = total - total / 100 * 0.5;
      animateValue("total", starting, total, 400); // анимашка
    } else {
      totalValue.innerHTML = 0;
    }
  }
}

module.exports = calcs;

/***/ }),

/***/ "./js/parts/forms.js":
/*!***************************!*\
  !*** ./js/parts/forms.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/parts/popup.js":
/*!***************************!*\
  !*** ./js/parts/popup.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      //параметр текущего слайда 
  slides = document.querySelectorAll('.slider-item'),
      //слайды
  prev = document.querySelector('.prev'),
      // кнопка слайда 
  next = document.querySelector('.next'),
      //кпопка следущая 
  dotsWrap = document.querySelector('.slider-dots'),
      // обертка точек
  dots = document.querySelectorAll('.dot'); //точки

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1; //проверка картинок 
    }

    if (n < 1) {
      slideIndex = slides.length; //проверка картинок 
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    }); //Делаем все картинки не виднами 

    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    }); // Делаем все точки не виднами

    slides[slideIndex - 1].style.display = 'block'; // Показываем первую картинку слайдера 

    dots[slideIndex - 1].classList.add('dot-active'); // Показываем первую точку 
  }

  showSlides(); // Я вызвал саму функцию слайдера в DOM так как если не вызывать 
  //тогда слайдер не будет работать пока не нажнемшь кнопки слайдера 

  function viewSlides(n) {
    showSlides(slideIndex += n); //здесь вызываем первую функцию 
  }

  function currentSlide(n) {
    showSlides(slideIndex = n); // Когда мы будем нажимать или перелистовать слайд сюда будет подставлятся нужный индекс 
  }

  prev.addEventListener('click', function () {
    viewSlides(-1); //здесь будут листаться слайды назад
  });
  next.addEventListener('click', function () {
    viewSlides(+1); //здесь будут листаться слайды вперед
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function time() {
  var deadline = '2019-03-29',
      getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  },
      setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        updateClock = function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    },
        timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadline);
}

module.exports = time;

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

window.addEventListener('DOMContentLoaded', function () {
  var calcs = __webpack_require__(/*! ../../js/parts/calcs */ "./js/parts/calcs.js"),
      forms = __webpack_require__(/*! ../../js/parts/forms */ "./js/parts/forms.js"),
      popup = __webpack_require__(/*! ../../js/parts/popup */ "./js/parts/popup.js"),
      slider = __webpack_require__(/*! ../../js/parts/slider */ "./js/parts/slider.js"),
      tabs = __webpack_require__(/*! ../../js/parts/tabs */ "./js/parts/tabs.js"),
      timer = __webpack_require__(/*! ../../js/parts/timer */ "./js/parts/timer.js");

  calcs();
  popup();
  slider();
  tabs();
  timer();
  forms();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map