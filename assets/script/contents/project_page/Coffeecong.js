export const coffeecong = {
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
}