//placeholder
$.fn.setupPlaceholder = function() {
    return this.each(function(){
        var input = $(this),
            title = input.attr("title"),
            edited = false;

        input.bind("focus", function(e) {
            if (!edited && input.val() == title) {
                input.val("");
            }

            input.removeClass("off").addClass("on");
            edited = true;
        }).bind("blur", function(e) {
            if (input.val() == "" || (!edited && input.val() == title)) {
                input.removeClass("on").addClass("off");
                input.val(title);
                edited = false;
            }
        }); 

        input.parents("form").submit(function(){
            if (!edited && input.val() == title) {
                input.val("");
            }
        }); 

        input.trigger("blur");
    });
};

$(function() {
	$("input:text").setupPlaceholder();
});