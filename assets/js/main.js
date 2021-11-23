'use strict';

const Portfolio = (function () {
    function Controller() {
        let models = null;
        let page = {};

        this.init = function (model) {
            models = model;

            this.pageRendering();
            window.addEventListener('click', this.flipHandler);
        }

        this.pageRendering = function () {
            location.search.slice(1).split('&').forEach(s=>{
                let sp = s.split('=');
                if(sp=='') page['page'] = 'home';
                else page[sp[0]] = sp[1];
            });

            models.pageRendering(page);
        }

        this.flipHandler = function(ev){
            let target = ev.target;
            if(!target.closest('.card'))return;
            models.flipHandler(target.closest('.card'));
        }
    }

    function Model() {
        let views = null;

        this.init = function (view) {
            views = view;
        }

        this.pageRendering = function (page) {
            views.pageRendering(page);
        }

        this.flipHandler = function(card){
            if(card.classList.contains('flip')){
                card.classList.remove('flip');
            } else {
                card.classList.add('flip');
            }
        }
    }

    function View() {
        let components = null;
        let main = null;
        let cardGroup = null;

        this.init = function (component) {
            components = component;
        }

        this.pageRendering = function (page) {
            this.setTitle();
            // this.setDarkMode();
            this.setFooter();
            this.setContent(page);
        }

        this.setDarkMode = function(){
            document.body.insertAdjacentHTML('afterbegin', components.generator.darkModeBtn.render());
        }

        this.setTitle = function () {
            document.title = components.title;
        }

        this.setContent = function (page) {
            document.body.insertAdjacentHTML('afterbegin', components.generator.container.type(page.page).render(page.post));
            main = document.querySelector('main');
            page.page=='home'
            ?this.setCards()
            :this.setPageContent(page.post);
        }

        this.setFooter = function () {
            document.body.insertAdjacentHTML('afterbegin', components.generator.footer.render());
        }

        this.setCards = function(){
            main.insertAdjacentHTML('afterbegin', components.generator.cardGroup.render());
            cardGroup = document.querySelector('.card-group');

            for(let prj in components.projects)
            cardGroup.insertAdjacentHTML('afterbegin',  components.generator.card.render({...components.projects[prj]}, prj));

            cardGroup.classList.add('alert');
            setTimeout(()=>{
                cardGroup.classList.remove('alert');
            }, 1000);
        }

        this.setPageContent = function(post){
            main.insertAdjacentHTML('afterbegin', components.generator.post.render(post));
        }
    }

    return {
        create: function () {
            const components = {
                title: title,
                projects: projects,
                generator: generator,
            }

            const view = new View();
            const model = new Model();
            const controller = new Controller();

            view.init(components);
            model.init(view);
            controller.init(model);
        }
    }
})();

setTimeout(()=>{
    Portfolio.create();
})