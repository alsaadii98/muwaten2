<template>
  <div class="flex justify-center items-center my-28">
    <div
      class="flex justify-between items-center border border-gray-300 w-[70rem] mx-auto rounded-2xl"
    >
      <!-- Right -->
      <div class="w-1/2 flex flex-col justify-center items-center space-y-5">
        <img src="../assets/muwatenLogo.svg" class="w-56" alt="" />
        <h1 class="text-blue-400 text-xl">تسجيل دخول للمنصة</h1>
        <!-- Inputs -->
        <div class="flex flex-col space-y-5">
          <h1>البريد الالكتروني او المعرف</h1>
          <input
            v-model="username"
            placeholder="example@example.com"
            class="w-80 bg-white border border-gray-300 py-4 px-2 rounded-xl"
          />
          <h1>كلمة السر</h1>
          <input
            v-model="password"
            type="password"
            class="w-80 bg-white border border-gray-300 py-4 px-2 rounded-xl"
          />
          <div class="flex items-center">
            <input type="checkBox" class="ml-3" />
            <h1>تذكرني</h1>
          </div>
          <h1 class="text-sm text-red-500">{{ errorMessage }}</h1>
          <button
            v-on:click="getData()"
            class="bg-sky-600 flex justify-center items-center text-white text-md px-7 py-3 rounded-xl hover:bg-sky-700"
          >
            تسجيل دخول
            <svg
              class="mr-3"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.375 26.9999C15.0694 26.6944 14.9167 26.3194 14.9167 25.8749C14.9167 25.4305 15.0833 25.0555 15.4167 24.7499L18.6667 21.4999H5.75C5.33333 21.4999 4.97917 21.3471 4.6875 21.0416C4.39583 20.736 4.25 20.3749 4.25 19.9583C4.25 19.5416 4.39583 19.1874 4.6875 18.8958C4.97917 18.6041 5.33333 18.4583 5.75 18.4583H18.5833L15.25 15.0833C14.9444 14.8055 14.7986 14.4583 14.8125 14.0416C14.8264 13.6249 14.9861 13.2638 15.2917 12.9583C15.5972 12.6805 15.9653 12.5416 16.3958 12.5416C16.8264 12.5416 17.2083 12.6944 17.5417 12.9999L23.5 18.9583C23.6389 19.1249 23.75 19.2985 23.8333 19.4791C23.9167 19.6596 23.9583 19.8471 23.9583 20.0416C23.9583 20.236 23.9167 20.4235 23.8333 20.6041C23.75 20.7846 23.6389 20.9444 23.5 21.0833L17.5833 27.0416C17.2778 27.3194 16.9167 27.4583 16.5 27.4583C16.0833 27.4583 15.7083 27.3055 15.375 26.9999ZM22 35.4166C21.5833 35.4166 21.2292 35.2638 20.9375 34.9583C20.6458 34.6527 20.5 34.2916 20.5 33.8749C20.5 33.4583 20.6458 33.1041 20.9375 32.8124C21.2292 32.5208 21.5833 32.3749 22 32.3749H32.75V7.62492H22C21.5833 7.62492 21.2292 7.47214 20.9375 7.16659C20.6458 6.86103 20.5 6.49992 20.5 6.08325C20.5 5.66659 20.6458 5.31242 20.9375 5.02075C21.2292 4.72909 21.5833 4.58325 22 4.58325H32.75C33.5556 4.58325 34.2639 4.88881 34.875 5.49992C35.4861 6.11103 35.7917 6.81936 35.7917 7.62492V32.3749C35.7917 33.1805 35.4861 33.8888 34.875 34.4999C34.2639 35.111 33.5556 35.4166 32.75 35.4166H22Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Left -->
      <div
        class="relative bg-gradient-to-r from-sky-600 to-sky-700 w-1/2 rounded-l-2xl flex justify-center shadow-2xl shadow-gray-400 overflow-hidden"
      >
        <img src="../assets/world.png" class="opacity-40 w-full" alt="" />
        <img
          src="../assets/logo.png"
          alt=""
          class="absolute m-auto inset-y-0 w-72"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import NavBar from "@/components/NavBar.vue";

export default {
  // user.user@user.com
  // 12345678
  name: "LoginPage",
  // components: { NavBar },
  data: function () {
    return {
      usernameAcc: "user",
      passwordAcc: "123",
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    getData() {
      if (this.username === "user" && this.password === "123") {
        this.$router.push({ name: "HomePage" });
      } else {
        this.errorMessage = "يرجى ادخال معلومات صحيحة";
        this.clearMessage();
      }
    },
    clearMessage() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>
