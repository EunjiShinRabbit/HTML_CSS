/*
JSON(JavaScript Object Notation): 자바스크립트 객체를 문자열로 표현하는 데이터 포맷
JSON을 사용하면 다른 프로그래밍 언어와의 데이터 송수신이 간단해짐
서버와 웹 클라이언트가 데이터를 주고 받을 때 자주 사용
JSON을 사용하면 객체를 직렬화 할 수 있음, 속성과 값의 쌍의 배열 자료형이이면 직렬화가 가능
자바스크립트 언어로 부터 파생되어 자바스크립트의 구문 형식을 따르지만 !!언어 독립적인 포맷임!!
객체리터럴 {name: "Tom", age: 17, marriage: false, data: [2, 5, null]};
JSON데이터 '{"name":"Tom", "age":17, "marriage":false, "data":[2, 5, null]}'
- JSON 데이터 표기, 데이터타입(예시): 설명
1) 숫자(12.345): 정수와 부동소수점의 10진수 표기만 가능, 부동소수점은 지수 표기법도 가능
2) 문자열("abc"): 큰따옴표로 묶어야함, 이스케이프 시퀀스도 포함 가능
3) 논리값(true): true 또는 false
4) null값(null)
5) 배열([1, "abc", true]): 모든 데이터 타입을 배열의 요소로 사용할 수 있음
6) 객체({"x":1 "y":"abc"}): 프로퍼티 이름은 큰따옴표로 묶은 문자열로 표기
- JSON의 변환과 환원
1) 자바스크립트 객체를 JSON 문자열로 변환하기 : JSON.stringif
첫번째 인수인 value에는 JSON으로 변환할 객체를 지정, 두 번째 인수인 replacer에는 함수 또는 배열을 지정
2) JSON 문자열을 자바스크립트 객체로 환원하기 : JSON.parse

Ajax: 자바스크립트를 사용하여 비동기 HTTP 통신을 하는 기법
(푸쉬(클라이언트 개입 없이 조회)는 안됨, 클라이언트가 요청해야함)
(동기는 나와 상대방이 함께 움직이는것(내것을 기다리고 있는것), 비동기는 따로 움직이는것)
Ajax 기법을 활용한 웹 애플리케이션은 사용자에게 데스크톱 앱과 같은 편의성을 제공할 수 있음
HTTP: 웹 브라우저와 웹서버가 HTML로 작성된 웹페이지나 동영상, 음성 파일 등을 주고받기 위함 프로토콜
- HTTP 통신
HTTP에서는 클라이언트가 서버에 요청 메시지를 보내고 이에 대해 서버가 응답 메시지를 반환
서버는 응답 메시지를 반환한 후에 초기 상태로 돌아감, 이 때 서버는 클라이언트의 상태를 저장하지 않음
HTTP에서는 전송 계층 프로토콜로 TCP를 사용하고 네트워크 계층 프로토콜로 IP를 사용
이 두계층을 합쳐서 TCP/IP라고 부름, HTTP에서는 기본적으로 80번 포트를 사용
- OSI 7계층(Open System Interconnection)

- HTTP 요청 메시지
요청 행, 요청 헤더, 메시지 본문으로 구성, 요청 메시지의 전송 방법은 GET와 POST 방식 있음
성공(200), 클라이언트 오류(unauthorized 401, Forbidden 403, Not Found 404, Request Timeout 408)
서버 오류(Internal Sever error 500, Service Unavaliable 503)

- Ajax(Asynchronous JavaScript and XML); 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나
웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있음
JSON, XML, HTML, 텍스트파일 등 다양한 데이터를 주고 받을 수 있음

- 자바스크립트는 어떻게 비동기 방식을?
누군가는 계속 서버가 응답을 주는지 안주는지 체크를 해야함(폴링 방식)
나는 내 할일을 하고 Ajax는 서버가 응답을 주는지 계속 확인함으로서 비동기 통신

- Ajax의 장점
1) 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있음
2) 웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있음
3) 웹 페이지가 로드된 후에 서버로부터 데이터를 받을 수 있음
4) 백그라운드 영역에서 서버로 데이터를 보낼 수 있음

- Ajax의 한계
1) Ajax는 클라이언트가 서버에 데이터를 요청하는 클라이언트 풀링 방식을 사용하므로, 
서버 푸시 방식의 실시간 서비스는 만들 수 없음
2) Ajax로는 바이너리 데이터를 보내거나 받을 수 없음
3) Ajax 스크립트가 포함된 서버가 아닌 다른 서버로 Ajax 요청을 보낼 수는 없음
4) 클라이언트의 PC로 Ajax 요청을 보낼 수는 없음

Ajax 동작 원리
- Ajax 구성 요소
Ajax에서 사용하는 기존 기술
1) 웹 페이지의 표현을 위한 HTML과 CSS
2) 데이터에 접근하거나 화면 구성을 동적으로 조작하기 위해 사용되는 DOM 모델
3) 데이터의 교환을 위한 JSON이나 XML
4) 웹 서버와의 비동기식 통신을 위한 XMLHttpRequest 객체
5) 위에서 언급한 모든 기술을 결합하여 사용자의 작업 흐름을 제어하는 데 사용되는 자바스크립트

- Ajax 동작 원리
Ajax의 동작은 위에서 언급한 Ajax 구성 요소들을 사용하여 이루어짐
Ajax를 이용한 웹 응용 프로그램은 자바스크립트 코드를 통해 웹 서버와 통신을 하게됨
따라서 사용자의 동작에는 영향을 주지 않으면서도 백그라운드에서 지속해서 서버와 통신할 수 있음

- Ajax를 이용한 웹 응용 프로그램의 동작 원리
웹브라우저에 사용자 UI를 만듦-> 이벤트 발생 -> 자바스크립트 호출 -> XMLHttpRequest 객체 생성 및 요청 
-> Ajax 요청 처리 -> 응답 생성 -> HTML 및 CSS 데이터 -> 웹페이지의 일부분만들 다시 로딩
- 기존 웹 응용 프로그래의 동작 원리
웹브라우저에 사용자 UI를 만듦-> 이벤트 발생 -> HttpRequest 생성 및 요청 -> HttpRequset 처리 
-> 응답 생성 -> HTML 및 CSS 데이터 -> 웹페이지 전체를 다시 로딩
사용자 UI가 직접 기다리느냐, 아니면 자바스크립트의 Ajax부분이 기다리느냐 의 차이

- XMLHttpRequest 객체: Ajax의 가장 핵심적인 구성 요소
웹 브라우저가 서버와 데이터를 교환할 때 사용
웹 브라우저가 백그라운드에서 계속해서 서버와 통신할 수 있는 것은 바로 이 객체를 사용하기 때문
요즘은 XML보다 JSON을 더 많이 쓴다

- 기본적인 처리의 흐름
1) XMLHttpRequest 객체를 생성
2) 서버와 통신 할 때 사용할 처리 방법을 등록
3) 요청을 전송하고 통신을 시작

- 객체 생성
const xhr = new XMLHttpRequest(); XML-HttpRequest 생성자 함수를 호출해서 생성
XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이기 때문에 브라우저환경에서만 정상적으로 동작
node.js 환경에서는 제공되지 않음

- 요청 전송
xhr.open('GET', '/posts'); // HTTP Method, URL 정의, 비동기 여부(기본 값true)
클라이언트(브라우저)에서 서버로 요청을 보내기 위해서는 HTTP Method, 요청 URL을 정의하는 것 부터 시작 
(XMLHttpRequest의 내장 함수인 open()을 이용, 첫 번째 매개변수는 HTTP Method, 즉 HTTP 요청 방식)
- HTTP Method
1) GET: 리소스 요청
2) POST: 리소스 생성
3) PUT: 리소스 수정
4) PATCH: 리소스 일부 수정
5) DELETE: 리소스 삭제

클라이언트에서 서버로 HTTP 요청을 하기전에 요청에 맞는 헤더값을 설정해야함
xhr.setRequestHeader('content-type', 'application/json');
setRequestHeader() 함수를 통해서 요청 헤더 값을 설정
요청할 때 서버로 전송하는 데이터의 타입을 선언하기 위한 용도로도 많이 사용

- MIME 타입 : content-type 값 : 목적
1) application : application/json : json 데이터 전송
2) text : text/plain : 텍스트 데이터 전송
3) multipart : multipart/form-data : 파일 전송

open() 함수와 setRequestHeader() 함수로 요청에 필요한 정의가 끝나면 
최종적으로 send() 함수를 통해 요청을 보내게됨

가짜 서버를 만들어서 요청 및 응답 테스트를 할 수 있음
JSONPlaceholder(https://jsonplaceholder.typicode.com/)

2번째 방식 Fetch API - 훨씬 간편함 
Fetch 방식: XMLHttpRequest과 가장 큰 차이점은 Fetch API는 Promise방식으로 구현되어있다는 것

첫 번째 then() 함수는 서버 요청에 대한 응답이 왔을 때 실행
이때 응답받은 데이터는 문자열 형식이기 때문에 
response.json() 함수를 호출해서 json 데이터로 변경을 실행
json 데이터로 변경이 완료되면, 두 번째 then()함수의 매개변수로 변경된 json 데이터를 전달함
서버가 응답하는 시간에 자동으로 then()이 불러짐

3번째 방식 Promise(fetch와 동작이 거의 비슷하나 미묘한 차이가 있음, 
setTimer로 타이머 설정 가능(서버가 응답을 안줬을때 처리 가능), executor로 자동 실행 가능 등의 차이)
Promise: 자바스크립트에서 비동기 처리에 사용되는 객체
Promise는 자바스크립트에서 브라우저에서 제공하는 비동기 함수인 Web APIs를 실행할 때 
실행한 코드가 완료될 때까지 대기하지 않고 바로 다음 코드를 실행할 수있도록 해주고, 
비동기 함수의 실행이 완료되면 then() 함수를 통해서 그 결과에 대한 코드를 실행할 수 있게 해줌

클라리언트에서 서버로 요청을 보내고 응답받은 데이터를 이용해 구현해야 하는 경우, 
Promise를 사용하면 응답이 완료 된 후 호출되는 then() 함수를 통해 
결과를 받고 나서 구현해야 할 코드를 작성해서 사용할 수 있음

- Promise 기본 사용법
executor(실행자, 실행 함수): new Promise에 전달되는 함수
const promise = new Promise((resolve, reject) => { 비동기 작업 });

- Promise를 통한 비동기 제어 방법
객체의 결과값은 내부객체이기 때문에 then과 catch로만 접근이 가능
then 메소드: 프로미스가 이행되었을 때 실행되는 함수이고, 함수를 첫 번째 인자로 받는데, 
그 함수의 인자는 Promise의 성공 결과 값을 받음
catch 메소드: 프로미스가 거부(reject)되었을 때 실행되는 함수이고 함수를 인자로 받는데, 
그 함수의 인자는 여기서 거부 결과 값을 받음

4번째 방식 Async / Await

Async/Await 역시 Promise와 동일한 목적으로 사용
Async는 말 그대로 비동기 실행을 말하며, 
Await은 비동기를 실행하는 데 결과가 올 때까지 기다리겠다는 의미

Async/Await를 사용하면 코드가 간결하고 가독성이 높음
비동기 함수를 호출 할 때 함수 앞에 await를 정의하면 비동기 함수가 실행되고, 
서버로부터 응답을 받을 때까지 대기한 후 결과를 받으면 실행되도록 함
await를 사용하는 코드가 작성된 함수는 반드시 async여야 함
(함수 키워드인 function 앞에 async 키워드가 있는 것을 확인)

여러가지 비동기 통신 정리

1) Ajax (Asynchronous JavaScript And XML)
자바스크립트를 이용해 클라이언트와 서버간에 데이터를 주고받는 비동기 HTTP 통신
XMLHttpRequest(XHR) 객체를 이용해서 전체 페이지가 아닌 필요한 데이터만 불러올 수 있음
장점
- Jquery를 통해 쉽게 구현 가능
단점
- Jquery를 사용해야 간편하게 구현 됨
- Promise 기반이 아님
2) axios
axios는 Node.js와 브라우저를 위한 Promise API를 활용하는 HTTP 통신 라이브러리
비동기로 HTTP 통신을 할 수 있으며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉬움
장점
- response timeout처리 방법이 존재
- Promise 기반으로 만들어졌기 때문에 테이터 다루기 편리
- 브라우저 호환성이 뛰어남
단점
- 사용을 위하 보듈 설치 필요
3)  fetch
ES6부터 들어온 JavaScript 내장 라이브러리
Promise 기반으로 만들어졌기 때문에 axios와 마찬가지로 데이터 다루기가 쉽고, 
내장 라이브러리라는 장점으로 상당히 편리
장점
- 자바스크립트의 내장 라이브러리 이므로 별도로 import 할 필요가 없음
- Promise 기반으로 만들어졌기 때문에 데이터 다루기 편리
단점
- 지원하지 않는 브라우저 존재(IE11)
- 네트워크 에러 발생 시 response timeout이 없어 기다려야 함
- JSON 변환 과정 필요
- 상대적으로 axios에 비해 기능이 부족

REST API(HTTP와 JSON을 이용해서 비동기 통신을 하기 위한 방법)
REST(Representational State Transfer): 
자원을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것을 의미
상태는 전송되는 데이터라고 할 수 있으며, 일반적으로 JSON 형태로 데이터를 주고 받음
웹에서는 일반적으로 서버에서 구현애 놓은 REST API를 클라이언트가 호출해서 
데이터 전송, 조회, 수정, 삭제 같은 기능을 서버에 요청 할 수 있게 해줌
기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 사용하기 때문에 웹의 장점을 최대한 활용할 수 있음
네트워크 상에서 클라이언트와 서버 사이의 데이터를 통신하기 위해 가장 많이 사용되는 통신 방식 중 하나
- 장점: 1) 클라이언트와 서버가 독립적
2) HTTP+JSON 형태로 REST API를 정의하면, 웹, 안드로이드, iOS 같은 플랫폼에 구애받지 않으며, 
자바, 파이썬 같은 언어에 종속받지 않고, HTTP와 JSON을 사용할 수 있는 모든 플랫폼에서 사용이 가능

(실습은 새로운 폴더 ReatApi에서 수행함)
JSON Server: JSON 기반으로 가상의 REST API 서버를 구축할 수 있는 npm 모듈
- 터미널에서 npm install -g json-server 명령어를 입력하여 JSON Server를 설치
- 새로운 프로젝트를 생성하고 아래에 json-server라는 이름으로 폴더 만들기
- json-server 폴더에 db.json 파일 만들기고 아래의 내용 저장
{
    "posts": [{ "id": 1, "title": "json-server", "author": "typicode" 
   }],
    "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
    "profile": { "name": "typicode" }
}
- 터미널에서 json-server 폴더로 이동
- JSON Server 실행
- json-server --watch db.json 명령어 입력
(json-server --host 192.168.10.231 db.json)
(json-server -H 192.168.10.231 -p 3000 -w db.json)

*/
// 자바스크립트 객체를 JSON 문자열로 변환
let memberInfo = [
  {
    name : "곰돌이",
    age : 2,
    job : "래퍼",
    addr : "서울시 강남구 청담동"
  },
  {
    name : "토순이",
    age : 4,
    job : "아이돌",
    addr : "서울시 강남구 역삼동"
  },
  {
    name : "애옹이",
    age : 5,
    job : "댄서",
    addr : "서울시 강북구"
  }
]; 
let json1 = JSON.stringify(memberInfo);
console.log(json1);
// JSON 문자열을 자바스크립트 객체로 변환
// let text = [{"name":"곰돌이","age":2,"job":"래퍼","addr":"서울시 강남구 청담동"},{"name":"토순이","age":4,"job":"아이돌","addr":"서울시 강남구 역삼동"},{"name":"애옹이","age":5,"job":"댄서","addr":"서울시 강북구"}];
let objectJson = JSON.parse(json1);
console.log(objectJson);

