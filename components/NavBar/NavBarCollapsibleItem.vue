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
      <NuxtLink to="/property-single" class="dropdown-item" activeClass="active"
        >Property Single</NuxtLink
      >
      <NuxtLink to="/blog-single" class="dropdown-item" activeClass="active"
        >Blog Single</NuxtLink
      >
      <NuxtLink to="/agents" class="dropdown-item" activeClass="active"
        >Agents Grid</NuxtLink
      >
      <NuxtLink class="dropdown-item" activeClass="active" to="agent-single"
        >Agent Single</NuxtLink
      >
    </div>
  </li>
</template>
