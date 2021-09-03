---
layout: post
title:  "[SPRING] 개인 블로그"
description: "개인 블로그"
image: "assets/images/portfolio/blog/blog01.png"
date:   2021-09-03 20:30:21 +09:00
categories: [개인, spring]
tags: [blog, spring]
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
Spring
{:.badge.bg-success}
Google login
{:.badge.bg-success}

<br>

##### dependencies

1. tiles 3.0.8
2. lombok
3. springweb-mvc
4. jdbc
5. fileupload

##### lib, api

1. google login
2. particle.js
3. suneditor.js

<br>

#### 작업 기간

<span>2021.6.24 ~ 2021.7.4</span>
{:.badge.bg-info}
총 11일 소요
{:.badge.bg-danger}

`bootstrap 5.0.1v`을 사용하여 `mock up` 및 데이터베이스 구성, crud 구현까지 11일 소요되어 1.0.0v로 첫 배포하였습니다. 사이트맵 등록 이후 쭉 업데이트 해왔으며, 8월 3일 까지 운영하다가 현재는 [깃허브 블로그](https://kkn1125.github.io/)를 운영 중입니다.

<br>

#### 데이터베이스 구성

comment
{:.badge.bg-primary}
board
{:.badge.bg-primary}
user
{:.badge.bg-primary}

<div></div>

board -> comment
{:.badge.bg-warning.text-dark}

`board`에 댓글 기능 구현 ( 계층형 x )

<div></div>

<br>

#### 페이지 구성

##### 📑 프로필

![블로그]({{site.baseurl}}assets/images/portfolio/blog/blog02.png){:.w-100}

<br>

##### 📚 블로그

![블로그]({{site.baseurl}}assets/images/portfolio/blog/blog03.png){:.w-100}

<br>

##### ✒️ 댓글

![블로그]({{site.baseurl}}assets/images/portfolio/blog/blog04.png){:.w-100}

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

1. 메인페이지
2. 게시글 
   1. 읽기 <span class="badge bg-primary">A</span>
   2. 쓰기 <span class="badge bg-danger">M</span>
   3. 수정 <span class="badge bg-danger">M</span>
   4. 삭제 <span class="badge bg-danger">M</span>
3. 댓글 `( CRUD )` <span class="badge bg-primary">A</span>

<br>

#### 미리보기

![]({{site.baseurl}}assets/images/portfolio/blog/mockup01.png){:.w-100}

-----

<br>

> <span style="font-size: 1.5rem; font-weight: 700; color: black;">주의 사항</span>
> 
> 헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 현재 페이지의 메인으로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.

<br>
<br>

#### Link

[📗**개인 블로그** heroku server][blog]{:target="_blank"}

[blog]: https://devkimson.herokuapp.com/home
