export const blog = {
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
}