// XMLHttpRequest
// open() 메소드
const xhr1 = new XMLHttpRequest(); // 객체를 생성
xhr1.open("GET", "https://jsonplaceholder.typicode.com/posts"); // 테스트 서버에 정보를 요구
//클라이언트에서 서버로 HTTP 요청을 하기전에 요청에 맞는 헤더값을 설정
xhr1.setRequestHeader("content-type", "application/json");

xhr1.send(); // 요청 전송(비워두면 그냥 요청)
// onload(): 자바스크립트에서 페이지가 로드되면 자동으로 실행되는 전역 콜백 함수, 화면이 로드될 때 수행
xhr1.onload = () => {
  if(xhr1.status === 200){ // 정상적인 응답이 오면
    const res = JSON.parse(xhr1.response); // 그냥 제이슨 데이터를 통으로 받음
    console.log(res);
  } else{ // 에러 처리
    console.log(xhr1.status, xhr1.statusText); // 응답 상태와 응답 메시지 출력
  }
};

// 전송 테스트 ()
// 405 Error 문제의 원인: 프론트의 Api method( Get 혹은 Post )와 Api 
// 서버가 설정한 Api method가 다르다는 것
// 예를 들어, 프론트에서는 Post 요청을 했는데, 서버에서는 해당 api 요청을 Get으로 받는 것과 같은 상황

