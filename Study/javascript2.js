/*
함수: 특정 작업을 여러 번 반복해야 하는 경우 해당 작업을 재사용 가능한 구조로 만들때 사용
특정 이벤트 호출시 기능을 동작하게 하기 위해서 사용
function 함수명(파라미터(입력값)){ return 반환값; }, 입략파라미터와 반환값은 선택 사항
자바스크립트는 오버로딩이 없음, 매개변수를 넣지 않아도 에러나지 않고 값이 없다고(NaN) 생각함
자바스크립트에서 변수를 선언하고 값을 할당하지 않으면 undefined 값으로 초기화되는 것처럼 
매개변수도 함수 호출 시 데이터를 전달하지 않으면 undefined 값이 할당되어 오류가 발생하지 않음
함수를 함수 구현 이전에 먼저 호출하여도 정상 실행이 됨
웹브라우저에서 자바스크립트의 코드를 해석 할 때
함수의 선언 부분을 코드의 윗쪽으로 옮겨서 먼저 해석함(호이스팅)

자바스크립트 함수의 특징
함수 선언식: function 함수명(파라미터(입력값)){ return 반환값; }
원형이 있고 호출부가 별도로 존재, 호이스팅(끌어올림)이 있기 때문에 아무곳에서나 호출 가능
함수 표현식은 변수에 함수를 할당해서 사용하는 방식, 함수는 object(객체, 주소를 가짐)
자바스크립트의 자료형은 변수에 할당 할 수 있어야 하며, 따라서 함수도 변수에 할당 할 수 있어여함
함수 표현식은 변수에 할당하는 함수에 식별자가 있으면 네이밍 함수, 없으면 익명 함수라고 구분
const 변수명 = function(){}; // 익명함수
const 변수명 = function 식별자(){}; // 네이밍 함수
변수명();로 함수를 호출 가능(변수에 함수의 주소를 할당하는것)
함수표현식이 발전해서 화살표 함수(람다 형태)가 됨, () => {};
화살표 함수는 익명 함수로만 정의할 수 있어서 
함수를 호출하려면 정의된 함수를 변수에 할당하는 방법인 함수 표현식을 사용해야함
화살표 함수에서 매개변수가 1개일 경우 ()를 생략가능

ES6 부터는 매개변수의 기본값을 지정하는 방법이 추가 되었음
function sum(a = 10, b = 20) { 이런식으로 기본값 지정 가능
    return a + b;
}

매개변수(parameter)와 인수(argument)
function 함수명(매개변수1, 매개변수2, 매개변수3) {  }
함수명(인수1, 인수2, 인수3);

스코프: 변수가 살아있는 범위, 자바스크립트는 스코프에 따라 참조하려는 식별자를 찾음
자바스크립트의 스코프는 함수 스코프와 블록 스코프 방식으로 나누어 지며 
이에 따라 전역 스코프와 지역 스코프로 참조 범위가 달라짐

함수 스코프: 함수에서 정의한 블록문만 스코프의 유효 범위로 인정하는 방식
전역스코프, 지역스코프
블록 스코프: {}로 구성된 블록문 기준으로 스코프의 유효 범위를 나누는 방식 
자바스크립트는 원래 함수 스코프르 따르는 언어였지만, (자바는 블록 스코프 방식)
ES6에서 let, const 키워드가 추가되면서 블록 스코프도 지원하게됨
let a = 10; // 전역
{
  let a = 100; // 지역, 지역변수가 더 우선순위 높음
  let b = 20; // 지역
  console.log(`코드 블록 내부 a : ${a}`);
  console.log(`코드 블록 내부 b : ${b}`);
}
console.log(`코드 블록 외부 a : ${a}`);
console.log(`코드 블록 외부 b : ${b}`);
실행결과
코드 블록 내부 a : 100
코드 블록 내부 b : 20
코드 블록 외부 a : 10
ReferenceError: b is not defined
전역 스코프에 선언한 변수를 전역 변수, 지역 스코프에 선언한 변수를 지역 변수
블록 스코프는 오직 let, const 키워드에서만 발생하므로 
같은 코드를 var 키워드로 변경하면 참조 오류가 발생하지 않음
let, const 키워드는 같은 식별자의 중복 선언이 불가능
정확하게는 같은 스코프 영역에서 중복 선언이 불가능, 참조 우선순위는 지역 변수가 높음

호이스팅: 코드를 선언과 할당을 분리해 선언부를 자신의 최상위로 끌어 올리는 것

즉시 실행 함수: 함수를 정의하면서 동시에 실행까지 하는 함수, (function(){})();
일반적으로 함수를 선언하면 전역 스코프에 정의 됨
그리고 프로그램이 종료되기까지 전역 스코프로 선언한 함수는 메모리에서 사라지지 않음
익명의 함수를 변수에 할당해서 사용해도 변수는 남아있어서, 
정말로 단 한번만 쓰고 사라지게 하기 위해 만들어진 새로운 문법

콜백함수(Callback Function): 파라미터로 함수를 전달받아, 함수의 내부에서 실행하는 함수
콜백 함수는 자바스크립트에서 전통적인 비동기적 메커니즘
호출 끝에 다른 호출이 연결됨, 함수의 이름을 매개변수로 넘기면 함수의 주소가 넘어감
오래 걸리는 일이 있으면 던져주고 다른 일 하다가...
비동기 : 블록킹(대기함)을 방지하여 싱글쓰레드가 논블로킹으로 동작 되도록 함
비동기적 테크닉을 사용하는 경우: 1) 사용자의 이벤트 처리, 2)네트워크 응답 처리,
3) 파일을 읽고 쓰는 동작, 4) 의도적으로 시간 지연이 필요한 기능

*/
function calculator(n1, n2, op) {
  switch(op) {
    case "+":
      return add(n1, n2);
    case "-":
      return sub(n1, n2);
    case "*":
      return mul(n1, n2);
    case "/":
      return div(n1, n2);
  }
}
function add(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function mul(n1, n2) {
  return n1 * n2;
}
function div(n1, n2) {
  return n1 / n2;
}

console.log("덧셈 : " + calculator(10, 20, "+"));
console.log("뺄셈 : " + calculator(10, 20, "-"));
console.log("곱셈 : " + calculator(10, 20, "*"));
console.log("나눗셈 : " + calculator(10, 20, "/"));

let var1, var2, op;
function inputVar1(num){
  var1 = num;
}
function inputVar2(num){
  var2 = num;
}
function inputOp(oper){
  op = oper;
}
function inputEnter(){
  document.write("<h1>"+ calculator(var1, var2, op) + "</h1>");
}