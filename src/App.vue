<template>
  <header class="border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif]">
    <div class="container mx-auto flex flex-wrap items-center justify-between gap-x-2 min-h-[50px] max-lg:gap-y-6">
      <a href="javascript:void(0)"><img src="./assets/Logo.png" alt="logo" class="w-36" />
      </a>
      <button id="toggle" class="lg:hidden ml-auto">
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <div class="flex lg:mx-auto max-lg:w-full" :class="{ hidden: this.currentRoute !== '/' }">
        <div
          class="flex justify-start w-fit xl:w-80 max-xl:w-full px-6 py-3 rounded-full border-0 p-1.5 outline outline-transparent shadow-sm ring-1 ring-inset ring-gray-300 focus-within:outline-indigo-600">
          <input type="text" placeholder="Search product..."
            class="w-full text-sm bg-transparent rounded outline-none pr-2" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="cursor-pointer fill-gray-400">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>
      </div>
      <ul id="collapseMenu"
        class="items-center lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:pb-4 max-lg:w-full">
        <li class="max-lg:border-b max-lg:py-2 px-3" v-if="!isAuthenticated">
          <a @click="$router.push('/register')"
            class="hover:text-indigo-600 block font-semibold text-[15px] cursor-pointer">Register</a>
        </li>
        <li class="max-lg:border-b max-lg:py-2 px-3" v-if="!isAuthenticated">
          <a @click="$router.push('/login')"
            class="hover:text-indigo-600 block font-semibold text-[15px] cursor-pointer">Login</a>
        </li>
        <li :class="{ hidden: this.currentRoute == '/' }" class="max-lg:border-b max-lg:py-2 px-3">
          <a @click="$router.push('/')"
            class="hover:text-indigo-600 block font-semibold text-[15px] cursor-pointer">Books</a>
        </li>
        <li :class="{ hidden: this.currentRoute == '/cart' }" class="max-lg:border-b max-lg:py-2 px-3"
          v-if="isAuthenticated">
          <ShoppingCart />
        </li>
        <li class="max-lg:border-b max-lg:py-2 px-3" v-if="isAuthenticated">
          <a class="cursor-pointer">
            <div class="flex items-center bg-white">
              <div class="relative scale-75">
                <svg class="h-8 w-8 text-slate-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </header>
  <router-view />
  <notifications position="bottom right" ignoreDuplicates />
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
  data() {
    return {
      currentRoute: "",
    };
  },
  components: {
    ShoppingCart,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  watch: {
    $route(to) {
      this.currentRoute = to.path;
      console.log(this.currentRoute);
    },
  },
  mounted() {
    const toggleBtn = document.getElementById("toggle");
    const collapseMenu = document.getElementById("collapseMenu");

    toggleBtn.addEventListener("click", () => {
      collapseMenu.style.display =
        collapseMenu.style.display === "block" ? "none" : "block";
    });
  },
};
</script>
