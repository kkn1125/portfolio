import { app } from "../core/Module.js";

export const getImgSrc = function (parent, path) {
  return path.match(/(http|https)/gim)
    ? path
    : `${app.path + app.repoPath}assets/images/portfolio/${parent}/${path}`;
};

export const notice = (isHeroku) =>
  isHeroku
    ? `<p>
<blockquote class="blockquote blockquote-info pe-4">
    <span class="h6">Notice</span>
    <br>
    <span>
        헤로쿠 서버로 동작하기 때문에 월 말 즈음이면 서버가 닫히는 경우가 있습니다. 서버가 동작하지 않는 경우 <button class="btn btn-sm btn-subpoint" onclick="window.open('https://kkn1125.github.io/contact')">버튼</button>을 클릭하여 메일보내기로 이동하여 메일을 남기시면 파일을 전송드리겠습니다.
        <br>
        현재 헤로쿠 페이지 상태 : <span class="server-state">확인중...</span>
    </span>
</blockquote>
</p>`
    : "";

export const database = (useDB) =>
  useDB.useDB
    ? `
<div class="mt-3">
    <div>
        <span class="fs-4 fw-bold">Database 구현</span>
    </div>    
    <span class="tag">Databases : </span>
    ${useDB.db
      .map((db) => `<span class="tag tag-subpoint">${db}</span>`)
      .join(" ")}
</div>
`
    : "";

export const mainContent = (content) =>
  content !== ""
    ? `<div>
${content}</div>`
    : `<p><span class="notice notice-danger">작성 중인 게시물입니다.</span></p>`;

export const link = (link, post) =>
  link.link != ""
    ? `
<div class="text-capitalize">
    <a href="${link.link}" target="_blank">
        📗<strong>${post} Project</strong> demo pages
    </a>
</div>
`
    : "";

export const github = (github, post) =>
  github.github != ""
    ? `
<div class="text-capitalize">
    <a href="${github.github}" target="_blank">
        📗<strong>${post} Project</strong> github pages
    </a>
</div>
`
    : "";

export const subImages = (subImage = [], post) =>
  subImage.length > 0
    ? `<div class="my-3">
${subImage
  .map(([name, path]) =>
    name != "" && path != ""
      ? `${
          name != ""
            ? `<div class="fw-bold fs-5 text-capitalize mt-3">${name}</div>`
            : ""
        }
<div class="w-100">
    <img class="w-100" src="${getImgSrc(post, path)}" alt="${path}"></div>`
      : ""
  )
  .join("\n")}
</div>`
    : "";

export const movie = (movie) => {
  if (movie != "") {
    if(movie.match(/http|https/g)) {
      return `<video src="${movie}" autoplay muted style="width: 100%;"></video>`;
    }

    return `<div style="text-align: center;">
  ${movie}
</div>`;
  } else {
    return "";
  }
};

export const cover = (post, post_part) => getImgSrc(post, post_part.cover);

export const cardset = (skillset, cardClasses) =>
  skillset.map((skill) => card(skill, cardClasses)).join("");

export const card = (
  skill,
  cardClasses
) => `<div class="card w-flex align-items-center justify-content-center" style="--gutter-x:inherit; --gutter-y: inherit;">
<div class="${cardClasses}${
  !skill.color?.startsWith("#") ? ` ${skill.color}` : ""
}" ${skill.color?.startsWith("#") && `style="color: ${skill.color};"`}>
    ${
      skill.svg.match(/^(http|https)/g)
        ? `<img src="${skill.svg}" alt="" width="50" height="50"/>`
        : skill.svg
    }
    <span class="card-skill">${skill.skill.toCapitalize()}</span>
</div>
</div>`;
