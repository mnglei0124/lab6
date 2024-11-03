export function Footer() {
  const footer = document.createElement("footer");
  footer.className = "bg-black text-white py-5";

  footer.innerHTML = `
    <div class="container-fluid px-md-5">
      <div class="row g-4">
        <div class="col-6 col-md-3">
          <h5 class="mb-3">Legal</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white-50">Terms of Use</a></li>
            <li><a href="#" class="text-white-50">Privacy Policy</a></li>
            <li><a href="#" class="text-white-50">Your US State Privacy Rights</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h5 class="mb-3">Our Sites</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white-50">Nat Geo Home</a></li>
            <li><a href="#" class="text-white-50">Nat Geo Kids</a></li>
            <li><a href="#" class="text-white-50">Nat Geo Family</a></li>
          </ul>
        </div>
        <!-- Add more columns -->
      </div>
      <div class="border-top border-secondary mt-4 pt-4">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0">Copyright © 2024 National Geographic Partners, LLC.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="social-links">
              <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return footer;
}
