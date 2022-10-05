/* 문서 객체 모델(DOM)
HTML 문법으로 작성한 태그, 주석, 텍스트와 같은 구성 요소들은 웹브라우저에서 각각 하나의 객체로 인식함
문서 객체 모델(Document Object Model): 이러한 HTML 구성 요소들을 다루는 객체
DOM 트리는 document 객체 하위에 HTML 태그 요소, 속성, 텍스트, 주석 등이 트리형태로 구성되는데,
이들을 각각 노드라고 함, doucument는 노드가 아니라 객체이므로 여기서는 html이 루트 노드임
노드 타입
1) 문서 노드: 최상위 document 객체의 노드 타입
2) 요소 노드: h1m p 태그와 같은 요소의 노드 타입
3) 속성 노드: href, src 와 같은 속성의 노드 타입
4) 텍스트 노드: 텍스트에 해당하는 노드 타입
5) 주석 노드: 주석에 해당하는 노드 타입

노드 선택하기
- 속성으로 노드 선택하기
속성으로 노드를 선택하는 방법은 노드의 타입을 가리지 않고 모든 노드를 이동하며 선택할 수 있는 장점
하지만 DOM 트리가 복잡할수록 원하는 노드를 찾아가기 어렵다는 단점
- 모든 노드 탐색
1) parentNode: 부모 노드를 반환
2) childNode: 모든 자식 노드를 반환
3) firstChild: 첫번째 자식 노드를 반환
4) lastChild: 마지막 자식 노드를 반환
5) previousSibling: 이전 형제 노드를 반환
6) nextSibling: 다음 형제 노드를 반환
- 요소 노드 탐색
1) parentElement: 부모 요소 노드를 반횐
2) children: 자식 요소 노드를 반환
3) firstElementChild: 첫번째 자식 요소 노드를 반환
4) lastElementChild: 마지막 자식 요소 노드를 반환
5) previousElementSbiling: 이전 요소 노드를 반환
6) nextElementSibling: 다음 요소 노드를 반환

- 메소드로 노드 선택하기
1) getElementById(id속성값): id 속성값과 일치하는 요소 노드를 1개만 선택
2) getElementByClassName(class속성값): class 속성값과 일치하는 요소 노드를 모두 선택
3) getElementByTagName(태그명): 태그명과 일치하는 요소 노드를 모두 선택
getElementById()메서드로 선택하는 요소 노드는 무조건 1개이기 때문에 해당 요소 하나만 보여 주지만, 
다른 두 메서드는 HTMLCollection 객체로 여러 요소를 한꺼번에 선택해 HTMLCollection 객체를 반환
HTMLCollection 객체는 유사 배열이라서 배열의 인덱스로 요소 접근이 가능

- query 메소드로 노드 선택하기(CSS 선택자 사용하기)
1) querySelector(css선택자): 매개변수로 넘어오는 css 선택자에 해당하는 노드를 1개만 선택
2) querySelectorAll(css선택자): 매개변수로 넘어오는 css 선택자에 해당하는 노드를 모두 선택
document 객체의 get 메서드와 query 메서드는 둘 다 원하는 요소 노드를 선택한다는 점은 같음
하지만 query 메서드는 매개변수로 CSS 선택자를 전달받기 때문에 get 메서드보다 범용성이 더 좋음

노드 조작하기
문서 객체 모델의 노드를 선택하고 나면 선택한 노드에 여러 조작을 할 수 있음

- 컨텐츠 조작하기
선택한 노드의 타입이 요소 노드라면 다음 표에 정의된 속성을 사용해 컨텐츠를 조작할 수 있음
1) textContent: 요소 노드의 모든 텍스트에 접근
2) innerText: 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트에만 접근
3) innerHTML: 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트에만 접근
innerHTML 속성에 값을 할당하면 태그로 인식해 노드의 컨텐츠에 적용
textContent 속성과 innerText 속성은 단순히 텍스트로 취급해서 값을 그대로 노드의 컨텐츠에 넣음

- 스타일 조작하기
선택된 노드의 타입이 요소 노드라면 style 속성으로 요소에 스타일(CSS)을 지정 할 수 있음
노드.style.css속성명 = 속성값;

- 클래스 속성 조작하기(클래스로 스타일 미리 만들어놓고 한번에 적용하기)
style 속성으로 스타일을 조작하면 속성을 하나씩 적어야해서 불편함 
-> class 속성을 조작해 스타일 적용 가능
선택한 요소 노드에 class 속성을 지정 할 때는 classList 속성의 add(), remove(), toggle() 메소드 사용
element의 class 목록에 하나 이상의 css class를 추가하려면 classList의 add() 메소드를 사용
element의 css class를 삭제하기 위해서는 remove() 메소드를 사용, add()처럼 한번에 여러개도 가능
현재 존재하는 css class를 새로운 것으로 교체하기 위해서는 replace() 메소드를 사용

CSS 적용 우선순위
1) 속성 값 뒤에 !important 를 붙인 속성
2) HTML에서 style을 직접 지정한 속성
3) #id 로 지정한 속성
4) .클래스, :추상클래스 로 지정한 속성
5) 태그이름 으로 지정한 속성
6) 상위 객체에 의해 상속된 속성

- 메소드로 속성 조작하기
메서드를 사용하면 모든 속성을 전체적으로 변경 할 수 있음
1) 노드.getAttribute("속성명"): 속성값을 가지고옴
2) 노드.setAttribute("속성명"): 속성값을 설정
3) 노드.removeAttribute("속성명"): 속성을 삭제

노드 추가/삭제하기
DOM 트리에서 새로운 노드를 생성하고, 생성한 노드를 기존 DOM 트리와 연결하면 
동적으로 새로운 요소를 화면에 추가할 수 있음!!

- 노드 추가하기
로운 요소를 화면에 추가하려면 먼저 DOM 트리에 새로운 노드를 생성하는 작업을 해야 함
그리고 생성한 노드를 기존의 DOM 트리 노드와 연결함
- 노드 생성
1) createElement(): 요소 노드를 생성
2) createTextNode(): 텍스트 노드를 생성
3) createAttribute(): 속성 노드를 생성
- 노드 연결
1) 기준노드.appendChild(자식노드): 기준 노드에 자식 노드를 연결
2) 기준노드.setAtribute(속성노드): 기준 노드에 속성 노드를 연결
3) 기준노드.insertBefore(자식노드, 삽입기준이 되는노드)
appendChild()와 비슷하지만, 전달인자가 두 개라는 점이 다름
첫 번째 전달인자는 삽입하려는 노드, 두 번째 전달인자는 삽입 기준이 되는 노드, 새 노드는 이 앞에 놓음 
4) insertAt(parent, child, n): parent 노드에 n번째 자식 노드로 child 노드를 삽입


- 노드 삭제하기
1) 삭제할노드.remove(): 노드를 메모리에서 삭제하고 종료
2) 기준노드.removeChild(자식노드): 기준 노드에 자식 노드 연결을 끊음, 관계를 끊은 노드의 참조를 반환
메모리에 해당 노드는 그대로 존재하며, 부모 노드와의 부모-자식관계를 끊어 DOM 트리에서 해제하는 것
반환값을 변수에 저장하지 않으면 삭제하는 노드의 참조가 더이상 없기 때문에, 
자바스크립트 엔진의 GC(Garbage Collection)에 의해 잠시 후 메모리에서 삭제
반환된 노드 참조를 변수에 담아 다른 DOM 위치에 붙일 수도 있음
replaceChild(): 자식 노드 하나를 삭제하고 새 노드로 교체
부모 노드에서 이 메서드를 실행할 때, 첫 번째 전달인자로 새 노드를, 두번째 전달인자로는 교체될 노드

폼 조작하기
- form 태그 선택하기
HTML 폼 요소의 시작은 항상 form 태그
1) form 속성 사용하기
document 객체의 forms 속성은 모든 form 태그의 노드 정보를 HTMLCollection 객체에 담아 반환
2) name 속성 사용하기
form 태그에 name 속성을 사용하면 forms 속성보다 훨씬 직관적으로 form 요소 노드를 선택할 수 있음

- 폼 요소 선택하기
폼 요소(Input 태그를 비롯해 select 태그, button 태그 등)를 선택 할 때는 
elements 속성이나 name 속성을 사용

- 폼 요소의 입력값 다루기
사용자에게 값을 입력받는 대표적인 폼 요소: input태그, select 태그
폼 요소는 사용자에게 값을 입력 받아 서버에 전달, 
서버에 전달하기까지 폼 요소에 입력된 값이 유효한지 검증할 수 있어야함
(전달받은 값을 서버에서 어떻게 활용하는지는 백엔드 영역) 

1) 한 줄 입력 요소 다루기
한 줄 입력 요소: input 태그의 type 속성값을 text, password, number, url, search, email 
등으로 지정했을 때 표시되는 폼 요소, 한 줄 요소들은 값을 가져오거나 설정하는 방법이 모두 동일함
ex) document.frm.id.value = '귀여운 커비';

2) 여러 줄 입력 요소 다루기
여러 줄 입력 요소: textarea 태그를 사용하면 표시되는 폼 요소

3) 체크박스 다루기
체크박스도 value속성으로 값을 가져올 수 있음
하지만 한 줄 입력 요소와는 다르게 체크박스는 체크박스에 체크 표시가 있는 것만 가져와야 하는 경우가 많음
- 속성
defaultChecked	체크박스(라디오 버튼)의 기본 값 설정
true | false 중 하나
true 이면 선택한 상태가 됨
checked	체크박스(라디오 버튼)을 체크한 상태인지 체크.
선택한 상태이면 true, 아니면 false
name	체크박스(라디오 버튼) name 의 속성 값
type	<input> type 의 속성 값
value	체크박스(라디오 버튼) value 의 속성 값
elements	<checkbox> | <radio> 의 인덱스 번호
length	속성 혹은 속성 값의 문자열 길이

4) 라디오버튼 다루기
체크박스와 거의 동일, 체크박스는 여러개 선택 가능하고, 라디오버튼은 1개만 선택가능하다는 점만 차이점

5) 콤보박스 다루기
select 태그로 만드는 콤보박스는 여러 항목에서 하나를 선택하는 형태의 폼 요소
체크박스나 라디오버튼에서 checked 속성으로 선택항목을 확인 할 수 있는 것처럼 
콤보박스에서는 selected 속성으로 선택 항목을 확인 할 수 있음

6) 파일 업로드 요소 다루기
파일 업로드 요소: input 태그의 type 속성값을 file로 지정하면 표시되는 요소

- 폼 요소 관련 기타 메소드
1) submit(): 폼 요소의 값을 전송(submit)함
2) focus(): 폼 요소에 커서(포커스)를 이동


이벤트 다루기
이벤트: 웹 브라우저와 사용자 사이에 상호작용이 발생하는 특정 시점을 의미
이벤트가 발생하면 이벤트 종류에 따라 어떤 작업을 하거나 미리 등록한 함수를 호출하는 등의 조작을 
자바스크립트로 지정 할 수 있음

이벤트 종류
- 마우스 이벤트
1) onclick: 마우스로 클릭하면 발생
2) ondbclick: 마우스로 빠르게 두번 클릭하면 발생
3) onmouseover: 마우스 포인터를 올리면 발생
4) onmouseout: 마우스 포인터가 빠져나가면 발생
5) onmousemove: 마우스 포인터가 움직이면 발생
6) onwheel: 마우스 휠을 움직이면 발생
- 키보드 이벤트
1) onkeypress: 키보드 버튼을 누르고 있는 동안 발생
2) onkeydown: 키보드 버튼을 누른 순간 발생
3) onkeyup: 키보드 버튼을 눌렀다가 뗀 순간 발생
- 포커스 이벤트
1) onfocus: 요소에 포커스가 되면 발생
2) onblur: 요소가 포커스를 잃으면 발생
- 폼 이벤트
1) onsubmit: 폼이 전송될 때 발생
- 리소스 이벤트
1) onload: 웹브라우저의 리소스 로드가 끝나면 발생

- 이벤트 등록하기
이벤트 등록: 이벤트가 발생할 때 어떤 작업을 할지 자바스크립트 코드로 작성하는 것
1) 인라인 방식으로 이벤트 등록하기
<button onclick="clickEvent()">클릭</button>
<script>
  function clickEvent(){
    alert("click");
  }
</script>
2) 프로퍼티 리스너 방식으로 이벤트 등록하기
요소 노드에 직접 속성으로 이벤트를 등록하는 방법
<button>클릭</button>
  <script>
    const btnEl = document.querySelector("button");
    btnEl.onclick = () => {
      alert("arrow click");
    }
  </script>
3) 이벤트 등록 메서드로 이벤트 등록하기(가장 많이 사용하는 방법)
DOM에서 제공하는 addEventListener() 메서드를 사용해 이벤트를 등록
노드.addEventListerner("이벤트 타입", 이벤트 함수);
함수 표현식으로 정의된 함수는 호이스팅에 의해 선언과 할당이 분리되므로
참조하려면 함수가 addEventListener() 메서드보다 반드시 위에 작성되어야함!!!!

*/

