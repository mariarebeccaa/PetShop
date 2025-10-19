<template>
  <header class="site-header">
    <nav class="nav">
      <div class="logo-mark">🐾</div>

      <ul class="nav-links" role="navigation" aria-label="Main">
        <li>
          <router-link to="/" class="nav-link" active-class="active" exact>home</router-link>
        </li>
        <li>
          <router-link to="/browse" class="nav-link" active-class="active">browse</router-link>
        </li>
        <li>
          <router-link to="/sell" class="nav-link" active-class="active">post ad</router-link>
        </li>
      </ul>

      <button class="cta">login</button>
    </nav>
  </header>
</template>

<script setup>
// Nu mai e nevoie de props sau computed — router-ul gestionează ruta activă automat.
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 0.08rem 1rem;
  background: white;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1200px;
  margin-top: -40px;
  padding: 0.05rem 0;
}

.logo-mark {
  font-size: 2rem;
  font-weight: 900;
}

.nav-links {
  display: flex;
  gap: 1.9rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 1.35rem;
  font-weight: 900;
  color: inherit;
  text-decoration: none;
  padding: 0.25rem 0;
  display: inline-block;
}

.active {
  color: #a7a1c9;
}

.cta {
  background: #a7a1c9;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: none;
}
</style>
