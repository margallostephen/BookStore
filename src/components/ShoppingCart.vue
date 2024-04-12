<template>
  <a @click="toggleCart" class="cursor-pointer">
    <div class="flex items-center bg-white">
      <div class="relative scale-75">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="h-8 w-8 text-slate-900">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <span class="absolute -top-2 left-4 rounded-full bg-red-500 p-0.5 px-2 text-sm text-red-50">{{ itemCount }}</span>
      </div>
    </div>
  </a>
  <div v-if="isCartOpen"
    class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
    <div
      class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <svg @click="toggleCart" xmlns="http://www.w3.org/2000/svg"
          class="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
          viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
        <div v-if="itemCount > 0">
          <h4 class="text-md font-bold text-black mt-6">{{ itemCount }} Items</h4>
          <div class="space-y-6 mt-6">
            <div v-for="item in carts" :key="item.id" class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center">
                <img :src="require('@/assets/book_img' + item.book.id + '.jpg')"
                  class="w-16 h-16 p-2 shrink-0 bg-gray-100" />
                <div class="ml-4">
                  <p class="text-sm text-black">{{ item.book.title }}</p>
                  <p class="text-gray-400 text-xs mt-1">Quantity: {{ item.quantity }}</p>
                </div>
              </div>
              <div>
                <span class="text-sm font-semibold text-black mr-5">{{ item.book.price }}</span>
                <svg @click="removeFromCart(index)" xmlns="http://www.w3.org/2000/svg"
                  class="w-5 fill-red-500 inline cursor-pointer" viewBox="0 0 24 24">
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"></path>
                  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div class="flex">
              <span class="text-md font-bold text-black flex-1">Total</span>
              <span class="text-sm font-semibold text-black">${{ cartTotal }}</span>
            </div>
            <div class="flex max-sm:flex-col gap-4 !mt-8">
              <button type="button"
                class="px-6 py-2.5 w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">Check
                out</button>
            </div>
          </div>
        </div>
        <div v-else>
          <h4 class="text-md text-center text-black mt-6">No items in cart</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isCartOpen: false };
  },
  computed: {
    carts() {
      let carts = this.$store.getters.user.cart;
      console.log(carts);
      return carts;
    },
    cartTotal() {
      return this.$store.state.cart.cartTotal;
    },
    itemCount() {
      return this.$store.state.cart.itemCount;
    }
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      console.log(this.isCartOpen)
    },
    removeFromCart(index) {
      this.$store.dispatch('removeToCart', index);
    }
  },
};
</script>