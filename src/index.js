import './styles.css'

// import jQuery from 'jquery';
import $ from 'jquery';


import * as noUiSlider from 'nouislider';

let rangeSlider = document.getElementById('rangePrice');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [5000, 10000],
        connect: true,
        step: 100,
        range: {
            'min': 0,
            'max': 15000
        }
    });

    let rangeMin = document.querySelector('.slider__min');
    let rangeMax = document.querySelector('.slider__max');
    rangeSlider.noUiSlider.on('update', function (values, handle) {
        
        let value = Math.round(values[handle]).toLocaleString();
    
        if (handle) {
            rangeMax.textContent = value;
        } else {
            rangeMin.textContent = value;
        }
    });
}

import "slick-carousel";

// console.log($('.room__carousel'));
// console.log(document.querySelectorAll('.room__carousel'));
let roomCarousels = $('.room__carousel');
for (let index = 0; index < roomCarousels.length; index++) {
    // console.log($('.room__carousel')[index]); // возвращает dom-элемент с указанным индексом.
    // console.log($('.room__carousel').get(index)); // возвращает dom-элемент с указанным индексом, можно использовать отрицательное значение - перейдёт в конец массива.
    // console.log($('.room__carousel').eq(index));
    let slickOptions = {
        'prevArrow':$('.room__button_left').eq(index),
        'nextArrow':$('.room__button_right').eq(index),
        'dots': true,
        'dotsClass': 'room__rounds-wrapper',
        customPaging: function(slider, i) {
            return '<button class="room__image-scroll block block_ml4px"></button>';
        }
    }
    roomCarousels.eq(index).slick(slickOptions);
}



import "air-datepicker";
let datepickerOptions = {
    classes: "calendar calendar-js", //field_calendar
    minDate: new Date(),
    toggleSelected: true,
    position: "bottom left",
    offset: 0,
    navTitles: {
        days: 'MM yyyy'
    },
    inline: false,
    clearButton: true
}
$('.field_js-calendar input').datepicker(datepickerOptions)


let datepickerOptionsRange = {
    classes: "calendar calendar-js", //field_calendar
    minDate: new Date(),
    toggleSelected: true,
    position: "bottom left",
    offset: 0,
    navTitles: {
        days: 'MM yyyy'
    },
    inline: false,
    range: true,
    clearButton: true,
    multipleDatesSeparator: ' - '
}
$('.field_js-calendar-range input').datepicker(datepickerOptionsRange)

let calendars = $('.datepicker--buttons')
calendars.append($('<button class="text text_bold text_ttu text_BC9CFF">применить</button>'))



import Chart from 'chart.js/auto';

Chart.defaults.font.lineHeight = 1.7;
// Chart.defaults.plugins.legend.labels.font.lineHeight = 1.7
var ctx = document.getElementById("myChart");
if(ctx) {
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        
        options: {
             cutout: '92%',
          rotation: 180,
          responsive: false,
          // maintainAspectRatio: true,
          // aspectRatio: 2.5833,
          layout: {
              padding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
              }
          },
          plugins: {
            legend: {
              align: 'end',
              position: 'right',
              labels: {
                  usePointStyle: true,
                  textAlign: 'left',
                  boxWidth: 8,
                  boxHeight: 8,
                  padding: 0,
                  // padding: {
                  //     left: 0
                  // },
                  // generateLabels: (a) => {
                  //     return a.data.labels
                  //   },
                  font: {
                      size: 14,
                      family: "'Montserrat', sans-serif, Helvetica",
                      lineHeight: 1.7
                  }
              }
            }
          }
        },
        
        data: {
          labels: ["Великолепно", "Хорошо", "Удовлетворительно", "Разочарован"],
          datasets: [{
            // label: '# of Tomatoes',
            data: [130, 60, 70, 0],
            backgroundColor: [
                      "#FFE39C",
                      "#BC9CFF",
                      "#6FCF97",
                      "black"
            ],
            borderColor: [
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF',
              '#FFFFFF'
            ],
            borderWidth: 1,
            hoverBorderWidth:2
          }]
        }
      });
}


// document
let burger = document.querySelector('.burger-wrap');
let menu = document.querySelector('.header-guest__l-wr');
if(burger) {
    burger.addEventListener("click", toggleMenu);
    function toggleMenu() {
    menu.classList.toggle("header-guest__l-wr_active");
    }
}






