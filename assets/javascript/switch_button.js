  $(function(){
           $('#Switch').click(function() {
       if($("#Cycle").prop("disabled")){
       $("#Cycle").prop("disabled",false);
       $("#Submit").prop("disabled",true);
       $('#submit_form').attr("style", "display: none !important");
       $('#cycle_form').attr("style", "visibility: visible !important");
       }
       else{
       $("#Cycle").prop("disabled",true);
       $("#Submit").prop("disabled",false);
       $('#submit_form').attr("style", "visibility: visible !important");
       $('#cycle_form').attr("style", "display:none !important");
       }});});
