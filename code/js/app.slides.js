document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_1 = {
    elements: {
      painContent: "#s1_1_2"
    },
    onEnter: function(slideElement) {
      presentation.bgStyle('bepanthen', 'bg_s1_', 34);
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});

document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_2 = {
    elements: {
      painContent: "#s1_2_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});

document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_3 = {
    elements: {
      painContent: "#s1_3_2"
    },
    interval: 0,
    timeout: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var that = this;
      var counter = 0;
      that.timeout = setTimeout(function() {
        $('.s1_3__child-ass').show(); // we show another picture of child ass and then...

        that.interval = setInterval(function() { // ...we show first four factors of dermatitis.
          counter++;
          $('.s1_3__factor--' + counter).fadeIn(600);

          if (counter >= 4) { // when fist four factors was showed we clear interval...
            clearInterval(that.interval);

            that.timeout = setTimeout(function() { // ...and set timer to show text «Повреждения кожного покрова».
              $('.s1_3__text-block--1').fadeIn(600);

              that.timeout = setTimeout(function() { // ...ant set timer to show text «Проникновение раздражающих веществ».
                $('.s1_3__text-block--2').fadeIn(600);

                that.timeout = setTimeout(function() { // after that we show block with the text «Пеленочный дерматит».
                  $('.s1_3__dermatitis').fadeIn(600);

                  that.timeout = setTimeout(function() { // ...and block with the text «Встречается у 50% детей на первом году жизни».
                    $('.s1_3__big-frame').fadeIn(600);

                    that.interval = setInterval(function() { // and finally we show other four factors.
                      counter++;
                      $('.s1_3__factor--' + counter).fadeIn(600);
                      if (counter >= 8) clearInterval(that.interval);

                    }, 1500);
                  }, 1600);
                }, 3600);
              }, 2600);
            }, 1100);
          }
        }, 1100);
      }, 400);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_3__hidden').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_8 = {
    elements: {
      painContent: "#s1_8_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      $('.s1_8__buttocks-block').resizable({
        handles: 'w',
        minWidth: 151,
        maxWidth: 969,
        resize: function(event, ui) {
          if (ui.size.width > 151) {
            $('.s1_8__buttocks-block-header').fadeIn(200);
            $('.s1_8__healthly-buttocks').fadeIn(200);
            $('.s1_8__chafed-buttocks').fadeIn(200);
          } else {
            $('.s1_8__buttocks-block-header').fadeOut(200);
            $('.s1_8__healthly-buttocks').fadeOut(200);
            $('.s1_8__chafed-buttocks').fadeOut(200);
          }
        }
      });

      $('.s1_8__tube-button').click(function(e) {
        $('.s1_8__text-for-tube').hide();
        $(this).hide();
        $('.s1_8__liniment').fadeIn(1000);
      });

      $('.s1_8__liniment').draggable();

      $('.s1_8__childrens-ass').droppable({
        over: function(e, ui) {

          $(this).parent().css('opacity', function(i, val) {
            if (val <= 0) return;
            return (val - 0.1); 
          });
          
          ui.draggable.animate({
            'width': '-=12px',
            'height': '-=12px',
            'opacity': '-=0.12'
          });
        }
      });
    },
    onExit: function(slideElement) {
      $('.s1_8__buttocks-block').resizable('destroy');
      $('.s1_8__liniment').draggable('destroy');
      $('.s1_8__childrens-ass').droppable('destroy');
      $('.s1_8__tube-button').unbind('click');
      $('.s1_8__buttocks-block').removeAttr('style');
      $('.s1_8__buttocks-block-header').removeAttr('style');
      $('.s1_8__healthly-buttocks').removeAttr('style');
      $('.s1_8__chafed-buttocks').removeAttr('style');
      $('.s1_8__tube-button').removeAttr('style');
      $('.s1_8__text-for-tube').removeAttr('style');
      $('.s1_8__liniment').removeAttr('style');
      $('.s1_8__chafed-buttocks').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_9 = {
    elements: {
      painContent: "#s1_9_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var tubeClicks = 0;
      $('.s1_9__tube-button').click(function(e) {
        tubeClicks++;
        if (tubeClicks > 3) return;
        $('.s1_9__skin-block--' + tubeClicks).fadeIn(600);
        $('.s1_9__list-block').hide();
        $('.s1_9__list-block--' + tubeClicks).show();
      });
    },
    onExit: function(slideElement) {
      $('.s1_9__skin-block').removeAttr('style');
      $('.s1_9__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_10 = {
    elements: {
      painContent: "#s1_10_2"
    },
    timeout: 0,
    interval: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;
      var that = this;

      this.timeout = setTimeout(function() {
        // $('.s1_10__skin-block').css('background-image', 'url("content/img/bepanthen/bepanthen_10/bepanthen_10_2.jpg")');
        $('.s1_10__list-block').css('height', 145);
      }, 400);

      this.interval = setInterval(function() {
        counter++;

        switch (counter) {
          case 1:
            listBlockHeight = 256;
            break;
          case 2:
            listBlockHeight = 335;
            break;
          case 3:
            listBlockHeight = 420;
            break;
          case 4:
            listBlockHeight = 559;
            clearInterval(that.interval);
        }

        $('.s1_10__list-block').css('height', listBlockHeight);
      }, 3000);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_10__skin-block').removeAttr('style');
      $('.s1_10__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_11 = {
    elements: {
      painContent: "#s1_11_2"
    },
    timeout: 0,
    interval: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;
      var that = this;

      this.timeout = setTimeout(function() {
        $('.s1_11__list-block').css('height', 75);
      }, 400);

      this.interval = setInterval(function() {
        counter++;

        switch (counter) {
          case 1:
            listBlockHeight = 170;
            break;
          case 2:
            listBlockHeight = 234;
            break;
          case 3:
            listBlockHeight = 312;
            clearInterval(that.interval);
        }

        $('.s1_11__list-block').css('height', listBlockHeight);
      }, 3000);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_11__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_16 = {
    elements: {
      painContent: "#s1_16_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var checker1 = false;
      var checker2 = false;

      $('.s1_16__resizable').resizable({
        handles: 'n',
        minHeight: 1,
        maxHeight: 224,
        resize: function(e, ui) {
          var percent = Math.round(ui.size.height / 32 * 10) + '%';
          ui.position.top = ui.originalPosition.top;
          ui.element.prev('.s1_16__percents').html(percent);
        },
        stop: function(e, ui) {
          var isFirstGraph = ui.element.hasClass('s1_16__resizable--1');
          var percent;
          var height;

          if (isFirstGraph) {
            height = 211;
            percent = '66%';
            checker1 = true;
          } else {
            height = 3;
            percent = '1%';
            checker2 = true;
          }

          if (checker1 && checker2) {
            $('.s1_16__arrow').fadeOut();
          }

          setTimeout(function() {
            ui.element
              .css('height', height)
              .prev('.s1_16__percents').html(percent);
          }, 600);
        }
      });
    },
    onExit: function(slideElement) {
      $('.s1_16__resizable')
        .resizable('destroy')
        .removeAttr('style')
        .prev('.s1_16__percents').html('?');
      $('.s1_16__arrow').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_17 = {
    elements: {
      painContent: "#s1_17_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');

      $('.s1_17__resizable').resizable({
        handles: 'n',
        minHeight: 1,
        maxHeight: 264,
        resize: function(e, ui) {
          // var percent = Math.round(ui.size.height / 37.5 * 10);
          ui.position.top = ui.originalPosition.top;
          ui.element.prevAll('.s1_17__percents').html('');
        },
        stop: function(e, ui) {
          $('.s1_17__graph').fadeOut();
          $('.s1_17__result--1').fadeIn();
          // $('.s1_17__percents').html('');
        }
      });
    },
    onExit: function(slideElement) {
      $('.s1_17__resizable')
        .resizable('destroy')
        .removeAttr('style')
        .prevAll('.s1_17__percents').html('?');
      $('.s1_17__result--1').removeAttr('style');
      $('.s1_17__graph').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_18 = {
    elements: {
      painContent: "#s1_18_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_19 = {
    elements: {
      painContent: "#s1_19_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_20 = {
    elements: {
      painContent: "#s1_20_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      $('.s1_20__triangle-button').click(function(e) {
        $('.s1_20__triangles-block').show();
      });
      $('.s1_20__square-button').click(function(e) {
        $('.s1_20__squares-block').show();
      });
      $('.s1_20__rhomb-button').click(function(e) {
        $('.s1_20__rhombs-block').show();
      });
    },
    onExit: function(slideElement) {
      $('.s1_20__triangles-block').removeAttr('style');
      $('.s1_20__squares-block').removeAttr('style');
      $('.s1_20__rhombs-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_21 = {
    elements: {
      painContent: "#s1_21_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      $('.s1_21__triangle-button').click(function(e) {
        $('.s1_21__triangles-block').show();
      });
      $('.s1_21__square-button').click(function(e) {
        $('.s1_21__squares-block').show();
      });
      $('.s1_21__rhomb-button').click(function(e) {
        $('.s1_21__rhombs-block').show();
      });
    },
    onExit: function(slideElement) {
      $('.s1_21__triangles-block').removeAttr('style');
      $('.s1_21__squares-block').removeAttr('style');
      $('.s1_21__rhombs-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_22 = {
    elements: {
      painContent: "#s1_22_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;

      $('.s1_22__tube-button').click(function(e) {
        counter++;

        if (counter > 3) return;

        switch (counter) {
          case 1:
            listBlockHeight = 113;
            break;
          case 2:
            listBlockHeight = 230;
            break;
          case 3:
            listBlockHeight = 344;
        }

        $('.s1_22__list-block').css('height', listBlockHeight);
      });
    },
    onExit: function(slideElement) {
      $('.s1_22__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_23 = {
    elements: {
      painContent: "#s1_23_2"
    },
    timeout: 0,
    interval: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;
      var that = this;

      this.timeout = setTimeout(function() {
        $('.s1_23__list-block').css('height', 215);
      }, 400);

      this.interval = setInterval(function() {
        counter++;

        switch (counter) {
          case 1:
            listBlockHeight = 330;
            break;
          case 2:
            listBlockHeight = 444;
            break;
          case 3:
            listBlockHeight = 523;
            clearInterval(that.interval);
        }

        $('.s1_23__list-block').css('height', listBlockHeight);
      }, 3000);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_23__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_24 = {
    elements: {
      painContent: "#s1_24_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_29 = {
    elements: {
      painContent: "#s1_29_2"
    },
    timeout: 0,
    interval: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;
      var that = this;

      this.timeout = setTimeout(function() {
        $('.s1_29__list-block').css('height', 96);
      }, 400);

      this.interval = setInterval(function() {
        counter++;

        switch (counter) {
          case 1:
            listBlockHeight = 150;
            break;
          case 2:
            listBlockHeight = 234;
            break;
          case 3:
            listBlockHeight = 285;
            break;
          case 4:
            listBlockHeight = 338;
            break;
          case 5:
            listBlockHeight = 383;
            clearInterval(that.interval);
        }

        $('.s1_29__list-block').css('height', listBlockHeight);
      }, 3000);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_29__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_30 = {
    elements: {
      painContent: "#s1_30_2"
    },
    timeout: 0,
    interval: 0,
    onEnter: function(slideElement) {
      presentation.prev('empty');
      var counter = 0;
      var listBlockHeight;
      var that = this;

      this.timeout = setTimeout(function() {
        $('.s1_30__list-block').css('height', 57);
      }, 400);

      this.interval = setInterval(function() {
        counter++;

        switch (counter) {
          case 1:
            listBlockHeight = 144;
            break;
          case 2:
            listBlockHeight = 191;
            break;
          case 3:
            listBlockHeight = 241;
            break;
          case 4:
            listBlockHeight = 288;
            break;
          case 5:
            listBlockHeight = 368;
            clearInterval(that.interval);
        }

        $('.s1_30__list-block').css('height', listBlockHeight);
      }, 3000);
    },
    onExit: function(slideElement) {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      $('.s1_30__list-block').removeAttr('style');
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_31 = {
    elements: {
      painContent: "#s1_31_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_32 = {
    elements: {
      painContent: "#s1_32_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_33 = {
    elements: {
      painContent: "#s1_33_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
document.addEventListener('presentationInit', function() {
  var slide = app.slide.s1_34 = {
    elements: {
      painContent: "#s1_34_2"
    },
    onEnter: function(slideElement) {
      presentation.prev('empty');
    },
    onExit: function(slideElement) {
    }
  };
});
