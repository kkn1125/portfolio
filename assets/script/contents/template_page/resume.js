import { app, parseToHTML, posts } from "../../core/Module.js";

import * as modulePreview from "../../ModulesPreview.js";
import * as moduleEducation from "../../ModulesEducation.js";
import { workExp as moduleWorkExp } from "../../ModulesWorkExp.js";
import { timeline as moduleTimeLine } from "../../ModulesTimeLine.js";
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
    const workExpList = moduleWorkExp;

    const cardGroupClasses = `card-group card-dv-1 card-dv-sm-2 card-dv-md-auto`;
    const cardClasses = `card-content text-center skill`;

    const backEnd = [
      {
        svg: svg.nodejs,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.fastify,
        skill: "used",
        color: "text-primary",
      },
      {
        svg: svg.expressjs,
        skill: "used",
        color: "text-primary",
      },
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
    ];

    const frontEnd = [
      // {
      //   svg: svg.html,
      //   skill: "familiar",
      //   color: "text-danger",
      // },
      // {
      //   svg: svg.css,
      //   skill: "familiar",
      //   color: "text-info",
      // },
      {
        svg: svg.javascript,
        skill: "familiar",
        color: "text-warning",
      },
      {
        svg: svg.typescript,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.react,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.mui,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.nextjs,
        skill: "familiar",
        color: "text-primary",
      },
      {
        svg: svg.gatsbyjs,
        skill: "used",
        color: "text-primary",
      },
      // {
      //   svg: svg.vue,
      //   skill: "used",
      //   color: "text-primary",
      // },
      {
        svg: svg.redux,
        skill: "used",
        color: "text-primary",
      },

      // {
      //   svg: svg.nuxtjs,
      //   skill: "used",
      //   color: "text-primary",
      // },

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
        svg: svg.mariadb,
        skill: "familiar",
        color: "text-info",
      },
      {
        svg: svg.mybatis,
        skill: "used",
      },
      {
        svg: svg.mongodb,
        skill: "familiar",
      },
      {
        svg: svg.graphql,
        skill: "used",
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
        svg: svg.docker,
        skill: "familiar",
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
        svg: svg.jwt,
        skill: "familiar",
        color: "#000000",
      },
      {
        svg: "https://next-auth.js.org/img/logo/logo-sm.png",
        skill: "used",
        color: "#5e464d",
      },
      {
        svg: svg.springsecurity,
        skill: "used",
        color: "#000000",
      },
    ];

    return `<section page="${response}">
            <div class="h3 text-uppercase text-center w-100" style="text-decoration: underline 1px double black; text-underline-offset: 0.5rem">resume</div>
            <div class="mt-5 resume w-flex flex-column flex-row-md">
                <img class="resume-avatar" src="${
                  location.origin + location.pathname
                }/assets/images/profile/profile.jpg" alt="profile">
                <span class="info-table">
                    <ul>
                        <li><span>name</span><span>김경남</span></li>
                        <!--<li><span>age</span><span>${
                          new Date().getFullYear() - 1992
                        }</span></li>-->
                        <li><span>email</span><span class="link-form" onclick="location.href='mailto:chaplet01@gmail.com'">chaplet01@gmail.com</span></li>
                        <li><span>github</span><span>
                          <a href="${app.kimson.github}">
                            kkn1125
                          </a>
                        </span></li>
                        <li><span>blog</span><span"><a href="${
                          app.kimson.blog
                        }">kkn1125.github.io</a></span></li>
                        <li><span>wiki</span><span"><a href="${
                          app.kimson.wiki
                        }">personal wiki</a></span></li>
                    </ul>
                </span>
            </div>
            
            <div class="mt-5 work-exp">
                <div class="end-words">
                    <span class="h6">자기개발</span>
                </div>
                <div class="fs-7" style="line-height: 1.8;">
                    <div class="time-line-title fs-6"></div>
                    <p class="text-gray fw-bold">
                      트러블 슈팅에 망설임이 없고 서비스 개선에 집중하는 개발자입니다.
                    </p>
                    <p class="text-gray blockquote">
                      <strong>풀 스택 개발자</strong>를 목표로 합니다.<br/>
                      <strong>문서화</strong>에 대한 이슈를 매우 관심 있게 생각합니다.<br/>
                      <strong>코드 리뷰</strong>와 정보 공유 문화를 지향합니다.<br/>
                      <strong>네트워크</strong>, 대량의 트래픽 처리과 부하분산을 위한 <strong>서버 아키텍처</strong>에 관심이 있습니다.
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
                  <span class="h6">경력 기술</span>
              </div>
              <ul class="mt-5">
                  ${parseToHTML(workExpList)}
              </ul>
            </div>

            <div class="mt-5 work-exp">
              <div class="end-words">
                  <span class="h6">경력</span>
              </div>
              <ul class="mt-5">
                  ${parseToHTML(timeLineList)}
              </ul>
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

            <div style="margin-top:2rem;margin-bottom: 2rem;"></div>

        </section>`;
  },
};
