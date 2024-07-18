<script setup lang="ts"></script>

<template>
  <nav
    id="nav"
    class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top"
  >
    <div class="container">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <NavBarLogo />
      <button
        type="button"
        class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-expanded="false"
      >
        <span class="fa fa-search" aria-hidden="true"></span>
      </button>
      <div
        class="navbar-collapse collapse justify-content-center"
        id="navbarDefault"
      >
        <ul class="navbar-nav">
          <NavBarItem to="/">Home</NavBarItem>
          <NavBarItem to="/about">About</NavBarItem>
          <NavBarItem to="/property">Property</NavBarItem>
          <NavBarItem to="/blog">Blog</NavBarItem>
          <NavBarCollapsibleItem />
          <NavBarItem to="/contact">Contact</NavBarItem>
        </ul>
      </div>
      <button
        type="button"
        class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-expanded="false"
      >
        <span class="fa fa-search" aria-hidden="true"></span>
      </button>
    </div>
  </nav>
</template>
