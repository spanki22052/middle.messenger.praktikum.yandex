export default `
<div class="messenger-container">
  <div class="chats-container">
    <a class="profile-link" href="/profile">Профиль &gt;</a>
    <input class="chat-searchbar" placeholder="Поиск">
    <div class="chat-blocks">
      {{{chatBlock}}}
      <div class="chat-block">
        <div class="left-side">
          <div class="image"></div>
        </div>
        <div class="right-side">
          <div class="upside">
            <p class="sender-name">Андрей</p>
            <p class="message-time">15:21</p>
          </div>
          <p class="message">Изображение</p>
          <div class="badge">12</div>
        </div>
      </div>
      <div class="chat-block">
        <div class="left-side">
          <div class="image"></div>
        </div>
        <div class="right-side">
          <div class="upside">
            <p class="sender-name">Андрей</p>
            <p class="message-time">Пн</p>
          </div>
          <p class="message">Изображение</p>
        </div>
      </div>
      <div class="chat-block">
        <div class="left-side">
          <div class="image"></div>
        </div>
        <div class="right-side">
          <div class="upside">
            <p class="sender-name">Андрей</p>
            <p class="message-time">10:49</p>
          </div>
          <p class="message">Изображение</p>
        </div>
      </div>
    </div>
  </div>
  <div class="chat-container">
    <p class="choose-chat-layout">Выберите чат чтобы отправить сообщение</p>
  </div>
</div>
`;
