import {app, parseToHTML} from '../../core/Module.js'

import * as modulePreview from '../../ModulesPreview.js';
import * as moduleEducation from '../../ModulesEducation.js';
import * as moduleTimeLine from '../../ModulesTimeLine.js';
import * as svg from '../../Svg.js';

export const resume = {
    render: function (data, response) {
        const prjList = [...Object.values(modulePreview)];
        const eduList = moduleEducation.eduList;
        const timeLineList = Object.values(moduleTimeLine);

        const cardGroupClasses = `card-group card-dv-1 card-dv-sm-2 card-dv-md-4`;
        const cardClasses = `card-content text-center skill`;

        return `<section page="${response}">
            <div class="h3 text-uppercase">resume</div>
            <div class="mt-5 resume w-flex flex-column flex-row-md">
                <img class="resume-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
                <span class="info-table">
                    <ul>
                        <li><span>name</span><span>김경남</span></li>
                        <li><span>age</span><span>${new Date().getFullYear()-1992}</span></li>
                        <li><span>email</span><span class="link-form" onclick="location.href='mailto:chaplet01@gmail.com'">chaplet01@gmail.com</span></li>
                        <li><span>github</span><span>kkn1125</span></li>
                        <li><span>blog</span><span"><a href="${app.kimson.blog}">kkn1125.github.io</a></span></li>
                    </ul>
                </span>
            </div>
            
            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">자기개발</span>
                </div>
                <div class="fs-7" style="line-height: 1.8;">
                    <div class="time-line-title fs-6">하루를 기어가더라도 뒤로가진 말자</div>
                    <p class="text-gray">
                        자기개발에 게을리 하지 않기 위해 깃허브 저장소나 기사, 대기업의 기술블로그, 회사에서 요구하는 사항 등을 보며 무엇이 부족한지 찾아 제 것으로 만들기 위해 노력하고 있습니다. 기술과 관련해 배운 것은 블로그에 정리, 기록하고 있으며 프로젝트는 이 페이지에서 등록, 관리하고 있습니다.
                    </p>
                    <p class="text-gray">
                        JSDoc의 문서화 기능이나 Vue의 컴포넌트 등을 직접 구현해보는 탐구 정신이 있고, 여러 방면으로 문제를 생각하려 노력합니다. 1일 1커밋을 목표로 현재도 많은 것을 보고 배우며 하루하루 앞으로 나아가고 있습니다.
                    </p>
                </div>
            </div>

            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">사용 스킬</span>
                </div>
                <div class="fs-5">Back-End</div>
                <div class="${cardGroupClasses}">
                    <div class="card">
                        <div class="${cardClasses}">
                            ${svg.java}
                            <span>Familiar</span>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="${cardClasses}">
                            ${svg.spring}
                            <span>Familiar</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fas fa-pepper-hot fs-1"></i>
                            <span>Familiar</span>
                        </div>
                    </div>
                </div>

                <div class="fs-5">Front-End</div>
                <div class="${cardGroupClasses}">
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-html5 fs-1"></i>
                            <span>Familiar</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-css3-alt fs-1"></i>
                            <span>Familiar</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-js-square fs-1"></i>
                            <span>Familiar</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-react fs-1"></i>
                            <span>Used</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-vuejs fs-1"></i>
                            <span>Used</span>
                        </div>
                    </div>
                </div>
                
                <div class="fs-5">Database</div>
                <div class="${cardGroupClasses}">
                    <div class="card">
                        <div class="${cardClasses}">
                            ${svg.mysql}
                            <span>Familiar</span>
                        </div>
                    </div>
                    <div class="card">
                        <div class="${cardClasses}">
                            <img style="width: 45px; height: 45px;" src="https://raw.githubusercontent.com/mybatis/logo/978369e60c3e4f2e4319d57388beb71e7d0955e0/logo-bird-ninja.svg" alt="mybatis logo">
                            <span>Used</span>
                        </div>
                    </div>
                </div>

                <div class="fs-5">DevOps</div>
                <div class="${cardGroupClasses}">
                    <div class="card">
                        <div class="${cardClasses}">
                            <i class="fab fa-github fs-1"></i>
                            <span>Familiar</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">프로젝트</span>
                </div>
                ${parseToHTML(prjList)}
            </div>

            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">학력</span>
                </div>
                ${parseToHTML(eduList)}
            </div>

            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">경력</span>
                </div>
                <ul class="mt-5">
                    ${parseToHTML(timeLineList)}
                </ul>
            </div>

        </section>`;
    }
}