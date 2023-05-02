export default `
<main>
    <div class='profile-page-container'>
      <div class='left-side'>
        <div class='send-button'>
          <a href='/messenger'>
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
            <input id='old_password' type='password' name='email' value='tigro000'>
          </div>
          <div class='item'>
            <label for='login'>Логин</label>
            <input id='login' type='password' name='login' value='tigro000'>
          </div>
          <div class='item'>
            <label for='first_name'>Имя</label>
            <input id='first_name' type='password' name='first_name' value='tigro123777'>
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
