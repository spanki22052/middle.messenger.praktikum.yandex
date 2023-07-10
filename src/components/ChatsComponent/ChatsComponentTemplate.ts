export default `

  <div class="chat-container">
    {{#if activeChat}}
    
    {{{selectChatWithUser}}}
    <div class="chat-layout">
      <div class="sender-container">
        <div class="user-img"><img alt='avatar' {{#if activeChat.avatar}}src="https://ya-praktikum.tech/api/v2/resources{{activeChat.avatar}}" {{else}} src={{avatar}} {{/if}} alt="avatar" /></div>
        <p class="sender-layout">{{activeChat.title}}</p>
      </div>
      <div class="dots-button">
        <div class='dots'>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
                           
          <div class="messages-display-heading-dots-dropdown">
            <ul>
              <li class="delete-chat">Удалить чат</li>
              <li class="delete-user">Удалить участников</li>
              <li class="add-user">Добавить участников</li>
    
            </ul>
          
          </div>
      </div>
    </div>
    
 <div class="messages-container">
      <div class="centered-time">19:42</div>
      {{{chatMessage}}}
      {{#each messageComponents}}
        {{{this}}}
      {{/each}}
    </div>
        {{{sendMessage}}}


    {{/if}}


 


</div>


`;
