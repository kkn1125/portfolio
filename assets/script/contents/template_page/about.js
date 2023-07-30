export const about = {
  render: function (data, response) {
    return `<section page="${response}">
            <div class="h3 text-uppercase">about</div>
            <div class="row-div">
                <div class="h6">이 사이트는</div>
                <p>주로 resume와 포트폴리오를 올리는 페이지입니다.</p>
                <p>풀스택을 지향하며 다양한 기술에 관심이 많으며 새로운 기술이나 방식에 도전하며, 기존 서비스, 기능을 직접 제작해보면서 익히는 것을 선호합니다.</p>
                <p>반복되는 업무를 가급적 자동화하기 위해 자체 개발하여 적용하기도 합니다.</p>
                <p>즐기면서 개발하는 것을 지향하며 넓게 보는 시각을 가지기 위해 자기개발을 꾸준히 하고 있습니다 😁</p>
            </div>
            <div class="row-div">
                <div class="h6">둘러보기</div>
                <p>
                    <a class="tag tag-info text-white" href="https://kkn1125.github.io">블로그</a>
                    <a class="tag tag-info text-white" href="https://kkn1125.github.io/wikimson">위키</a>
                </p>
            </div>
        </section>`;
  },
};
