'use strict';

const app = {
    appVersion: 'v0.1.3',
    path: location.protocol+'//'+location.host+'/',
    repoPath: location.host.match(/127|localhost/)?'':'portfolio/',
    authors: ['kimson'],
    kimson: {
        github: 'https://kkn1125.github.io/portfolio/',
        blog: 'https://kkn1125.github.io',
        avatar: 'https://avatars.githubusercontent.com/u/71887242?v=4',
        profile: 'https://kkn1125.github.io/profile',
        contact: 'https://kkn1125.github.io/contact',
        comment: '어제보다 1mm 더 발전하고자 하는 예비개발자의 포트폴리오입니다. 기능구현에 관심이 많고 문제해결에 적극적입니다.',
    }
};

const pages = {
    type: (type)=>templates[type],
    item: (type)=>parts[type],
};

const templates = {
    'home': {
        render: function(data, response){
            let cover = ['https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg','https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg','https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg'];

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
                        <div class="h5 capitalize">kimson</div>
                        <div class="intro-content">
                            안녕하세요! 백앤드 개발자가 되기 위해 여러가지에 관심이 많은 예비 개발자입니다.
                        </div>
                    </div>
                </section>
            `;
        }
    },
    'resume': {
        render: function(data, response){
            return `<section page="${response}">
                <div class="h5">resume</div>
                <div class="row-div resume">
                    <img class="resume-avatar" src="https://www.saramin.co.kr/zf_user/persons/picture?idx=8461393|f171125f2cc0c37cc4d9b5c12f78d29fce14120b1b62bf8b744dec097d7880d2" alt="profile">
                    <span class="info-table">
                        <ul>
                            <li><span>name</span><span>김경남</span></li>
                            <li><span>age</span><span>29</span></li>
                            <li><span>email</span><span>chaplet01@gmail.com</span></li>
                        </ul>
                    </span>
                </div>
                <div class="row-div work-exp">
                    <div class="h6">work experience</div>
                </div>
            </section>`;
        }
    },
    'portfolio': {
        render: function(data, response, subpage){
            if(!subpage)
            return `<section page="${response}">
            <div class="sr"></div>
                <div class="fence-full">
                    <div class="card-group card-light card-dv-1 card-dv-sm-2 card-dv-md-3 card-dv-lg-4 card-pd-0 justify-content-around" style="--gutter-x: 3rem; --gutter-y: 3rem;"></div>
                </div>
            </section>`;
            else return `<section page="${response}"></section>`;
        },
        'card': {
            render: ({title, purpose, work, authors, link, cover, writedAt, mainLang, tag}, prjname) => {
                return `
                    <div class="card bg-opacity-0" style="position: relative; --card-padding: 0; width: 20rem;">
                        
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
            render: (post)=>{
                let notice = (isHeroku) => isHeroku?`<p>
                    <blockquote class="blockquote blockquote-info pe-4">
                        <span class="h6">Notice</span>
                        <br>
                        <span>
                            헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 <button class="btn btn-sm btn-subpoint" onclick="window.open('https://kkn1125.github.io/contact')">버튼</button>을 클릭하여 메일보내기로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.
                        </span>
                    </blockquote>
                </p>`:'';
                let database = (useDB) => useDB.useDB?`
                    <div class="mt-3">
                        <div>
                            <span class="fs-4 fw-bold">Database 구현</span>
                        </div>    
                        <span class="tag">Databases : </span>
                        ${useDB.db.map(db=>`<span class="tag tag-subpoint">${db}</span>`).join(" ")}
                    </div>
                `:'';
                let mainContent = (content)=> content!==''?`<div>
                        ${content}
                    </div>`:`<p><span class="notice notice-danger">작성 중인 게시물입니다.</span></p>`;
                let parts = projects[post];
                let dateGap = new Date(new Date(parts.work.end) - new Date(parts.work.start)).getDate();
                let link = (link)=> link.link!=''?`
                    <div class="text-capitalize">
                        <a href="${link.link}" target="_blank">
                            📗<strong>${post} Project</strong> sample pages
                        </a>
                    </div>
                `:'';
                let github = (github)=> github.github!=''?`
                    <div class="text-capitalize">
                        <a href="${github.github}" target="_blank">
                            📗<strong>${post} Project</strong> github pages
                        </a>
                    </div>
                `:'';
                let subImages = (subImages)=> subImages.length>0?`<div class="my-3">
                ${subImages.map(([name, path])=>name!=''&&path!=''?`${name!=''?`<div class="fw-bold fs-5 text-capitalize mt-3">${name}</div>`:''}
                <div class="w-100">
                    <img class="w-100" src="${app.path+app.repoPath}assets/images/portfolio/${post}/${path}" alt="${path}"></div>`:'').join('\n')}
                </div>`:'';
                let movie = (movie) => movie!=''?`<div style="text-align: center;">
                    ${movie}
                </div>`:'';
                return `
                <div class="position-relative"
                style="filter: brightness(0.5); z-index:-1; max-height: calc(24rem + 3vw); overflow: hidden;">
                <img style="width: 100%; height: auto;" src="${app.path+app.repoPath}assets/images/portfolio/${post}/${parts.cover}" alt="">
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
    
                                ${mainContent(parts.content)}
    
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
        render: function(data, response){
            return `<section page="${response}">
                <div class="h5">about</div>
                <div class="row-div">
                    <div class="h6">이 사이트는</div>
                    <p>취미로 무언가를 만들어 내는 것을 좋아합니다. 자바스크립트로 SPA를 제작하는 것에 관심이 많습니다. 다양한 방법으로 시도하고 경험하며 자기계발을 합니다.</p>
                    <p>자바를 주 언어로 공부하고 있으며, 알고리즘, CS, 디자인 패턴 등의 내용을 위키와 블로그에 함께 기록하고있습니다.</p>
                    <p>블로그와 위키를 함께 관리하고 있으니 많은 관심 가져주시기를 바랍니다.</p>
                </div>
                <div class="row-div">
                    <div class="h6">다른 내용</div>
                    <p>
                        <a href="https://kkn1125.github.io">블로그</a>
                        <a href="https://kkn1125.github.io/wikimson">위키</a>
                    </p>
                </div>
            </section>`;
        }
    },
    '404': {
        render: function(data, response){
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
        render: function(hash){
            const pagelist = Object.keys(router).filter(page=>page!='404');
            const isStart = pagelist.indexOf(hash.slice(1));
            return `<div class="side-paging">
                <div>
                    <button class="btn" data-dir="prev"${isStart==0?' hidden':''}>
                        <i class="fas fa-chevron-left fa-2x"></i>
                    </button>
                    <button class="btn" data-dir="next"${isStart==pagelist.length-1?' hidden':''}>
                        <i class="fas fa-chevron-right fa-2x"></i>
                    </button>
                </div>
            </div>`;
        }
    },
    'menu': {
        render: function(){
            return `<div class="side-menu">
                <button class="menu"><i class="fas fa-bars fa-2x"></i></button>
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
        purpose: '커피 온라인 몰',
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
        link: 'https://devkims-on.herokuapp.com',
        github: '',
        cover: 'prj-1.png',
        subImages: [
            ['사이트 도식화','coffee.png'],
        ],
        movie: '<iframe width="696" height="392" src="https://www.youtube.com/embed/-8Zeu9oCVPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        useDB: true,
        db: ['product', 'cart', 'user', 'board'],
        mainLang: 'java',
        subLangs: ['html','css','javascript','mysql'],
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
            ['프로필','blog02.png'],
            ['블로그','blog03.png'],
            ['댓글','blog04.png'],
            ['미리보기','mockup01.png'],
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
            ['메인','mentees_main03.png'],
            ['로그인','mentees_signin.png'],
            ['댓글','mentees_program_detail_reply.png'],
            ['','mentees_program_detail_reply_done.png'],
            ['상세글','mentees_program_detail.png'],
            ['회원정보','mentees_mentees_full.png'],
            ['회원정보 설정','mentees_mentees_program_feedback.png'],
            ['회원정보 탈퇴','mentees_mentees_setting_out.png'],
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
            ['업데이트 내역 markdown → html','typer02.png'],
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
            ['Main','docu01.png'],
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
            ['Main','tuto01.png'],
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
            ['Sizing','penli02.png'],
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
};