// JSON 서버 
// GET 요청 - Fetch API를 이용해 조회
fetch("http://192.168.10.231:3000/posts")
  .then((response) => response.json())
  .then((json) => console.log(json)); //전체 데이터 조회

fetch("http://192.168.10.231:3000/comments/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); //id로 조회

fetch("http://192.168.10.231:3000/comments?postId=1")
  .then((response) => response.json())
  .then((json) => console.log(json)); //query로 postId=1로 조회

// POST 요청 - 데이터 생성하기 이 컴퓨터 ip 192.168.10.231
// json-server -H 192.168.10.231 -p 3000 -w db.json 명령어 입력하면 내 ip에만 연결되어버림
// fetch("http://192.168.10.231:3000/posts", {
//   method: "POST", //HTTP 요청 방법
//   body: JSON.stringify({
//     // 전송할 데이터
//     title: "쿠키런킹덤",
//     author: "용감한 쿠키",
//   }),
//   headers: {
//     //헤더 값 정의
//     "content-type": "application/json; charset=UTF-8", //content-type 정의
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// DELETE 요청
// fetch("http://localhost:3000/posts/2", { method: "DELETE" });

