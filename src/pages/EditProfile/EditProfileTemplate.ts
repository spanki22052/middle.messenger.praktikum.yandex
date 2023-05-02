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
            <button type='button' name='avatar' class='profile-pic-box editable'>
                <img src='../../../static/icons/image-icon.svg' alt="">
            </button>
            <div class='user-info-box'>
                <div class='item'>
                    <label>Почта</label>
                    <input value='example@example.com' type='email' name='email'>
                </div>
                <div class='item'>
                    <label>Логин</label>
                    <input value='john239' type='text' name='login'>
                </div>
                <div class='item'>
                    <label>Имя</label>
                    <input value='Джон' type='text' name='first_name'>
                </div>
                <div class='item'>
                    <label>Фамилия</label>
                    <input value='Джонов' type='text' name='second_name'>
                </div>
                <div class='item'>
                    <label>Имя в чате</label>
                    <input value='Джонет' type='text' name='display_name'>
                </div>
                <div class='item'>
                    <label>Телефон</label>
                    <input value='+7 (909) 967 30 30' type='text' name='phone'>
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
