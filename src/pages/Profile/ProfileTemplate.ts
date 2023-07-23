export default `
<div class="profile-page-container">
  <div class="left-side">
        <div class='send-button'>
          <a href='/messenger'>
          Назад
          </a>
        </div>
  </div>
  <div class="profile-content-box">
    <div class="profile-pic-box">
      <img src="{{avatar}}" alt="профиль">
    </div>
    <div class="profile-name">{{first_name}}</div>
    <div class="user-info-box">
      <div class="item">
        <label>Почта</label>
        <span>{{email}}</span>
      </div>
      <div class="item">
        <label>Логин</label>
        <span>{{login}}</span>
      </div>
      <div class="item">
        <label>Имя</label>
        <span>{{first_name}}</span>
      </div>
      <div class="item">
        <label>Фамилия</label>
        <span>{{second_name}}</span>
      </div>
      <div class="item">
        <label>Имя в чате</label>
        <span>{{last_name}}</span>
      </div>
      <div class="item">
        <label>Телефон</label>
        <span>{{phone}}</span>
      </div>
    </div>

    <br>
    <div class="actions-box">
      <a href="../profile/edit">Изменить данные</a>
      <a href="../settings/password">Изменить пароль</a>
      {{{logout}}}
    </div>
  </div>
</div>


`;
