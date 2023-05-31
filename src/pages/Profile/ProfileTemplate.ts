export default `

<div class="profile-page-container">
  <div class="left-side">
    <div class="send-button">
      <a href="/messenger">
        Назад
        <img src="../../../static/icons/right-arrow.svg" style="transform: rotate(180deg);" alt="назад">
      </a>
    </div>
  </div>
  <div class="profile-content-box">
    <div class="profile-pic-box">
      <img src="../../../static/icons/image-icon.svg" alt="профиль">
    </div>
    <div class="profile-name">Иван</div>
    <div class="user-info-box">
      <div class="item">
        <label>Почта</label>
        <span>example@example.com</span>
      </div>
      <div class="item">
        <label>Логин</label>
        <span>john239</span>
      </div>
      <div class="item">
        <label>Имя</label>
        <span>Джон</span>
      </div>
      <div class="item">
        <label>Фамилия</label>
        <span>Джонов</span>
      </div>
      <div class="item">
        <label>Имя в чате</label>
        <span>Джонет</span>
      </div>
      <div class="item">
        <label>Телефон</label>
        <span>+7 (909) 967 30 30</span>
      </div>
    </div>
    <br>
    <div class="actions-box">
      <a href="../profile/edit">Изменить данные</a>
      <a href="../profile/change-password">Изменить пароль</a>
      <a href="/" class="error">Выйти</a>
    </div>
  </div>
</div>


`;
