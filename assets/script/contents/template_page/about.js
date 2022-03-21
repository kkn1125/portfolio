export const about = {
    render: function (data, response) {
        return `<section page="${response}">
            <div class="h3 text-uppercase">about</div>
            <div class="row-div">
                <div class="h6">이 사이트는</div>
                <p>활동 내용을 정리하고 주로 resume와 포트폴리오를 정리하는 페이지입니다.</p>
                <p>취미로 무언가를 만들어 내는 것을 좋아합니다. 자바스크립트로 SPA를 제작하는 것에 관심이 많습니다. 다양한 방법으로 시도하고 경험하며 자기개발을 합니다.</p>
                <p>자바를 주 언어로 공부하고 있으며, 알고리즘, CS, 디자인 패턴 등의 내용을 위키와 블로그에 함께 기록하고있습니다.</p>
                <p>블로그와 위키를 함께 관리하고 있으니 많은 관심 가져주시기를 바랍니다.</p>
            </div>
            <div class="row-div">
                <div class="h6">다른 내용</div>
                <p>
                    <a class="tag tag-info text-white" href="https://kkn1125.github.io">블로그</a>
                    <a class="tag tag-info text-white" href="https://kkn1125.github.io/wikimson">위키</a>
                </p>
            </div>
        </section>`;
    }
}