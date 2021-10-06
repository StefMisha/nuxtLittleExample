<template>

  <div class="container mx-auto px-4">

    <div class="section">

      <!--карточка-->
      <div class="flex w-full justify-center">
        <div class="w-2/3 px-3 shadow-lg rounded">
          <div class="flex text-2xl my-5 py-10 justify-center text-gray-600 rounded shadow shadow-md px-1.5">Конвертор валют через RUB</div>

          <div class="flex flex-wrap">
            <!--заменить на выбор страны и валюты из селект-->
            <div class=" rounded mt-5 shadow-inner border">

              <select name='currencies' v-model="formCurrency">
                <option :value="item.Value" :title="item.Name" item.Name selected="selected"
                        v-for="item in allValue">{{ item.Name }}
                </option>
              </select>
            </div>
            <div class="w-full my-2 mt-1">
              <label>Конвертировать из валюты (курс к рублю в RUB): </label>
              <input type="text" v-model="formCurrency" class="my-1 mx-1 px-1 py-1 w-full rounded border mx-auto ">
            </div>
            <div class="rounded my-2 shadow-inner border">

              <select name='currencies' v-model="toCurrency">
                <option :value="item.Value" :title="item.Name" selected="selected"
                        v-for="item in allValue">{{ item.Name }}
                </option>
              </select>
            </div>
            <div class="w-full my-2">
              <label>Конвертировать в валюту (курс к рублю в RUB): </label>
              <input type="text" v-model="toCurrency" class="my-1 mx-1 px-1 py-1 w-full rounded border mx-auto ">
            </div>
            <div class="w-full my-2">
              <label>Итого выполучите: </label>
              <input type="text " v-model="mount" class="my-1 mx-1 px-1 py-1 w-full rounded border mx-auto ">
            </div>

            <div class="w-full flex flex-wrap my-2">
              <label>Получите: </label>
              <div class="flex flex-wrap text-red-700 px-2">
                {{ result }}
              </div>
            </div>

            <div class="w-full mt-5 flex  mx-auto my-2.5 justify-center">
              <button class="py-2 px-6 border text-xl rounded-lg font-semibold hover:shadow" @click="getRate">
                Получить
              </button>
            </div>

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
      formCurrency: '', //из валюты
      toCurrency: '', //в валюту
      exchangeRate: '', //обменный курс
      mount: 1,
      result: '',
    }
  },

  mounted() {
    return this.getAllValues()
  },
computed: {

},

  methods: {
     getAllValues() {
       this.$axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
          this.allValue = response.data.Valute

        }).catch((e) => {
          console.log(e)
        })
    },
    getRate() {
      const rube = 1 / this.formCurrency
      const exchangeRate = rube * this.toCurrency
      this.result = (exchangeRate * this.mount).toFixed(2)
    },


  }

}

</script>
