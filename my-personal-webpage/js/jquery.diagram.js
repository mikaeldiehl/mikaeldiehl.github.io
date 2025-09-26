/*

jQuery-плагин для построения круговых диаграмм

Вызов:

в html создается разметка
<div data-percent="15.2%"></div>

здесь указывается data-атрибут data-percent с данными,
которые затем будут отображены на диаграмме.

$(jQuery Selector).diagram({ 
	size: "200",
	borderWidth: "20",
	bgFill: "#95a5a6",
	frFill: "#1abc9c",
	textSize: 54,
	textColor: '#2a2a2a'
});

параметры:
size - размер диаграммы в px
borderWidth - толщина обводки
bgFill - цвет незаполненной части
frFill - цвет заполненной части
textSize - размер шрифта для надписи
textColor - цвет шрифта для надписи
font - семейство шрифтов (например, "'PT Sans', Arial, sans-serif")

если не передать параметры, то будут установлены параметры по-умолчанию
var defaults = {
	size: "100",
	borderWidth: "10",
	bgFill: '#bbb',
	frFill: '#0bf',
	textSize: 50,
	font: "serif",
	textColor: '#000'
};


поддержка браузерами: в IE не работает

*/


(function($) {

	$.fn.diagram = function(params){
	
		function rotate(angle) {
			return {
				"-webkit-transform": "rotate("+angle+"deg)",
				"-moz-transform": "rotate("+angle+"deg)",
				"-ms-transform": "rotate("+angle+"deg)",
				"-o-transform": "rotate("+angle+"deg)",
				"transform": "rotate("+angle+"deg)"
			};
		}

		var defaults = {
			size: "100",
			borderWidth: "10",
			bgFill: '#bbb',
			frFill: '#0bf',
			textSize: 50+'px',
			font: "serif",
			textColor: '#000'
		};

		var options = $.extend({}, defaults, params);

		var $this = $(this);
		var dataAttr = $this.data("percent");
		var data = parseFloat(dataAttr);

		var cssMain = {
			"position": "relative",
			"width": options.size+"px",
			"height": options.size+"px",
			"border": options.borderWidth + "px " + "solid" + options.bgFill,
			"border-radius": "50%",
			"z-index": "1"
		};

		var cssElems = {
			"position": "absolute",
			"top": -options.borderWidth+"px",
			"right": -options.borderWidth+"px",
			"bottom": -options.borderWidth+"px",
			"left": -options.borderWidth+"px",
			"border": options.borderWidth+"px " + "solid",
			"border-radius": "50%"
		};

		$this.css(cssMain);
		
		var text = $('<span></span>')
			.appendTo($this)
			.css({
				"display": "block",
				"position": "relative",
				"z-index": "2",
				"text-align": "center",
				"font-size": options.textSize,
				"font-family": options.font,
				"height": options.size+"px",
				"line-height": options.size+"px",
				"color": options.textColor
			})
			.text(dataAttr);
		
		var bg = $('<div></div>')
			.appendTo($this)
			.css(cssElems)
			.css({
				"border-color": options.frFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});

		var fill = $('<div></div>')
			.appendTo($this)
			.css(cssElems)
				.css({
				"border-color": options.bgFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});

		var angle;
		if (data >= 0 && data <= 50) {
			angle = (225 - 45)/50*data + 45;
		} else {
			angle = (405 - 225)/50*data + 225;
			fill.css({
				"border-color": options.frFill,
				"border-left-color": "transparent",
				"border-bottom-color": "transparent",
				"z-index": "1"
			});
		}
		
		bg.css(rotate(45));
		fill.css(rotate(angle));

		return this;
	};

})(jQuery);

(function($) {
  $.fn.diagram = function(options) {
    var defaults = {
      size: "100",
      borderWidth: "10",
      bgFill: "#e2e2e2",
      frFill: "#D70040",
      textSize: 50,
      textColor: "#585858"
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function() {
      var $this = $(this);
      var o = options;
      var dataPercent = $this.data("percent");
      var elem = $this;
      
      // Create the canvas
      var canvas = document.createElement("canvas");
      canvas.width = o.size;
      canvas.height = o.size;
      var context = canvas.getContext("2d");
      elem.append(canvas);
      
      // Create text element
      var textContent = $("<span></span>").html("0%").css({
        "font-size": o.textSize + "px",
        "color": o.textColor
      });
      elem.append(textContent);
      
      // Animation function
      function animate(current) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background circle
        context.beginPath();
        context.arc(o.size/2, o.size/2, (o.size-o.borderWidth)/2, 0, 2 * Math.PI);
        context.lineWidth = o.borderWidth;
        context.strokeStyle = o.bgFill;
        context.stroke();
        
        // Foreground circle
        var angle = 2 * Math.PI * (current/100);
        context.beginPath();
        context.arc(o.size/2, o.size/2, (o.size-o.borderWidth)/2, -Math.PI/2, angle - Math.PI/2);
        context.lineWidth = o.borderWidth;
        context.strokeStyle = o.frFill;
        context.stroke();
        
        // Update text
        textContent.html(Math.round(current) + "%");
        
        // Continue animation
        if (current < dataPercent) {
          requestAnimationFrame(function() {
            animate(current + 0.5);
          });
        }
      }
      
      // Start animation when element is in viewport
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !elem.data('animated')) {
            elem.data('animated', true);
            animate(0);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(elem[0]);
    });
  };
})(jQuery);