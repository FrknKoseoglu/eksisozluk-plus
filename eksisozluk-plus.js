// ==UserScript==
// @name         Ekşisözlük+
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://eksisozluk.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("search-textbox").maxLength = 50; // Arama Çubuğu 50 Karakter Sınırlama

})();