// 메소드로 노드 선택하기
// id 속성값이 title인 요소 노드 선택하기
const el = document.getElementById("title");
console.log(el); 
// class 속성값이 text인 요소 노드 모두 선택하기
const classEl = document.getElementsByClassName("text");
console.log(classEl); // 배열처럼 넘어옴, 유사 배열, 배열의 인덱스처럼 접근 가능
// console.log(classEl[0]);
// console.log(classEl[1]);
for(let el of classEl){
  console.log(el);
}
// p 태그에 해당하는 요소 노드 모두 선택하기
const tagEls  = document.getElementsByTagName("p");
console.log(tagEls);
// console.log(tagEls[0]);
// console.log(tagEls[1]);
for(let el of tagEls){
  console.log(el);
}

// css선택자 사용해서 노드 선택하기
console.log("css 선택자 사용");
const el2 = document.querySelector(".box-1");
// const el = document.getElementsByClassName("box-1")[0].children;
// const el = document.querySelectorAll(".box-1 .text");
console.log(el2);

// 컨텐츠 조작하기
document.getElementById("title").textContent; 
// Hello, Javascript! 선택됨
document.getElementById("title").innerText; 
// Hello, 선택돰
document.getElementById("title").innerHTML; 
// Hello, <span style="display: none;">Javascript!</span> 선택됨
// div안에 있는 HTML 전체 내용을 가져옴
console.log(document.getElementById("title").textContent);
console.log(document.getElementById("title").innerText);
console.log(document.getElementById("title").innerHTML);

