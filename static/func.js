function clearStatusForTab(tab) {
    tab.removeClass('tab-bar-item-isActive');
    tab.removeClass('tab-bar-item-mouseLeft');
    tab.removeClass('tab-bar-item-mouseOver');
    tab.removeClass('tab-bar-item');
}

function scrollToTab(element) {
    $('#tab-bar').animate({scrollLeft: element.offset().left}, 800);
}

function tabClicked(element) {
    for (i = 0; i < tabItems.length; i ++ ) {
        clearStatusForTab(tabItems[i]);
        tabItems[i].addClass('tab-bar-item');
    }
    element.addClass('tab-bar-item-isActive');
    scrollToTab(element);
}

function mouseMove(element) {
    if (!element.hasClass('tab-bar-item-isActive')) {
        for (i = 0; i < tabItems.length; i ++) {
            if (tabItems[i].hasClass('tab-bar-item-isActive')) {
                clearStatusForTab(tabItems[i]);
                tabItems[i].addClass('tab-bar-item-mouseLeft');
            }
            tabItems[i].addClass('tab-bar-item');
        }
        clearStatusForTab(element);
        element.addClass('tab-bar-item-mouseOver');
    }
}

function mouseOut(element) {
    if (!element.hasClass('tab-bar-item-mouseLeft') && !element.hasClass('tab-bar-item-isActive')) {
        for (i = 0; i < tabItems.length; i ++ ) {
            if (tabItems[i].hasClass('tab-bar-item-mouseLeft')) {
                clearStatusForTab(tabItems[i]);
                tabItems[i].addClass('tab-bar-item-isActive');
            }
        }
        clearStatusForTab(element);
        element.addClass('tab-bar-item');
    }
}

function showPanel(element) {
    // Show modal here
}
