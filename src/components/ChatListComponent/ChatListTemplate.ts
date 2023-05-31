export default `

    <div class="chat-blocks">
      
        {{#if isUsers}}

          {{{cancelSearch}}}

          {{#if isNotFoundUser}}

            <p> User does not exist </p>
          
              {{else}}

                {{#each users}}
                          <div class="chat-search-user" id="chat_list_click" data-user-id="{{id}}">
                          
                            <div class="chat-block">
                             <div class="left-side">
                                <img
                                  class="chat-user-image"
                                  src="{{#if  avatar }}{{@root.baseUrl}}{{avatar}}{{else}}{{@root.avatar}}{{/if}}"
                                  alt="user picture"
                                  >
                             </div>

                            <div class="right-side">
                            
                                <div class="chats-list__single-sender-name">{{first_name}} {{second_name}}</div>
                                  <p class="chats-list__single-sender-login">@{{login}}</p>
                              </div>
    
                          </div>
                  </div>
                {{/each}}

          {{/if}}

        {{/if}}

        {{#if isChats}}

          {{#each chats}}

              <div class="chat-block chats-list__single" id="chat_list_click" data-chat-id="{{id}}">
                <div class="left-side">
                <img
                  class="chat-user-image"
                  src="{{#if  avatar }}{{ @root.baseUrl}}{{avatar}}{{else}}{{@root.avatar}}{{/if}}"
                  alt="user picture"
                >
                </div>
                <div class="right-side chats-list__single-sender">
                <div class="upside">
                      <div class="sender-name chats-list__single-sender-name" id="chat_list-title">{{title}}</div>
                      <div class="message-time chats-list__single-info-time">{{last_message.time}}</div>
                  </div>

                <div class="message chats-list__single-sender-text">{{last_message.content}}</div>

                <div class="chats-list__single-info">
                    {{#if unread_count}}
                      <div class="chats-list__single-info-quantity badge">{{unread_count}}</div>
                    {{/if}}

                  </div>

              </div>
                </div>



          {{/each}}

        {{/if}}
      
   

    </div>
`;
