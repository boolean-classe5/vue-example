<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ dati_post.title }}</h5>
      <p class="card-text">{{ dati_post.body }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['dati_post']
    }
</script>
