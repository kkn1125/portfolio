import dbUser from "../../../data/dbUser.js";

const U = `<span class="tag tag-info">U</span>`;
const A = `<span class="tag tag-success">A</span>`;

export const projectNarang = {
  title: "[SPRINGBOOT & (REACT + TYPESCRIPT)] Project Narang",
  purpose: "감정 케어 웹 서비스",
  work: {
    start: "2022-7-16",
    end: "2022-9-3",
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
            <li>Emotion</li>
            <li>AOS</li>
            <li>Chart.js</li>
            <li>htmle-react-parser</li>
            <li>jose</li>
            <li>Sentiment.js</li>
            <li>Yup</li>
            <li>js-sha</li>
            <li>prettier</li>
            <li>babel</li>
            <li>typscript</li>
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
            <span class="fw-bold fs-4">주요 서비스</span>
        </div>
        <div>
            <ol>
              <li>face-api를 이용한 유저 안면 인식 로그인</li>
              <li>일기 내용 감정 분석</li>
              <ol>
                <li>텍스트 한@:->영 번역 Naver Papago api</li>
                <li>텍스트 감정 분석 sentiment.js</li>
              </ol>
              <li>주 단위 그래프</li>
              <ol>
                <li>chart.js를 이용하여 주 단위 감정 데이터를 그래프로 출력</li>
              </ol>
            </ol>
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-4">ERD</span>
        </div>
        <div>
          <img src="https://user-images.githubusercontent.com/71887242/186116219-1740e0eb-f0cd-47a4-805d-44d7d258e721.png" alt="erd" style="width: 100%;" />
          <a href="https://nova-darkness-84c.notion.site/DB-3b192585505d4940bcb214fda45ce07e" title="DB 명세서 바로가기">DB 명세서</a>
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-4">API</span>
        </div>
        <div>
          <img src="https://user-images.githubusercontent.com/71887242/186116219-1740e0eb-f0cd-47a4-805d-44d7d258e721.png" alt="erd" style="width: 100%;" />
          <a href="https://nova-darkness-84c.notion.site/DB-3b192585505d4940bcb214fda45ce07e" title="DB 명세서 바로가기">DB 명세서</a>
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-4">LOGO</span>
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-5">Cover Image</span>
        </div>
        <div align="center">
        <img src="https://user-images.githubusercontent.com/71887242/187703475-d9c52cbd-747b-40d9-a730-a15adef3eafc.png" alt="main" />
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-5">favicon</span>
        </div>
        <div >
          <img src="https://user-images.githubusercontent.com/71887242/187655635-1305cec5-bdeb-432a-a640-e78ff717cbb4.png" alt="main" />
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-5">Full name logo</span>
        </div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187655823-35144d2f-aa9a-4d54-8911-35d740415478.png" alt="main" />
        </div>


        <div class="mt-3">
          <span class="fw-bold fs-5">Short name logo (color)</span>
        </div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187655882-5a5df268-3d4f-4f21-ad8d-6a455c130774.png" alt="main" />
        </div>

        <div class="mt-3">
          <span class="fw-bold fs-5">Short name logo (grayscale)</span>
        </div>
        <div style="background-color: #00000015; border-radius: 5px; margin-top: 20px; margin-bottom: 20px; padding: 1rem;">
          <img src="https://user-images.githubusercontent.com/71887242/187656021-998215e6-d0e6-4b78-86d2-b0dcd2637fa6.png" alt="main" />
        </div>

        <!-- <div class="mt-3">
          <span class="fw-bold fs-4">Database 명세서</span>
        </div>

        <div class="mt-3">
            <span class="fw-bold fs-5">User</span>
        </div>
        ${/* dbUser */""}
        ... 작성 중 
        -->
    </div>`,
  authors: ["kimson", "ohoraming"],
  // link: "https://narang.ml",
  github: "https://github.com/kkn1125/narang",
  cover:
    "https://user-images.githubusercontent.com/71887242/188372976-f2f77d3a-2d17-4bea-8be7-e787b7edb30c.png",
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
    [
      "Mock Image",
      "https://user-images.githubusercontent.com/71887242/187711500-a3a0262a-834c-4cdf-b6f9-f7c4cc6057b8.png",
    ],
  ],
  movie:
    "https://user-images.githubusercontent.com/71887242/187068070-8f8233ca-15d9-4e28-a62f-65799c1b1d0e.mp4",
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
  subLangs: ["react", "spring boot"],
  tag: ["web service", "text analyze", "face detecting"],
  category: ["springboot", "react", "typescript", "팀"],
  writedAt: "2022-09-05 14:49",
  isHeroku: false,
};
