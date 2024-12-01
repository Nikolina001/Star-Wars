document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.scrollY;
        var distance = targetPosition - startPosition - 150;
        var duration = 800; 
        var start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          var progress = timestamp - start;
          var scrollPosition = easeInOutQuad(
            progress,
            startPosition,
            distance,
            duration
          );
          window.scrollTo(0, scrollPosition);
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }

        window.requestAnimationFrame(step);
      }
    });
  }

 
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
});