// 스타일 조작하기
const pEl =document.querySelector("#text");
pEl.style.backgroundColor = "#ff0000";
pEl.style.fontSize = "20px";
pEl.style.color = "#ffffff";

const elId = document.querySelector("#text");
elId.classList.add("active", "red-color");  // 한번에 여러개 추가

// 메소드로 속성 조작하기
const aEl = document.querySelector("a");
const href = aEl.getAttribute("href");
aEl.setAttribute("href", "https://kakao.com");
aEl.innerText="카카오";

// 노드 추가하기
// const aE2 = document.createElement("a");
// document.body.appendChild(aE2);
// aE2.innerHTML = "배고파";
// aE2.setAttribute("href", "#");

// 한줄 입력 요소 다루기
document.frm.id.value = '귀여운 커비';
// 여러줄 입력 요소 다루기
document.frm.desc.value = "아무말이나 쓰기";
// 체크 박스 다루기
// 전체를 체크하기
// let chk_len = document.frm.length;
// for(var i = 0; i < chk_len; i++) {
//   // 체크박스라면 선택...
//   if(document.frm.elements[i].type == "checkbox") {
//     document.frm.elements[i].click();
//   }
// }
document.frm.elements[3].checked = true; // 사과만 체크하기
// 라디오 버튼 다루기
document.frm.fruits[2].defaultChecked = true; // 오렌지를 기본값으로
// 콤보 박스 다루기
document.frm.opt[2].selected = true; // 오렌지를 선택하도록
// 바나나를 선택하도록 하기
const optionEls=document.querySelectorAll("option")
for(let i = 0; i <optionEls.length; i++){
  if(optionEls[i].value === 'banana'){
    optionEls[i].selected = true;
  }
}
// 파일 업로드 요소 다루기
// 파일 업로드 이후에 fileObj에 받아줘야지 정상적으로 보임
const fileObj = document.frm.upload.files;
console.log("Test : " + fileObj);

