export const solitaire = {
    title: '[JAVASCRIPT] Solitaire Card Game',
    purpose: '솔리테어 구현',
    work: {
        start: '2022-01-05',
        end: '2022-01-05',
    },
    content: `<div class="mt-5">
        <div class=""mt-3>
            <span class="fs-4 fw-bold">Solitaire Card Game</span>
        </div>
        <div>
            <p>
                <kbd class="bg-info">Solitaire</kbd>의 솔리테어의 규칙을 해결하는데 초점을 두고 작업을 진행하였습니다.
            </p>
            <p>
                <span class="tag">규칙과 알고리즘 : </span>
                <ol class="list-group">
                    <li class="list-item">규칙 1</li>
                    <ul class="list-group ms-3">
                        <li class="list-item">스택가능한가? -> 카드를 모으는 영역의 마지막 카드와 등차 관계인지 판별</li>
                        <li class="list-item">스택이 안될 시 -> 첫번째 선택모드</li>
                        <li class="list-item">두번째 카드 선택 시 일치하는가? -> 등차관계 및 색상의 교차관계인지 판별</li>
                        <li class="list-item">관계하면 해당위치로 이동 -> <kbd>const</kbd>로 상수선언하여 변수를 관리하기 때문에 <kbd>splice</kbd>를 사용하여 데이터를 입/출하고 stack방식으로 카드를 옮김</li>
                        <li class="list-item">관계하지 않으면 취소 -> <kbd>pickMode</kbd> 변수를 주어 두번째 선택 카드와 불일치하면 <kbd>pickMode</kbd>를 <kbd>false</kbd>로 전환하는 방식으로 함</li>
                        <li class="list-item">선택한 카드 이후의 카드를 모두 옮겨야한다 -> 선택 카드 기준으로 늘어선 카드를 등차 및 색상교차 관계인지 확인하고 선택되도록 구현하였고, 선택된 카드(제일 앞 카드)를 위의 판별 알고리즘으로 구분하여 선택된 묶음 카드를 전체 옮김</li>
                        <li class="list-item">묶음이 차례가 아니면 취소 -> <kbd>card</kbd>의 <kbd>isPick</kbd>속성을 주고 미리 만들어 둔 <kbd>initAttr</kbd>메서드로 만들어 초기화</li>
                    </ul>
                </ol>
            </p>
        </div>
    </div>`,
    authors: ['kimson'],
    link: 'https://kkn1125.github.io/solitaire/',
    github: 'https://github.com/kkn1125/solitaire/',
    cover: 'solitaire.png',
    subImages: [
        ['play game', 'solitaire.png'],
    ],
    movie: '',
    useDB: false,
    db: [],
    mainLang: 'javascript',
    subLangs: ['html', 'css', 'javascript'],
    tag: ['javascript'],
    category: ['javascript', '개인'],
    writedAt: '2022-01-06 17:50:16',
    isHeroku: false,
}