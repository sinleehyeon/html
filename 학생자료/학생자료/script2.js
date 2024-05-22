let users = {
    kim: ["eat food"],
};

let currentUser;

function login() {
    currentUser = prompt("Username을 입력해 주세요!");
    let isNew = true;
    for (let existing in users) {
        if (existing === currentUser) isNew = false;
    }
    if (isNew) {
        alert(`${currentUser}님 처음 오신 것을 환영합니다.`);
    } else {
        alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
    }
}
function showList() {
    console.log(users[currentUser]); //객체 내부의 배열 접근
}
login(); //함수 호출

while (true) {
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "list") {
        showList(); //함수 호출
    } else if (command === "Q" || command == "q") break;
}
