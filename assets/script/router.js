'use strict';

import {pages} from './pages.js'

export const router = {
    'home': {
        referrer: document.referrer,
        select: (page) => pages.type(page),
    },
    'resume': {
        referrer: document.referrer,
        select: (page) => pages.type(page),
    },
    'portfolio': {
        referrer: document.referrer,
        select: (page) => pages.type(page),
    },
    'about': {
        referrer: document.referrer,
        select: (page) => pages.type(page),
    },
    '_404': {
        referrer: document.referrer,
        select: (page) => pages.type(page),
    }
};