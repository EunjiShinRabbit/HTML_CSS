/* 
생성자와 클래스 구문
- 생성자를 정의하는 방법

생성자는 new 연산자를 이용해 객체를 생성
생성자를 사용하면 이름이 같은 메소드와 프로퍼티를 가진 객체를 효율적으로 여러 개 생성할 수 있음
이 때 메스드를 생성자 프로토타입 객체에 추가해 두면 메모리 낭비를 피할 수 있고 
그 메서드를 다른 생성자에게 상속 할 수 있음

1) 함수 선언문으로 정의하는 방법
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
Card.prototype.show = function() {
  console.log(this.suit + this.rank);
}
2) 함수 표현식으로 정의하는 방법
let Card = function(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
Card.prototype.show = function() {
  console.log(this.suit + this.rank);
}
3) 클래스 선언문으로 정의하는 방법
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  show() {
    console.log(this.suit + this.rank);
  }
}
4) 클래스 표현식으로 정의하는 방법
let Card = class {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  show() {
    console.log(this.suit + this.rank);
  }
}

ES6 클래스 구문
ES6 부터는 생성자를 정의하는 새로운 문법인 클래스 구문이 추가됨
Java와 다르게 field를 따로 정의 안하고 생성자 내부에 작성

*/

// ES6 클래스 구문
class Animal {
  constructor(grp, name, age, col) {
    this.grpName = grp;
    this.name = name;
    this.age = age;
    this.color = col;
    Animal.count++;
  }
  printInfo() {
  console.log("그룹 : " + this.grpName);
  console.log("이름 : " + this.name);
  console.log("나이 : " + this.age);
  console.log("색 : " + this.color);
 } 
  // 정적 메소드 작성
  static getCount() {
    return Animal.count;
  }
}
Animal.count = 0;
let animal1 = new Animal("포유류", "토끼", 2, "분홍색");
let animal2 = new Animal("파충류", "공룡", 7, "초록색");
let animal3 = new Animal("포유류", "돌고래", 4, "하늘색");
let animal4 = new Animal("절지류", "타란튤라", 1, "검정색");
console.log(Animal.getCount());
animal1.printInfo();
animal2.printInfo();
animal3.printInfo();
animal4.printInfo();

// 상속
class Car {
  constructor(name, year, speed) {
    this.name = name;
    this.productYear = year;
    this.maxSpeed = speed; 
  }
}

class SportCar extends Car {
  constructor(isTurbo) {
    super("Ferrari", 2022, 220);
    this.isTurbo = isTurbo;
  }
  getSpeed() {
    return (this.isTurbo) ? this.maxSpeed * 1.2 : this.maxSpeed;
  }
}

let ferrari = new SportCar(true);
console.log("최대 속도 : " + ferrari.getSpeed());