const xhr2 = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts"); // HTTP Method, URL 정의
xhr2.setRequestHeader("content-type", "application/json"); // 헤더값의 content-type 정의

const data = {
  UserId : 100,
  id: 100,
  title :"XMLHttpRequest Practice",
  body : "Yellow Bear"
};
xhr2.send(JSON.stringify(data)); // JSON.stringify를 통해 오브젝트를 문자열 형태로 변경해서 전송
xhr2.onload = () => {
  if(xhr2.status === 201){ // 정상적인 응답이 오면
    const res = JSON.parse(xhr2.response); // 그냥 제이슨 데이터를 통으로 받음
    console.log(res);
  } else{ // 에러 처리
    console.log(xhr2.status, xhr2.statusText); // 응답 상태와 응답 메시지 출력
  }
};

// 다시 get 해봤을때 방금 post한 정보가 있는지 확인(100개만 들고와서 확인이 안됨ㅜㅠㅠ)
const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr3.setRequestHeader("content-type", "application/json");
xhr3.send(); 
xhr3.onload = () => {
  if(xhr3.status === 200){
    const res = JSON.parse(xhr3.response);
    console.log(res);
  } else{
    console.log(xhr3.status, xhr3.statusText);
  }
};

// Fetch API
//id가 1인 데이터 조회
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((json) => console.log(json));

