function hireTransistion(url) {
    // Overlay div
    const overlay = $('<div class="transition-overlay">Good Choice</div>');
    $('body').append(overlay);
    
    // Show it
    overlay.fadeIn(200);
    
    // Navigate after 1.5 seconds
    setTimeout(() => {
        window.location.href = url;
    }, 1500);
}