// Номера
let field = document.querySelectorAll('.dropdown__field');
let drop = document.querySelectorAll('.dropdown__wrapper');
let toggleDropdown = function(e, dropIndex) {
    // console.log(e);
    // console.log(e.target);
    e.preventDefault();
    drop[dropIndex].classList.toggle("dropdown__wrapper_active");
    }
    for (let index = 0; index < field.length; index++) {
        field[index].addEventListener("click", function(e) {toggleDropdown(e, index)});
    }









// Подсчёт лайков
let buttonLike = document.querySelectorAll('.button-like'); // нашли коллекцию кнопок лайков.

let pressLike = function(element) {
    if(element.classList.contains('button-like_pressed')){ // если кнопка нажата
        element.querySelector('.button-like__text').textContent--; // нашли внутри кнопки
        // (именно этой кнопки на которую нажали) элемент с текстом и меняем его
    }
    else{
        element.querySelector('.button-like__text').textContent++;
    }
    element.classList.toggle('button-like_pressed')
}
for (let index = 0; index < buttonLike.length; index++) {
    // Для отдельного элемента коллекции, добавляем обработчик события клик
    buttonLike[index].addEventListener("click", function(e) { // в обработчике события должна быть функция без вызова (без круглых скобок, даже пустых)
        // лучше всегда использовать function(e) внутри которой будут придуманные функции, также может пригодиться само "e" (объект события)
        pressLike(buttonLike[index])
    }) // если поставить сюда ()
}








// Меняю количество кроватей, спален, людей в комнатах
let buttonMinus = document.querySelectorAll('.dropdown__button_js-minus');
let buttonPlus = document.querySelectorAll('.dropdown__button_js-plus');
let textBetween = document.querySelectorAll('.dropdown__amount');
// при загрузке страницы, отключили кнопки минус, если значение равно 0.
for (let index = 0; index < textBetween.length; index++) {
    if(textBetween[index].textContent === '0'){
        buttonMinus[index].classList.add('dropdown__button_tran');
        buttonMinus[index].setAttribute('disabled', 'disabled');
    }
}

let reduceNumber = function(index){
    if(textBetween[index].textContent === '1'){
        buttonMinus[index].classList.add('dropdown__button_tran');
        buttonMinus[index].setAttribute('disabled', 'disabled'); // первый аргумент - название атрибута, второй его значение.
    }
    textBetween[index].textContent--;
    let dropdownParent = textBetween[index].closest('.dropdown'); // ищет ближайшего предка, с указанным css-селектором.
    if(dropdownParent.querySelector('.input_js-rooms')){ // если в предке найден нужный инпут, выполняй действие
        setRoomsInputText(dropdownParent);
    } else {
        hideButtonClear(dropdownParent, dropdownParent.querySelector('.button_js-clear'));
    }
}
let increaseNumber = function(index){
    if(textBetween[index].textContent === '0'){
        buttonMinus[index].classList.remove('dropdown__button_tran');
        buttonMinus[index].removeAttribute('disabled'); // аргумент - название атрибута
    }
    textBetween[index].textContent++;
    let dropdownParent = textBetween[index].closest('.dropdown');
    if(dropdownParent.querySelector('.input_js-rooms')){
        setRoomsInputText(dropdownParent);
    } else{
        dropdownParent.querySelector('.button_js-clear').classList.remove('button_js-clear-hidden');
    }
}

let bedrooms = ['спальня', 'спальни', 'спален'];
let beds = ['кровать', 'кровати', 'кроватей'];
let bathrooms = ['ванная комната', 'ванные комнаты', 'ванных комнат'];
let variants = [];
variants.push(bedrooms);
variants.push(beds);
variants.push(bathrooms);

let setRoomsInputText = function(dropdownParent){
    let localTextBetween = dropdownParent.querySelectorAll('.dropdown__amount');
    let inputText = '';
    for (let index = 0; index < localTextBetween.length; index++) {
        let number = +localTextBetween[index].textContent;
        if(number === 0){
            continue
        } 
        if(number%10 === 1 && number%100 !== 11){ // число заканчивается на 1, но не на 11.
            inputText += number + ' ' + variants[index][0] + ', ';
        } else if(number%10 > 1 && number%10 < 5 && !(number%100 > 11 && number%100 < 15)){ // число заканчивается на 2, 3, 4, но не на 12, 13, 14.
            inputText += number + ' ' + variants[index][1] + ', ';
        } else {
            inputText += number + ' ' + variants[index][2] + ', ';
        }
    }
    if(inputText){
        inputText = inputText.slice(0, -2); // обрезали строку для инпута, убрав последние два символа ', '.
        // -2 это тоже самое, что string.lenght - 2.
    }
    let maxLength = 29;
    if(inputText.length >= maxLength){ // ограничение максимальной длины строки в инпуте.
        inputText = inputText.slice(0, maxLength-3) + '...';
    }
    dropdownParent.querySelector('.input_js-rooms').value = inputText;
}
for (let index = 0; index < buttonMinus.length; index++) {
    buttonMinus[index].addEventListener("click", function(e){reduceNumber(index)});
    buttonPlus[index].addEventListener("click", function(e){increaseNumber(index)});

}
// с 111-й по 143-ю строку делай по аналогии, для гостей. Теперь значение в инпуте будет меняться при нажати на кнопку применить, а также написать логику для очистить


