Date.prototype.format = function (format){
    return format.replace(/YYYY|YY|MM|dd|HH|mm|ss|SSS|AP/g, a=>{
        switch(a){
            case 'YYYY': return this.getFullYear();
            case 'YY': return this.getFullYear().toString().slice(2).padStart(2, 0);
            case 'MM': return this.getMonth().toString().padStart(2, 0);
            case 'mm': return this.getMinutes().toString().padStart(2, 0);
            case 'dd': return this.getDate().toString().padStart(2, 0);
            case 'HH': return this.getHours().toString().padStart(2, 0);
            case 'ss': return this.getSeconds().toString().padStart(2, 0);
            case 'SSS': return this.getMilliseconds().toString().padStart(3, 0);
            case 'AP': return this.getHours()>12?'PM':'AM';
            default: return a;
        }
    });
}

export const scheduler = {
    title: '[Django] Scheduler',
    purpose: '팀을 만들어 함께 공유하는 스케쥴러',
    work: {
        start: '2022-03-09',
        end: new Date().format('YYYY-MM-dd'),
    },
    content: `<div class="mt-5">
        <div class=""mt-3>
            <span class="fs-4 fw-bold">Solitaire Card Game</span>
        </div>
        <div>
            <p>
                팀을 형성하고 방을 만들어 팀원과 캘린더를 공유하며 일, 주, 월별 스케쥴링을 하는 웹 서비스
            </p>
            <p>
                <span class="tag">작성 중...</span>
                
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
    category: ['django', '팀'],
    writedAt: '2022-03-21 21:03:07',
    isHeroku: false,
}