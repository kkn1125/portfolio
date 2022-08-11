import { app } from "../../core/Module.js";

export const home = {
  render: function (data, response) {
    let cover = [
      "https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
    ];

    return `
      <section page="${response}" style="background-image: url(${
        cover[parseInt(Math.random() * cover.length)]
      }); background-size: cover;">
        <div class="intro">
          <div class="profile">
            <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/71887242?v=4" alt="profile">
          </div>
          <div class="h3 capitalize">${app.authors[0]}</div>
          <div class="intro-content">
            ${app.kimson.comment}
          </div>
          <div style="text-align: center; font-weight: 700; font-size: 12px; margin-top: 1rem;">
            - Updated at. 2022-08-11 15:13
          </div>
        </div>
      </section>
    `;
  },
};
