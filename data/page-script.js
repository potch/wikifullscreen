(function() {
    var currentState = localStorage.getItem('fullscreen') === 'true';
    document.body.classList.toggle('fullscreen', currentState);
    document.body.addEventListener('keydown', function(e) {
        if (e.keyCode === 70 && e.ctrlKey && e.shiftKey) {
            document.body.classList.toggle('fullscreen');
            localStorage.setItem('fullscreen', document.body.classList.contains('fullscreen'));
        }
    });

    var resize = document.createElement('pre');
    resize.style = 'position: fixed; bottom: 0; right: 0; transition: .6s opacity ease-out; opacity: 0; margin: 1em;';
    document.body.appendChild(resize);
    var val = document.createTextNode('');
    resize.appendChild(val);

    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      var w = window.outerWidth;
      val.textContent = window.outerWidth + ' x ' + window.outerHeight + ' (' + (3/4 * w | 0) + ')';
      resize.style.opacity = 1;
      resizeTimeout = setTimeout(hide, 3000);
    });

    function hide() {
      resize.style.opacity = 0;
    }
})();