// 폼에 과목 이름을 입력해서 추가하고 과목 이름을 클릭해서 삭제하는 예제
function newRegister() {
  let newItem = document.createElement("li"); // 요소 노드 추가
  let subject = document.querySelector("#subject"); // 폼의 텍스트 필드
  let newText = document.createTextNode(subject.value); // 테스트 필드의 값을 텍스트 노드로 만들기
  newItem.appendChild(newText); // 텍스트 노드를 요소 노드의 자식 노드로 추가

  let itemList = document.querySelector("#itemList"); // 웹 문서에서 부모 노드 가져오기
  itemList.insertBefore(newItem, itemList.childNodes[0]); // 자식 노드 중 첫번째 노드 앞에 추가

  subject.value = "";
  let items = document.querySelectorAll("li");
  for (i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() { // 이벤트 감시자를 다 단다
      if(this.parentNode) { // 부모 노드가 있다면
        this.parentNode.removeChild(this); // 부모 노드에서 삭제
      }
    });       
  }
}

const colorbg = document.querySelector("#colorbg");
const gbtn = document.querySelector("#green");
gbtn.addEventListener("click", function(){
  alert("Green");
  colorbg.style.backgroundColor = "Green";
});
const obtn = document.querySelector("#orange");
obtn.addEventListener("click", function(){
  alert("Orange");
  colorbg.style.backgroundColor = "Orange";
});
const pbtn = document.querySelector("#purple");
pbtn.addEventListener("click", function(){
  alert("Purple");
  colorbg.style.backgroundColor = "Purple";
});

