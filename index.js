$("#scrollable").scroll(function(){
    var currentDot = 1;
    $('.project').each(function(i, obj) {
        var rect = obj.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            currentDot = $(obj).attr("proj-num");
        }
    })
    $('.progress-dot').each(function(i, obj) {
        if ($(obj).attr('id') == currentDot) {
            $("#" + $(obj).attr('id')).attr("r", 10);
        } else {
            $("#" + $(obj).attr('id')).attr("r", 4);
        }
    })
    $("#timeline").css("opacity", 1 - $("#scrollable").scrollTop() / 250);
    $("#progress").css("opacity", $("#scrollable").scrollTop() / 200);
    $("#name").css("opacity", $("#scrollable").scrollTop() / 500);
});