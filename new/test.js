$(function(){
    $(".wing").click(function(){
        var getSelection = window.getSelection();
        var selection = getSelection.focusOffset;
        var text = $("span", this).text();
        var newText = "";
        if(selection === 0){
            var f = text.substring(0,1);
            if(f==='m'){
                newText = "qmmmm";
            }
            else{
                newText = "mmmmm";
            }
        }
        else{
            for(i = 0; i < 5; i++){
                if(i < selection){
                    newText += "q";
                }
                else if(i === selection){
                    var f = text.substring(i,i+1);
                    if(f === 'm'){
                        newText += "q";
                    }
                    else{
                        newText += "m"
                    }
                }
                else{
                    newText += "m"
                }
            }
        }
        $("span", this).text(newText);
    });

});

