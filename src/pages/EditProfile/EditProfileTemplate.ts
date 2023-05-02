export default `
<main>
    <div class='profile-page-container'>
        <div class='left-side'>
            <div class='send-button'>
                <a href='/messenger'>
                    <img src='../../../static/icons/right-arrow.svg' style='transform: rotate(180deg);' alt="">
                    Назад
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
                    {{{email}}}
                </div>
                <div class='item'>
                    <label>Логин</label>
                    {{{login}}}
                </div>
                <div class='item'>
                    <label>Имя</label>
                    {{{firstName}}}
                </div>
                <div class='item'>
                    <label>Фамилия</label>
                    {{{secondName}}}
                </div>
                <div class='item'>
                    <label>Телефон</label>
                    {{{phone}}}
                </div>
            </div>
            <br>
            {{{button}}}
        </form>
    </div>
</main>
`;
