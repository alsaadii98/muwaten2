<template>
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
          fill="currentColor"
          class="w-10 h-10 fill-sky-700 ml-2"
        >
          <path
            d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
          />
        </svg>
        <h1 class="text-2xl font-bold text-sky-700">المواطنين</h1>
      </div>
      <div class="flex items-center justify-evenly mt-5">
        <!-- last update -->
        <div>
          <h1>اخر تحديث</h1>
          <div
            class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-start px-5 space-y-3 flex flex-col justify-center mt-2"
          >
            <div class="flex items-center justify-between">
              <img src="../assets/svg/calender.svg" alt="" class="ml-5" />
              <h1>{{ dateNow }}</h1>
            </div>
            <div class="flex items-center justify-between">
              <img src="../assets/svg/clock.svg" alt="" class="ml-5" />
              <h1>{{ timeNow }}</h1>
            </div>
            <div class="flex items-center justify-between">
              <img src="../assets/svg/pp.svg" alt="" class="ml-5" />
              <h1>{{ username }}</h1>
            </div>
          </div>
        </div>
        <!-- created -->
        <div>
          <h1>تاريخ الانشاء</h1>
          <div
            class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-start px-5 space-y-3 flex flex-col justify-center mt-2"
          >
            <div class="flex items-center justify-between">
              <img src="../assets/svg/calender.svg" alt="" class="ml-5" />
              <h1>{{ dateNow }}</h1>
            </div>
            <div class="flex items-center justify-between">
              <img src="../assets/svg/clock.svg" alt="" class="ml-5" />
              <h1>{{ timeNow }}</h1>
            </div>
            <div class="flex items-center justify-between">
              <img src="../assets/svg/pp.svg" alt="" class="ml-5" />
              <h1>{{ username }}</h1>
            </div>
          </div>
        </div>
        <!-- status -->
        <div>
          <h1>الحالة</h1>
          <div
            class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
          >
            <h1 class="text-green-600 text-xl">{{ status }}</h1>
          </div>
        </div>
        <!-- number -->
        <div>
          <h1>رقم المواطن</h1>
          <div
            class="bg-white mx-4 shadow-lg shadow-gray-300 border border-gray-300 h-32 w-56 rounded-xl items-center px-5 space-y-3 flex flex-col justify-center mt-2"
          >
            <h1 class="text-xl">{{ ppNumber }}</h1>
          </div>
        </div>
      </div>
      <!-- Form -->
      <div class="mt-10 flex justify-around items-start">
        <!-- left -->
        <div class="flex flex-col items-start justify-start mt-2">
          <h1>الاسم</h1>
          <input
            v-model="name"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>اسم الاب</h1>
          <input
            v-model="fatherName"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>اسم الجد</h1>
          <input
            v-model="middleName"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>اللقب</h1>
          <input
            v-model="lastName"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>اسم الام</h1>
          <input
            v-model="motherName"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>تاريخ الميلاد</h1>
          <input
            v-model="birthDay"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="date"
          />
          <h1>محل الولادة</h1>
          <input
            v-model="birthLoc"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>الجنس</h1>
          <select
            v-model="gender"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
          >
            <option value=""></option>
            <option value="ذكر">ذكر</option>
            <option value="انثى">انثى</option>
          </select>
          <h1>الحالة</h1>
          <select
            @change="onChange"
            v-model="statusOfReal"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
          >
            <option value=""></option>
            <option value="متزوح">متزوج</option>
            <option value="اعزب">اعزب</option>
          </select>
          <h1 v-if="statusOfReal === 'متزوح'">اسم الزوج / الزوجة</h1>
          <input
            v-if="statusOfReal === 'متزوح'"
            v-model="nameOfHOrW"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
        </div>
        <!-- Right -->
        <div class="flex flex-col items-start justify-start mt-2">
          <h1>العنوان الاول</h1>
          <input
            v-model="addressOne"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>العنوان الثاني</h1>
          <input
            v-model="addressTwo"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>المدينة</h1>
          <input
            v-model="city"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>المحافظة</h1>
          <input
            v-model="city2"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>ZIP CODE</h1>
          <input
            v-model="zipCode"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>الدولة</h1>
          <input
            v-model="country"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>رقم الهاتف</h1>
          <input
            v-model="phoneNumber"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="number"
          />
          <h1>البريد الالكتروني</h1>
          <input
            v-model="email"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>اسم الوكيل</h1>
          <input
            v-model="nameOfPer"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
            type="text"
          />
          <h1>متوفي</h1>
          <select
            v-model="dieOrNot"
            class="w-96 bg-white border border-gray-300 py-4 px-2 rounded-xl my-5"
          >
            <option value=""></option>
            <option value="نعم">نعم</option>
            <option value="كلا">كلا</option>
          </select>
        </div>
      </div>
      <div class="mt-10 mx-16 flex flex-col items-start justify-center">
        <h1>يرجي اختيار نوع المعاملة من الحقل ادناه</h1>
        <select
          v-model="dieOrNot"
          class="w-[57rem] first-letter:bg-white border border-gray-300 py-4 px-2 rounded-xl"
        >
          <option value=""></option>
          <option value="وكالة عامة">وكالة عامة</option>
          <option value="وكالة عقارية">وكالة عقارية</option>
        </select>
      </div>

      <div class="flex items-end justify-end mt-20">
        <button
          v-on:click="saveToLocal"
          class="bg-sky-600 px-14 py-5 rounded-xl text-white flex items-center justify-center"
        >
          انشاء
          <img src="../assets/svg/go.svg" alt="" class="w-7 mr-3" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import SideBar from "../components/Sidebar.vue";
