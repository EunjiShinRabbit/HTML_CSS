/* 
한꺼번에 코드 실행 ctrl + f5, 한줄씩 실행하기 ctrl-enter

HTML과 CSS는 정적웹만 구현할 수 있는 언어라서 한번 해석되어 화면에 표시되고 나면 수정 할 수 없음
이를 동적으로 동작하게 하기위해 자바스트립트를 사용
바닐라 JS: 어떠한 라이브러리나 프레임워크를 쓰지 않는 순수 자바스크립트
자바스크립트로 할수 있는 일
1) 웹의 요소를 제어(돔)
- 동적으로 움직이는 화면 제작
- 화면 가입 정보 등의 정보가 맞는지 체크 후 서버 전송
- 마우스나 키보드 동작에 대한 이벤트 감시
2) 웹 애플리케이션 제작
- 과거 앱에서 구현 가능한 분야를 웹에서 처리 가능
3) 다양한 라이브러리 사용
- 리액트, 뷰, 앵귤러 등의 라이브러리나 프레임워크 활용
4) 서버 개발
- Node.js를 활용한 서버 개발

간단한 입출력

1) 알림 창 출력: 알림창은 가장 많이 사용하는 간단한 대화 상자
alert(”메시지”);
2) 확인 창 출력:
let rst = confirm("컬러를 변경하실건가요?");
console.log(rst);
3) 프롬프트 창에서 입력 받기(string 타입으로 들어옴!!!!!!!!!!!!!!!!)
let name = prompt("이름을 입력 하세요");
document.write(name);
4) 웹 브라우저 화면에 출력을 담당하는 document.write()
document.write() 메소드는 웹 페이지가 로딩될 때 실행되면, 웹 페이지에 가장 먼저 데이터를 출력
따라서 document.write() 메소드는 대부분 테스트나 디버깅을 위해 사용
let name = prompt("이름을 입력 하세요");
document.write("<h1>" + name + "</h1>");
5) 콘솔창에 출력하는 console.log()
웹 화면에 출력하는 것이 아니라 개발자 도구의 콘솔창에 결과를 출력

HTML에서 자바스크립트 사용하기

1) id 값을 이용하는 방법
// HTML
<p id="data"></p>

// JavaScript
let name = "KyungSoo";
document.getElementById("data").innerHTML = name;

2) input 값을 통해 계산된 값 가져오기
// HTML
<div>
  <h2>입력 받은 숫자 범위에 포함된 소수의 합 구하기</h2>
  <input id="name" onchange="primeMain()">
</div>

// JavaScript
function primeMain() {
  var sum = 0;
  var number = document.getElementById('name').value;
}

자바스크립트 기초 문법
스타일 가이드
- 소스 파일의 이름은 알파벳 소문자, 하이픈(-), 밑줄(_)으로만 작성
- 소스파일의 확장자명은 .js
- 소스파일의 인코딩은 UTF-8
- 코드는 보기 좋게 줄 바꿈을 합니다.
- 세미콜론으로 문장을 구분 합니다.
- 식별자는 첫글자는 영문자, 언더스코어, $시작 해야 합니다.
- 단어와 단어를 연결하여 식별자를 작성하는 경우 하이픈이나 언더바 사용, 카멜표기법으로 표기 가능
- 예약어는 식별자로 사용 불가

1) 변수와 상수
변수, 상수: 데이터를 저장하는 공간
변수의 선언은 var, const, let 키워드로 할수 있으며, ES6에서 const와 let이 추가되었음
자바스크립트는 타입을 지정하지 않음
자바스크립트에서 변수 선언은 `선언 → 초기화` 단계를 거쳐 수행
- 변수의 선언
  선언 단계: 변수명을 등록하여 자바스크립트 엔진에 변수의 존재를 알림
  초기화 단계: 값을 저장하기 위해 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화
- 변수 할당
  변수에 값을 할당 할 때에는 할당 연산자(=)를 사용
- 새로운 변수 선언 키워드 let
  let은 중복 선언이 불가능 let num = 10 + 20;
  var 키워드 선언 시 중복 선언 가능(오류 유발 가능성이 있음)
  var num = 10 + 20; var num = 50;

2) var, let, const의 차이
var
- 변수 중복 선언이 가능 하기 때문에 예기치 못한 값이 반환되는 문제가 발생할 가능성이 있음
- 함수 레벨 스코프로 인해 함수 외부에서 선언된 변수는 모두 전역 변수로 됨
- 변수 선언문 이전에 변수를 참조하면 undefined가 반환됨 (호이스팅)
- 호이스팅: 코드 실행 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상
  코드 실행 전 이미 변수선언/함수선언이 저장되어 있기 때문에 
  선언문보다 참조/호출이 먼저 나와도 오류 없이 동작함(undefined가 반환)

let
- 중복 선언이 불가하고, 재할당은 가능 (다른 언어의 변수와 동일한 개념)
- 블록 { } 스코프를 따름, let는 호이스팅 하지 않음
const
- 선언과 동시에 초기값이 전달되어야 하고 이 후 재할당 불가 (다른 언어의 const와 동일 개념)
- 블록 { } 스코프를 따름

3) 자료형
자료형: 자바스크립트에서 사용할 수 있는데이터의 종류를 의미, 기본 자료형과 참조 자료형으로 구분
기본자료형(string, number, boolean, undefined, null, Symbol), 참조자료형(객체)
- 문자열
문자열 연결 연산자: +
이스케이프 문자: 작은따옴표 \' 큰따옴표 \" 줄바꿈 \n 수평탭 \t 역슬래시 \\
템플릿 문자열: 백틱(`(키보드 ~위치에 있는거))으로 문자열을 정의하는 방법, ES6에서 추가됨
백틱으로 감싼 문자열에는 ${변수명}하면 변수를 집어넣을 수 있음
- 숫자형 (Number)
자바 스크립트는 정수와 실수를 구분하지 않고 전부 하나의 숫자 자료형(숫자형)으로 취급
실수를 부동 소수점 방식으로 표현하는데, 실수를 부동 소수점 방식으로 표현하면 계산이 정확하지 않음
ex) sum = 0.1 + 0.2;하고 sum 출력하면 0.30000000000000004 출력됨
toString(): 숫자형 데이터를 문자형 데이터로 반환해주는 함수
- 논리형: 논리 자료형은 참 또는 거짓에 해당하는 논리 값인 true와 flase를 의미
- undefined: 변수나 상수를 컴퓨터 메모리 공간에 선언하면 반드시 생성한 공간에 저장할 데이터를 할당해야하는데
할당하지 않을 경우 자바스크립트 내부적으로 젼수와 상수 공간에 임시로 데이터를 할당하게 됨, 
이 때 할당되는 값이 undefined, 사용자가 임의로 정의하고 할당하는 자료형이 아닙
- null: null 자료형은 null 값 하나만 있으며, 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워 둘 때 할당함
undefined와 null을 묶어서 특수 자료형이라고도함
- 객체(object): 자바스크립트의 핵심적인 자료형, 객체 자료형에는 배열, 객체 리터럴, 함수가 있음
기본 자료형을 제외하고 자바스크립트의 거의 모든 데이터와 자료구조는 객체임
  배열
  복수의 데이터를 정의 할 수 있는 자료형, 자바와 다르게 모든 자료형을 저장 할 수 있음
  배열로 정의한 데이터를 요소라고 함, 배열의 요소를 접근하려면 인덱스(데이터의 위치 0부터 시작)를 이용
  나중에 데이터를 동적으로 추가하기 위해 빈 배열을 선언 가능 let array = [];
  객체 리터럴
  객체를 정의하는 가장 간단한 방법, 객체를 정의할 때 중괄호{}를 사용
  중괄호 안에는 키와 값의 한쌍으로 이루어진 속성이 들어감
  let score = { korScore : 80, engScore : 77, matScore : 89, scnScore : 87}; 이런식으로 정의함
  그냥 score를 출력하면 {korScore: 80, engScore: 77, matScore: 89, scnScore: 87} 형태로 나옴
  향상된 for 문 형태로 찍을 수 있음
typeof: 자료형의 타입을 반환함
toString(): 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환

연산자
1) 산술연산자: 덧셈, 뺄셈, 곱셈, 나눗셈과 같은 수학 연산을 수행하는 연산자
x**y x의 y승(x의 y거듭제곱)
2) 대입 연산자, 복합 대입 연산자
3) 비교 연산자: 피연산자를 비교한 뒤, 논리형 값인 참, 거짓으로 반환하는 연산을 수행
==(x와 y의 값이 같으면 true), ===(x와 y의 값이 같고 자료형도 같으면 true)
!=(x와 y의 값이 다르면 true), !==(x와 y의 값 또는 자료형이 다르면 true)
문자열은 아스키코드 값으로 대소를 비교함
4) 논리연산자: && || !
5) 삼항연산자: x?y:z

Number.toFixed(n)는 숫자를 소수점 n자리로 반올림
round()를 이용하여 소수점 n자리로 반올림
ex) 소수점 2자리로 반올림: 100을 곱한 숫자를 round()로 반올림하고, 100으로 나누면 
소수점 2자리로 반올림한 것처럼됨, 올림은 ceil() 버림은 floor()

형변환: 데이터의 자료형이 다른 자료형으로 바뀌는 것
묵시적 형변환: 숫자형 데이터와 문자열 데이터를 연결 연산자로 처리하면 문자열로 형 변환이 일어남
명시적 형변환

*/
// 객체 리터럴
let score = { korScore : 80, engScore : 77, matScore : 89, scnScore : 87};
for (i in score){
  console.log(i);
  console.log(score[i]);
}

