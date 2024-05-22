let users = ["김상협"];

let currentUser = prompt("currentUser을 입력해 주세요!");

let isNew = true;
for (let existing of users) { //새로운 사용자인지 확인
    if (existing === currentUser) isNew = false;
}

if (isNew) { //사용자에 따라 다른 메시지 출력
    alert(`${currentUser}님 처음 접속 하신 것을 환영합니다.`);
} else {
    alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
}

while (true) { //무한 반복
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "Q" || command == "q") break;
}
