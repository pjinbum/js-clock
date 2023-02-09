//  바닐라innerHtml = 제이쿼리text
// document.querySelectorAll('nav li')[0].classList.add('on');
// (hr >=12 && hr <16)
// document.getElementById('wrapper').classList.add('afternoon');
// document.querySelectorAll('nav li')[1].classList.add('on');
// (hr >= 16 && hr < 20)
// document.getElementById('wrapper').classList.add('evening');
// document.querySelectorAll('nav li')[2].classList.add('on')

// for each

// let arrayP = { 'a':20 , 'b':30}

// console.log(arrayP['a']);
// console.log(arrayP.a);

// // querySelectorAll을 이용해서 nav li들을 담아준다.
// let btnList = document.querySelectorAll('nav li');
// let back  = document.getElementById('wrapper');

let name = ['예진1' ,'예진2' ,'예진3' ,'예진4' ,'예진' ]
// for문
for(let i=0; i<name.length; i++){
  console.log(name[i]);
}

// forEach문
// forEach 메서드로 배열을 순회하려면 콜백함수가 필요하다.
// 배열의 요소를 나타내는 매개변수가 반드시 하나 이상 있어야 한다.
// IE버전 8 이하를 제외한 모든 브라우저에서 사용 가능
//  Can i use
name.forEach(function (yejin) {
  console.log(yejin);
  
})
