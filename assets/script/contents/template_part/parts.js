import { router } from "../../router.js";

export const paging = {
  render: function (hash) {
    const pagelist = Object.keys(router).filter((page) => page != "_404");
    const isStart = pagelist.indexOf(hash.slice(1));
    return `<div class="side-paging">
            <div>
                <button class="btn btn-sm btn-danger fs-5 px-3 py-0" data-dir="prev"${
                  isStart == 0 ? " hidden" : ""
                }>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="btn btn-sm btn-danger fs-5 px-3 py-0" data-dir="next"${
                  isStart == pagelist.length - 1 ? " hidden" : ""
                }>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>`;
  },
};

export const menu = {
  render: function () {
    return `<div class="side-menu">
            <button class="menu fs-5 btn btn-danger py-0 px-3">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </button>
        </div>
        <nav id="side-menu">
            <ul class="font-gugi">
                ${Object.keys(router)
                  .filter((page) => page != "_404")
                  .map(
                    (page) =>
                      `<li><a href="#${page}" class="page">${page}</a></li>`
                  )
                  .join("")}
            </ul>
        </nav>`;
  },
};
