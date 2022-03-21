'use strict';

import * as moduleTemplatePage from './ModulesTemplatePage.js';
import * as modulePage from './ModulesPage.js';
import * as modulePart from './ModulesPart.js';

const templates = {...moduleTemplatePage};

const parts = {...modulePart};

const pages = {
    type: (type) => templates[type],
    item: (type) => parts[type],
};

const projects = {...modulePage};

export {pages, templates, parts, projects};