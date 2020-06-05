
	$(function() {
    $('.topMenuDiv').on('click', function(e) {
        e.preventDefault();
        $('.Menu').each(function() {
            $(this).css('display', 'none');
        });
        var block = $(this).attr('href');
        $(block).css('display', 'block');
    });
});