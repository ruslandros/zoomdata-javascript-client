"use strict";$(function(){var a=new ZoomdataClient({apiKey:"53874508e4b0a67cc17eb82a",host:"dev.zoomdata.com/zoomdata",secure:!0});a.visualize({visualization:"Vertical Bars",source:"Real Time Sales",element:$("#visualization").get(0)}).progress(function(a){console.log("loading...",a)}).done(function(){console.log("Finished loading successfully.")}).fail(function(a,b){var c="string"==typeof a?a:null;console.log(c||b+": "+a.statusText)})});