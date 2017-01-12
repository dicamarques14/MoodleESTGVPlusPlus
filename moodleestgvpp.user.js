// ==UserScript==
// @name         Moodle: muda PDF height e acrescenta link
// @namespace    https://github.com/dicamarques14/MoodleESTGVPlusPlus
// @version      3
// @description  Muda a altura do iframe dos pdf no moodle e acrescenta link para o pdf no topo da pagina
// @author       Dg
// @match        https://moodle.estgv.ipv.pt/*/mod/resource/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/dicamarques14/MoodleESTGVPlusPlus/master/moodleestgvpp.meta.js
// @downloadURL  https://raw.githubusercontent.com/dicamarques14/MoodleESTGVPlusPlus/master/moodleestgvpp.user.js
// @updateVersion   3
// ==/UserScript==

var LinkPDF;
LinkPDF = document.getElementsByTagName('object')[0].data;

console.log(LinkPDF);
document.getElementsByClassName("region-content")[0].innerHTML = "<a href="+LinkPDF+" style=padding-left:50px;>PDF LINK</a>" + document.getElementsByClassName("region-content")[0].innerHTML;
//console.log(1);
//document.getElementById("resourceobject").style +="height:880px !important; width: 100%;"; //supostamente devia aumentar o Width dos pdf
//console.log(document.getElementById("resourceobject").style);