//POST - 데이터 생성
// fetch(서버주소, {method:HTTP요청방법, body:전송할데이터, header:{헤더 값 정의}}).then~~
fetch("https://jsonplaceholder.typicode.com/posts", {
 method: "POST", //HTTP 요청 방법
 body: JSON.stringify({
   //전송할 데이터, stringify로 포맷 변경 
   title: "rabbit",
   body: "pink rabbit eats green grass",
   userId: 1,
 }),
 headers: {
   //헤더 값 정의
   "content-type": "application/json; charset=UTF-8", //content-type 정의
 }
})
 .then((response) => response.json())
 .then((json) => console.log(json));

 //PUT - 데이터 수정
fetch("https://jsonplaceholder.typicode.com/posts/1", { // 1번 data 내용 수정
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "rabbit",
    body: "pink rabbit eats blue grass",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
 })
  .then((response) => response.json())
  .then((json) => console.log(json));

// 잘 수정되었는지 확인
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

//DELETE - 데이터 삭제 (가짜서버에 올려있는 데이터는 삭제가 안됨ㅠ)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
});

// 잘 삭제되었는지 확인(삭제가 안되서 확인이 안되네)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Promise - then
const successPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Success");
  }, 3000);
});
successPromise.then(function (value) {
  console.log(value); // value인자가 결과 값 "Success"
});
successPromise.then((value) => console.log(value));

// Promise - catch
const failurePromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("Request is failed"));
  }, 3000);
});
failurePromise
  .then(function (value) { // 거부(실패)된 프로미스는 then 메소드를 통과하고
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  }); // catch메소드를 실행. error인자가 거부 결과값

failurePromise // 위와 동일한 코드
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); 
