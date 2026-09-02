// EMTEK s.c. — minimalny skrypt strony (bez zależności)

(function () {
  "use strict";

  // Automatyczny rok w stopce
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Podświetlenie aktywnej strony w nawigacji
  var nav = document.getElementById("site-nav");
  if (nav) {
    var current = window.location.pathname.split("/").pop() || "index.html";

    nav.querySelectorAll("a:not(.btn)").forEach(function (link) {
      var target = (link.getAttribute("href") || "").split(/[?#]/)[0];
      if (!target || target.charAt(0) === "#") return;

      if (target === current) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  // Menu mobilne
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