// 실습문제 5 - 주민등록 번호를 입력받아 성별 나이 출력하기
while(true){
  let regnum = prompt("주민등록번호를 입력하세요");
  document.write("등록하신 번호는 "+regnum+"입니다!<br>");
  if(regnum.length == 14 && regnum.indexOf("-") == 6){
    document.write("주민등록번호가 정상적으로 입력되었습니다!");
    let age, gender;
    let today = new Date();
    if (regnum.charAt(7) == 1 || regnum.charAt(7) == 3){
      gender = "남성";
    }
    else if(regnum.charAt(7) == 2 || regnum.charAt(7) == 4){
      gender = "여성";
    }
    if (regnum.charAt(7) == 1 || regnum.charAt(7) == 2){
      age = today.getFullYear() - 1900 - Number(regnum.substring(0,2)) + 1;
    }
    else if(regnum.charAt(7) == 3 || regnum.charAt(7) == 4){
      age = today.getFullYear() - 2000 -regnum.substring(0,2) + 1;
    }
    document.write("<br>성별: "+gender+"<br>나이: "+age);
    break;
  }
  else{
    document.write("주민등록번호를 잘못 입력하셨습니다!");
    if(regnum.length != 14) document.write(" 총 자릿수를 확인해주세요!");
    if(regnum.indexOf("-") != 6) document.write(" 하이픈의 여부나 위치를 확인해주세요!");
  } 
}

