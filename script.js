const navlinks = document.querySelectorAll(".firstNavItem");

navlinks.forEach((link) => {
  link.addEventListener("click", function () {
    navlinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navs");

  // Function to toggle navigation menu visibility
  function toggleNavMenu() {
    if (navMenu.style.display === "none") {
      navMenu.style.display = "flex";
    } else {
      navMenu.style.display = "none";
    }
  }

  // Add click event listener to the toggle button
  navToggle.addEventListener("click", toggleNavMenu);

  function handleWindowResize() {
    if (window.innerWidth < 767) {
      navMenu.style.display = "none"; // or whatever the initial display value should be
    } else {
      navMenu.style.display = "flex";
    }
  }

  // Call handleWindowResize initially
  handleWindowResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleWindowResize);
});

document.addEventListener("DOMContentLoaded", function () {
  window.onscroll = function () {
    stickyNavbar();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    if (window.pageYOffset <= sticky) {
      navbar.classList.remove("sticky");
    }
  }
});

function scrollToFirstSection() {
  // Get the first section
  var firstSection = document.getElementById("Home");

  // Scroll to the first section
  firstSection.scrollIntoView({ behavior: "smooth" });
}

function QuesToggle(id) {
  var quesInfo = document.getElementById("ques" + id);
  if (quesInfo.classList.contains("quesToggleFunction")) {
    quesInfo.classList.remove("quesToggleFunction");
  } else {
    quesInfo.classList.add("quesToggleFunction");
  }
}

function showDiv(type) {
  var divs = document.querySelectorAll(".courseItem");
  if (type == "all") {
    divs.forEach(function (div) {
      div.style.display = "block";
    });
  } else {
    divs.forEach(function (div) {
      if (div.classList.contains(type)) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }
}
