export default `
<main>
    <div class='profile-page-container'>
      <div class='left-side'>
        <div class='send-button'>
          <a href='/messenger'>
          Назад
          </a>
        </div>
      </div>
      <form class='profile-content-box'>
        <button type='button' name='avatar' class='profile-pic-box'>
            <img src="{{avatar}}" alt="профиль">
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
        {{{button}}}
      </form>
    </div>
</main>
`;
