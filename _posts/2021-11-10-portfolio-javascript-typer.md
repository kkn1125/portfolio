---
layout: post
title:  "[JAVASCRIPT] Typer 프로젝트"
description: "Typer 프로젝트"
image: "assets/images/portfolio/typer/typer01.png"
date:   2021-11-10 18:48:02 +09:00
categories: [개인, javascript]
tags: [typer, 한글, 타이핑효과]
author: [kimson]
hidden: false
published: true
# toc: true
---
<br>

### Typer 프로젝트

#### 개요

`타이퍼`는 한글을 입력하는 효과를 쉽게 만들어주는 기능입니다. 프론트에서 보여지는 밋밋한 텍스트를 동적으로 보여주기 위해 만들어졌습니다.

#### Used

Html
{:.badge.bg-success}
Css
{:.badge.bg-success}
Js
{:.badge.bg-success}

#### Design pattern

module pattern
{:.badge.bg-success}

<br>

#### 작업 기간

<span>2021.10.27 ~ 2021.11.5</span>
{:.badge.bg-info}
총 10일 소요 ( 주말 제외 )
{:.badge.bg-danger}

외국 개발자 분의 디자인 패턴을 보고 익혀 현재는 자유롭게 쓸 정도로 자주 쓰는 패턴입니다.

<br>

#### 디자인 패턴

공통
{:.badge.bg-primary}

<span>
   초기화 함수를 공통으로 가집니다.
</span>

Controller
{:.badge.bg-info}
← Model
{:.badge.bg-warning.text-dark}
← UI
{:.badge.bg-warning.text-dark}

<span>
   이벤트를 관리합니다. `Model`과 `UI`를 받아 `UI`를 대상으로 이벤트를 조정하며, `Model`의 메서드와 연결하여 기능을 조정합니다.
</span>

Model
{:.badge.bg-info}
← View
{:.badge.bg-warning.text-dark}

<span>
   데이터 처리를 담당합니다. `View`를 연결시켜 처리된 데이터를 `View`로 정보를 전달합니다.
</span>

View
{:.badge.bg-info}
← UI
{:.badge.bg-warning.text-dark}

<span>
   화면에 렌더되는 데이터를 처리합니다. `Model`에서 전달되는 데이터를 받아 `UI`에 보여지도록 처리합니다.
</span>

#### 주요 메서드

createTypingSource
{:.badge.bg-primary}

<span>
   타이핑 될 텍스트를 만듭니다. `getSeparate`와 `getTyping` 메서드를 실행합니다.
</span>

getSeparate
{:.badge.bg-primary}

<span>
   텍스트를 타이핑 단위(초성, 중성, 종성) 분해합니다. (영어, 특수문자 등은 판별되어 따로 분해됩니다.)
</span>

getTyping
{:.badge.bg-primary}

<span>
   타이핑 효과를 주기 위해 2차 배열로 변환되어 나누어집니다. `ex) 김 → ['ㄱ', '기', '김']`
</span>

<div></div>

#### MVC 모델 도식화

Controller → Model → View
{:.badge.bg-warning.text-dark}

> `Model`이나 `View`에서 상위 객체로 접근하기 위해 `callback`을 사용하기도 하였습니다.

<div></div>

<br>

#### 페이지 구성

##### 📑 업데이트 내역 markdown → html

![블로그]({{site.baseurl}}assets/images/portfolio/typer/typer02.png){:.w-100}

<br>

##### 📚 CDN

```html
<!-- latest v1.0.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kkn1125/typer@vv100/typer.css" integrity="sha384-72aQAReU+HRrgKRCBZ3h9JpFQmjl3vjb6bOeFdyCVDxJ/O3f3JQROWhfcLCcKbUd" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/gh/kkn1125/typer@vv100/typer.js" integrity="sha384-7Yty6xCpiwX7zzSEtcqCQZlrZ3rERd8hrWTTo9/Xa/iA5Tg/iqbJdnCngimPL/PF" crossorigin="anonymous"></script>
```

<br>

##### ✒️ 커스터마이징 옵션

```javascript
// latest v1.0.0
const typer = Typer.init({
    typer: {
        words: {
            innerTitle: ['메세지를 추가하세요.', '여러 개 가능합니다.'],
            box1: '입력 메세지가 하나라면 배열없이 문자열만 입력 가능합니다.'
        },
        custom: {
            test: {
                words: ['계속 변경될 수 있습니다.'],
                dataset: {
                    speed: 0.05,
                    delay: 1,
                    loop: true,
                    loopDelay: 1,
                    eraseMode: true,
                    eraseSpeed: 0.1,
                }
            },
            test2: {
                words: ['지금은 다른 이름'],
                dataset: {
                    speed: 0.05,
                    delay: 1,
                    loop: true,
                    loopDelay: 1,
                    eraseMode: true,
                    eraseSpeed: 0.1,
                    realTyping: true,
                }
            }
        },
        speed: 0.1,
        delay: 1,
        loop: true,
        loopDelay: 20,
        // start: 0.3,
        // eraseMode: true,
        eraseSpeed: 0.1,
        realTyping: false,
        style: {
            cursorBlink: 'horizontal'
        },
    }
});
```

-----

<br>

#### Link

[📗**Typer Project** github pages][docs]{:target="_blank"}

[docs]: https://kkn1125.github.io/typer/
