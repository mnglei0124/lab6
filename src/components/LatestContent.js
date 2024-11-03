export function LatestContent() {
  const section = document.createElement("section");
  section.className = "latest-content bg-black text-white py-5";

  section.innerHTML = `
    <div class="container-fluid px-md-5">
      <div class="row justify-content-center">
        <!-- Today's Picks Column -->
        <div class="col-12 col-lg-3">
          <h2 class="d-flex align-items-center mb-4">
            <span class="yellow-bar me-2"></span>
            <span class="text-white">TODAY'S PICKS</span>
          </h2>
          
          <div class="picks-list">
            <!-- Environment Article -->
            <div class="pick-item d-flex mb-4">
              <img src="https://placehold.co/100x100/333/fff?text=Environment" 
                   class="pick-image me-3" alt="Natural disasters">
              <div class="pick-content">
                <span class="category">ENVIRONMENT</span>
                <h3 class="pick-title">Why more natural disasters could trigger a rise in paranormal beliefs</h3>
              </div>
            </div>

            <!-- Lifestyle Article -->
            <div class="pick-item d-flex mb-4">
              <img src="https://placehold.co/100x100/333/fff?text=Lifestyle" 
                   class="pick-image me-3" alt="Rain jackets">
              <div>
                <span class="category">LIFESTYLE</span>
                <h3 class="pick-title">These are the 7 best rain jackets for men</h3>
              </div>
            </div>

            <!-- Science Articles -->
            <div class="pick-item d-flex mb-4">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Twin stranger">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title">Do you have a twin stranger? The surprising science behind doppelgängers</h3>
              </div>
            </div>

            <!-- More Science Articles -->
            <div class="pick-item d-flex mb-4">
              <img src="https://placehold.co/100x100/333/fff?text=Science" 
                   class="pick-image me-3" alt="Neanderthals">
              <div>
                <span class="category">SCIENCE</span>
                <h3 class="pick-title">Why did Neanderthals and humans bury their dead? Scientists have a new theory</h3>
              </div>
            </div>

            <!-- Travel Article -->
            <div class="pick-item d-flex mb-4">
              <img src="https://placehold.co/100x100/333/fff?text=Travel" 
                   class="pick-image me-3" alt="Pet travel">
              <div>
                <span class="category">TRAVEL</span>
                <h3 class="pick-title">Traveling with your pet for the holidays? Here are some helpful tips.</h3>
              </div>
            </div>
          </div>

          <a href="#" class="see-more">SEE MORE</a>
        </div>

        <!-- Featured Articles Grid -->
        <div class="col-12 col-lg-7">
          <div class="row g-4">
            <!-- Main Featured Article -->
            <div class="col-12">
              <div class="featured-article main-feature position-relative">
                <img src="https://placehold.co/1200x600/333/fff?text=Daylight+Saving" 
                     class="w-100" alt="Daylight saving time">
                <div class="article-content">
                  <span class="category">HISTORY & CULTURE</span>
                  <h2 class="h1">Why daylight saving time exists— at least for now</h2>
                  <button class="btn btn-read">READ</button>
                </div>
              </div>
            </div>

            <!-- Secondary Featured Articles -->
            <div class="col-12 col-md-6">
              <div class="featured-article secondary-feature position-relative">
                <img src="https://placehold.co/600x400/333/fff?text=Winter" 
                     class="w-100" alt="Winter">
                <div class="article-content">
                  <span class="category">HISTORY & CULTURE</span>
                  <h3>The secret to thriving in the winter? Embrace it, don't fight it</h3>
                  <button class="btn btn-read">READ</button>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="featured-article secondary-feature position-relative">
                <img src="https://placehold.co/600x400/333/fff?text=Photography" 
                     class="w-100" alt="Icy waters">
                <div class="article-content">
                  <span class="category">PHOTOGRAPHY</span>
                  <h3>How images saved from icy waters made this crew legends</h3>
                  <button class="btn btn-read">READ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
