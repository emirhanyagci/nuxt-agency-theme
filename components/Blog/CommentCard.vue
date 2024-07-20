<script setup>
const { isSubComment } = defineProps(["isSubComment"]);
</script>
<template>
  <li :class="{ 'comment-children': isSubComment }">
    <div class="comment-avatar">
      <img src="/img/author-1.jpg" alt="" />
    </div>
    <div class="comment-details">
      <h4 class="comment-author">Oliver Colmenares</h4>
      <span>18 Sep 2017</span>
      <p class="comment-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        reprehenderit, provident cumque ipsam temporibus maiores quae.
      </p>
      <a href="3">Reply</a>
    </div>
  </li>
</template>
