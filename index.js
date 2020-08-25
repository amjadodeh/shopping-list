function oneFunctionToRuleThemAll () {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        const newItem = '<li><span class="shopping-item">' + $('#shopping-list-entry').val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>';
        $('.shopping-list').append(newItem);
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).parentsUntil('.shopping-list').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

$(oneFunctionToRuleThemAll);