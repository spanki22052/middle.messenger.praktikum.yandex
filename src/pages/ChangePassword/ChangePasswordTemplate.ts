export default `
<main>
    <div class='profile-page-container'>
      <div class='left-side'>
        <div class='send-button'>
          <a href='/messenger'>
          Назад
            <img src='../../../static/icons/right-arrow.svg' style='transform: rotate(180deg);' alt="">
          </a>
        </div>
      </div>
      <form class='profile-content-box'>
        <button type='button' name='avatar' class='profile-pic-box'>
          <img src='../../../static/icons/image-icon.svg' alt="">
        </button>
        <div class='user-info-box'>
          <div class='item'>
            <label for='old_password'>Старый пароль</label>
            {{{oldPassword}}}
          </div>
          <div class='item'>
            <label for='login'>Новый пароль</label>
            {{{newPassword}}}
          </div>
          <div class='item'>
            <label for='first_name'>Повторите новый пароль</label>
            {{{repeatNewPassword}}}
          </div>
        </div>
        <br>
        <button class='save-button'>
          <a href='/profile'>Сохранить</a>
        </button>
      </form>
    </div>
</main>
`;
