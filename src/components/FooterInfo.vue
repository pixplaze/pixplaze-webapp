<script>
export default {
  name: 'footer-info',
}
</script>

<template>
<div class="footer-info content">
  <section class="content columns-wrapper">
    <div class="column">
      <h3>Помощь</h3>
      <ul class="info-list">
        <li class="info-row"><a href="">Справка</a></li>
        <li class="info-row"><a href="">Техподдержка</a></li>
        <li class="info-row"><a href="">Обращение к модератору</a></li>
      </ul>
    </div>
    <div class="column">
      <h3>Ссылки</h3>
      <ul class="info-list">
        <li class="info-row"><a href="">Список серверов</a></li>
        <li class="info-row"><a href="">Главная страница</a></li>
        <li class="info-row"><a href="">Карта сервера</a></li>
      </ul>
    </div>
    <div class="column">
      <h3>Сотрудничество</h3>
      <ul class="info-list">
          <li class="info-row"><span>Группа ВК</span></li>
          <li class="info-row"><span>Почта</span></li>
          <li class="info-row"><span>Подать заявку</span></li>
      </ul>
    </div>
  </section>
</div>
</template>

<style scoped>
.footer-info {
  padding-bottom: 50px;
}
.columns-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column {
  display: grid;
  /* min-width: 300px; */
  margin-bottom: 50px;
  color: var(--color-main-foreground)
}

.info-row {
  box-sizing: border-box;
  width: fit-content;
  border-bottom: 2px solid var(--color-main-foreground);
}

.info-row > * {
  display: block;
  padding-top: 10px;
  padding-bottom: 5px;
}

.info-row > a {
  height: 100%;
  position: relative;
  z-index: 0;
}

.info-row a::after {
  position: absolute;
  z-index: -1;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  transition: .3s ease;
}

.info-row a:hover::after {
  width: 100%;
  background-color: var(--color-green-grass);
}
</style>