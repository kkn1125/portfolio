---
layout: post
title:  "[JSP] 커피 온라인 몰"
description: "커피 온라인 몰"
image: "assets/images/portfolio/coffee/prj-1.png"
date:   2021-09-02 12:58:51 +09:00
categories: [학원, jsp]
tags: [jsp, onlinemall, coffee]
author: [kimson]
hidden: false
published: true
# toc: true
---
<br>

### 커피 온라인 몰

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

<br>

##### libs

1. apache tomcat 9.0.43
2. mail
3. mysql connector

<br>

#### 작업 기간

<span>2021.3.24 ~ 2021.4.14</span>
{:.badge.bg-info}
총 22일 소요
{:.badge.bg-danger}

<br>

#### 데이터베이스 구성

product
{:.badge.bg-primary}
cart
{:.badge.bg-primary}
user
{:.badge.bg-primary}
board
{:.badge.bg-primary}

<div></div>

user -> board
{:.badge.bg-warning.text-dark}

`board`에 `user`의 `id`를 `board`의 `foreign key`로 지정

<div></div>

user -> product
{:.badge.bg-warning.text-dark}

<div></div>

user -> cart - > product
{:.badge.bg-warning.text-dark}

<br>

#### 페이지 구성

![커피]({{site.baseurl}}assets/images/portfolio/coffee/coffee.png){:.w-100}

##### 구분

<div class="mb-3">

<span class="badge bg-danger">
M
</span>
관리자 전용

<span class="badge bg-info">
U
</span>
회원 전용

<span class="badge bg-primary">
A
</span>
공용

</div>

1. 메인페이지
2. 상품
   1. 등록 <span class="badge bg-danger">M</span>
   2. 수정 <span class="badge bg-danger">M</span>
   3. 삭제 <span class="badge bg-danger">M</span>
   4. 읽기 <span class="badge bg-primary">A</span>
3. 게시글 `( CRUD )` <span class="badge bg-primary">A</span>
4. 장바구니 `( CRUD )` <span class="badge bg-primary">A</span>
5. 회원 `( CRUD )` <span class="badge bg-info">U</span>
   1. 계정찾기 - Ajax
6. 관리자 페이지 `( CRUD )` <span class="badge bg-danger">M</span>

<br>

#### 시연영상

<div class="iframebox">
<iframe src="https://www.youtube.com/embed/-8Zeu9oCVPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

총 24분 43초 분량입니다.

아래에는 커피 온라인몰 (이하 '커피콩')은 herokuapp을 이용하여 제공되고 있습니다.

<br>


-----

<br>

> <span style="font-size: 1.5rem; font-weight: 700; color: black;">주의 사항</span>
> 
> 헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 현재 페이지의 메인으로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.

<br>
<br>

#### Link

[☕**커피 온라인 몰** heroku server][cfs]{:target="_blank"}

[cfs]: https://devkims-on.herokuapp.com/main.me
