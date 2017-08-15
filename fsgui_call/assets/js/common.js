var MSG_OK = 0;
var MSG_ERR = -1;
var MSG_REDIRECT = -2;
    
jQuery(function($){
        
    //ajaxæäº¤
    $('.ajax-form').on('submit', function() {
        var url = $('.ajax-form').attr('action') + "?_t=" + Math.random();
        $('.alert').addClass('hide');
        $('button[type="submit"]').attr('disabled', true);
        if ($('#editor')) {
            $("input[name='editor_content']").val($('#editor').html());
        }
        $.post(url, $(".ajax-form").serialize(), function (out) {
            if (out.status == MSG_OK) { // æˆåŠŸ
                if (out.redirect != "") {
                    window.location.href = out.redirect;
                } else {
                    window.location.reload();
                }
            } else if (out.status == MSG_REDIRECT) {
                window.location.href = out.redirect;
            } else if (out.status == MSG_ERR) {
                if ($('.alert')) {
                    $('.alert').removeClass('hide');
                    $('.alert').html(out.msg);
                } else {
                    alert(out.msg);
                }
                $('button[type="submit"]').removeAttr('disabled');
            }
        });
        return false;
    });
    
    $.datepicker.regional['zh-CN'] = {
        closeText: 'å…³é—­',
        prevText: '<ä¸Šæœˆ',
        nextText: 'ä¸‹æœˆ>',
        currentText: 'ä»Šå¤©',
        monthNames: ['ä¸€æœ?,'äºŒæœˆ','ä¸‰æœˆ','å››æœˆ','äº”æœˆ','å…­æœˆ',
            'ä¸ƒæœˆ','å…«æœˆ','ä¹æœˆ','åæœˆ','åä¸€æœ?,'åäºŒæœ?],
        monthNamesShort: ['ä¸€','äº?,'ä¸?,'å›?,'äº?,'å…?,
            'ä¸?,'å…?,'ä¹?,'å?,'åä¸€','åäºŒ'],
        dayNames: ['æ˜ŸæœŸæ—?,'æ˜ŸæœŸä¸€','æ˜ŸæœŸäº?,'æ˜ŸæœŸä¸?,'æ˜ŸæœŸå›?,'æ˜ŸæœŸäº?,'æ˜ŸæœŸå…?],
        dayNamesShort: ['å‘¨æ—¥','å‘¨ä¸€','å‘¨äºŒ','å‘¨ä¸‰','å‘¨å››','å‘¨äº”','å‘¨å…­'],
        dayNamesMin: ['æ—?,'ä¸€','äº?,'ä¸?,'å›?,'äº?,'å…?],
        weekHeader: 'å‘?,
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: 'å¹?
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);


    /** æ—¥åŽ†æŽ§ä»¶ **/
    $( "#start_date, #end_date" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: false,
        dateFormat: 'yy-mm-dd',
        changeYear:true,
        changeMonth:true
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /*$('.delete').click(function () {
        return confirm('ç¡®å®šè¦åˆ é™¤è¿™æ¡è®°å½•å—ï¼?);
    });*/
    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function(title) {
            var $title = this.options.title || '&nbsp;'
            if( ("title_html" in this.options) && this.options.title_html == true )
                title.html($title);
            else title.text($title);
        }
    }));
    $( ".delete_confirm" ).on('click', function(e) {
        var del_url = $(this).attr('href');
        e.preventDefault();
        $( "#dialog-confirm" ).removeClass('hide').dialog({
            resizable: false,
            width: '320',
            modal: true,
            title: "<div class='widget-header'><h4 class='smaller'><i class='ace-icon fa fa-exclamation-triangle red'></i> åˆ é™¤ç¡®è®¤</h4></div>",
            title_html: true,
            buttons: [
                {
                    html: "<i class='ace-icon fa fa-trash-o bigger-110'></i>&nbsp; ç¡®è®¤",
                    "class" : "btn btn-danger btn-sm",
                    click: function() {
                        $( this).dialog('close');
                        window.location.href = del_url;
                    }
                }
                ,
                {
                    html: "<i class='ace-icon fa fa-times bigger-110'></i>&nbsp; å–æ¶ˆ",
                    "class" : "btn btn-sm",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ]
        });
    });


});
 /** å·¦ä¾§å¯¼èˆª **/
 jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};



function leftmenu(event){
  //var tlen = $(".submenu").length;
   //alert(tlen);
   $(".open").click(function(){      
      $(this).children(".submenu").show().parent().siblings().children(".submenu").hide();
    });
   $(".submenu>li a").click(function(){
    var inx = $(this).closest(".open").index();
    $.cookie("leftclick",inx);
    //alert(inx);
   });
    if(event){
     var ssa = $.cookie("leftclick",0);
    }else{
     var ssa =  $.cookie("leftclick");
    } 
    $(".submenu").eq(ssa).slideDown().siblings().hide();
}
 $(function(){
   leftmenu();
 });