const detailbtn = document.querySelector("#detail");
const detailbtn2 = document.querySelector("#detail");
let div1 = document.querySelector("#kirbydesc");
let newItem1 = document.createElement("h3");
let newItem2 = document.createElement("p");
let newItem3 = document.createElement("button");
newItem1.innerText = "커비의 드림 뷔페";
newItem2.innerText = "구르고, 먹고, 커지고. 디저트로 가득한 세상에서 먹보의 드림 배틀! " +
"네 명의 커비가 먹은 딸기의 양으로 겨루는 대전 액션. 구르면서 나아가는 커비는 무대 위의 딸기를 먹으면 점점 크게 변화. 최종적으로 가장 커진 커비가 우승입니다. " +
"컬러풀한 음식을 무대로 산더미 딸기가 있는 골을 목표로 경쟁하거나, 떨어지는 딸기를 서로 빼앗거나, 상대를 날려 딸기를 가로채거나.여러가지 배틀로 가장 큰 커비를 결정합니다. " +
"간단한 스틱 조작으로 커비를 굴릴 수 있기 때문에 누구나 부담없이 즐길 수 있습니다."
newItem3.innerText = "상세 설명 닫기";

detailbtn.addEventListener("click", () =>{
  div1.appendChild(newItem1);
  div1.appendChild(newItem2);
  div1.appendChild(newItem3);
  div1.removeChild(document.querySelector("#detail"));
});

newItem3.addEventListener("click", () =>{
  div1.removeChild(newItem1);
  div1.removeChild(newItem2);
  div1.removeChild(newItem3);
  div1.appendChild(detailbtn2);
});

// 강사님 버전 코드
function showDetail() {
  document.querySelector('#desc').style.display = "block";	// 상세 설명 부분을 화면에 표시
  document.querySelector('#open').style.display = "none";   // '상세 설명 보기' 단추를 화면에서 감춤
}

function hideDetail() {
  document.querySelector('#desc').style.display = "none";	   // 상세 설명 부분을 화면에서 감춤
  document.querySelector('#open').style.display = "block";	 // '상세 설명 보기' 단추를 화면에 표시
}