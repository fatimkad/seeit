$(document).ready(() => {
    let selectedRating = null;

    $('.rating-container').css('display', 'flex');

    $('.button-container button').on('click', function() {
        $('.button-container button').each(function() {
            $(this).css('background-color', '');
            $(this).css('color', '');
        });

        $(this).css('background-color', 'white');
        $(this).css('color', 'hsl(216, 12%, 8%)');

        selectedRating = $(this).text();
    });
    

    $('.submit-btn').on('click', () => {
        if (selectedRating !== null) {
            $('.rating-container').hide();
            $('.selection-container').show();

            $('.selection-container span').text(selectedRating);
        }
    });
});


