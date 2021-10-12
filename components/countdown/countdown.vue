<template>
  <div class="container">
    {{ day }}
    <flash-fear />
    <div class="section">
      <div>Таймер</div>
      <div v-if="loaded">

        <div class="flex w-full justify-center content-center mx-auto text-center">
          <div class="flex justify-center content-center w-4/5 text-3xl shadow">
            <div class="relative mr-2"> {{ displayDays }}

              <div class="label text-sm mx-1  bottom-0 mt-1">Дней</div>
            </div>
            <div class="relative mx-2"> {{ displayHours }}
              <div class="label text-sm absolute bottom-0">Часов</div>
            </div>
            <span class="leading-snug">:</span>
            <div class="relative mx-2">
              {{ displayMinutes }}
              <div class="label text-sm absolute bottom-0">Минут</div>
            </div>
            <span class="leading-snug">:</span>
            <div class="relative ml-2">
              {{ displaySeconds }}
              <div class="label text-sm mx-1 absolute bottom-0">Секунд</div>
            </div>
          </div>

        </div>

        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flashFear from "~/components/countdown/flashFear";

export default {
  name: "index",
  components: {
    flashFear
  },

  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
    }
  },

  props: ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],

  computed: {
    _seconds() {
      return 1000
    },
    _minutes() {
      return this._seconds * 60
    },
    _hours() {
      return this._minutes * 60
    },
    _days() {
      return this._hours * 24
    },
    end() {
      return new Date(
        this.year,
        this.month,
        this.day,
        this.hour,
        this.minute,
        this.second,
        this.millisecond
      )
    }
  },

  mounted() {
    this.showRemaining()
  },

  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),

    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date()
        const distance = this.end.getTime() - now.getTime()

        if (distance < 0) {
          clearInterval(timer)
          return
        }

        const days = Math.floor((distance / this._days));
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displaySeconds = this.formatNum(seconds)
        this.displayMinutes = this.formatNum(minutes)
        this.displayHours = this.formatNum(hours)
        this.displayDays = this.formatNum(days)
        this.loaded = true
      }, 100)
    }
  },


}
</script>

<style lang="scss" scoped></style>
