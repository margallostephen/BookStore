<template>
  <div class="container mx-auto p-10 flex flex-wrap justify-evenly gap-10">
    <div v-for="book in books" :key="book.id"
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <img class="rounded-t-lg h-96 w-full object-cover" :src="require('@/assets/book_img' + book.id + '.jpg')"
        alt="book cover" />
      <div class="px-6 py-4">
        <h5 class="text-lg font-semibold text-gray-900">
          {{ book.title }}
        </h5>
        <div class="flex items-center justify-between flex-wrap gap-5 mt-5">
          <span class="text-xl font-semibold text-gray-900">{{
            "$" + book.price.toFixed(2)
          }}</span>
          <button @click="addToCart(book)"
            class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none font-semibold text-white rounded-lg text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.getters.books;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    addToCart(book) {
      if (!this.isAuthenticated) {
        this.$notify({
          type: "warn",
          text: "Please login your account first.",
        });

        return this.$router.push("/login");
      }

      this.$store.dispatch("addToCart", book);
    },
  },
};
</script>
