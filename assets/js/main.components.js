'use strict';

const title = 'portfolio : kimson';

const projects = {
    coffeecong: {
        title: '[JSP] 커피 온라인 몰',
        purpose: '커피 온라인 몰',
        work: {
            start: '2021-3-24',
            end: '2021-4-14',
        },
        authors: ['kimson'],
        link: 'https://devkims-on.herokuapp.com',
        github: '',
        img: 'coffee/prj-1.png',
        useDB: true,
        db: ['product', 'cart', 'user', 'board'],
        mainLang: 'java',
        subLangs: ['html','css','javascript','mysql'],
        tag: ['coffee', 'jsp', 'onlinemall'],
        category: ['jsp', '학원'],
        writedAt: '2021-09-02 03:58',
    },
    blog: {
        title: '[SPRING] 개인 블로그',
        purpose: '개인 블로그',
        work: {
            start: '2021-6-24',
            end: '2021-7-4',
        },
        authors: ['kimson'],
        link: 'https://devkimson.herokuapp.com/home',
        github: '',
        img: 'blog/blog01.png',
        useDB: true,
        db: ['comment', 'board', 'user'],
        mainLang: 'java',
        subLangs: ['html', 'css', 'javascript', 'java', 'mysql', 'spring', 'google login'],
        tag: ['blog', 'spring'],
        category: ['spring', '개인'],
        writedAt: '2021-09-03 11:30',
    },
    mentees: {
        title: '[SPRINGBOOT] Mentees 프로젝트',
        purpose: '멘티들이 모여 만드는 성장 커뮤니티',
        work: {
            start: '2021-9-15',
            end: '2021-9-28',
        },
        authors: ['kimson'],
        link: 'https://menteesprj.herokuapp.com',
        github: '',
        img: 'mentees/mentees_main.png',
        useDB: true,
        db: ['comment', 'feed', 'feedback', 'likes', 'member', 'product', 'recommend', 'reserve'],
        mainLang: 'java',
        subLangs: ['html', 'css', 'javascript', 'java', 'mysql', 'spring boot', 'mybatis'],
        tag: ['mentee', 'mentor', 'springboot'],
        category: ['springboot', '개인'],
        writedAt: '2021-09-28 11:46',
    },
    typer: {
        title: '[JAVASCRIPT] Typer 프로젝트',
        purpose: '한글과 특수문자 등을 타자 효과로 구현해주는 어플리케이션',
        work: {
            start: '2021-10-27',
            end: '2021-11-5',
        },
        authors: ['kimson'],
        link: 'https://kkn1125.github.io/typer/',
        github: 'https://github.com/kkn1125/typer',
        img: 'typer/typer01.png',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['typer', '타이핑효과', '한글'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-10 09:48',
    },
    mkDocumentifyJS: {
        title: '[JAVASCRIPT] Documentify 프로젝트',
        purpose: '자바스크립트 문서화 어플리케이션',
        work: {
            start: '2021-10-1',
            end: '2021-11-11',
        },
        authors: ['kimson', 'ohoraming'],
        link: 'https://kkn1125.github.io/mkDocumentifyJS/',
        github: 'https://github.com/kkn1125/mkDocumentifyJS',
        img: 'docu/docu01.png',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['documentify', '문서화'],
        category: ['javascript', '공동'],
        writedAt: '2021-11-23 14:55',
    },
    tutorial: {
        title: '[JAVASCRIPT] Tutorial',
        purpose: '튜토리얼이 요구되는 웹을 위한 어플리케이션',
        work: {
            start: '2021-10-25',
            end: '2021-11-9',
        },
        authors: ['kimson'],
        link: 'https://kkn1125.github.io/tutorial/',
        github: 'https://github.com/kkn1125/tutorial',
        img: 'tuto/tuto01.png',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['tutorial', '웹 튜토리얼'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-23 14:55',
    },
    penli: {
        title: '[CSS] Penli 프로젝트',
        purpose: 'CSS를 편리하게 "Penli"',
        work: {
            start: '2021-11-14',
            end: '2021-11-19',
        },
        authors: ['kimson'],
        link: '',
        github: '',
        img: 'penli/penli02.png',
        useDB: false,
        db: [],
        mainLang: 'javascript',
        subLangs: ['html', 'css', 'javascript'],
        tag: ['css'],
        category: ['javascript', '개인'],
        writedAt: '2021-11-22 22:31:45',
    },
};

const theme = {
    home: {
        render: () => {
            return `
                <section class="bg-light position-relative p-2" style="z-index: 1500">
                    <button class="btn text-dark btn-focus-gray" data-target="#lsb">
                        <i class="fas fa-bars"></i> Portfolio
                    </button>
                    <span>
                        <a class="nav-link" href="${app.path+app.repoPath}">home</a>
                    </span>
                </section>
                <div class="main">
                    <aside id="lsb" class="side-bar built-in hide" data-side-bar="left">
                        <div class="p-5 border flex-basis-100">
                            <div class="position-static position-sticky-sm" style="top: 111.375px;">
                                <div class="text-center">
                                    <span class="rounded-circle w-inline-block" style="height: 10em; width: 10em; background-image: url(${app.kimson.avatar}); background-size: cover;">
                                    </span>
                                    <div class="brand fw-bold">${app.authors.join(' | ')}</div>
                                    <p class="fs-7 text-muted">
                                        ${app.kimson.comment}
                                    </p>
                                </div>
                                <div class="hr"></div>
                                <div class="menu-title text-uppercase mb-5 text-muted">
                                    menu
                                </div>
                                <ul class="list-group">
                                    <li class="list-item">
                                        <a href="${app.kimson.profile}">Profile</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.blog}" target="_blank">Blog</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.github}" target="_blank">Github</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.contact}" target="_blank">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <main>

                    </main>
                </div>
            `;
        }
    },
    post: {
        render: () => {
            return `
                <section class="bg-light position-relative p-2" style="z-index: 1500">
                    <button class="btn text-dark btn-focus-gray" data-target="#lsb">
                        <i class="fas fa-bars"></i> Portfolio
                    </button>
                    <span>
                        <a class="nav-link" href="${app.path+app.repoPath}">home</a>
                    </span>
                </section>
                <div class="main">
                    <aside id="lsb" class="side-bar built-in hide" data-side-bar="left">
                        <div class="p-5 border flex-basis-100">
                            <div class="position-static position-sticky-sm" style="top: 111.375px;">
                                <div class="text-center">
                                    <span class="rounded-circle w-inline-block" style="height: 10em; width: 10em; background-image: url(${app.kimson.avatar}); background-size: cover;">
                                    </span>
                                    <div class="brand fw-bold">${app.authors.join(' | ')}</div>
                                    <p class="fs-7 text-muted">
                                        ${app.kimson.comment}
                                    </p>
                                </div>
                                <div class="hr"></div>
                                <div class="menu-title text-uppercase mb-5 text-muted">
                                    menu
                                </div>
                                <ul class="list-group">
                                    <li class="list-item">
                                        <a href="${app.kimson.profile}">Profile</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.blog}" target="_blank">Blog</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.github}" target="_blank">Github</a>
                                    </li>
                                    <li class="list-item">
                                        <a href="${app.kimson.contact}" target="_blank">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <main class="py-5 flex-shrink-0">
            
                    </main>
                </div>
            `;
        }
    }
}

const generator = {
    darkModeBtn: {
        render: ()=>{
            return `<label for="mode" id="mtWrap" class="on"><span><i class="far fa-sun"></i></span></label>`;
        }
    },
    container: {
        type: (type) => theme[type]
    },
    post: {
        render: (post)=>{
            let parts = projects[post];
            let dateGap = new Date(new Date(parts.work.end) - new Date(parts.work.start)).getDate();
            return `
            <div class="position-relative"
            style="filter: brightness(0.5); top: -3rem; z-index:-1; max-height: 30rem; overflow: hidden;">
            <img style="width: 100%; height: auto;" src="assets/images/portfolio/${parts.img}" alt="">
                </div>
                <div class="fence" style="position: relative; top: -14rem;">
                    <article class="post h-entry" itemscope="" itemtype="http://schema.org/BlogPosting">

                        <header class="post-header py-3">
                            <div class="h3">🙋‍♂️${parts.title}</div>
                            <p class="post-meta"><time class="time">
                                    ${parts.writedAt}
                                </time>•
                                <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                    <span class="p-author h-card" itemprop="name">${parts.authors.join(' | ')}</span></span></p>

                            <!-- 카테고리 -->

                            <div><span class="tag text-white">categories :</span>


                                ${parts.category.map(t=>`<span class="tag tag-success">${t}</span>`).join(' ')}

                            </div>


                            <!-- 태그 -->

                            <div><span class="tag text-white">tags :</span>


                                ${parts.tag.map(t=>`<span class="tag tag-info">${t}</span>`).join(' ')}

                            </div>

                        </header>

                        <div class="">
                            <div class="h5">${post}</div>

                            <div class="h6"><a href="#개요" class="linkpop">🔗</a>개요</div>

                            <p>${parts.purpose}</p>

                            <div class="h6">Used</div>

                            <p>
                                <span class="tag tag-light">main : </span><span class="tag tag-info">${parts.mainLang}</span>
                                <br>
                                <span class="tag tag-light">sub : </span>${parts.subLangs.map(t=>`<span
                                    class="tag tag-info">${t}</span>`).join(' ')}
                            </p>

                            <div class="h6">작업 기간</div>

                            <p class="tag tag-info"><span>${parts.work.start} ~ ${parts.work.end}</span></p>
                            <p class="tag tag-danger">총 ${dateGap-parseInt((dateGap/7)*2)}일 소요 ( 주말 제외 )</p>

                            <p>${parts.content??'no content'}</p>

                            <p><br></p>


                            <p class="text-capitalize"><a href="${parts.link}" target="_blank">📗<strong>${post} Project</strong>
                                    github pages</a></p>

                        </div>

                    </article>

                </div>
            `;
        }
    },
    cardGroup: {
        render: ()=>{
            return `
                <div class="sr"></div>

                <div class="fence-full">
                    <div class="card-group card-light card-dv-1 card-dv-sm-2 card-dv-md-3 card-dv-lg-4 card-pd-0 justify-content-around" style="--gutter-x: 3rem; --gutter-y: 3rem;"></div>
                </div>
            `;
        }
    },
    card: {
        render: ({title, purpose, work, authors, link, img, writedAt, mainLang, tag}, prjname) => {
            return `
                <div class="card bg-opacity-0" style="position: relative; --card-padding: 0; width: 20rem;">
                    
                    <div class="back h-100 w-100 p-5" style="border-radius: inherit;">
                        <div class="card-title text-trunc"><a href="${link}" target="_blank" title="${title==''?'No title':title}">${title==''?'No title':title}</a></div>
                        <div class="card-content">
                            <div class="text-muted fs-7">${purpose}</div>
                            <div class="card-body">
                                <div class="link">
                                    <buttton class="btn btn-sm btn-success" onclick="location.href='?page=post&post=${prjname}'">
                                        <i class="fas fa-search"></i>
                                        detail
                                    </buttton>
                                </div>
                                <div>
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
                            <div>
                                <span class="tag">tags</span>
                                ${tag.map(t=>`<span class="tag tag-light">${t}</span>`).join(' ')}
                            </div>
                        </div>
                    </div>

                    <div class="front h-100 w-100 position-absolute top-0 start-0 back-filp" style="background-image: url('assets/images/portfolio/${img}'); background-size: cover; background-position: top; border-radius: inherit;"></div>
                </div>
            `;
        }
    },
    footer: {
        render: () => {
            return `
                <footer class="footer bg-light p-3 w-flex justify-content-between">
                    <div class="brand fw-bold">
                        <a href="#">Portfolio</a>
                    </div>
                    <div class="fs-7">
                        <span>copyright author kimson</span>
                        <span class="vr"></span>
                        <span>${new Date().getFullYear()}</span>
                    </div>
                </footer>
            `;
        }
    },
};