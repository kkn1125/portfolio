---
layout: post
title:  "[SPRINGBOOT] Mentees 프로젝트"
description: "Mentees 프로젝트"
image: "assets/images/portfolio/mentees/mentees_main.png"
date:   2021-09-28 20:46:20 +09:00
categories: [개인, springboot]
tags: [mentor, mentee, springboot]
author: [kimson]
hidden: false
published: true
# toc: true
---
<br>

### 블로그

#### Used

Html
{:.badge.bg-success}
Css
{:.badge.bg-success}
Js
{:.badge.bg-success}
Java
{:.badge.bg-success}
MySql
{:.badge.bg-success}
Spring Boot
{:.badge.bg-success}
Mybatis
{:.badge.bg-success}

<br>

##### dependencies

1. tiles 3.0.8
2. lombok
3. springboot-starter
5. Multipartfile

##### lib, api

1. suneditor.js

<br>

#### 작업 기간

<span>2021.9.15 ~ 2021.9.28</span>
{:.badge.bg-info}
총 9일 소요 ( 주말 제외 )
{:.badge.bg-danger}

`bootstrap 5.0.2v`을 사용하여 `mock up` 및 데이터베이스 구성, crud 구현까지 7일 소요.

<br>

#### 데이터베이스 구성

comment
{:.badge.bg-primary}

<span>
   댓글 CRUD 및 계층형 댓글 DB
</span>

feed
{:.badge.bg-primary}

<span>
   피드백의 좋아요 관리 DB
</span>

feedback
{:.badge.bg-primary}

<span>
   게시글 ( 서로 공유하는 내용 ) 관리 DB
</span>

likes
{:.badge.bg-primary}

<span>
   프로그램 ( 강연/세미나 )의 좋아요 관리 DB
</span>

member
{:.badge.bg-primary}

<span>
   유저를 관리 DB
</span>

product
{:.badge.bg-primary}

<span>
   프로그램 ( 강연/세미나 ) 관리 DB
</span>

recommend
{:.badge.bg-primary}

<span>
   유저 간의 추천 관리 DB
</span>

reserve
{:.badge.bg-primary}

<span>
   프로그램 ( 강연/세미나 ) 신청 DB
</span>

<div></div>

product -> comment
{:.badge.bg-warning.text-dark}

`product`에 댓글 기능 구현 ( 계층형 댓글 )

<div></div>

<br>

#### 페이지 구성

##### 📑 메인

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_main03.png){:.w-100}

<br>

##### 📚 로그인

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_signin.png){:.w-100}

<br>

##### ✒️ 댓글

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_program_detail_reply.png){:.w-100}

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_program_detail_reply_done.png){:.w-100}

<br>

##### 📃 상세글

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_program_detail.png){:.w-100}

<br>

##### ⚙ 회원정보

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_mentees_full.png){:.w-100}

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_mentees_program_feedback.png){:.w-100}

<br>

##### ⚙ 회원정보 설정

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_mentees_setting.png){:.w-100}

<br>

##### 🚪 회원정보 탈퇴

![블로그]({{site.baseurl}}assets/images/portfolio/mentees/mentees_mentees_setting_out.png){:.w-100}

##### 구분

<div class="mb-3">

<span class="badge bg-danger">
M
</span>
관리자 전용

<span class="badge bg-primary">
A
</span>
공용

</div>

1. 메인페이지 <span class="badge bg-primary">A</span>
2. 프로그램 <span class="badge bg-primary">A</span>
3. 피드백 <span class="badge bg-primary">A</span>
4. 댓글 <span class="badge bg-primary">A</span>

<br>

> 내용 추가 중입니다.

<br>

-----

<br>

> <span style="font-size: 1.5rem; font-weight: 700; color: black;">주의 사항</span>
> 
> 헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 현재 페이지의 메인으로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.
> 
> [메일발송하기]({{site.baseurl}}about/#contact)

<br>

#### Link

[📗**Mentees Project** heroku server][blog]{:target="_blank"}

[blog]: https://menteesprj.herokuapp.com/
