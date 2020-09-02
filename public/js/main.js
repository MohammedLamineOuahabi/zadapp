"use strict"

$('.posts-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    rtl: true,
    prevArrow: '<button class="prev"><i class="zid zid-arrow"></i></button>',
    nextArrow: '<button class="next"><i class="zid zid-arrow"></i></button>'
});
$('.products-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    rtl: true
});
$(window).on('resize', function(){
    $('.posts-slider').slick('unslick');
    $('.posts-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        rtl: true,
        prevArrow: '<button class="prev"><i class="zid zid-arrow"></i></button>',
        nextArrow: '<button class="next"><i class="zid zid-arrow"></i></button>'
    });
    menuOnLoad();
});
$(window).on("load", function() {
    //menuOnLoad();
    $('.row-info .btn-details').on('click', function(e){
        if($(this).hasClass("collapsed")){
            $(this).parent().parent().removeClass("collapsed");
        }else{
            $(this).parent().parent().addClass("collapsed");
        }
        if($('.collapse', $(this).parent().parent().next()).hasClass("show")){
            $('.collapse', $(this).parent().parent().next()).parent().parent().removeClass("show");
        }else{
            $('.collapse', $(this).parent().parent().next()).parent().parent().addClass("show");
        }
    });
    $('.btn-menu-toggle, .btn-menu-close').on('click', function(e){
        $(this).toggleClass("open");
        $('#page-content-wrapper').toggleClass("menu-closed");
        $('#sidebar-wrapper').toggleClass("open");
        $('.nav-btns-holder .nav-btns.fixed').toggleClass("menu-closed");
    });

    var darkmode = localStorage.getItem('zid-panel-darkmode');
    if(darkmode != "false"){
        $('#btn-mode').addClass('on');
    }

    $('#btn-mode').on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass("on")){
            $('#dark-style-toggle').attr("href","css/dark-mode.css");
            localStorage.setItem('zid-panel-darkmode', true);
        }else{
            $('#dark-style-toggle').attr("href","");
            localStorage.setItem('zid-panel-darkmode', false);
        }
    });
    $('.el-group-switch').on('change', function(e){
        if($(this).is(':checked')){
            $('.el-group[data-group-id="'+$(this).data('group-id')+'"]').removeClass('disabled');
            $('.el-group[data-group-id="'+$(this).data('group-id')+'"] input').removeAttr("disabled");
        }else{
            $('.el-group[data-group-id="'+$(this).data('group-id')+'"]').addClass('disabled');
            $('.el-group[data-group-id="'+$(this).data('group-id')+'"] input').attr("disabled","");
        }
    });
    $('#customCheckAll').on('change', function(e){
        if($(this).is(':checked')){
            $(this).closest('.table').find('.table-item-select').prop("checked", true).change();
        }else{
            $(this).closest('.table').find('.table-item-select').prop("checked", false).change();
        }
    });
    $('.custom-control-input').on('change', function(e){
        if($(this).is(':checked')){
            $(this).parent().parent().parent().addClass("selected");
            $(this).parent().parent().parent().next(".row-details").addClass("selected");
        }else{
            $(this).parent().parent().parent().removeClass("selected");
            $(this).parent().parent().parent().next(".row-details").removeClass("selected");
        }
        tableItemSelected();
    });
    function tableItemSelected(){
        if($('.table tr').hasClass('selected')){
            $('.table-options').removeClass('disabled');
        }else{
            $('.table-options').addClass('disabled');
        }
    }

    $('input.input-date').datepicker();

    $('#customCheck9').on('change', function() {
        if (!$(this).is(':checked')) {
          $("#cancelCustomizeModal").modal({
            backdrop: 'static',
            eyboard: false
          });
        }
      });
      
    $('#btnCancelCustomize').click(function() {
        $('#customCheck9').prop('checked', false);;
    });
    $('#btnKeepCustomize').click(function() {
        $('#customCheck9').prop('checked', true);;
    });

    $('.custom-radio-with-icon input').on('change', function(e){
        $('.custom-radio-with-icon').removeClass('checked');
        if($(this).is(':checked')){
            $(this).closest('.custom-radio-with-icon').addClass('checked');
        }
    });
    $('.custom-radio-with-icon').on('click', function(e){
        $(this).find('input[type="radio"]').prop("checked", true).change();
    });
    $('.dropdown-keep-open').on({
        "shown.bs.dropdown":function(e) { 
            this.closable = true;
            $(this).find(".dropdown-menu").on('click', function() {
                return false;
            });
        },
        "click":function(e) { 
            this.closable = false;
        }
    });
    $('.custom-control > input').on('change', function(e){
        $('.custom-control > input[name="'+$(this).attr("name")+'"]').parent().find('.sub-options input,.sub-options select').attr("disabled", true);
        $('.custom-control > input[name="'+$(this).attr("name")+'"]').parent().find('.sub-options input[type="radio"],.sub-options input[type="checkbox"]').prop('checked', false);
        if($(this).is(':checked')){
            $(this).parent().find('.sub-options input,.sub-options select').removeAttr("disabled");
        }
    });

    $('.items-list .list-item .btn-show').on('click', function(e){
        $(this).parent().parent().parent().toggleClass('disabled');
        if($(this).parent().parent().parent().hasClass('disabled')){
            $(this).children('i').removeClass('fa-eye');
            $(this).children('i').addClass('fa-eye-slash');
        }else{
            $(this).children('i').removeClass('fa-eye-slash');
            $(this).children('i').addClass('fa-eye');
        }
    });

    navVisibility();
    $(window).on('resize scroll', function(){
        navVisibility();
    });
});
function navVisibility(){
    if($('.nav-btns-holder')!='undefined'){
        if ($('.nav-btns-holder').isInViewport()) {
            $('.nav-btns-holder .nav-btns').removeClass("fixed");
            $('.nav-btns-holder').removeClass("empty");
        } else {
            $('.nav-btns-holder .nav-btns').addClass("fixed");
            $('.nav-btns-holder').addClass("empty");
        }
    }
}
$.fn.isInViewport = function() {
    if($(this).length){
        //var elementTop = $(this).offset().top;
        var elementTop = $(this).offset().top + $(this).outerHeight();
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
};

function menuOnLoad(){
    if ($(window).width() < 993) {
        $('.btn-menu-toggle, .btn-menu-close').removeClass("open");
        $('#page-content-wrapper').addClass("menu-closed");
        $('#sidebar-wrapper').removeClass("open");
        $('.nav-btns-holder .nav-btns.fixed').addClass("menu-closed");
    }else {
        $('.btn-menu-toggle, .btn-menu-close').addClass("open");
        $('#page-content-wrapper').removeClass("menu-closed");
        $('#sidebar-wrapper').addClass("open");
        $('.nav-btns-holder .nav-btns.fixed').removeClass("menu-closed");
    }
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

var chart1Options = {
    series: [{
        name: "Sales",
        data: [0.5, 0.75, 0.7, 0.6, 0.4, 0.5, 0.8]
    }],
    chart: {
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#8D5DA7'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    markers: {
        colors: ['#45A787']
     },
    grid: {
        row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['12/10', '10/10', '8/10', '6/10', '3/10', '28/9', '20/9'],
    }
};

var chart2Options = {
    series: [{
        name: "Sales",
        data: [0.4, 0.75, 0.7, 0.6, 0.4, 0.5, 0.6]
    }],
    chart: {
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    colors: ['#45A787'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    markers: {
        colors: ['#8D5DA7']
     },
    grid: {
        row: {
            colors: ['transparent', 'transparent'],
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['12/10', '10/10', '8/10', '6/10', '3/10', '28/9', '20/9'],
    }
};

var chart3Options = {
    series: [44, 55, 67, 10],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'المجموع',
          formatter: function (w) {
            return 249
          }
        }
      }
    }
  },
  legend: {
    show: true,
    position: 'bottom'
  },
  stroke: {
    lineCap: 'round'
  },
  colors: ['#48C687', '#8D5DA7', '#F4B030', '#EA7676'],
  labels: ['مكتملة', 'جاري التوصيل', 'جاري التجهيز', 'ملغية'],
};

if($('#chart1')!='undefined'){
    var chart1 = new ApexCharts(document.querySelector("#chart1"), chart1Options);
    chart1.render();
}

if($('#chart2')!='undefined'){
    var chart2 = new ApexCharts(document.querySelector("#chart2"), chart2Options);
    chart2.render();
}

if($('#chart3')!='undefined'){
    var chart3 = new ApexCharts(document.querySelector("#chart3"), chart3Options);
    chart3.render();
}