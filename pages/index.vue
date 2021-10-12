<template>

  <div class="container mx-auto px-4">

    <div class="section">

      <!--карточка-->
      <div class="flex w-full justify-center">
        <div class="w-2/5 px-3 shadow-lg rounded ">
          <div class="flex text-2xl my-5 py-6 justify-center text-gray-600 rounded shadow shadow-md px-1.5">Конвертор
            валют через RUB
          </div>

          <div class="flex flex-wrap flex-col">

            <div class="mt-5">Конвертировать из: </div>
            <div class="rounded mt-2 shadow-inner border w-4/5">
              <select name='currencies' v-model="formCurrency">
                <option :value="this.rub" title="Российский рубль">Российский Рубль</option> //запарсить рус руб для вывода инфы
                <option :value="item" :title="item.Name" selected="selected" v-for="item in allValue">{{ item.Name }} </option>
              </select>
            </div>
            <div class="lg:w-full mx-1 mb-2">
              <div class="flex flex-wrap">
                <div class="text-xs text-gray-400 flex flex-wrap">Текущий курс валюты к рублю: <p class="ml-1 text-yellow-500">{{ formCurrency.Value }}</p></div>
              </div>
            </div>


            <div class="w-full mt-2">
              <div>Конвертировать в:</div>
            </div>
            <div class="rounded mt-2 shadow-inner border w-4/5">
              <select name='currencies' v-model="toCurrency">
                <option :value="this.rub" title="Российский рубль">Российский Рубль</option>
                <option :value="item" :title="item.Name" selected="selected" v-for="item in allValue">{{ item.Name }}</option>
              </select>
            </div>
            <div class="w-full mx-1 mb-2">
              <div class="flex flex-wrap">
                <div class="text-xs text-gray-400 flex flex-wrap ">Текущий курс валюты к рублю: <p class="ml-1 text-yellow-500">{{ toCurrency.Value }}</p></div>
              </div>
            </div>

            <div class="w-full my-2">
              <label>Сколько хотите получить  {{this.fromCountry.twoCountry }}: </label>
              <input type="text" v-model="mount" class="my-1 mx-1 px-1 py-1 w-full rounded border mx-auto ">
            </div>

            <div class="w-full flex flex-wrap my-2">
              <label>Требуется {{ fromCountry.oneCountry }}: </label>
              <div class="flex flex-wrap text-red-700 px-2 bg-yellow-50">
                {{ getRate }}
              </div>
            </div>
<!--{{this.fromCountry}}-->
<!--              <div class="w-full mt-5 flex  mx-auto my-2.5 justify-center">-->
<!--                <button class="py-2 px-6 border text-xl rounded-lg font-semibold hover:shadow" @click="setValue">-->

<!--                </button>-->
<!--              </div>-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      allValue: '',
      Currency: '',
      rub: {
        "Name": "Российский рубль",
        "Value": 1,
      },
      formCurrency: 1,
      toCurrency: '',
      mount: 1,
    }
  },

  mounted() {
     this.getAllValues()
  },

  computed: {
    fromCountry() {
      return {
        oneCountry: this.formCurrency.Name,
        twoCountry: this.toCurrency.Name,
      }
    },
    getRate() {
      const rube = 1 / this.formCurrency.Value
      const exchangeRate = rube * this.toCurrency.Value
      return (exchangeRate * this.mount).toFixed(2)
    },
  },

  methods: {
    getAllValues() {
      this.$axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
          this.allValue = response.data.Valute
          console.log('* Данные полученены *')
        }).catch((e) => {
        console.log(e)
      })
    },
    // calculate() {
    //   return this.getRate
    // }
  }


}

</script>
