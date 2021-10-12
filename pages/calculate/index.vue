<template>
  <div class="container mx-auto px-4">
    <div class="section">
      <calculate-form/>
    </div>
  </div>
</template>

<script>
import calculateForm from "~/components/calculate/calculate";

export default {
  name: "index",
  components: {
    calculateForm
  }
}
</script>

<style scoped>

</style>
