export default `
<main>
    <div class='profile-page-container'>
        <div class='left-side'>
            <div class='send-button'>
                {{{exitButton}}}
            </div>
        </div>
        <form class='profile-content-box'>
                {{{userPicture}}}
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
            
            {{{linkToPassword}}}
            {{{button}}}
        </form>
    </div>
</main>
`;
