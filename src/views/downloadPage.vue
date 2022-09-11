<template>
  <div>
    <!-- Nav -->
    <NavBar />
    <div class="flex items-start">
      <!-- Side -->
      <SideBar />
      <!-- Main -->
      <div class="px-10 py-10">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-10 h-10 fill-sky-700"
          >
            <path
              fill-rule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z"
              clip-rule="evenodd"
            />
            <path
              d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
            />
          </svg>
          <h1 class="text-2xl font-bold text-sky-700">طلب توثيق</h1>
        </div>

        <div class="flex items-center justify-evenly mt-5">
          <!-- last update -->
          <div>
            <h1>رقم المواطن</h1>
            <div
              class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
            >
              <h1 class="text-xl">12345678</h1>
            </div>
          </div>
          <!-- created -->
          <div>
            <h1>البعثة</h1>
            <div
              class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
            >
              <h1 class="text-xl">بغداد</h1>
            </div>
          </div>
          <!-- status -->
          <div>
            <h1>القسم</h1>
            <div
              class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
            >
              <h1 class="text-xl">الوكلات العامة</h1>
            </div>
          </div>
          <!-- number -->
          <div>
            <h1>رقم الوثيقة</h1>
            <div
              class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
            >
              <h1 class="text-xl text-green-500">12345678</h1>
            </div>
          </div>
        </div>
        <h1 class="my-10 text-2xl font-light text-sky-600">خطوة رقم 3 - حفظ</h1>
        <div
          class="w-[63rem] bg-white shadow-lg shadow-gray-400 h-[28rem] rounded-xl border border-gray-300 flex justify-around items-center p-10"
        >
          <div>
            <h1 class="text-2xl">وكالة عامة مخصوصة عقارية(بيع عقار)</h1>
            <p class="text-xl">سوف يبدء التحميل خلال ٥ ثواني</p>
          </div>
          <a href="/A4-1.pdf" download>
            <img src="../assets/svg/check.svg" alt=""
          /></a>
        </div>
        <div class="flex justify-end mt-10">
          <button
            v-on:click="savaAndCount"
            class="bg-red-600 flex justify-center items-center text-white text-md px-10 py-5 rounded-xl hover:bg-sky-700"
          >
            ارسال
            <img src="../assets/svg/go.svg" alt="" class="w-7 mr-2" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "DownloadPage",
  components: { SideBar, NavBar },
  data() {},
  created() {
    // setInterval(this.download(), 50000);
  },
  methods: {
    async downloadFile() {
      const response = await this.$http.get("../assets/file.pdf", {
        responseType: "arraybuffer",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "test.pdf";
      link.click();
    },
  },
};
</script>
