'use strict';

import {app} from './core/Module.js';
import {pages, parts, projects} from './pages.js';
import {router} from './router.js';

try {
    (function () {
        function Controller() {
            let models = null;

            this.init = function (model) {
                models = model;

                window.addEventListener('load', this.handleLoad);
                window.addEventListener('mouseup', this.blockRoutAnchor);
                window.addEventListener('mousedown', this.handleBeforePage);
                window.addEventListener('click', this.handleLink);
                window.addEventListener('click', this.handlePaging);
                window.addEventListener('click', this.handleSideMenu);
                window.addEventListener('click', this.flipHandler);
                window.addEventListener('click', this.handleRollingList);
                window.addEventListener('wheel', this.aboveBtnScroll);
                window.addEventListener('contextmenu', this.contextmenu);
                window.addEventListener('click', this.contextmenu);
                window.addEventListener('click', this.changeView);
            }

            this.changeView = function (ev){
                const btn = ev.target;
                if(btn.id!='changeView') return;
                models.changeView(btn);
            }

            this.contextmenu = function (ev) {
                ev.preventDefault();
                if(ev.type == 'click'){
                    let context = document.querySelector('.contextmenu');
                    if(context) {
                        context.classList.add('hide');
                        setTimeout(()=>{
                            context.remove();
                        }, 300);
                    }
                } else {
                    models.renderContext(ev);
                }
            }

            this.aboveBtnScroll = function (ev) {
                let section = document.querySelector('section');
                const target = ev.target;
                if(target.classList.contains('btn')){
                    section.scrollTo({left: 0, top: section.scrollTop-(ev.wheelDeltaY*5), behavior: 'smooth'});
                }
            }

            this.handleRollingList = function(ev){
                const target = ev.target;
                const parent = target.parentNode;
                if(!target.attributes['scroll']) return;
                parent.classList.toggle('show');
                target.textContent = parent.classList.contains('show')?'📘less':'📖more';
            }

            this.flipHandler = function (ev) {
                const target = ev.target;
                if (!target.closest('.card')) return;
                models.flipHandler(target.closest('.card'));
            }

            this.handleBeforePage = function (ev) {
                models.handleBeforePage(location.hash);
            }

            this.handleSideMenu = function (ev) {
                const target = ev.target;
                const menuWrap = target.closest('.side-menu');
                const sibling = document.querySelector('#side-menu');

                if (!menuWrap && sibling.className !== 'show') return;

                models.handleSideMenu(menuWrap, sibling);
            }

            this.handlePaging = function (ev) {
                const target = ev.target;
                const data = target.dataset;

                if (target.tagName !== 'BUTTON' || !data.dir) return;

                models.handlePaging(target);
            }

            this.handleLink = function (ev) {
                const anchor = ev.target;

                if (anchor.getAttribute('href') && anchor.getAttribute('href').indexOf('http') > -1) {
                    ev.preventDefault();
                    window.open(anchor.href);
                }
            }

            this.handleLoad = function (ev) {
                const href = location.hash == '' || location.hash == '#' ? '#home' : location.hash;
                models.routeAnchor(href);
            }

            this.blockRoutAnchor = function (ev) {
                const anchor = ev.target;
                const href = anchor.hash;

                if (ev.which == 4 || ev.which == 5) {
                    setTimeout(function () {
                        models.forwardAnchor(location.hash);
                    }, 10)
                }

                if (anchor.tagName !== 'A' || !anchor.getAttribute('href').match(/\#/gm)) return;
                ev.preventDefault();

                models.routeAnchor(href);
            }
        }

        function Model() {
            const pages = Object.keys(router).filter(page => page != '404');
            const subpages = Object.keys(projects);

            let views = null;
            let currentPage = null;
            let motion = null;
            let beforePage = null;
            let viewMode = false;

            const state = {
                animations: [
                    'fade',
                    'zoom',
                    'start',
                    'end',
                    'top',
                    'bottom',
                ],
                view: 'animation',
            };

            this.init = function (view) {
                views = view;

                this.filterHash();
            }

            this.changeView = function (btn){
                viewMode = !viewMode;
                views.changeView(viewMode);

                views.renderingCurrentPage(currentPage, 'fade');
            }

            this.renderContext = function ({x, y}) {
                views.renderContext(x, y);
            }

            this.flipHandler = function (card) {
                if (card.classList.contains('flip')) {
                    card.classList.remove('flip');
                } else {
                    card.classList.add('flip');
                }
            }

            this.handleBeforePage = function (page) {
                beforePage = page;
            }

            this.handleSideMenu = function (target, sibling) {
                sibling.classList.toggle('show');

                document.querySelector('.menu').innerHTML = sibling.className !== 'show' ? `<i class="fas fa-bars"></i>` : '<i class="fas fa-times"></i>';
            }

            this.handlePaging = function (target) {
                const className = target.dataset.dir;
                const alerting = (page = false) => {
                    let hasNotice = document.querySelector('.alerts');
                    let notice = target.parentNode.insertAdjacentElement('afterend', document.createElement('div'));

                    notice.innerHTML = `<span>${page?'메인':'마지막'} 페이지입니다.</span>`;
                    notice.classList.add('show', 'alerts');

                    if (hasNotice) hasNotice.remove();

                    setTimeout(() => {
                        notice.classList.remove('show');
                        notice.classList.add('hide');
                        setTimeout(() => {
                            notice.remove();
                        }, 1000);
                    }, 3000);
                }

                const splitUrl = currentPage.split('-');
                let page = splitUrl.shift();
                let subpage = splitUrl.pop();

                let pageIdx = pages.indexOf(page);
                let subpageIdx = subpages.indexOf(subpage);

                if (className == 'prev') {
                    if (pageIdx - 1 < 0) {
                        pageIdx = pageIdx;
                        alerting(true);
                        return;
                    } else {
                        if(pages[pageIdx]=='about') subpageIdx = subpages.length-1;
                        if (pages[pageIdx] == 'portfolio') {
                            if (subpageIdx - 1 < 0) {
                                alerting(true);
                                subpageIdx = -1;
                                pageIdx -= 1;
                                // return;
                            } else {
                                subpageIdx = subpageIdx - 1
                            }
                        } else {
                            pageIdx = pageIdx - 1
                        }
                    }
                } else {
                    if (pageIdx + 1 > pages.length - 1) {
                        pageIdx = pageIdx;
                        alerting(false);
                        return;
                    } else {
                        if(pages[pageIdx] == 'portfolio'){
                            if (subpageIdx + 1 > subpages.length - 1) {
                                alerting(false);
                                subpageIdx = null;
                                pageIdx += 1;
                                // return;
                            } else {
                                subpageIdx = subpageIdx + 1;
                            }
                        } else {
                            pageIdx = pageIdx + 1;
                        }
                    }
                }

                this.routeAnchor(`#${pages[pageIdx]}${subpages[subpageIdx]?'-'+subpages[subpageIdx]:''}`);
            }

            this.filterHash = function () {
                if (!location.hash.match('-')) {
                    currentPage = pages[pages.indexOf(location.hash.substring(1))];
                    if (!currentPage) history.replaceState({}, '', '#home');
                } else {
                    currentPage = location.hash.slice(1);
                }
            }

            this.forwardAnchor = function (href) {
                currentPage = href;

                this.renderingCurrentPage();
            }

            this.routeAnchor = function (href) {
                history.pushState({}, '', `${href}`);
                currentPage = href;
                this.renderingCurrentPage();
            }

            this.renderingCurrentPage = function () {
                this.filterHash();
                this.getRandomMotion();

                if (beforePage && beforePage.substring(1) == currentPage) return;
                views.renderingCurrentPage(currentPage, motion);
            }

            this.getRandomMotion = function () {
                motion = state.animations[parseInt(Math.random() * state.animations.length)];
            }
        }

        function View() {
            let moduler = null;
            let app = null;
            let mode = 'card';

            this.init = function (components) {
                moduler = components;

                app = document.querySelector('#app');

                this.changeTitle(location.hash.slice(1));
            }

            this.changeView = function (viewMode){
                if(viewMode){
                    mode = 'list';
                } else {
                    mode = 'card';
                }
            }

            this.renderContext = function (x, y) {
                const menu = document.querySelector('.contextmenu');
                let styles = '';
                if(menu) menu.remove();
                document.body.insertAdjacentHTML('beforeend', moduler.contextmenu.render(moduler.contextmenu));
                if(window.innerHeight*1.2 < y + document.querySelector('.contextmenu').clientHeight){
                    styles += `bottom: calc(100% - ${y}px);`;
                } else {
                    styles += `top: ${y}px;`;
                }
                if((window.innerWidth-17) < x + document.querySelector('.contextmenu').clientWidth){
                    styles += `right: calc(100% - ${x}px);`;
                } else {
                    styles += `left: ${x}px;`;
                }

                document.querySelector('.contextmenu').style = styles;
            }

            this.renderingInitialItems = function () {
                for (let type in parts) {
                    app.insertAdjacentHTML('beforeend', moduler.pages.item(type).render(location.hash));
                }
            }

            this.renderingCurrentPage = function (currentPage, motion) {
                this.changeTitle(currentPage);
                let page = null;
                let subpage = null;
                let sep = ([pg, sub]) => {
                    page = pg;
                    subpage = sub;
                }
                sep(currentPage.split('-'));

                try {
                    app.insertAdjacentHTML('afterbegin', `<div class="${motion}">
                        ${moduler.router[page].select(page).render(mode, page, subpage)}
                        </div>`);
                    if (page == 'portfolio' && !subpage) {
                        for (let prj in moduler.projects) {
                            document.querySelector(`[page="${page}"] .card-group`).insertAdjacentHTML('beforeend', moduler.router[page].select(page)[mode].render(moduler.projects[prj], prj));
                        }
                    } else if (page == 'portfolio' && subpage) {
                        document.querySelector(`[page="${page}"]`).insertAdjacentHTML('beforeend', moduler.router[page].select(page)['post'].render(subpage));
                    }
                } catch (e) {
                    app.insertAdjacentHTML('afterbegin', `<div class="${motion}">
                        ${moduler.router['_404'].select('_404').render(e, '_404')}
                        </div>`);
                }

                this.clearPage();
                this.renderingInitialItems();
            }

            this.clearPage = function () {
                const oldPage = app.querySelectorAll('#app>div:not(:first-child)');
                const oldSide = app.querySelectorAll(`[class*="side-"], [id="side-menu"]`);

                oldPage.forEach(old => {
                    const childrenCount = app.children.length;
                    const oldClass = old.classList.value;
                    if (!oldClass.match(/[\w]+-[\w]+/gm)) {
                        if (childrenCount > 1) old.classList.replace(oldClass, `out-${oldClass}`);

                        setTimeout(() => {
                            if (childrenCount > 1) old.remove();
                        }, 1000);
                    }
                });

                oldSide.forEach(old => {
                    old.remove();
                });
            }

            this.changeTitle = function (title) {
                document.title = title;
            }
        }

        return {
            init: function () {
                const contextmenu = {
                    menu: ['home', 'resume', 'portfolio', 'about'],
                    repo: app.kimson.repo,
                    blog: app.kimson.blog,
                    contact: app.kimson.contact,
                    authors: app.authors,
                    render({menu, repo, blog, contact, authors}) {
                        return `
                            <div class="contextmenu">
                                <ul class="list-group">
                                    <li class="list-item py-0">${authors[0]} Portfolio</li>
                                </ul>
                                <div class="hr"></div>
                                <ul class="list-group py-0">
                                    <li class="py-1">
                                        Direct Pages
                                    </li>
                                    ${menu.map(li=>`<li class="list-item py-1"><a href="#${li}">${li}</a></li>`).join('')}
                                </ul>
                                <div class="hr"></div>
                                <ul class="list-group pt-0">
                                    <li class="py-1">
                                        Other Pages
                                    </li>
                                    <li class="list-item py-1">
                                        <a href="${blog}">Blog</a>
                                    </li>
                                    <li class="list-item py-1">
                                        <a href="${repo}">Repository</a>
                                    </li>
                                    <li class="list-item py-1">
                                        <a href="${contact}">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        `;
                    }
                }

                const moduler = {
                    router,
                    pages,
                    projects,
                    contextmenu
                }

                const view = new View();
                const model = new Model();
                const controller = new Controller();

                view.init(moduler);
                model.init(view);
                controller.init(model);
            }
        }
    })().init();
} catch (e) {
    setTimeout(() => {
        location.reload();
    }, 3000);
}