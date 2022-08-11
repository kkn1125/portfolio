import { app, parseToHTML, posts } from "../../core/Module.js";

import * as modulePreview from "../../ModulesPreview.js";
import * as moduleEducation from "../../ModulesEducation.js";
import {timeline as moduleTimeLine} from "../../ModulesTimeLine.js";
import * as svg from "../../Svg.js";

export const resume = {
  render: function (data, response) {
    const prjList = [
      ...Object.values(modulePreview).sort((p, c) => {
        return p.info.order - c.info.order;
      }),
    ];
    const eduList = moduleEducation.eduList;
    const timeLineList = moduleTimeLine;

    const cardGroupClasses = `card-group card-dv-1 card-dv-sm-2 card-dv-md-10`;
    const cardClasses = `card-content text-center skill`;

    const backEnd = [
      {
        svg: svg.django,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.python,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.java,
        skill: "familiar",
        color: "text-danger",
      },
      {
        svg: svg.spring,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.springboot,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.lombok,
        skill: "familiar",
        color: "text-danger",
      },
      {
        svg: svg.nodejs,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.expressjs,
        skill: "used",
        color: "text-primary",
      },
    ];

    const frontEnd = [
      {
        svg: svg.html,
        skill: "familiar",
        color: "text-danger",
      },
      {
        svg: svg.css,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.javascript,
        skill: "familiar",
        color: "text-warning",
      },
      {
        svg: svg.react,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.vue,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.redux,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.nextjs,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.nuxtjs,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.gatsbyjs,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.typescript,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.mui,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.antd,
        skill: "used",
        color: "text-primary",
      },
    ];

    const db = [
      {
        svg: svg.mysql,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.mybatis,
        skill: "used",
      },
      {
        svg: svg.graphql,
        skill: "used",
      },
      {
        svg: svg.mongodb,
        skill: "familiar",
      },
    ];

    const socketMedia = [
      {
        svg: svg.socketio,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.ffmpeg,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.webRtc,
        skill: "familiar",
        color: "text-primary",
      },
    ];

    const devops = [
      {
        svg: svg.github,
        skill: "familiar",
        color: "#181717",
      },
      {
        svg: svg.gitlab,
        skill: "used",
        color: "text-subpoint",
      },
      {
        svg: svg.npm,
        skill: "familiar",
        color: "text-subpoint",
      },
      {
        svg: svg.yarn,
        skill: "familiar",
        color: "text-subpoint",
      },
      {
        svg: svg.apacheMaven,
        skill: "used",
        color: "text-subpoint",
      },
      {
        svg: svg.chocolatey,
        skill: "familiar",
        color: "text-subpoint",
      },
      {
        svg: svg.docker,
        skill: "used",
        color: "text-subpoint",
      },
    ];

    const blockChain = [
      {
        svg: svg.web3js,
        skill: "used",
        color: "text-subpoint",
      },
      {
        svg: svg.blockchain,
        skill: "used",
        color: "text-subpoint",
      },
      {
        svg: svg.ipfs,
        skill: "used",
        color: "text-subpoint",
      },
      {
        svg: "Metamask",
        skill: "used",
        color: "#fb542b",
      },
      {
        svg: "Ganache.js",
        skill: "used",
        color: "#e4a663",
      },
      {
        svg: "Truffle.js",
        skill: "used",
        color: "#5e464d",
      },
    ];

    const secure = [
      {
        svg: "https://next-auth.js.org/img/logo/logo-sm.png",
        skill: "familiar",
        color: "#5e464d",
      },
      {
        svg: svg.jwt,
        skill: "used",
        color: "#000000",
      },
      {
        svg: svg.springsecurity,
        skill: "used",
        color: "#000000",
      },
    ];

    return `<section page="${response}">
            <div class="h3 text-uppercase">resume</div>
            <div class="mt-5 resume w-flex flex-column flex-row-md">
                <img class="resume-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
                <span class="info-table">
                    <ul>
                        <li><span>name</span><span>김경남</span></li>
                        <li><span>age</span><span>${
                          new Date().getFullYear() - 1992
                        }</span></li>
                        <li><span>email</span><span class="link-form" onclick="location.href='mailto:chaplet01@gmail.com'">chaplet01@gmail.com</span></li>
                        <li><span>github</span><span>kkn1125</span></li>
                        <li><span>blog</span><span"><a href="${
                          app.kimson.blog
                        }">kkn1125.github.io</a></span></li>
                    </ul>
                </span>
            </div>
            
            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">자기계발</span>
                </div>
                <div class="fs-7" style="line-height: 1.8;">
                    <div class="time-line-title fs-6"></div>
                    <p class="text-gray">
                        자기계발과 문서화에 많은 관심을 가지고 있습니다. 입문은 웹 개발자가 되기 위해 3개월 과정 학원을 다니고, 현재까지 익힌 기술은 혼자 독학하여 얻은 기술과 직장에서 배운 스킬 입니다. 백엔드/블록체인 팀에서 요구하는 대부분의 기술이 처음 접하는 기술이었으며 단기간 익혀 프로젝트 UI부분을 생성하였으며 백엔드 영역 또한 병행해야 하는 팀구조 였기 때문에 풀스택을 접했던 경험이 있습니다.
                    </p>
                    <p class="text-gray">
                        현재는 Java, React, Typescript, Spring boot, python, Django를 사용하며 풀스택을 지향하고 있습니다.
                    </p>
                </div>
            </div>

            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">사용 스킬</span>
                </div>
                <div class="fs-5">Back-End</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(backEnd, cardClasses)}
                </div>

                <div class="fs-5">Front-End</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(frontEnd, cardClasses)}
                </div>
                
                <div class="fs-5">Database</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(db, cardClasses)}
                </div>
                
                <div class="fs-5">Socket & WebRTC & Media</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(socketMedia, cardClasses)}
                </div>

                <div class="fs-5">DevOps</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(devops, cardClasses)}
                </div>

                <div class="fs-5">Block chain & Metamask</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(blockChain, cardClasses)}
                </div>

                <div class="fs-5">Secure</div>
                <div class="${cardGroupClasses}">
                    ${posts.cardset(secure, cardClasses)}
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
  },
};