let adults = ['взрослый', 'взрослых', 'взрослых'];
let children = ['ребёнок', 'ребёнка', 'детей'];
let babies = ['младенец', 'младенца', 'младенцев'];
let people = [];
people.push(adults);
people.push(children);
people.push(babies);

let setPeopleInputText = function(dropdownParent){
    let localTextBetween = dropdownParent.querySelectorAll('.dropdown__amount');
    let inputText = '';
    for (let index = 0; index < localTextBetween.length; index++) {
        let number = +localTextBetween[index].textContent;
        if(number === 0){
            continue
        } 
        if(number%10 === 1 && number%100 !== 11){ // число заканчивается на 1, но не на 11.
            inputText += number + ' ' + people[index][0] + ', ';
        } else if(number%10 > 1 && number%10 < 5 && !(number%100 > 11 && number%100 < 15)){ // число заканчивается на 2, 3, 4, но не на 12, 13, 14.
            inputText += number + ' ' + people[index][1] + ', ';
        } else {
            inputText += number + ' ' + people[index][2] + ', ';
        }
    }
    if(inputText){
        inputText = inputText.slice(0, -2); // обрезали строку для инпута, убрав последние два символа ', '.
        // -2 это тоже самое, что string.lenght - 2.
    }
    let maxLength = 29;
    if(inputText.length >= maxLength){ // ограничение максимальной длины строки в инпуте.
        inputText = inputText.slice(0, maxLength-3) + '...';
    }

    dropdownParent.querySelector('.input_js-guests').value = inputText;
}

let clearDropdown = function(dropdownParent){
    let localTextBetween = dropdownParent.querySelectorAll('.dropdown__amount');
    let localButtonMinus = dropdownParent.querySelectorAll('.dropdown__button_js-minus');
    let nullText = '0';
    let originalText = 'Сколько гостей'
    for (let index = 0; index < localTextBetween.length; index++) {
        localTextBetween[index].textContent = nullText;
        localButtonMinus[index].classList.add('dropdown__button_tran');
        localButtonMinus[index].setAttribute('disabled', 'disabled');
    }
    dropdownParent.querySelector('.input_js-guests').value = originalText;
    
}

let buttonApply = document.querySelectorAll('.button_js-apply');
let buttonClear = document.querySelectorAll('.button_js-clear');

let hideButtonClear = function(dropdownParent, buttonClear){
    let localTextBetween = dropdownParent.querySelectorAll('.dropdown__amount');
    let sum = '';
    for (let jndex = 0; jndex < localTextBetween.length; jndex++) {
        sum += localTextBetween[jndex].textContent;
    }
    if(sum === '000'){
        buttonClear.classList.add('button_js-clear-hidden');
    }
}

for (let index = 0; index < buttonApply.length; index++) {
    let buttonParent = buttonApply[index].closest('.dropdown');
    hideButtonClear(buttonParent, buttonClear[index]);
    buttonApply[index].addEventListener("click", function(e){
        setPeopleInputText(buttonParent);
    })
    buttonClear[index].addEventListener("click", function(e){
        clearDropdown(buttonParent);
        buttonClear[index].classList.add('button_js-clear-hidden');
    })
}








// рейтинг номера

let starsParent = document.querySelectorAll('.rate-button'); // 1 шаг

let estimateRoom = function(insideStars, index){
    for (let kndex = 0; kndex <= index; kndex++) {
        insideStars[kndex].classList.add('button-star_pressed');
    }
    for (let m = index+1; m < insideStars.length; m++) {
        insideStars[m].classList.remove('button-star_pressed');
    }
}

for (let index = 0; index < starsParent.length; index++) { // 2 шаг
    let insideParentStars = starsParent[index].querySelectorAll('.button-star');
    for (let jndex = 0; jndex < insideParentStars.length; jndex++) {
        insideParentStars[jndex].addEventListener("click", function(e){
            estimateRoom(insideParentStars, jndex);
        })
    }
}