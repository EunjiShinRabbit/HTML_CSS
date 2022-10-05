/*
자바는 클래스(설계도)가 있어야 객체를 만들 수 있는데, 자바스크립트는 아님
자바스크립트의 객체: 이름과 값을 한 쌍으로 묶은 집합, 이름과 값이 한 쌍을 이룬 것을 프로퍼티라고 함
자바스크립트에서 객체를 생성하는 방법 3가지
1) 객체 리터럴(key와 value)로 생성하는 방법
자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 리터럴 표기(literal notation)를 이용하는 방법
let memberInfo = {
  name : "유나",
  age : 20,
  addr : "경기도 수원시",
  gender : "여성"
};
2) 생성자로 생성하는 방법
new 연산자를 사용하여 객체를 생성하고 초기화 할 수 있음
이때 사용되는 메소드를 생성자(constructor)라고 하며, 
이 메소드는 새롭게 생성되는 객체를 초기화하는 역할을 함
자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공
function MemberInfo(name, age, addr, gender) {
  this.name = name;
  this.age = age;
  this.addr = addr;
  this.gender = gender;
}
let memberInfo = new MemberInfo("유나", 20, "경기도 수원시", "여성");
3) Object.create로 생성하는 방법
Object.create() 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 만들어줌
이 메소드를 이용하면 사용자가 프로토타입 객체를 직접 명시할 수 있으므로, 상당히 유용하게 사용됨
요즘은 클래스가 나와서 이 방법을 잘 사용하지 않음
let member = Object.create(Object.prototype, {
  name: {
    value: "유나",
    writable: true,
    enumerable:true,
    configurable:true
  },
  age: {
    value: 20,
    writable:true,
    enumerable: true,
    configurable: true
  },
  addr: {
    value: "경기도 수원시",
    writable: true,
    enumerable: true,
    configurable:true
  },
  gender: {
    value: "여성",
    writable: true,
    enumerable: true,
    configurable:true
  }
});

프로퍼티: 자바으 내부의 필드와 같은것, C++의 멤버, 값을 저장할 수 있는 변수

프로토타입: 
생성자 안에서 this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가됨

메서드를 포함한 생성자로 인스턴스를 여러개 생성하면 같은 작업을 하는 메서드를 
인스턴스 개수만큼 생성하게 되며 결과적으로 그만큼의 메모리를 소비하게 됨
function Circle(center, radius) { // 함수선언식
    this.center = center;
    this.radius = radius;
    this.area = function() { //함수 표현식, 함수를 만들되 바로 변수로 받아오는것
        return Math.PI * this.radius * this.radius;
    }
}

프로토타입 상속(자바스크립트의 상속)
자바스크립트는 프로토타입 상속에 기반을 둔 객체 지향 언어
자바스크립트는 클래스가 아닌 객체를 상속 합니다. 
자바스크립트의 상속은 프로토타입 체인이라고 부르는 객체의 자료 구조로 구현되어 있음

프로토타입
자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있습니다.
모든 객체는 그들의 프로토타입으로부터 프로퍼티와 메소드를 상속받습니다.
이처럼 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 
이때 상속되는 정보를 제공하는 객체를 프로토타입(prototype)이라고 함

## 프로토타입 체인
모든 객체는 내부 프로퍼티를 가지고 있습니다.
객체의 __proto__ 프로퍼티는 그 객체에게 상속을 해 준 부모를 가리킴

## this 키워드
this 키워드는 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킵니다.
메소드 내부에서 사용된 this 키워드는 해당 메소드를 포함하고 있는 객체를 가리킵니다.
객체 내부에서 사용된 this 키워드는 객체 자신을 가리킵니다.
this는 변수가 아닌 키워드 이므로, 사용자가 임의로 가리키는 값을 바꿀 수 없

## 객체 프로퍼티(property)
모든 자바스크립트 객체는 Object 객체와 Object.prototype 객체의 프로퍼티를 상속 받습니다.
prototype 프로퍼티를 이용하면 현재 존재하는 프로토타입에 새로운 프로퍼티나 메소드를 쉽게 추가 할 수 있음


## 객체 속성에 접근하기
자바스크립트에서는 **대괄호 연산자[]와 마침표(.) 연산자**를 사용한 두 가지 접근 방법을 제공


## 객체 속성 동적으로 추가하기
객체 속성에 키로 접근해 값을 재할당하면 기존 속성값을 변경 할 수 있습니다.
만약 해당 키가 없다면 해당 키와 값으로 구성된 새로운 속성이 객체에 추가 됩
## 객체 속성 동적으로 삭제하기
객체 속성 앞에 delete 키워드를 명시하면 해당 속성이 삭제

## 객체의 데이터 관리 방법 이해하기
const 키워드는 값을 변경하거나 추가, 삭제 등을 할 수 없는 상수 입니다.
하지만 const로 선언된 객체의 속성을 추가 또는 삭제가 가능한 이유는 객체의 자료형이 참조형이기 때문

### 기본 자료형의 데이터 관리 : 깊은 복사(Deep Copy)
기본 자료형은 변수에 데이터를 할당 할 때 데이터 그 자체가 할당 됩니다.
이렇게 복사한 값을 재할당할 때 한쪽 데이터가 변경되어도 서로 영향을 미치 않게 복사되는 것을 깊은 복사

### 참조 자료형의 데이터 관리 : 얕은 복사(Shallow Copy)
참조 자료형은 변수 공간에 데이터가 할당되는 것이 아니고, 에디터가 위치하고 있는 메모리의 주소값만 할당


표준 내장 객체(자바의 API클래스와 같음)
자바스크립트에는 개발 편의를 위해 수많은 객체가 미리 만들어져 있습니다.
이렇게 만들어진 객체는 자바스크립트에 기본으로 내장되어 있어서 스코프릐 위치를 따지지 않고 모든 영역에서 공통으로 사용 할 수 있습

문자열을 다루는 String 객체
- 속성 length: 문자열의 길이를 반환
- 메소드
1) includes(): 특정 문자열 포함 여부, 대상 문자열에 매개변수로 전달되는 문자열이있으면 true
2) indexOf(): 특정 문자열 포함 여부 확인, 대상 문자열과 일치하는 첫번째 문자의 인덱스를 반환
3) lastIndexOf(): 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환
4) replace(): 대상 문자열에서 매개변수로 전달되는 문자열과 일치하는 한 부분을 찾아서 
다른 데이터로 변경한 새로운 문자열을 반환 replace(해당문자열, 바꿀문자열)
5) replaceAll(): 일치하는 모든 부분을 다른 데이터로 변경한 새로운 문자열 반환
6) split(): 매개변수로 전달도는 구분자를 기준으로 문자열을 분리해서 배열로 반환
7) toUpperCase(), toLowerCase(): 문자열을 모두 대문자 및 소문자로 변경
8) trim(): 문자열의 앞, 뒤 공백을 제거
9) padStart(), padEnd(): 문자열 앞과 뒤에 지정된 문자를 지정된 길이만큼 추가하는 함수
10) slice(): 파라미터로 시작 위치와 종료 위치를 주면, 문자열에서 해당 부분을 잘라내서 반환
11) substring(): slice() 함수와 동일한 기능, 파라미터로 음수를 허용하지 않는다는 차이가 있음
12) charAt(): 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
13) charCodeAt(): 문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드값을 반환
아스키코드 128자, 유니코드: 128자까지는 아스키 코드와 같고 이후는 다름, 전세계 국가의 문자 포함 
14) concat(): 2개 이상의 문자열을 하나의 문자열로 합치는 함수

숫자와 관련된 작업을 할 때 사용하는 Number 객체
- 메소드
1) Number.parseFloat(): 문자열에 포함된 숫자 부분을 실수 형태로 반환
문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 실수 형태로 반환
Number.parseFloat("12문자열");   // 12
Number.parseFloat("12 34 56");   // 12
Number.parseFloat("문자열 56")); // NaN
2) Number.parseInt(): 문자열에 포함된 숫자 부분을 정수 형태로 반환
문자열에 여러 개의 숫자가 존재하면, 그중에서 첫 번째 숫자만을 정수 형태로 반환

배열을 다루는 Array 객체
- 속성 length: 배열의 요소 갯수를 반환
- 메소드
1) concat(): 2개 이상의 배열을 하나의 배열로 결합, arr1.concat(arr2, arr3)
2) slice(): 배열을 잘라서 배열을 반환, 해당 인덱스부터 끝까지 또는 ~이상 ~미만
첫 번째 파라미터는 시작 인덱스, 두 번째 파라미터는 종료 인덱스(생략 가능)
- 파괴적 메소드: 원본 배열의 내용을 변경할 수 있음
1) push(): 배열에 새로운 요소(데이터, 객체 등)를 추가
2) pop(): 배열에서 마지막 데이터를 제거하고, 마지막 데이터를 반환
3) shift(): 배열에서 첫 번째 요소를 제거하고, 첫 번째 요소를 반환
4) unshift(): 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
5) sort(): 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬
6) reverse(): 배열에 문자형 데이터가 있는 경우 내림차순으로 정렬(역순으로 정렬)
- 비파괴적 메소드: 원본 배열의 내용이 변경되지 않음, 값만 참조함
1) forEach(): 배열의 요소를 하나씩 순회하면서 요소마다 callback 함수를 호출
arr.forEach(function(e) { console.log(e); }); 함수를 정의, e는 요소를 순회하기 위한 key값
2) filter(): 배열의 요소를 하나씩 순회하면서 요소다가 callback 함수를 호출해 true를 반환하는 
요소만 추출해 새로운 배열을 만들어서 반환, persons.filter(person => person.point > 80)
특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환
3) find(): 배열의 요소를 탐색하면서 주어진 판별 함수를 만족하는 첫번째 값을 반환
4) findIndex(): find()와 같은 동작을 하나 값 대신 인덱스 숫자를 반환
5) includes(): 배열에 특정 값이 포함되어있는지 확인해서 포함되어있으면 true 아니면  false
6) toString(): 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
7) join(): 배열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합해서 하나의 문자열로 반환

날짜와 시간을 다루는 Date 객체
- 인스턴스 만들기
날짜 출력시 브라우저에서 결과를 확인해야 정상적인 시간으로 확인됨, 
날짜와 시간 정보를 숫자로 전달 시 월은 0부터 시작, 요일은 0부터 시작 0이 일요일, 6일 토요일
const date1 = new Date(2022, 11, 27);하면 Date는 입력된 값을 분석하여 UTC로 값을 보관하기 때문에
2022-12-26T15:00:00.000Z 출력됨
Seoul은 시간은 UTC 기준 +9 시간이므로 UTC로 표현하게 되면 9시간 전의 시간으로 표기
setHours 함수는 첫 인자를 UTC가 아닌, 현지 시간의 시간값으로 인지
그러므로 내부에서도 시간값을 설정할 때 UTC가 아닌 현재 시간을 기준으로 주어진 시간값을 설정하게됨
date1.setHours(9); 하고 나면 2022-12-27T00:00:00.000Z 출력됨
- 메소드
1) getFullYear(), setFullYear(): 연도를 4자리 숫자로 표시
2) getMonth(), setMonth(): 월을 0부터 11까지의 숫자로 표시
3) detDate(), setDate(): 일을 1부터 31까지의 숫자로 표시
4) getDay(): 요일을 0부터 6까지 숫자로 표시, 일요일 0, 토요일 1
5) getTime(), setTime(): 1970년 1월 1일 12:00 이후의 시간을 밀리초 단위로 표시
6) getHours(), setHours(): 시를 0부터 23까지의 숫자로 표시
7) getMinutes(), setMinutes(): 분을 0부터 59까지의 숫자로 표시
8) getSeconds(), setSeconds(): 초를 0부터 59까지의 숫자로 표시
9) getMilliseconds(), setMilliseconds(): 밀리초를 0부터 999까지의 숫자로 표시

Set 객체
중복을 허용하지 않는 특성
Set 생성자 - new Set() 생성자를 사용해서 생성
add() - add()라는 함수를 사용해서 데이터를 추가
has() - set에 주어진 요소가 존재하는지 확인
size() - set에 저장된 요소의 개수 확인
delete() - 특정 데이터를 삭제하려면 delete() 함수를 사용
clear() - 저장되어 있는 모든 데이터를 한 번에 삭제하려면 clear() 함수를 사용
forEach() - 주어진 함수를 Set 요소 각각에 대해 삽입 순서대로 실행

Map 객체
Map 객체는 Object와 매우 유사
Map 객체는 키와 값을 맵핑시켜서 값을 저장하며 저장된 순서대로 각 요소에 접근할 수 있음
Map 생성자 - Map 객체 생성은 new Map() 생성자를 사용
set() - 객체에 데이터를 저장할 때 사용(키와 값)
get() - 객체에 저장된 데이터를 읽을 때 get()함수에 파라미터로 키를 전달
has() - 지정된 키가 있는 요소가 있는지 확인
delete() - 특정 데이터를 삭제하려면 delete() 함수를 사용
clear() - 저장되어 있는 모든 데이터를 한 번에 삭제하려면 clear() 함수를 사용
forEach() - Map에 저장되는 모든 데이터를 읽을 때는 forEach() 함수를 사용
entries() - 각 요소에 대한 쌍을 포함하는 새 iterator 객체를 반환
keys() - 각 요소에 대한 키를 포함하는 새 iterator 객체를 반환
values() - 각 요소에 대한 값을 포함하는 새 iterator 객체를 반환

수학 연산을 다루는 Math 객체
Date 객체는 new 키워드로 Date 객체의 날짜 데이터인 인스턴스를 생성해 변수에 할당한 뒤에 사용 했지만, 
Math 객체는 new 키워드 없이 Math 객체에 바로 메서드를 사용가능
- 메소드
1) Math.random(): 0보다 크고 1보다 작은 숫자형 값을 반환
2) Math.floor(): 주어진 숫자와 같거나 작은 정수 중 가장 큰 수 반환(내림)
3) Math.ceil(): 주어진 숫자와 같거나 큰 정수 중 가장 작은 수 반환(올림)
4) Math.round(): 반올림


*/
// 프로토타입 체인
let objA = {
  name: "Tom",
  sayHello: function() {
      console.log("Hello! " + this.name);
  }
};
let objB = {
  name: "Huck"
};

