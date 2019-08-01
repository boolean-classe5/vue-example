<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="posts_container">
              <single_post
                v-for="singolo_post in posts"
                v-bind:key="singolo_post.id"
                v-bind:dati_post="singolo_post"
              ></single_post>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
          return {
            posts: []
          }
        },
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              this.posts = response.data;
            }).catch(error => {
              console.log(error);
            });
        }
    }
</script>
