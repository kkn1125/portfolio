const U = `<span class="tag tag-info">U</span>`;
const A = `<span class="tag tag-success">A</span>`;

export const projectNarang = {
  title: "[TYPESCRIPT & SPRINGBOOT] Project Narang",
  purpose: "감정 케어 웹 서비스",
  work: {
    start: "2022-7-16",
    end: "2022-8-20",
  },
  content: `<div>
        <div class="mt-3">
            <span class="fs-5 fw-bold">
                dependencies
            </span>
        </div>
        <ol>
            <li>MongoDB</li>
            <li>Lombok</li>
            <li>Spring boot starter</li>
            <li>Spring security</li>
            <li>Json Web Token</li>
            <li>Jackson data-bind</li>
        </ol>
        <div class="mt-3">
            <span class="fs-5 fw-bold">
                lib, api
            </span>
        </div>
        <ol>
            <li>Suneditor.js</li>
            <li>face-api.js</li>
            <li>Naver papago api</li>
            <li>Axios</li>
            <li>Formik</li>
            <li>Material-UI</li>
        </ol>

        <div class="fs-4 mt-3 fw-bold">구분</div>
            ${U} 회원 전용
            ${A} 공용
            <ol>
                <li>메인페이지</li>
                <li>일기</li>
                <ol>
                    <li>CRUD ${A}</li>
                </ol>
                <li>댓글</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>좋아요</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>회원정보페이지</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>회원로그인, 가입</li>
                <ol>
                    <li>CRUD ${U}</li>
                </ol>
                <li>감정 그래프 조회 ${U}</li>
                <li>About 페이지 ${A}</li>
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
  authors: ["kimson", "ohoraming"],
  link: "",
  github: "https://github.com/kkn1125/narang",
  cover:
    "https://user-images.githubusercontent.com/71887242/184072130-d42ce18f-7b50-4403-a24e-1a5cadd95304.png",
  subImages: [
    [
      "메인",
      "https://user-images.githubusercontent.com/71887242/184072130-d42ce18f-7b50-4403-a24e-1a5cadd95304.png",
    ],
    [
      "로그인",
      "https://user-images.githubusercontent.com/71887242/184072756-eafab7f0-bf0a-40d7-95bb-97ff2a0f1dce.png",
    ],
    [
      "상세글 & 댓글",
      "https://user-images.githubusercontent.com/71887242/184073423-4dd4ae52-6cb0-4c4b-b72f-a344226fd7e0.png",
    ],
    [
      "회원정보",
      "https://user-images.githubusercontent.com/71887242/184073781-8e7ad143-59a8-4edd-8942-1714e4b4071b.png",
    ],
  ],
  movie: "",
  useDB: true,
  db: [
    "User",
    "Diary",
    "Product",
    "Like",
    "Emotion",
    "Cart",
    "Bill",
    "FaceImage",
    "Comment",
  ],
  mainLang: "java + typescript",
  subLangs: [
    "react",
    "mui",
    "formik",
    "axios",
    "mongodb",
    "spring boot",
    "face-api",
    "naver papago",
  ],
  tag: ["web service", "emotion", "face detecting"],
  category: ["springboot", "react", "typescript", "팀"],
  writedAt: "2022-08-11 14:23",
  isHeroku: false,
};