objB.__proto__ = objA;
let objC = {};
objC.__proto__ = objB;
objC.sayHello();

// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "Sonata";
carInfo.year = "2022/08/15";
console.log(carInfo.name);
// 객체 속성 동적으로 삭제하기 - delete 키워드 명시
carInfo.year = "2022/08/15";
delete carInfo.year;
console.log(carInfo);

// Date 객체 인스턴스 만들기
const date = new Date();
console.log(date);

const date1 = new Date(2022, 11, 27);
console.log(date1);

let dday = new Date("2022-12-26");
let now = new Date();
let remainTime = dday.getTime() - now.getTime();
remainTime = Math.floor(remainTime/(1000*60*60*24)); 
// 1000곱해서 그냥 초, 60곱해서 분, 60곱해서 시, 24곱해서 날짜 한것을 내림  
document.querySelector('#result').innerText = remainTime;

// map
let map = new Map();
map.set("name", "커비");
map.set("email", "kirby@gmail.com");
map.set("addr", "푸푸푸랜드");

console.log(map.size);
console.log(map.get("name"));
console.log(map.has("email"));
map.delete("name");

map.forEach(function (e){
    console.log(e);
});

let seed = prompt("전체 응모자 수를 입력하세요","");
let picked = Math.floor((Math.random()*seed)+1);

document.querySelector('#seed').innerText = seed;
document.querySelector('#picked').innerText = picked;