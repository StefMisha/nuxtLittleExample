<template>
  <div class="site-header w-full bg-gray-50 shadow-md pt-4">
    <div class="w-full mx-auto container">
      <div class="flex flex-wrap text-gray-600">
        <div>
          <nuxt-link class="px-2 py-2 hover:text-blue-800 font-semibold text-xl" to="/">Валюты</nuxt-link>
        </div>
        <div>
          <nuxt-link class="px-2 py-2 hover:text-blue-800 font-semibold text-xl" to="/calculate">Калькулятор</nuxt-link>
        </div>
        <div>
          <nuxt-link class="px-2 py-2 hover:text-blue-800 font-semibold text-xl" to="/countdown">Обратный отчет</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>


<style lang="scss">
.site-header {
  transition: all 0.2s 0.1s ease-in-out;
  min-height: 60px;
}
</style>
