---
layout: page
title: About
permalink: /about/
---

![배경]({{site.baseurl}}assets/images/covers/about.png){:.w-100}

웹개발을 공부하는 예비개발자입니다. 3월 초 부터 4월 중순까지 `JAVA`학원을 다니고 `JSP`로 커피 온라인 쇼핑몰을 만들었습니다. 6월 부터 `Spring`을 공부하며 개인 블로그를 `Spring`으로 구현하여 `Herokuapp`(이하 "헤로쿠")을 통해 배포까지 한 바 있습니다.

이후 헤로쿠의 이용제한시간으로 인해 부득이하게 `Github Page`를 만들어 현재까지 운영 중입니다. [Blog 바로가기](https://kkn1125.github.io/ 'devkimson의 개인 블로그'){:target="_blank"}

이 페이지는 포트폴리오를 등재하는 공간이며, 마무리가 되지 못한 프로젝트들도 같이 포함되어 올립니

<br>

# Skill

<table class="table table-dark" data-select="false">
    <tbody>
        <tr>
            <td>
                <span class="text-capitalize skill">html</span>
            </td>
            <td>
                <span data-value="95"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">css</span>
            </td>
            <td>
                <span data-value="75"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">javascript</span>
            </td>
            <td>
                <span data-value="82"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">java</span>
            </td>
            <td>
                <span data-value="75"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">mysql</span>
            </td>
            <td>
                <span data-value="65"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">Maven</span>
            </td>
            <td>
                <span data-value="43"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">Python</span>
            </td>
            <td>
                <span data-value="33"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">react</span>
            </td>
            <td>
                <span data-value="25"></span>
            </td>
        </tr>
        <tr>
            <td>
                <span class="text-capitalize skill">restful api</span>
            </td>
            <td>
                <span data-value="43"></span>
            </td>
        </tr>
    </tbody>
</table>

<br>

# Contact

<div class="text-dark p-5" style="background-color: var(--bs-gray-dark)">
    <div class="row g-2 mb-3">
        <div class="col-md">
            <div class="form-floating">
                <input type="email" name="email" class="form-control rounded-0" id="email" placeholder="name@example.com" required>
                <label for="email">이메일</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating">
                <select class="form-select rounded-0" name="type" id="type" aria-label="Floating label select example" required>
                    <option selected>선택해주세요</option>
                    <option value="1">질문</option>
                    <option value="2">제안</option>
                </select>
                <label for="type">메일 유형</label>
            </div>
        </div>
    </div>
    <div class="row g-2 mb-3">
        <div class="col-md">
            <div class="form-floating">
                <input type="text" name="name" class="form-control rounded-0" id="name" placeholder="name@example.com" required>
                <label for="name">성함</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating">
                <input type="text" name="phone" class="form-control rounded-0" id="phone" placeholder="01012345678">
                <label for="phone">연락처 (01012345678)</label>
            </div>
        </div>
    </div>
    <div class="form-floating">
        <textarea class="form-control rounded-0" placeholder="Leave a comment here" name="message" id="message" style="height: 10rem"></textarea>
        <label for="message">적으실 내용</label>
    </div>
    <button id="sendMail" class="mt-3 btn btn-lg btn-outline-success rounded-0" type="button">전송</button>
</div>