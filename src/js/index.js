// step1 요구사항 구현을 위한 전략 (CRUD)

// TODO 메뉴 추가
// - [ ] 메뉴의 이름을 입력 받고 엔터키를 누르면 입력이 추가된다.
// - [ ] 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [ ] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다.

function App() {
    document.querySelector("#espresso-menu-form").addEventListener('submit', (e) => {
        e.preventDefault();
    })

    document.querySelector("#espresso-menu-name").addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            console.log(document.querySelector("#espresso-menu-name").value);
        }
    });
}

App();










// TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴를 수정하는 모달창이 뜬다.
// - [ ] 모달창에서 신규메뉴명을 입력 받고, 확인버튼 또는 엔터키를 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌 모달창이 뜬다.
// - [ ] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [ ] 총 메뉴 갯수를 count하여 상단에 보여준다.


