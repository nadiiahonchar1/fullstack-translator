<template>
  <div>
    <p>Оберіть мову з якої потрібно перекласти</p>
    <select v-model="fromLanguage">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="it">Italiano</option>
      <option value="pt">Português</option>
      <option value="pl">Polski</option>
      <option value="uk">Українська</option>
      <option value="cs">Čeština</option>
      <option value="sk">Slovenčina</option>
      <option value="bg">Български</option>
      <option value="sr">Српски</option>
      <option value="tr">Türkçe</option>
      <option value="el">Ελληνικά</option>
      <option value="hu">Magyar</option>
      <option value="fi">Suomi</option>
    </select>
    <p>Оберіть мову на яку потрібно перекласти</p>
    <select v-model="toLanguage">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="it">Italiano</option>
      <option value="pt">Português</option>
      <option value="pl">Polski</option>
      <option value="uk">Українська</option>
      <option value="cs">Čeština</option>
      <option value="sk">Slovenčina</option>
      <option value="bg">Български</option>
      <option value="sr">Српски</option>
      <option value="tr">Türkçe</option>
      <option value="el">Ελληνικά</option>
      <option value="hu">Magyar</option>
      <option value="fi">Suomi</option>
    </select>
    <textarea v-model="text"></textarea>
    <button @click="translate">Перекласти</button>
    <p class="transated" v-if="translation">{{ translation }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      fromLanguage: 'uk',
      toLanguage: 'en',
      text: '',
      translation: null,
    }
  },
  methods: {
    async translate() {
      try {
        const response = await axios.get('https://fullstack-translator.onrender.com/translate', {
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

<style scoped>
div {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

p {
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  background-color: #fff;
}

textarea,
.transated {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  background-color: #fff;
}

.transated {
  margin-top: 25px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