const pi = 3.14;
console.log(pi*20);
console.log("안녕하세요");
let rst = confirm("컬러를 변경하실건가요?");
console.log(rst);
let name = prompt("이름을 입력 하세요");
document.write("<h1>" + name + "</h1>");
let tmp = prompt("정수를 입력하세요");
let num = Number(tmp);
let sum = 0;
for(let i =1; i<=num ; i++){
  sum+=i;
}
console.log(sum);
let city = "Suwon";
document.getElementById("data").innerHTML = city;

// 실슴문제 1 - ~까지의 소수의 합
function primeMain(){
  var sum = 0;
  var num = document.getElementById("num").value;
  document.write("소수 목록: ")
  for(var i = 0 ; i<= num ; i++){
    sum += primeNumber(i);
  }
  document.write(num+"까지 소수의 합: "+sum);
  return 0;
}
function primeNumber(num){
  var cnt = 0;
  for(var i = 1 ; i<=num; i++){
    if(num%i ==0) cnt++;
  }
  if (cnt ==2){
    document.write(num + ", ");
    return num;
  }
  else return 0;
}

// 실슴문제 2 - 나이 계산
let currentYear = 2022;
let birthYear = prompt("태어난 년도 4자리 입력" , "1990"); // 입력창에 1990이 들어가있음, 입력해서 수정 가능
let age1 = currentYear - birthYear + 1;
document.write("당신의 나이는 "+ age1 +"세 입니다!<br>");

// 실습문제 3 - 3개의 정수 중 큰 수와 작은 수 찾기
let a, b, c, min, max;
a = prompt("첫 번째 정수 입력", "");
b = prompt("두 번째 정수 입력", "");
c = prompt("세 번째 정수 입력", "");
if(a > b){
  if(a > c) max = a;
  else max = c;
}
else{
  if(b > c) max = b;
  else max = c;
}
if(a < b){
  if(a < c) min = a;
  else min = c;
}
else{
  if(b < c) min = b;
  else min = c;
}
document.write(a +", "+b+", "+c+" 중 가장 큰 수는 "+max+", 가장 작은 수는 "+min);

// 실슴문제 4 - 45분 이르게 알람 맞추기
let hh, mm;
hh = prompt("일어날 시간을 입력", "");
mm = prompt("일어날 분을 입력", "");
if(mm >= 45) mm-=45;
else{
  mm = mm*1 + 15;
  hh -=1;
}
if(hh < 0) hh+=24;
document.write("알람을 맞출 시간은 "+hh+"시 "+mm+"분 입니다");


