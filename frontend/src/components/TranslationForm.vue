<template>
  <div>
    <select v-model="fromLanguage">
      <option value="en">Англійська</option>
      <option value="ua">Українська</option>
    </select>
    <select v-model="toLanguage">
      <option value="en">Англійська</option>
      <option value="ua">Українська</option>
    </select>
    <textarea v-model="text"></textarea>
    <button @click="translate">Перекласти</button>
    <p v-if="translation">{{ translation }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fromLanguage: 'en',
      toLanguage: 'ua',
      text: '',
      translation: null,
    }
  },
  methods: {
    async translate() {
      try {
        const response = await axios.get('http://localhost:3001/translate', {
          params: {
            fromLanguage: this.fromLanguage,
            toLanguage: this.toLanguage,
            text: this.text,
          },
        })
        this.translation = response.data.translation
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
