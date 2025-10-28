<script setup>
import dogTop from '../assets/images/dog1.png'
import dogBottom from '../assets/images/dog2_.png'
import catCenter from '../assets/images/cat3.png'
import parrotCenter from '../assets/images/parrot.png'
</script>

<template>
  <section class="hero" role="region" aria-label="Hero">
    <!-- Background rectangle that spans full viewport width and sits behind the hero content -->
    <div class="hero-rect" aria-hidden="true"></div>
    <div class="hero-left">
      <h1>
        Looking for a <span class="accent">good</span> time?
      </h1>
      <p class="lead">
        Now is the time to open your heart and home to an animal in need.
      </p>

      <div class="hero-actions">
        <button class="primary">Get a pet</button>
        <button class="secondary">Post adoption</button>
      </div>
    </div>

    <div class="hero-right" aria-hidden="true">
      <div class="shape shape-top"></div>
      <div class="shape shape-bottom"></div>
      <div class="shape shape-center"></div>

      <img class="cat cat-center" :src="catCenter" alt="Dog on yellow blob" loading="lazy" />
      <img class="dog dog-top" :src="dogTop" alt="Dog on purple blob" loading="lazy" />
      <img class="dog dog-bottom" :src="dogBottom" alt="Decorative" loading="lazy" />
      <img class="parrot parrot-center" :src="parrotCenter" alt="Parrot on blue blob" loading="lazy" />
    </div>
  </section>

  <!-- Browse anchor + clickable cards that route to /category/:slug -->
  <section id="browse-section" class="browse-categories" aria-label="Browse by category">
    <div class="container">
      <h2>Browse by category</h2>
      <div class="cards">
        <router-link :to="{ name: 'category', params: { slug: 'dogs' } }" class="card">
          <strong>Dogs</strong><small>84 posts</small>
        </router-link>

        <router-link :to="{ name: 'category', params: { slug: 'cats' } }" class="card">
          <strong>Cats</strong><small>64 posts</small>
        </router-link>

        <router-link :to="{ name: 'category', params: { slug: 'domestic' } }" class="card">
          <strong>Domestic animals</strong><small>22 posts</small>
        </router-link>

        <router-link :to="{ name: 'category', params: { slug: 'birds' } }" class="card">
          <strong>Birds / Fishes</strong><small>16 posts</small>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
}

/* Full-width white rectangle behind the hero that visually connects to the browse area */
.hero-rect {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -2rem;
  bottom: -12rem;
  width: 100vw;
  background: #f4f5f3;
  z-index: 0;
}

