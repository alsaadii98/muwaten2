<template>
  <div
    class="bg-white shadow-xl shadow-gray-100 flex justify-between items-center px-20 py-5"
  >
    <div class="flex justify-center items-center space-x-10">
      <img src="../assets/iraq.png" alt="" class="ml-5 w-16" />
      <div>
        <h1 class="text-2xl">جمهورية العرق</h1>
        <p class="text-xl">وزارة الخارجية</p>
      </div>
    </div>
    <img src="../assets/muwatenLogo.svg" alt="" class="w-28" />
    <div class="flex items-center justify-center">
      <img
        src="../assets/iraq-flag-small.png"
        class="rounded-lg shadow-lg shadow-gray-400 w-14 ml-4"
        alt=""
      />
      <button class="flex flex-col">
        <h1>user.user</h1>
        <p>Level: ADMIN</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
