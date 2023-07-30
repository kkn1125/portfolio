import { tagLight, posts } from "../../core/Module.js";
import { projects } from "../../pages.js";

export const portfolio = {
  render: function (data, response, subpage) {
    let classList = "";
    let view = data == "card" ? "list" : "card";
    if (data == "card") {
      classList = "card-dv-1 card-dv-sm-2 card-dv-md-3 card-dv-lg-4";
    } else if ("list") {
      classList = "card-dv-1";
    }
    if (!subpage)
      return `<section page="${response}">
        <div class="sr"></div>
            <div class="fence-full">
                View Mode
                <button
                id="changeView"
                class="btn btn-success px-1 fs-7">${view}</button>
                
                <div class="card-group card-light ${classList} card-pd-0 justify-content-around" style="--gutter-x: 3rem; --gutter-y: 3rem;"></div>
            </div>
        </section>`;
    else return `<section page="${response}"></section>`;
  },
  card: {
    render: (
      { title, purpose, work, authors, link, cover, writedAt, mainLang, tag },
      prjname
    ) => {
      return `
                <div class="card bg-opacity-0" style="position: relative; --card-padding: 0; width: 18rem;">
                    
                    <div class="back h-100 w-100 p-5" style="border-radius: inherit;">
                        <div class="card-title text-trunc">
                            <a href="#portfolio-${prjname}" title="${
        title == "" ? "No title" : title
      }">${title == "" ? "No title" : title}</a>
                        </div>
                        <div class="card-content">
                            <div class="text-muted fs-7 mb-4">${purpose}</div>
                            <div class="card-body">
                                <div class="link mb-2">
                                    <a class="btn btn-sm text-white btn-point" href="#portfolio-${prjname}">
                                        🔍
                                        Detail
                                    </a>
                                    <button class="px-1 btn btn-sm btn-subpoint" onclick="window.open('${link??""}')">
                                        ✨
                                        Demo
                                    </button>
                                </div>
                                <div class=" mb-1">
                                    <span class="tag">author</span>${authors.join(
                                      " | "
                                    )}
                                </div>
                                <div class="time mb-1">
                                    <span class="tag">start</span><span>${
                                      work.start
                                    }</span>
                                    <span class="tag">end</span><span>${
                                      work.end
                                    }</span>
                                </div>
                                <div class="time mb-1">
                                    <span class="tag">writed at </span>${writedAt}
                                </div>
                            </div>
                            <div class=" mb-1">
                                <span class="tag">tags</span>
                                ${tag.map(tagLight).join(" ")}
                            </div>
                            <div>
                                <span class="tag">main language</span>
                                <span class="tag tag-danger text-capitalize">${mainLang}</span>
                            </div>
                        </div>
                    </div>
                    <div class="front h-100 w-100 position-absolute top-0 start-0 back-filp" style="background-image: url(${posts.getImgSrc(
                      prjname,
                      cover
                    )}); background-size: contain; background-position: top left; border-radius: inherit;"></div>
                </div>
            `;
    },
  },
  list: {
    render: (
      {
        title,
        purpose,
        work,
        authors,
        link,
        cover,
        content,
        writedAt,
        mainLang,
        tag,
      },
      prjname
    ) => {
      const limitWords = 100;
      const rawContents = new DOMParser()
        .parseFromString(content, "text/html")
        .body.textContent.trim()
        .replace(/[\s\n]+/g, " ");
      const limitRawContents = rawContents.slice(0, limitWords + 1);
      const max = rawContents.length >= limitWords;
      const formattedDate = new Date(writedAt).format(
        "yyyy년 MM월 dd일 HH:mm",
        true
      );
      return `
            <div class="card bg-white my-0">
                <div class="h-100 w-100 py-5 px-5" style="border-radius: none; border-bottom: 2px solid gray;">
                    <div class="card-title text-trunc" style="margin-bottom: 0;">
                        <a href="#portfolio-${prjname}" title="${
        title == "" ? "No title" : title
      }" class="text-dark fw-bold">${title == "" ? "No title" : title}</a>
                        <button class="fs-7 px-1 btn btn-sm btn-subpoint" onclick="window.open('${link}')">
                            ✨
                            Demo
                        </button>
                    </div>
                    <div>
                        <span class="fs-7 text-gray">✏️ ${formattedDate}</span>
                    </div>
                    <div class="text-muted fs-7 my-4">${limitRawContents}${
        max ? " ..." : ""
      }</div>
                    <div class="card-body">
                        <div class="mb-1">
                            <span class="tag">author</span>
                            <span class="fs-8">${authors.join(" | ")}</span>
                            <span class="tag">work</span>
                            <span class="fs-8">${work.start} ~ ${
        work.end
      }</span>
                        </div>
                    </div>
                    <div class=" mb-1">
                        <span class="tag">tags</span>
                        ${tag.map(tagLight).join(" ")}
                    </div>
                    <div>
                        <span class="tag">main language</span>
                        <span class="tag tag-danger text-capitalize">${mainLang}</span>
                    </div>
                </div>
            </div>
            `;
    },
  },
  post: {
    render: (post) => {
      let notice = posts.notice;
      let database = posts.database;
      let mainContent = posts.mainContent;
      let post_part = projects[post];
      let is_ok = false;
      if (post_part.isHeroku)
        fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            post_part.link??""
          )}`
        )
          .then((response) => {
            is_ok = response.ok;
            return response.json();
          })
          .then((data) => {
            setTimeout(() => {
              console.log(data);
              if (document.querySelector(".server-state"))
                document.querySelector(".server-state").innerHTML =
                  is_ok && data.status.http_code == 200 ? `열림` : `닫힘`;
            }, 1000);
          });

      let dateGap = new Date(
        new Date(post_part.work.end) - new Date(post_part.work.start)
      );
      let gap = Math.abs(dateGap);
      const diffDays = Math.ceil(gap / (1000 * 60 * 60 * 24));

      let link = posts.link;
      let github = posts.github;
      let subImages = posts.subImages;
      let movie = posts.movie;
      let cover = posts.cover;

      return `
            <div class="position-relative"
            style="filter: brightness(0.5); z-index:-1; min-height: 250px; max-height: calc(24rem + 3vw); overflow: hidden;">
                <div class="cover-img" style="background-image: url(${cover(
                  post,
                  post_part
                )})"></div>
                </div>
                <div class="fence-full fence-lg" style="position: relative; top: calc(-13rem - 7vw);">
                    <article class="post h-entry">
                        <header class="py-3">
                            <div class="mt-5">
                                <span class="h4 text-white" style="min-height: 2em;">
                                    🙋‍♂️${post_part.title}
                                </span>
                            </div>
                            <!-- 카테고리 -->
                            <div><span class="tag text-white">categories :</span>
                                ${post_part.category
                                  .map(
                                    (t) =>
                                      `<span class="tag tag-warning">${t}</span>`
                                  )
                                  .join(" ")}
                            </div>
                            <!-- 태그 -->
                            <div><span class="tag text-white">tags :</span>
                                ${post_part.tag
                                  .map(
                                    (t) =>
                                      `<span class="tag tag-point">${t}</span>`
                                  )
                                  .join(" ")}
                            </div>
                            <p class="text-light fs-7 mt-3">
                                <span class="tag text-white">info : </span>
                                <time class="time">
                                    ${post_part.writedAt}
                                </time>•
                                <span itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                                    <span class="p-author h-card" itemprop="name">
                                        ${post_part.authors.join(" | ")}
                                    </span>
                                </span>
                            </p>
                        </header>

                        <div class="">
                            <div class="mt-3">
                                <span class="h3 text-capitalize">${post} project</span>
                            </div>
                            <div class="mt-3">
                                <span class="fs-4 fw-bold">개요</span>
                            </div>
                            <p>${post_part.purpose}</p>
                            <div class="mt-3">
                                <span class="fs-4 fw-bold">Used</span>
                            </div>
                            <p>
                                <span class="tag">main : </span><span class="tag tag-danger">${
                                  post_part.mainLang
                                }</span>
                                <br>
                                <span class="tag">sub : </span>${post_part.subLangs
                                  .map(
                                    (t) => `<span
                                    class="tag tag-info">${t}</span>`
                                  )
                                  .join(" ")}
                            </p>
                            <p>
                                ${database(post_part)}
                            </p>
                            <div class="mt-3">
                                <span class="fs-4 fw-bold">작업 기간</span>
                            </div>
                            <p class="tag tag-info">
                                <span>${post_part.work.start} ~ ${
        post_part.work.end
      }</span>
                            </p>
                            <p class="tag tag-danger">총 ${
                              diffDays - parseInt((diffDays / 7) * 2)
                            }일 소요 ( 주말 제외 )</p>
                            ${mainContent(
                              post_part.content
                                .replace(/@:\-\>/gim, "→")
                                .replace(/@:\<\-/gim, "←")
                            )}
                            ${subImages(post_part.subImages, post)}
                            ${movie(post_part.movie)}
                            <hr>
                            ${notice(post_part.isHeroku)}
                            ${link(post_part, post)}
                            ${github(post_part, post)}
                        </div>

                    </article>

                </div>
            `;
    },
  },
};
