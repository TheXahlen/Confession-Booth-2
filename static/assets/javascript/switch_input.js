$("#Switch").click(function() {
	if ($("#Cycle").prop("disabled")) {
	$("#Cycle").prop("disabled", false);
	$("#Submit").prop("disabled", true);
	$('#submit_form').attr("style", "display:none !important");
	$('#cycle_form, #total_display, #all_posts, #confession').attr("style", "visibility: visible !important");
  UpdateDisplay();


	} else {
	$("#Cycle").prop("disabled", true);
	$("#Submit").prop("disabled", false);;
	$('#submit_form').attr("style", "");
	$("#cust_select").attr("style","");
    $('#all_posts, #cust_select, #total_display,#cycle_form, #confession').attr("style", "display:none !important");
    $('#confession_all').empty();
	
	}});
