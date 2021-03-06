ProgressBar
=========
![ProgressBar](http://evgenin.ru/github/images/progressbar.jpg)

Плагин для самой простой реализации загрузочной полоски. Она появляется сверху, двигается и исчезает.


Первые шаги
----------
Подключить стандартные стили или свои
```html
<link rel="stylesheet" href="progressBar.default.css"> 
```
Подключить саму библиотеку
```html
<script src="progressBar.min.js"></script> 
```
Для того чтобы начать использовать плагин необходимо инициализировать
```javascript
var progress = new ProgressBar();
```
Для отображения полосы нужно вызвать метод `show`
```javascript
progress.show();
```
Чтобы задать значение полосе нужно передать значение в метод `value`
```javascript
progress.value(50); // Значение от 0 до 100
```

Стилизация
----------
Описание классов. Цвет можно указать в скрипте, а все остальное все равно менять придется через основной файл
```css
.js_ProgressBar__parent{} /*Родительский объект полосы (задается в скрипте options.place)*/
.js_ProgressBar__outer{} /*Контейнер для полосы*/
.js_ProgressBar__outer.js_ProgressBar__show{} /*Состояние контейнера, когда полоса на виду*/
.js_ProgressBar__bart{} /*Сама полоса*/
```

API
----------
Создание экземпляра плагина. Нужно назначить экзмепляр переменной, для дальнейшей работе с ним
```javascript
var progress = new ProgressBar({
	place: "body",
});
```
Отображение полосы. Для созданного экземпляра при необходимости можно вызвать метод `show`, который создает DOM на странице и отображает элемент
```javascript
progress.show();
```
Скрытие полосы. Для созданного экземпляра при необходимости можно вызвать метод `hide`, который скрывает элемент и удаляет DOM со страницы
```javascript
progress.hide();
```
Установка значения. Принимает значения от 0 до 100 и устанавливает ширину полосы в процентах
```javascript
progress.value(50); // Значение от 0 до 100
```
События
----------
События устанавливаются при создании экземпляра через методы

Метод `onCreate` срабатывает при инициализации плагина
```javascript
onCreate : function(){}
```
Метод `onShow` срабатывает при показе полосы
```javascript
onShow : function(){}
```
Метод `onHide` срабатывает при скрытии полосы
```javascript
onHide : function(){}
```
Метод `onChange` срабатывает при изменении значения
```javascript
onChange : function(){}
```
Метод `onComplete` срабатывает при достижении `100%`
```javascript
onComplete : function(){}
```
Метод `onEmpty` срабатывает при достижении `0%`
```javascript
onEmpty : function(){}
```