export default {
  name: "HomePage",
  components: { NavBar, SideBar },
  data() {
    return {
      dateNow: this.getDateNow()[0],
      timeNow: this.getDateNow()[1],
      username: "user.user",
      status: "Active",
      ppNumber: this.createPpNumber(),
      // Form Data
      name: "",
      fatherName: "",
      middleName: "",
      lastName: "",
      motherName: "",
      birthDay: "",
      birthLoc: "",
      gender: "",
      statusOfReal: "",
      nameOfHOrW: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      city2: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      email: "",
      nameOfPer: "",
      dieOrNot: "",
      //    formLocal: this.getData(),
    };
  },
  created() {
    // setInterval(this.getDateNow);
    // setInterval(this.createPpNumber, 1000);
  },

  methods: {
    getDateNow() {
      const today = new Date();
      const date =
        today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear();

      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      // this.dateNow = date;
      // this.timeNow = time;
      return [date, time];
    },
    createPpNumber() {
      const date = new Date();
      const today = date.getFullYear() + date.getMonth() + date.getDay();
      const min = 1000000;
      const max = 9999999;
      const ppNum = today + Math.floor(Math.random() * (max - min + 1) - min);
      return ppNum;
    },
    saveToLocal() {
      const formData = {
        name: this.name,
        fatherName: this.fatherName,
        middleName: this.middleName,
        lastName: this.lastName,
        motherName: this.motherName,
        birthDay: this.birthDay,
        birthLoc: this.birthLoc,
        gender: this.gender,
        statusOfReal: this.statusOfReal,
        nameOfHOrW: this.nameOfHOrW,
        addressOne: this.addressOne,
        addressTwo: this.addressTwo,
        city: this.city,
        city2: this.city2,
        zipCode: this.zipCode,
        country: this.country,
        phoneNumber: this.phoneNumber,
        email: this.email,
        nameOfPer: this.nameOfPer,
        dieOrNot: this.dieOrNot,
        timeCreated: this.timeNow,
        dateCreated: this.dateNow,
        status: this.status,
        ppNumber: this.ppNumber,
      };
      console.log(formData);
      localStorage.setItem("formData", JSON.stringify(formData));

      // return this.$router.push({ name: "HomePage" });
    },
    onChange(event) {
      this.statusOfReal = event.target.value;
    },
  },
};
</script>