/* Left column (text) */
.hero-left { flex: 1; z-index: 10; }
h1 { font-size: 3rem; margin: 0 0 1rem; }
.accent { color: #8b84ff; }
.lead { color: rgba(0,0,0,0.65); max-width: 540px; }

/* Buttons */
.hero-actions { display:flex; gap:1rem; margin-top:1.25rem; }
.primary {
  background: #8b84ff;
  color: #fff;
  padding: 0.8rem 1.25rem;
  border-radius: 999px;
  border: none;
  font-weight:700;
}
.secondary {
  background: transparent;
  color: #8b84ff;
  border: 2px solid #8b84ff;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  font-weight:700;
}

/* Right column (decorative shapes + images) */
.hero-right {
  flex: 1;
  min-height: 360px;
  position: relative;
  transform-origin: center top;
}

/* purple blob (top-right) */
.shape-top {
  position: absolute;
  right: 0;
  top: 90px;
  width: 380px;
  height: 360px;
  background: #e7d7ff;
  border-radius: 10px 10px 10px 600px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  z-index: 1;
}

/* yellow/orange rounded shape (bottom-right) */
.shape-bottom {
  position: absolute;
  right: 200px;
  bottom: -190px;
  width: 320px;
  height: 280px;
  background: #fde59b;
  border-radius: 10px 600px 0px 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  z-index: 1;
}

.cat {
  position: absolute;
  object-fit: contain;
  z-index: 5;
  border-radius: 0px;
  margin-top: 339px;

}

.cat-center {
    width: 250px;
    height: 230px;
    right: -60px;
    border-radius: 0px;
    z-index: 5;
    transform: translateY(0);
}

/* dog images positioned over shapes */
.dog {
  position: absolute;
  object-fit: contain;
  z-index: 5;
  margin-top: 10%;
}

/* big dog on the purple blob */
.dog-top {
  right: 100px;
  bottom: 154px;
  width: 260px;
  height: 300px;
  border-radius: 28px;
  /* transform: translateY(0); */
}

/* small dog on the yellow blob */
.dog-bottom {
  right: 326px;
  bottom: -203px;
  width: 318px;
  height: 367px;
  border-radius: 28px;
  /* transform: translateY(0); */
}

.parrot-center {
  position: absolute;
  object-fit: contain;
  z-index: 5;
  border-radius: 0px;
  width: 150px;
  height: 150px;
  right: 203px;
  top: 172px;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 900px) and (min-width: 670px) {
  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-right {
    position: relative;
    width: 100%;
    min-height: 420px;
  }

  .shape-top {
    top: 70px;
    right:8%;
    /* transform: translateX(50%); */
    width: 260px;
    height: 240px;
  }

  .dog-top {
    bottom: 72%;
    right: -1%;     /* proporțional cu lățimea ferestrei */
    width: 220px;
    height: auto;
  }

  .shape-bottom {
    bottom: -60px;
    right: 54%;
    transform: translateX(50%);
    width: 240px;
    height: 270px;
  }

  .dog-bottom {
    position: absolute;
    width: 200px;
    height: auto;
    right: 60%;
    bottom: -75px;
    /* transform: translate(50%, 20%); */
  }

  .cat-center {
    position: absolute;
    width: 180px;
    height: auto;
    right: -0%;
    bottom: -80px;
  }

  .parrot-center {
    width: 100px;
    height: 100px;
    right: 50%;
    top: 120px;
  }
}

@media (max-width: 1100px) and (min-width: 901px) {
  .hero-right {
    transform: scale(0.9);
    transform-origin: top right;
  }

  .dog-top {
    bottom: 62%;
    right: 5vw;   
    width: 220px;
    height: auto;
  }
  .dog-bottom {
    right: 240px;
    bottom: -175px;
    width: 318px;
    height: 347px;
  }

  .cat-center{
    width: 250px;
    height: 200px;
    right: -72px;
  }
  .shape-top {
    width: 320px;
    height: 300px;
  }

  .shape-bottom {
    right: 10vw;
    bottom: -160px;
    width: 280px;
    height: 260px;
  }
}

@media (max-width: 669px) {
  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-right {
    position: relative;
    width: 100%;
    min-height: 420px;
  }

  .shape-top {
    top: 85px;
    right: -9%;
    width: 260px;
    height: 240px;
  }

  .dog-top {
    bottom: 69%;
    right: -1%;
    width: 220px;
    height: auto;
  }

  .shape-bottom {
    bottom: -60px;
    right: 54%;
    transform: translateX(50%);
    width: 240px;
    height: 270px;
  }

  .dog-bottom {
    position: absolute;
    width: 200px;
    height: auto;
    right: 60%;
    bottom: -75px;
  }

  .cat-center {
    position: absolute;
    width: 180px;
    height: auto;
    right: -21%;
    bottom: -80px;
  }

  .parrot-center {
    width: 100px;
    height: 100px;
    right: 50%;
    top: 120px;
  }
}

.browse-categories {
  padding: 10rem 1.5rem;
  background: #fff;
}
.browse-categories .container {
  max-width: 1200px;
  margin: 0 auto;
}
.browse-categories h2 {
  font-size: 1.9rem;
  margin-bottom: 1.25rem;
  text-align: left;
}
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.card {
  display: block;
  text-decoration: none;
  color: inherit;
  background:  #e7d7ff;
  border-radius: 5px;
  padding: 1.25rem;
  min-height: 120px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
}
.card strong { display:block; font-size:1.5rem; margin-bottom:0.35rem; color: rgba(89, -5, 2, 0.50);}
.card small { color: black; }

@media (max-width: 900px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
  .browse-categories h2 { text-align: center; }
}

@media (max-width: 480px) {
  .cards { grid-template-columns: 1fr; }
}
</style>