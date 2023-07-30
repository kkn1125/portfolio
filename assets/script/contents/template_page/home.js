import { app } from "../../core/Module.js";

export const home = {
  render: function (data, response) {
    let cover = [
      "https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/04/19/02/47/bedroom-4138509_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/06/25/07/21/seagull-7282992_1280.png",
      "https://cdn.pixabay.com/photo/2022/10/21/21/11/art-7537962_1280.jpg",
    ];
    const randomCover = cover[parseInt(Math.random() * cover.length)];
    return `
      <section page="${response}" style="background-image: url(${randomCover}); background-size: cover;">
        <div class="intro">
          <div class="profile">
            <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
          </div>
          <div class="h3 capitalize">${app.authors[0]}</div>
          <div class="intro-content">
            ${app.kimson.comment}
          </div>
          <div style="text-align: center; font-weight: 700; font-size: 12px; margin-top: 1rem;">
            - Updated at. ${new Date("2023-07-30 23:42").toLocaleString("ko", {
              year: "numeric",
              month: "long",
              date: "numeric",
              hour: "numeric",
              hour12: false,
              minute: "numeric",
            })}
          </div>
        </div>
        <a href="https://pixabay.com/" class="tag tag-info">
          <span class="tag tag-white text-uppercase">
          image source
          </span>
          <span class="text-white">https://pixabay.com/</span>
        </a>
      </section>
    `;
  },
};
