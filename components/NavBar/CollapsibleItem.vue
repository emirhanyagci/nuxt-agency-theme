<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="navbarDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Pages
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <NuxtLink to="/property-single" class="dropdown-item"
        >Property Single</NuxtLink
      >
      <NuxtLink to="/blog-single" class="dropdown-item">Blog Single</NuxtLink>
      <NuxtLink to="/agents" class="dropdown-item">Agents Grid</NuxtLink>
      <a class="dropdown-item" href="agent-single.html">Agent Single</a>
    </div>
  </li>
</template>
