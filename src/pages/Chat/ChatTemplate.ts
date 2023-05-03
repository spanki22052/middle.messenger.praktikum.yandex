export default `
<div class="messenger-container">
  <div class="chats-container">
    <a class="profile-link" href="/profile">Профиль &gt;</a>
    <input class="chat-searchbar" placeholder="Поиск"/>
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
    <div class="chat-layout">
      <div class="sender-container">
        <div class="user-img"></div>
        <p class="sender-layout">Вадим</p>
      </div>
      <div class="dots-button">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <div class="messages-container">
      <div class="centered-time">19:42</div>
      {{{chatMessage}}}
      <div class="sender-message-block">
        <p>watch here</p>
        <p class="timestamp">11:56</p>
      </div>
      <div class="sender-message-block">
        <p>whatsup</p>
        <p class="timestamp">11:56</p>
      </div>
      <div class="sender-photo-block">
        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRulqK78KWzqbK94soH0jixCD9QED--mbdp9Dm9zYdql3sFB73oyBe75e9nn5MN36SNcwVU_oBQ_F4WsqraRZZSwNMMEJ1HkTWF-1SAwt1jLjtGf164IfcX&usqp=CAE" alt="картинка"/>
        <div class="timestamp">11:56</div>
      </div>
    </div>
      <form class="messages-sender-container">
          {{{input}}}
          {{{button}}}
      </form>
  </div>
</div>
`;
