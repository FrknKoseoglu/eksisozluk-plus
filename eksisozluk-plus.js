// ==UserScript==
// @name         Ekşisözlük+
// @namespace    https://github.com/FrknKoseoglu/eksisozluk-plus
// @version      0.2
// @description  Daha iyi bir ekşisözlük deneyimi
// @author       Furkan Köseoğlu
// @match        https://eksisozluk.com/
// @grant        none
// ==/UserScript==

var $ = window.jQuery;

(function() {
    'use strict';
    document.getElementById("search-textbox").maxLength = 50; // Arama Çubuğu 50 Karakter Sınırlama

})();

$(document).ready(function() {
    //Genel basit reklam kaldırma
    $(".ad-double-click").css('display', 'none');

    // Sponsor içerik kaldırma
    var sponsor = $("#corporate-content-sponsored-entry").parent();
    $(sponsor).parent().css('display', 'none');

});