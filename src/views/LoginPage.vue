<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Log In Account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset outline-none ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click.prevent="loginAccount"
          >
            Login
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account?
        <a
          @click="$router.push('/register')"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >Register</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      type: "",
      message: "",
    };
  },
  methods: {
    async loginAccount() {
      let loginSuccess;

      if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email)) {
        this.type = "warn";
        this.title
        this.text = "Please input a valid email.";
      } else if (/^\s*$/.test(this.password)) {
        this.type = "warn";
        this.text = "Please input a password.";
      } else {
        loginSuccess = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });

        this.type = loginSuccess ? "success" : "error";
        this.text = loginSuccess
          ? "Login Successful."
          : "Account not found. Invalid credentials.";
        this.email = "";
        this.password = "";
      }

      this.$notify({
        type: this.type,
        title: this.title,
        text: this.text,
      });

      loginSuccess && ((loginSuccess = ""), this.$router.push("/"));
    },
  },
};
</script>
