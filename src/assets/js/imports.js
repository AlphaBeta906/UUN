import { themeChange } from 'theme-change';

themeChange()

if (window.localStorage.getItem("theme") === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.theme = "dark"
    } else {
        localStorage.theme = "light"
    }
}