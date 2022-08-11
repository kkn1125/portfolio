import * as posts from './PostMethods.js';
export {posts};

export const app = {
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
        comment: '풀스택을 지향하는 웹 개발자입니다. 새로운 기술에 관심이 많고 다양한 오류를 발생시키면서 여러 상황을 고려하는 습관을 가지고 노력하고 있습니다 😁',
    }
};

export const parseToHTML = (parseTarget) => {
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

export const tagLight = t=>`<span class="tag tag-light">${t}</span>`;