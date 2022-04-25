const year = new Date().getFullYear();
const month = new Date().getMonth()+1;
const date = new Date().getDate();
export const scheduler = {
    title: '[Django] Scheduler',
    purpose: '팀을 형성하고 방을 만들어 팀원과 캘린더를 공유하며 일, 주, 월별 스케쥴링을 하는 웹 서비스',
    work: {
        start: '2022-03-09',
        end: '2022-03-26',
    },
    content: `<div class="mt-5">
        <div class=""mt-3>
            <span class="fs-4 fw-bold">Scheduler</span>
        </div>
        <div>
            <ol>
                <li>FullCalendar Library 활용</li>
                <li>스케줄 룸 생성 시 마스터 자동 설정</li>
                <li class="text-danger">
                    작성 중...
                </li>
            </ol>
            <p>
            </p>
        </div>
    </div>`,
    authors: ['kimson', 'ohoraming'],
    link: '',
    github: 'https://github.com/kkn1125/project-django/',
    cover: 'https://user-images.githubusercontent.com/71887242/159253014-6ed35e51-fd0e-4cc7-8df7-fa8a3974c5ef.png',
    subImages: [
        ['Schedule', 'https://user-images.githubusercontent.com/71887242/159253759-3fc820f6-8c48-4a7b-9f1f-eb8e87e05f77.png'],
    ],
    movie: '',
    useDB: true,
    db: ['postgreSQL'],
    mainLang: 'python',
    subLangs: ['html', 'css', 'javascript'],
    tag: ['django', 'python'],
    category: ['django', '공동'],
    writedAt: '2022-03-21 21:03',
    isHeroku: false,
}