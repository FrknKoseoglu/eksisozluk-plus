// ==UserScript==
// @name         Ekşisözlük+
// @namespace    https://github.com/FrknKoseoglu/eksisozluk-plus
// @version      0.1
// @description  Daha iyi bir ekşisözlük deneyimi
// @author       Furkan Köseoğlu
// @match        https://eksisozluk.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("search-textbox").maxLength = 50; // Arama Çubuğu 50 Karakter Sınırlama

})();