$(function(){
    $(".wing").click(function(){
        var selection = window.getSelection();
        alert(selection.focusOffset);
    });
});

