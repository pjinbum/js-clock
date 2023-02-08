// if()

// $('.menu-list ul>li>a:hover::after').css( 'background' , '#fff' );







const clock = document.querySelector('.toto')

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  //clock.innerHTML = hour +":" + minutes + ":"+seconds;
  clock.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`
}


function init() {
  setInterval(getTime, 100);
}

init();



// setInterval(getTime, 1000);

// let timeer = document.querySelector('.timeer>h1');
// timeer.innerHTML = init



$('.img1').click(function () {
  $('main>img').attr('src', './image/bg_morning.jpg')
});


$('.img1').click(function () {
  $('.phonimg>img').attr('src', './image/phone_morning.png')
});




$('.img2').click(function () {
  $('main>img').attr('src', './image/bg_afternoon.jpg')
});


$('.img2').click(function () {
  $('.phonimg>img').attr('src', './image/phone_afternoon.png')
});

$('.img3').click(function () {
  $('main>img').attr('src', './image/bg_evening.jpg')
});

$('.img3').click(function () {
  $('.phonimg>img').attr('src', './image/phone_evening.png')
});

$('.img4').click(function () {
  $('main>img').attr('src', './image/bg_night.jpg')
});

$('.img4').click(function () {
  $('.phonimg>img').attr('src', './image/phone_night.png')
});

$('.img4').click(function () {
  $('.lolem p').css('color', '#fff');
});

$('.img4').click(function () {
  $('nav img').attr('src', './image/logo_w.png');
});

$('.img4').click(function () {
  $('.menu-list ul>li>a').css('color', '#fff');
});

$('.img4').click(function () {
  $('.toto').css('color', '#fff');
});


$('.img4').click(function () {
  $('.menu-list ul>li>a::after').css('background', '#fff');
});



