$(function(){

    $(".wod").click(function(){
        var getSelection = window.getSelection();
        var selection = getSelection.focusOffset;
        var text = $(this).text();
        var newText = "";

        for(i = 0; i < 5; i++){
            
            if(i < selection){
                newText += "e";
            }
            else if(i === selection){
                var f = text.substring(i,i+1);
                if(f === 'd'){
                    newText += "e";
                }
                else{
                    newText += "d"
                }
            }
            else{
                newText += "d"
            }
        }

        $(this).text(newText);
    });

});

