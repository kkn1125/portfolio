'use strict';

const app = {
    appVersion: 'v0.1.0',
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