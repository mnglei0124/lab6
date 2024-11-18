export function LatestContent() {
  const section = document.createElement("section");
  section.className = "latest-content bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center" role="region" aria-labelledby="latest-content-heading">
        <h2 id="latest-content-heading" class="visually-hidden">Latest Content</h2>
        <div class="col-12 col-lg-3" aria-labelledby="todays-picks-heading">
          <h2 class="d-flex align-items-center mb-4" id="todays-picks-heading">
            <span class="yellow-bar me-2"></span>
            <span class="text-white">TODAY'S PICKS</span>
          </h2>
          <!-- Picks List -->
          <div class="picks-list" role="list">
            <!-- Environment Article -->
            <div class="pick-item d-flex mb-4" role="listitem">
              <img src="https://placehold.co/100x100/333/fff?text=Environment" 
                   class="pick-image me-3" alt="Natural disasters">
              <div class="pick-content">
                <span class="category">ENVIRONMENT</span>
                <h3 class="pick-title">Why more natural disasters could trigger a rise in paranormal beliefs</h3>
              </div>
            </div>
            <!-- More articles... -->
          </div>
          <a href="#" class="see-more" aria-label="See more picks">SEE MORE</a>
        </div>
        <!-- Featured Articles Grid -->
        <div class="col-12 col-lg-7" aria-labelledby="featured-articles-heading">
          <h2 id="featured-articles-heading" class="visually-hidden">Featured Articles</h2>
          <div class="row g-4">
            <!-- Main Featured Article -->
            <div class="col-12">
              <div class="featured-article main-feature position-relative" role="article">
                <img src="https://placehold.co/1200x600/333/fff?text=Daylight+Saving" 
                     class="w-100" alt="Daylight saving time">
                <div class="article-content">
                  <span class="category">HISTORY & CULTURE</span>
                  <h2 class="h1">Why daylight saving time exists— at least for now</h2>
                  <button class="btn btn-read" aria-label="Read more about daylight saving time">READ</button>
                </div>
              </div>
            </div>
            <!-- Secondary Featured Articles -->
            <!-- More articles... -->
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
