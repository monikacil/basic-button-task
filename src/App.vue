<template>
  <div class="btns-group">
    <h3 class="label">Kolory z efektem na hover i focus</h3>
    <div class="btns">
      <BasicButton color="dark-green">Button 'dark-green'</BasicButton>
      <BasicButton color="green">Button 'green'</BasicButton>
      <BasicButton color="yellow">Button 'yellow'</BasicButton>
      <BasicButton color="orange">Button 'orange'</BasicButton>
      <BasicButton color="red">Button 'red'</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">
      Przycisk wariant 'outlined' - pozwoliłam sobie zrobić też inne kolory (dla zielonego jedna
      wersja)
    </h3>
    <div class="btns">
      <BasicButton color="orange" variant="outlined">Button 'outlined'</BasicButton>
      <BasicButton color="red" variant="outlined">Button 'outlined'</BasicButton>
      <BasicButton color="green" variant="outlined">Button 'outlined'</BasicButton>
      <BasicButton color="yellow" variant="outlined">Button 'outlined'</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">Przycisk o różnych rozmiarach (s, m, l)</h3>
    <div class="btns">
      <BasicButton color="orange" size="s">Button 's'</BasicButton>
      <BasicButton color="yellow">Button 'm'</BasicButton>
      <BasicButton color="orange" variant="outlined" size="l">Button 'l'</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">
      Przyciski jako link, router-link oraz zwykły button + zdarzenia na 'click'
    </h3>
    <div class="btns">
      <BasicButton href="#" color="dark-green" variant="outlined" @click="handleClick"
        >Button anchor</BasicButton
      >
      <BasicButton to="#" color="orange" variant="outlined" @click="handleClick"
        >Button router-link</BasicButton
      >
      <BasicButton color="yellow" variant="outlined" @click="handleClick">Button</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">Ten sam rozmiar buttonów bez względu na wariant</h3>
    <div class="btns">
      <BasicButton color="green">Button</BasicButton>
      <BasicButton color="orange" variant="outlined">Button</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">Przycisk 'disabled', nie triggeruje eventu, brak efektów hover, focus</h3>
    <div class="btns">
      <BasicButton href="/" color="green" variant="outlined" disabled @click="handleClick"
        >Button anchor</BasicButton
      >
      <BasicButton to="/" color="red" disabled @click="handleClick">Button router-link</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">Element blokowy o szerokości 100%, wycentrowany</h3>
    <div class="btns">
      <BasicButton color="green" fullWidth>Button</BasicButton>
    </div>
  </div>

  <div class="btns-group">
    <h3 class="label">Przycisk z dodatkową zawartością (ikonka)</h3>
    <BasicButton color="red">Button <Icon width="40" height="40" name="heart" /></BasicButton>
  </div>
</template>

<script setup lang="ts">
import BasicButton from './components/BasicButton.vue'

// event handle function
function handleClick(e: object) {
  console.log(e)
}
</script>

<style scoped>
/* font from google */
@import url('https://fonts.googleapis.com/css?family=montserrat');

.btns-group {
  padding: 8px 0;
}

.btns {
  display: flex;
  gap: 12px;

  margin-bottom: 20px;
}

.label {
  margin-bottom: 8px;
}
</style>
