export function Header() {
  const header = document.createElement("header");
  header.className = "fixed-top";

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-2">
      <div class="container-fluid px-4" style="max-width: 1400px;">
        <!-- Logo -->
       <a class="navbar-brand" href="#">
          <img src="https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png" 
               alt="National Geographic" 
               height="28">
        </a>
        
        <!-- Right Navigation Items -->
        <div class="d-flex align-items-center gap-4">
          <a href="#" class="nav-link">LOGIN</a>
          <a href="#" class="nav-link">
            <i class="bi bi-search"></i>
          </a>
          <a href="#" class="nav-link">Newsletters</a>
          <a href="#" class="btn btn-dark px-3">SUBSCRIBE</a>
          <button class="btn nav-link d-flex align-items-center">
            MENU
            <i class="bi bi-chevron-down ms-2"></i>
          </button>
        </div>
      </div>
    </nav>
  `;
  {
    /* <a class="navbar-brand" href="#">
          <img src="https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png" 
               alt="National Geographic" 
               height="28">
        </a>
        <span class="ms-2 text-uppercase fw-bold" style="font-size: 14px; letter-spacing: 1px; ">
          National<br>Geographic
        </span> */
  }

  let lastScrollTop = 0;
  const nav = header.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!nav.classList.contains("navbar-transition")) {
      nav.classList.add("navbar-transition");
    }

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      nav.style.transform = "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

  return header;
}
