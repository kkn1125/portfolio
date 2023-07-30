export const mentees = {
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
    // link: 'https://menteesprj.herokuapp.com',
    github: 'https://github.com/kkn1125/mentees',
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
}