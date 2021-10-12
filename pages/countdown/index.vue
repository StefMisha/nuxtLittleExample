<template>

  <div class="container mx-auto px-4">
    <div class="section">
      <div class="text-gray-600 text-xl">На какой день завести таймер</div>
      <input class="w-3/12 rounded border mx-auto px-1 shadow-md hover:shadow-inner" type="text" v-model="endDay">

      <Timer
          :year="2021"
          :month="9"
          :day="endDay"
          :hour="15"
          :minute="25"
          :second="12"
          :millisecond="11"
        />
    </div>
  </div>
</template>

<script>
import Timer from "~/components/countdown/countdown"

export default {
  name: "index",
  components: {
    Timer
  },

  data() {
    return {
      endDay: '20',
    }
  }
}
</script>

<style scoped>

</style>
