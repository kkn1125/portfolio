'use strict';

const app = {
    appVersion: 'v0.1.0',
    path: location.protocol + '//' + location.host + '/',
    repoPath: location.host.match(/127|localhost/) ? '' : 'portfolio/',
    authors: ['kimson'],
    kimson: {
        repo: 'https://github.com/kkn1125/portfolio/',
        github: 'https://kkn1125.github.io/portfolio/',
        blog: 'https://kkn1125.github.io',
        avatar: 'https://avatars.githubusercontent.com/u/71887242?v=4',
        profile: 'https://kkn1125.github.io/profile',
        contact: 'https://kkn1125.github.io/contact',
        comment: '안녕하세요! 백앤드 개발자가 되기 위해 여러가지에 관심이 많은 예비 개발자입니다. 어제보다 1mm 더 발전하자는 각오를 가지고 있으며, 기능구현에 관심이 많고 문제해결에 적극적입니다. ',
    }
};

const pages = {
    type: (type) => templates[type],
    item: (type) => parts[type],
};

const templates = {
    'home': {
        render: function (data, response) {
            let cover = ['https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg'];

            return `
                <section page="${response}" style="background-image: url(${cover[parseInt(Math.random()*cover.length)]}); background-size: cover;">
                <!--<div class="home-weather">
                    <div class="home-weather-title">오늘의 날씨</div>
                    <div class="loc"></div>
                </div>-->
                <div class="intro">
                        <div class="profile">
                            <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
                        </div>
                        <div class="h3 capitalize">${app.authors[0]}</div>
                        <div class="intro-content">
                            ${app.kimson.comment}
                        </div>
                    </div>
                </section>
            `;
        }
    },
    'resume': {
        render: function (data, response) {
            const prjList = [
                {
                    info: {
                        title: 'With Me',
                        sub: '2인 프로젝트',
                        since: '2021. 11. 12 ~ 진행 중',
                        link: null,
                        important: true,
                    },
                    line: {
                        title: '전국 축제, 행사를 한 눈에',
                        desc: '공공데이터 API를 활용한 편리한 전국 축제 찾기. 단순하게 축제만 찾는데 그치지 않고, 사용자의 관심 지역과 관심 분야를 토대로 전국 축제를 조회하여 매칭되는 추천 행사를 제안합니다.',
                        subline: [
                            'API 요청을 최소화하여 부하를 줄이고 한글화된 객체를 만들어 사용하도록 구현',
                            '지역or월별>축제 키워드 순으로 검색되도록 구현',
                            '지역과 월별 검색을 교차 혹은 별도로 검색하는 기능 구현',
                            '축제마다 가지는 내용을 단어로 분류하는 알고리즘을 구현하여 단어만 색출하고 태그(#)로 표현',
                            '검색할 때마다 "타지역-행사명" 으로 랜덤하게 3곳 키워드 추천',
                            '검색된 지역의 색출된 단어를 중복을 제거하고 관련 키워드 클릭 시 해당되는 행사만 상세 검색되도록 구현',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Coffeecong',
                        sub: '1인 프로젝트',
                        since: '2021. 03. 24 ~ 2021. 04. 14',
                        link: 'coffeecong',
                        important: true,
                    },
                    line: {
                        title: '커피용품 온라인 몰',
                        desc: '커피과 관련한 원두, 티, 머신, 생활용품 등을 판매하는 온라인 몰 구현',
                        subline: [
                            '관리자 페이지를 별도로 구현하고 배송 완료여부, 회원, 상품, 게시글 관리가 이루어지도록 함',
                            '파일 업로드 시 이름 중복 예외처리',
                            '사용자 주문 내역을 세션을 이용하여 카트에 부여, 관리',
                            '상품 리뷰와 게시판 게시물 연동',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Mentees',
                        sub: '1인 프로젝트',
                        since: '2021. 09. 15 ~ 2021. 09. 28',
                        link: 'mentees',
                        important: true,
                    },
                    line: {
                        title: '멘티들이 모여 만드는 성장 커뮤니티',
                        desc: '멘토와 멘티의 연결을 위한 사이트가 많지만 멘티들이 서로 정보를 자유롭게 공유하고 함께 헤쳐나가며 함께 성장해 나가는 커뮤니티를 생각해보았습니다.',
                        subline: [
                            '멘티 추천으로 추천된 사람이 점수를 취득하는 시스템',
                            '멘티스 프로그램을 누구나 등재 가능하며, 모집인원, 시작, 종료, 마감일을 설정',
                            '서로 크리틱을 주고 받는 피드백 페이지 구현',
                            '계층형 댓글 구현',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Solitaire Card Game',
                        sub: '솔리테어 단순 구현',
                        since: '2022. 01. 05 ~ 2022. 01. 05',
                        link: 'solitaire',
                    },
                    line: {
                        title: '솔리테어 게임 구현',
                        desc: '순수 자바스크립트로 만들었으며 Vue의 렌더방식을 비슷하게 차용',
                        subline: [
                            'Vue의 render함수 특징인 리터럴 텍스트에 표현식을 파라미터로 교체하는 기능 구현',
                            '전체 게임 작동방식 코드 설계 후 로직 생성',
                            '솔리테어 게임 규칙 알고리즘 구현',
                            'Vue의 컴포넌트 개념을 비슷하게 구현하여 javascript 모듈화',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Penli CSS',
                        sub: '0.1.3v',
                        since: '2021. 11. 14 ~ 2021. 11. 19',
                        link: 'penli',
                    },
                    line: {
                        title: 'Bootstrap을 모티브로 CSS 구현',
                        desc: 'CSS를 익히기위해 Bootstrap의 style 조작 방식은 변수를 적극사용하여 공통되는 부분을 다수 일괄처리할 수 있도록 구현',
                        subline: [
                            'r,g,b 수를 쪼개어 calc를 이용한 채도, 밝기 조정',
                            '자주 사용하는 카드형식을 등분, 일괄 패딩, 마진 조정',
                            'left, right - sidebar 설정 시 built-in 클래스명으로 고정/토글형 선택 가능하도록 구현',
                        ]
                    }
                },
                {
                    info: {
                        title: 'mkDocumentifyJS',
                        sub: '2인 프로젝트 1.0.0v',
                        since: '2021. 10. 01 ~ 2021. 11. 11',
                        link: 'mkDocumentifyJS',
                    },
                    line: {
                        title: '자바스크립트 문서화',
                        desc: '자주 사용되는 JSDoc을 사용할 때 nodejs에 기반한 것에 자바스크립트만으로 구현해보고자 작업을 실행했습니다.',
                        subline: [
                            '자바스크립트 주석 분석',
                            '자바스크립트 주석의 태그별 분류 작업',
                            'Zip 소스코드를 사용하여 문서화된 파일을 단일 또는 분할 페이지로 만드는 기능 구현',
                            '간단한 채팅봇을 만들어 저장 후에도 동작',
                            '유연한 커스터마이징을 위해 사용자 옵션을 초기화 메서드에서 받는 형식으로 구현',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Tutorial',
                        sub: '0.1.1v',
                        since: '2021. 10. 25 ~ 2021. 11. 09',
                        link: 'tutorial',
                    },
                    line: {
                        title: '웹 앱 튜토리얼 생성 도구',
                        desc: '웹페이지에서 설명이 필요한 UI요소에 설명 박스를 달아 해당 위치에 포커싱되어 튜토리얼을 진행해주는 기능입니다.',
                        subline: [
                            '사용자의 초기화 옵션으로 튜토리얼이 자동 생성되도록 구현',
                            '첫 문구와 마지막 문구에서 더 이상 벗어나지 않도록 함',
                            'id>class>tagName 순으로 지정된 이름을 id 우선 탐색하고 없을 시 에러구문을 표시하는 예외처리 구현',
                        ]
                    }
                },
                {
                    info: {
                        title: 'Typer',
                        sub: '1.0.0v',
                        since: '2021. 10. 27 ~ 2021. 11. 05',
                        link: 'typer',
                    },
                    line: {
                        title: '한글 음절 타이핑 효과 라이브러리',
                        desc: '한글의 음절을 분해/재조립하는 기능을 가진 타이핑 효과를 쉽게 표현해주는 기능입니다.',
                        subline: [
                            '한글 음절 분해하여 타이핑 순서로 재조합하는 방법 구현',
                            '타이핑에 딜레이를 부여하여 실제 타이핑과 유사한 효과를 내도록 구현',
                            '태그 data-*속성과 초기화옵션으로 태그별, 전역 설정을 사용자 의도대로 구분가능하도록 함',
                        ]
                    }
                },
            ];
            const eduList = [
                {
                    info: {
                        title: '현재',
                        sub: '진행중',
                        since: '2021. 03 ~',
                    },
                    line: {
                        title: 'JavaScript와 Java를 중심으로 프레임워크, DevOps 등을 공부 중',
                        desc: '짧은 학원 기간을 거치고 부족한 점이 많다고 판단해서 Restful API와 Vue, Spring, Spring Boot, MyBatis 등의 기술을 배우고 개인 블로그에 기록하며 하루하루 발전해 나가고 있습니다.',
                    }
                },
                {
                    info: {
                        title: 'JAVA 1개월반 과정 수료',
                        sub: '수료',
                        since: '2021. 03',
                    },
                    line: {
                        title: 'JAVA JSP 수료',
                        desc: '자바 1개월 반 과정을 거쳐 JSP로 기본적인 CRUD 구현을 익히고 웹 애플리케이션을 구축하는데 집중하여 과정을 이수',
                    }
                },
                {
                    info: {
                        title: '한국국제대학교',
                        sub: '졸업',
                        since: '2018. 02',
                    },
                    line: {
                        title: '실내건축학 학사 취득',
                        desc: '건축에 뜻을 가지고 실내건축학을 전공하여 건축가 자격을 얻기 위해 조기취업하여 예비건축사시험 합격 및 LH 공공주택 설계공모 관련 실무 수행',
                    }
                },
                {
                    info: {
                        title: '한국국제대학교',
                        sub: '입학',
                        since: '2013. 02.',
                    },
                    line: {
                        title: '실내건축학 전공',
                        desc: '건축에 뜻을 가지고 실내건축학을 전공하여 조기취업하여 LH 공공주택 설계공모관련 실무 수행',
                    }
                },
            ];

            const timeLineList = [
                {
                    info: {
                        title: '(주)대경건축사사무소',
                        sub: '입사 - 퇴사',
                        since: '2018. 01 ~ 2020. 09',
                    },
                    line: {
                        title: '설계사무소 경력',
                        desc: 'LH APT 공모를 주로 진행하며 건축 설계 도면 작성, 도면 보고서 PM 담당',
                        subline: [
                            '종로창신, 안양석수 현상설계 | PM 및 도면 작성',
                            '성남복정 A-3BL 현상설계 | PM 및 도면 작성',
                            '의왕월암 A-1BL 현상설계 | PM 보조 및 도면 작성',
                            '화성동탄2 트라이엠파크 | PM 보조 및 도면 작성',
                            '남양주진접A8 / 철원 철원행복주택 | PM 보조 및 도면 작성',
                            '창원명곡 A1-1BL 공동주택(신혼희망타운) 현상설계 | 도면작성 및 보고서 작성',
                            '시흥장현 A-3BL 공동주택 현상설계 | 도면작성 및 보고서 작성',
                            '부산기장 A2BL 시공책임형 CMR 아파트 건설공사 1공구 | 도면작성 및 보고서 작성',
                            '부산명지 A5블록 공동주택 현상설계 | 도면작성 및 보고서 작성',
                            '파주운정3 A26블록 공동주택 현상설계 | 도면작성 및 보고서 작성',
                            '제6회 주택설계 기술경진대회 | 도면작성 및 보고서 작성',
                            '파주운정 A-37블록 공동주택 현상설계 | 도면작성 및 보고서 작성',
                            '남양주별내지구 A1-1BL 공동주택 현상설계 | 도면작성 및 보고서 작성',
                            '(공공임대리츠)창원가포 S-1BL 아파트 건설공사 2공구 | 도면작성 및 보고서 작성',
                            '서귀포성산지구 공동주택 현상설계 | 보고서 작성',
                            '진주옥봉 행복주택 설계공모 | 보고서 작성',
                        ],
                    }
                },
            ];

            let parseToHTML = (parseTarget) => {
                return parseTarget.map(({
                    info,
                    line,
                }) => {
                    let lists = '';
                    let detail = info.link?`<span class="detail"><a class="text-danger" href="#portfolio-${info.link}">상세보기</a></span>`:'';
                    if(line.subline){
                        lists = `<span class="subline">${detail}<span scroll>📖more</span>`
                        +line.subline.map(li=>
                            `<span class="li">${li.split('|').shift()}
                            ${li.split('|').pop().split('및').map(z=> {
                                if(li.split('|').shift().startsWith(z)) {
                                    return '';
                                } else {
                                    let matchs = '';
                                    if(z.match(/pm/gim)) matchs = 'danger';
                                    else matchs = 'brand';
                                    return `<span class="fs-8 tag tag-${matchs}">${z}</span>`;
                                }
                            }).join(' ')} </span>`)
                        .join('')+'</span>';
                    } else {
                        lists = '';
                    }
                    return `<li class="time-line">
                        <span class="time-line-info text-gray">
                            <span class="time-line-title pe-3">${info.title}</span>
                            <span class="time-line-sub">${info.sub}</span>
                            <span class="time-line-since">${info.since}</span>
                        </span>
                        <span class="line text-gray">
                            ${info.important?`<span class="important"></span>`:''}
                            <span class="time-line-title">${line.title}</span>
                            <span class="time-line-desc">${line.desc}</span>
                            ${lists}
                        </span>
                    </li>`
                }).join('');
                
            }

            const cardGroupClasses = `card-group card-dv-1 card-dv-sm-2 card-dv-md-4`;
            const cardClasses = `card-content text-center skill`;

            return `<section page="${response}">
                <div class="h3 text-uppercase">resume</div>
                <div class="mt-5 resume w-flex flex-column flex-row-md">
                    <img class="resume-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
                    <span class="info-table">
                        <ul>
                            <li><span>name</span><span>김경남</span></li>
                            <li><span>age</span><span>${new Date().getFullYear()-1992}</span></li>
                            <li><span>email</span><span class="link-form" onclick="location.href='mailto:chaplet01@gmail.com'">chaplet01@gmail.com</span></li>
                            <li><span>github</span><span>kkn1125</span></li>
                            <li><span>blog</span><span"><a href="${app.kimson.blog}">kkn1125.github.io</a></span></li>
                        </ul>
                    </span>
                </div>
                
                <div class="mt-5 work-exp">
                    <div class="end-words">
                        <span class="h6">자기개발</span>
                    </div>
                    <div class="fs-7" style="line-height: 1.8;">
                        <div class="time-line-title fs-6">하루를 기어가더라도 뒤로가진 말자</div>
                        <p class="text-gray">
                            자기개발에 게을리 하지 않기 위해 깃허브 저장소나 기사, 대기업의 기술블로그, 회사에서 요구하는 사항 등을 보며 무엇이 부족한지 찾아 제 것으로 만들기 위해 노력하고 있습니다. 기술과 관련해 배운 것은 블로그에 정리, 기록하고 있으며 프로젝트는 이 페이지에서 등록, 관리하고 있습니다.
                        </p>
                        <p class="text-gray">
                            JSDoc의 문서화 기능이나 Vue의 컴포넌트 등을 직접 구현해보는 탐구 정신이 있고, 여러 방면으로 문제를 생각하려 노력합니다. 1일 1커밋을 목표로 현재도 많은 것을 보고 배우며 하루하루 앞으로 나아가고 있습니다.
                        </p>
                    </div>
                </div>

                <div class="mt-5 work-exp">
                    <div class="end-words">
                        <span class="h6">사용 스킬</span>
                    </div>
                    <div class="fs-5">Back-End</div>
                    <div class="${cardGroupClasses}">
                        <div class="card">
                            <div class="${cardClasses}">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="40" height="43"
                                viewBox="0 0 50 50"
                                style=" fill:#000000;"><path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path></svg>
                                <span>Familiar</span>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="${cardClasses}">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                width="48" height="48"
                                viewBox="0 0 48 48"
                                style=" fill:#000000;"><path fill="#000000" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path></svg>
                                <span>Familiar</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fas fa-pepper-hot fs-1"></i>
                                <span>Familiar</span>
                            </div>
                        </div>
                    </div>

                    <div class="fs-5">Front-End</div>
                    <div class="${cardGroupClasses}">
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-html5 fs-1"></i>
                                <span>Familiar</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-css3-alt fs-1"></i>
                                <span>Familiar</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-js-square fs-1"></i>
                                <span>Familiar</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-react fs-1"></i>
                                <span>Used</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-vuejs fs-1"></i>
                                <span>Used</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="fs-5">Database</div>
                    <div class="${cardGroupClasses}">
                        <div class="card">
                            <div class="${cardClasses}">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="35" height="35"
                            viewBox="0 0 24 24"
                            style=" fill:#000000;"><path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z"></path></svg>
                                <span>Familiar</span>
                            </div>
                        </div>
                        <div class="card">
                            <div class="${cardClasses}">
                                <img style="width: 45px; height: 45px;" src="https://raw.githubusercontent.com/mybatis/logo/978369e60c3e4f2e4319d57388beb71e7d0955e0/logo-bird-ninja.svg" alt="mybatis logo">
                                <span>Used</span>
                            </div>
                        </div>
                    </div>

                    <div class="fs-5">DevOps</div>
                    <div class="${cardGroupClasses}">
                        <div class="card">
                            <div class="${cardClasses}">
                                <i class="fab fa-github fs-1"></i>
                                <span>Familiar</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 work-exp">
                    <div class="end-words">
                        <span class="h6">프로젝트</span>
                    </div>
                    ${parseToHTML(prjList)}
                </div>

                <div class="mt-5 work-exp">
                    <div class="end-words">
                        <span class="h6">학력</span>
                    </div>
                    ${parseToHTML(eduList)}
                </div>

                <div class="mt-5 work-exp">
                    <div class="end-words">
                        <span class="h6">경력</span>
                    </div>
                    <ul class="mt-5">
                        ${parseToHTML(timeLineList)}
                    </ul>
                </div>

            </section>`;
        }
    },
    'portfolio': {
        render: function (data, response, subpage) {
            if (!subpage)
                return `<section page="${response}">
            <div class="sr"></div>
                <div class="fence-full">
                    <div class="card-group card-light card-dv-1 card-dv-sm-2 card-dv-md-3 card-dv-lg-4 card-pd-0 justify-content-around" style="--gutter-x: 3rem; --gutter-y: 3rem;"></div>
                </div>
            </section>`;
            else return `<section page="${response}"></section>`;
        },
        'card': {
            render: ({
                title,
                purpose,
                work,
                authors,
                link,
                cover,
                writedAt,
                mainLang,
                tag
            }, prjname) => {
                return `
                    <div class="card bg-opacity-0" style="position: relative; --card-padding: 0; width: 18rem;">
                        
                        <div class="back h-100 w-100 p-5" style="border-radius: inherit;">
                            <div class="card-title text-trunc">
                                <a href="#portfolio-${prjname}" title="${title==''?'No title':title}">${title==''?'No title':title}</a>
                            </div>
                            <div class="card-content">
                                <div class="text-muted fs-7 mb-4">${purpose}</div>
                                <div class="card-body">
                                    <div class="link mb-2">
                                        <a class="btn btn-sm text-white btn-point" href="#portfolio-${prjname}">
                                            <i class="fas fa-search"></i>
                                            Detail
                                        </a>
                                        <buttton class="btn btn-sm btn-subpoint" onclick="window.open('${link}')">
                                            <i class="fas fa-search"></i>
                                            Page
                                        </buttton>
                                    </div>
                                    <div class=" mb-1">
                                        <span class="tag">author</span>${authors.join(' | ')}
                                    </div>
                                    <div class="time mb-1">
                                        <span class="tag">start</span><span>${work.start}</span>
                                        <span class="tag">end</span><span>${work.end}</span>
                                    </div>
                                    <div class="time mb-1">
                                        <span class="tag">writed at </span>${writedAt}
                                    </div>
                                </div>
                                <div class=" mb-1">
                                    <span class="tag">tags</span>
                                    ${tag.map(t=>`<span class="tag tag-light">${t}</span>`).join(' ')}
                                </div>
                                <div>
                                    <span class="tag">main language</span>
                                    <span class="tag tag-danger text-capitalize">${mainLang}</span>
                                </div>
                            </div>
                        </div>
    
                        <div class="front h-100 w-100 position-absolute top-0 start-0 back-filp" style="background-image: url('${app.path+app.repoPath}assets/images/portfolio/${prjname}/${cover}'); background-size: cover; background-position: top; border-radius: inherit;"></div>
                    </div>
                `;
            }
        },
        post: {
            render: (post) => {
                let notice = (isHeroku) => isHeroku ? `<p>
                    <blockquote class="blockquote blockquote-info pe-4">
                        <span class="h6">Notice</span>
                        <br>
                        <span>
                            헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 <button class="btn btn-sm btn-subpoint" onclick="window.open('https://kkn1125.github.io/contact')">버튼</button>을 클릭하여 메일보내기로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.
                            <br>
                            현재 헤로쿠 페이지 상태 : <span class="server-state">확인중...</span>
                        </span>
                    </blockquote>
                </p>` : '';
                let database = (useDB) => useDB.useDB ? `
                    <div class="mt-3">
                        <div>
                            <span class="fs-4 fw-bold">Database 구현</span>
                        </div>    
                        <span class="tag">Databases : </span>
                        ${useDB.db.map(db=>`<span class="tag tag-subpoint">${db}</span>`).join(" ")}
                    </div>
                ` : '';
                let mainContent = (content) => content !== '' ? `<div>
                        ${content}
                    </div>` : `<p><span class="notice notice-danger">작성 중인 게시물입니다.</span></p>`;
                let parts = projects[post];

                if(parts.isHeroku)
                fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(parts.link)}`).then(response=>{
                    setTimeout(()=>{
                        document.querySelector('.server-state').innerHTML = response.ok?`열림`:`닫힘`;
                    }, 1000);
                });

                let dateGap = new Date(new Date(parts.work.end) - new Date(parts.work.start)).getDate();
                let link = (link) => link.link != '' ? `
                    <div class="text-capitalize">
                        <a href="${link.link}" target="_blank">
                            📗<strong>${post} Project</strong> sample pages
                        </a>
                    </div>
                ` : '';
                let github = (github) => github.github != '' ? `
                    <div class="text-capitalize">
                        <a href="${github.github}" target="_blank">
                            📗<strong>${post} Project</strong> github pages
                        </a>
                    </div>
                ` : '';
                let subImages = (subImages) => subImages.length > 0 ? `<div class="my-3">
                ${subImages.map(([name, path])=>name!=''&&path!=''?`${name!=''?`<div class="fw-bold fs-5 text-capitalize mt-3">${name}</div>`:''}
                <div class="w-100">
                    <img class="w-100" src="${app.path+app.repoPath}assets/images/portfolio/${post}/${path}" alt="${path}"></div>`:'').join('\n')}
                </div>` : '';
                let movie = (movie) => movie != '' ? `<div style="text-align: center;">
                    ${movie}
                </div>` : '';

                return `
                <div class="position-relative"
                style="filter: brightness(0.5); z-index:-1; min-height: 250px; max-height: calc(24rem + 3vw); overflow: hidden;">
                    <div class="cover-img" style="background-image: url('${app.path+app.repoPath}assets/images/portfolio/${post}/${parts.cover}')"></div>
                    </div>
                    <div class="fence-full fence-lg" style="position: relative; top: calc(-13rem - 7vw);">
                        <article class="post h-entry" itemscope="" itemtype="http://schema.org/BlogPosting">
    
                            <header class="py-3">
                                <div class="mt-5">
                                    <span class="h4 text-white" style="min-height: 2em;">
                                        🙋‍♂️${parts.title}
                                    </span>
                                </div>
    
                                <!-- 카테고리 -->
                                <div><span class="tag text-white">categories :</span>
                                    ${parts.category.map(t=>`<span class="tag tag-warning">${t}</span>`).join(' ')}
                                </div>
    
                                <!-- 태그 -->
                                <div><span class="tag text-white">tags :</span>
                                    ${parts.tag.map(t=>`<span class="tag tag-point">${t}</span>`).join(' ')}
                                </div>
    
                                <p class="text-light fs-7 mt-3">
                                    <span class="tag text-white">info : </span>
                                    <time class="time">
                                        ${parts.writedAt}
                                    </time>•
                                    <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                        <span class="p-author h-card" itemprop="name">
                                            ${parts.authors.join(' | ')}
                                        </span>
                                    </span>
                                </p>
    
                            </header>
    
                            <div class="">
                                <div class="mt-3">
                                    <span class="h3 text-capitalize">${post} project</span>
                                </div>
    
                                <div class="mt-3">
                                    <span class="fs-4 fw-bold">개요</span>
                                </div>
    
                                <p>${parts.purpose}</p>
    
                                <div class="mt-3">
                                    <span class="fs-4 fw-bold">Used</span>
                                </div>
    
                                <p>
                                    <span class="tag">main : </span><span class="tag tag-danger">${parts.mainLang}</span>
                                    <br>
                                    <span class="tag">sub : </span>${parts.subLangs.map(t=>`<span
                                        class="tag tag-info">${t}</span>`).join(' ')}
                                </p>
    
                                <p>
                                    ${database(parts)}
                                </p>
    
                                <div class="mt-3">
                                    <span class="fs-4 fw-bold">작업 기간</span>
                                </div>
    
                                <p class="tag tag-info">
                                    <span>${parts.work.start} ~ ${parts.work.end}</span>
                                </p>
    
                                <p class="tag tag-danger">총 ${dateGap-parseInt((dateGap/7)*2)}일 소요 ( 주말 제외 )</p>
    
                                ${mainContent(parts.content.replace(/\-\>/gim,'→').replace(/\<\-/gim,'←'))}
    
                                ${subImages(parts.subImages)}
    
                                ${movie(parts.movie)}
    
                                <hr>
    
                                ${notice(parts.isHeroku)}
    
                                
                                ${link(parts)}
                                ${github(parts)}
                            </div>
    
                        </article>
    
                    </div>
                `;
            }
        },
    },
    'about': {
        render: function (data, response) {
            return `<section page="${response}">
                <div class="h3 text-uppercase">about</div>
                <div class="row-div">
                    <div class="h6">이 사이트는</div>
                    <p>활동 내용을 정리하고 주로 resume와 포트폴리오를 정리하는 페이지입니다.</p>
                    <p>취미로 무언가를 만들어 내는 것을 좋아합니다. 자바스크립트로 SPA를 제작하는 것에 관심이 많습니다. 다양한 방법으로 시도하고 경험하며 자기개발을 합니다.</p>
                    <p>자바를 주 언어로 공부하고 있으며, 알고리즘, CS, 디자인 패턴 등의 내용을 위키와 블로그에 함께 기록하고있습니다.</p>
                    <p>블로그와 위키를 함께 관리하고 있으니 많은 관심 가져주시기를 바랍니다.</p>
                </div>
                <div class="row-div">
                    <div class="h6">다른 내용</div>
                    <p>
                        <a class="tag tag-info text-white" href="https://kkn1125.github.io">블로그</a>
                        <a class="tag tag-info text-white" href="https://kkn1125.github.io/wikimson">위키</a>
                    </p>
                </div>
            </section>`;
        }
    },
    '404': {
        render: function (data, response) {
            return `<section page="${response}">
                <div class="text-center">
                    <div class="h1">404</div>
                    <div class="h6">Not Found</div>
                    <div class="errorMsg">${data.message}</div>
                </div>
            </section>`;
        }
    }
};

const parts = {
    'paging': {
        render: function (hash) {
            const pagelist = Object.keys(router).filter(page => page != '404');
            const isStart = pagelist.indexOf(hash.slice(1));
            return `<div class="side-paging">
                <div>
                    <button class="btn btn-sm btn-danger fs-5 px-3 py-0" data-dir="prev"${isStart==0?' hidden':''}>
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="btn btn-sm btn-danger fs-5 px-3 py-0" data-dir="next"${isStart==pagelist.length-1?' hidden':''}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>`;
        }
    },
    'menu': {
        render: function () {
            return `<div class="side-menu">
                <button class="menu fs-5 btn btn-danger py-0 px-3"><i class="fas fa-bars"></i></button>
            </div>
            <nav id="side-menu">
                <ul class="font-gugi">
                    ${Object.keys(router).filter(page=>page!='404').map(page=>`<li><a href="#${page}" class="page">${page}</a></li>`).join('')}
                </ul>
            </nav>`;
        }
    },
};

const projects = {
    coffeecong: {
        title: '[JSP] 커피 온라인 몰',
        purpose: '원두와 티, 커피머신과 생활용품을 판매하는 온라인 몰',
        work: {
            start: '2021-3-24',
            end: '2021-4-14',
        },
        content: `
            <div class="fs-4 mt-3 fw-bold">구분</div>
                <span class="tag tag-danger">M</span> 관리자 전용
                <span class="tag tag-info">U</span> 회원 전용
                <span class="tag tag-success">A</span> 공용
                <ol>
                    <li>메인페이지</li>
                    <li>상품</li>
                        <ol>
                            <li>등록 <span class="tag tag-danger">M</span></li>
                            <li>수정 <span class="tag tag-danger">M</span></li>
                            <li>삭제 <span class="tag tag-danger">M</span></li>
                            <li>읽기 <span class="tag tag-success">A</span></li>
                        </ol>
                    <li>게시글 ( CRUD ) <span class="tag tag-success">A</span></li>
                    <li>장바구니 ( CRUD ) <span class="tag tag-success">A</span></li>
                    <li>회원 ( CRUD ) <span class="tag tag-info">U</span></li>
                    <ol>
                        <li>계정찾기 - Ajax</li>
                    </ol>
                    <li>관리자 페이지 ( CRUD ) <span class="tag tag-danger">M</span></li>
                </ol>
            </div>`,
        authors: ['kimson'],
        link: 'https://devkims-on.herokuapp.com/main.me',
        github: '',
        cover: 'prj-1.png',
        subImages: [
            ['사이트 도식화', 'coffee.png'],
        ],
        movie: '<iframe width="696" height="392" src="https://www.youtube.com/embed/-8Zeu9oCVPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        useDB: true,
        db: ['product', 'cart', 'user', 'board'],
        mainLang: 'java',
        subLangs: ['html', 'css', 'javascript', 'mysql'],
        tag: ['coffee', 'jsp', 'onlinemall'],
        category: ['jsp', '학원'],
        writedAt: '2021-09-02 03:58',
        isHeroku: true,
    },
    blog: {
        title: '[SPRING] 개인 블로그',
        purpose: '개인 블로그',
        work: {
            start: '2021-6-24',
            end: '2021-7-4',
        },
        content: `<div>
            <div class="mt-3">
                bootstrap 5.0.1v을 사용하여 mock up 및 데이터베이스 구성, crud 구현까지 11일 소요되어 1.0.0v로 첫 배포하였습니다. 사이트맵 등록 이후 쭉 업데이트 해왔으며, 8월 3일 까지 운영하다가 현재는 깃허브 블로그를 운영 중입니다.
            </div>

            <div class="fs-4 mt-3 fw-bold">구분</div>
                <span class="tag tag-danger">M</span> 관리자 전용
                <span class="tag tag-success">A</span> 공용
                <ol>
                    <li>메인페이지</li>
                    <li>게시글</li>
                        <ol>
                            <li>등록 <span class="tag tag-danger">M</span></li>
                            <li>수정 <span class="tag tag-danger">M</span></li>
                            <li>삭제 <span class="tag tag-danger">M</span></li>
                            <li>읽기 <span class="tag tag-success">A</span></li>
                        </ol>
                    <li>댓글  ( CRUD ) <span class="tag tag-success">A</span></li>
                </ol>
            </div>
        </div>`,
        authors: ['kimson'],
        link: 'https://devkimson.herokuapp.com/home',
        github: '',
        cover: 'blog01.png',
        subImages: [
            ['프로필', 'blog02.png'],
            ['블로그', 'blog03.png'],
            ['댓글', 'blog04.png'],
            ['미리보기', 'mockup01.png'],
        ],
        movie: '',
        useDB: true,
        db: ['comment', 'board', 'user'],
        mainLang: 'java',
        subLangs: ['html', 'css', 'javascript', 'java', 'mysql', 'spring', 'google login'],
        tag: ['blog', 'spring'],
        category: ['spring', '개인'],
        writedAt: '2021-09-03 11:30',
        isHeroku: true,
    },
    mentees: {
        title: '[SPRINGBOOT] Mentees 프로젝트',
        purpose: '멘티들이 모여 만드는 성장 커뮤니티',
        work: {
            start: '2021-9-15',
            end: '2021-9-28',
        },
        content: `<div>
            <div class="mt-3">
                <span class="fs-5 fw-bold">
                    dependencies
                </span>
            </div>
            <ol>
                <li>tiles 3.0.8</li>
                <li>lombok</li>
                <li>springboot-starter</li>
                <li>Multipartfile</li>
            </ol>
            <div class="mt-3">
                <span class="fs-5 fw-bold">
                    lib, api
                </span>
            </div>
            <ol>
                <li>suneditor.js</li>
            </ol>

            <div class="fs-4 mt-3 fw-bold">구분</div>
                <span class="tag tag-info">U</span> 회원 전용
                <span class="tag tag-success">A</span> 공용
                <ol>
                    <li>메인페이지</li>
                    <li>게시글</li>
                        <ol>
                            <li>등록 <span class="tag tag-info">U</span></li>
                            <li>수정 <span class="tag tag-info">U</span></li>
                            <li>삭제 <span class="tag tag-info">U</span></li>
                            <li>읽기 <span class="tag tag-success">A</span></li>
                        </ol>
                    <li>댓글  ( CRUD ) <span class="tag tag-success">A</span></li>
                    <li>좋아요  ( CRUD ) <span class="tag tag-success">A</span></li>
                    <li>회원정보페이지</li>
                    <ol>
                        <li>정보수정 <span class="tag tag-info">U</span></li>
                        <li>스크랩목록 <span class="tag tag-info">U</span></li>
                        <li>좋아요목록 <span class="tag tag-info">U</span></li>
                        <li>추천한 회원 목록 <span class="tag tag-info">U</span></li>
                        <li>탈퇴 <span class="tag tag-info">U</span></li>
                    </ol>
                    <li>회원로그인 <span class="tag tag-success">A</span></li>
                    <li>About 페이지 <span class="tag tag-success">A</span></li>
                </ol>
            </div>

            <div class="mt-3">
                <span class="fw-bold fs-4">주요 내용</span>
            </div>
            <div>
                <ol>
                    <li>글쓰기 에디터 - suneditor 사용</li>
                    <li>댓글 및 좋아요 기능 <kbd class="bg-info">n:m</kbd> 방식으로 구현</li>
                    <li>스크랩 기능 구현</li>
                </ol>
            </div>
        </div>`,
        authors: ['kimson'],
        link: 'https://menteesprj.herokuapp.com',
        github: '',
        cover: 'mentees_main.png',
        subImages: [
            ['메인', 'mentees_main03.png'],
            ['로그인', 'mentees_signin.png'],
            ['댓글', 'mentees_program_detail_reply.png'],
            ['', 'mentees_program_detail_reply_done.png'],
            ['상세글', 'mentees_program_detail.png'],
            ['회원정보', 'mentees_mentees_full.png'],
            ['회원정보 설정', 'mentees_mentees_program_feedback.png'],
            ['회원정보 탈퇴', 'mentees_mentees_setting_out.png'],
        ],
        movie: '',
        useDB: true,
        db: ['comment', 'feed', 'feedback', 'likes', 'member', 'product', 'recommend', 'reserve'],
        mainLang: 'java',
        subLangs: ['html', 'css', 'javascript', 'java', 'mysql', 'spring boot', 'mybatis'],
        tag: ['mentee', 'mentor', 'springboot'],
        category: ['springboot', '개인'],
        writedAt: '2021-09-28 11:46',
        isHeroku: true,
    },
    typer: {
        title: '[JAVASCRIPT] Typer 프로젝트',
        purpose: '한글과 특수문자 등을 타자 효과로 구현해주는 어플리케이션',
        work: {
            start: '2021-10-27',
            end: '2021-11-5',
        },
        content: `<div>
            <div class="mt-3">
                <span class="fw-bold fs-4">주요 내용</span>
            </div>
            <div>
                <ol>
                    <li>한글 분해 및 재조합 기능 구현</li>
                    <li>랜덤 함수를 이용한 타이핑 딜레이 효과 구현</li>
                </ol>
            </div>
        </div>`,
        authors: ['kimson'],
        link: 'https://kkn1125.github.io/typer/',
        github: 'https://github.com/kkn1125/typer',
        cover: 'typer01.png',
        subImages: [
            ['업데이트 내역 markdown → html', 'typer02.png'],
        ],
        movie: '',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['typer', '타이핑효과', '한글'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-10 09:48',
        isHeroku: false,
    },
    mkDocumentifyJS: {
        title: '[JAVASCRIPT] Documentify 프로젝트',
        purpose: '자바스크립트 문서화 어플리케이션',
        work: {
            start: '2021-10-1',
            end: '2021-11-11',
        },
        content: `<div class="mt-5">
            <div class="mt-3">
                <span class="fw-bold fs-4">주요 내용</span>
            </div>
            <div>
                <ol>
                    <li>로컬 디렉토리의 자바스크립트 파일의 주석 분석</li>
                    <li>[단일/분할] 방식으로 저장 기능 구현</li>
                    <li>채팅봇 기능 구현</li>
                    <li>검색창 구현 - MDN페이지 검색기능 참조</li>
                </ol>
            </div>
        </div>`,
        authors: ['kimson', 'ohoraming'],
        link: 'https://kkn1125.github.io/mkDocumentifyJS/',
        github: 'https://github.com/kkn1125/mkDocumentifyJS',
        cover: 'docu01.png',
        subImages: [
            ['Main', 'docu01.png'],
        ],
        movie: '',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['documentify', '문서화'],
        category: ['javascript', '공동'],
        writedAt: '2021-11-23 14:55',
        isHeroku: false,
    },
    tutorial: {
        title: '[JAVASCRIPT] Tutorial',
        purpose: '튜토리얼이 요구되는 웹을 위한 어플리케이션',
        work: {
            start: '2021-10-25',
            end: '2021-11-9',
        },
        content: `<div class="mt-5">
            <div class="mt-3">
                <span class="fw-bold fs-4">주요 내용</span>
            </div>
            <div>
                <ol>
                    <li>튜토리얼 텍스트 박스 목표 위치에 이동하도록 scroll, resize 이벤트를 사용하여 구현</li>
                    <li>Module Pattern 사용</li>
                </ol>
            </div>
        </div>`,
        authors: ['kimson'],
        link: 'https://kkn1125.github.io/tutorial/',
        github: 'https://github.com/kkn1125/tutorial',
        cover: 'tuto01.png',
        subImages: [
            ['Main', 'tuto01.png'],
        ],
        movie: '',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['tutorial', '웹 튜토리얼'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-23 14:55',
        isHeroku: false,
    },
    penli: {
        title: '[CSS] Penli 프로젝트',
        purpose: 'CSS를 편리하게 "Penli"',
        work: {
            start: '2021-11-14',
            end: '2021-11-19',
        },
        content: `<div class="mt-5">
            <div class=""mt-3>
                <span class="fs-4 fw-bold">Penli는</span>
                <span class="us-none tag tag-danger" data-pop-type="msg" data-msg-dir="end" data-msg="현재 버전은 v0.1.1입니다.">
                    ?
                </span>
            </div>
            <div>
                <p>
                    <kbd class="bg-info">Bootstrap</kbd>과 유사한 클래스명과 반응형을 위한 sizing이 구현
                </p>
                <p>
                    <span class="tag">차별점 : </span>
                    <ul>
                        <li>카드 속성 전역/단일 설정 가능</li>
                        <li><kbd class="bg-info">:root</kbd>에 Penli CSS의 모든 속성을 따로 지정</li>
                        <li>하나의 값을 변경하면 전체를 간편하게 커스터마이징 할 수 있도록 구현</li>
                    </ul>
                </p>
            </div>
        </div>`,
        authors: ['kimson'],
        link: 'https://kkn1125.github.io/penli/',
        github: 'https://github.com/kkn1125/penli/',
        cover: 'penli02.png',
        subImages: [
            ['Sizing', 'penli02.png'],
        ],
        movie: '',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['css'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-22 22:31:45',
        isHeroku: false,
    },
    solitaire: {
        title: '[JAVASCRIPT] Solitaire Card Game',
        purpose: '솔리테어 단순 구현',
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
                    <kbd class="bg-info">Solitaire</kbd>의 단순하면서 복잡한 규칙을 구현하는데 초점을 두고 작업을 진행하였습니다.
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
    },
};