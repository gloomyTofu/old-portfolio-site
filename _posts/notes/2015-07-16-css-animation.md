---
layout: article
title: 'CSS Animation'
folder: 'notes'
description: 'Quick Reference Guide'
category: notes

---

/* @keyframes name | duration | timing-function | delay | 
   iteration-count | direction | fill-mode | play-state */

Sticky Navigation when scrolling down

  $(window).scroll(function(){
		var scrollTop = 55;
		if($(window).scrollTop() >= scrollTop){
			$('.main-content').css({
				position : 'relative'
			});
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');	
		}
	});