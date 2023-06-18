export default `

<div class="searched-users">

  {{#if isUsers}}

      {{#if isNotFoundUser}}

          <p> User does not exist </p>

        {{else}}

          {{#each selectedUsers}}
            <div class="chats-list"> 

              <div class="chat-list-item" id="chat-user-selected"  data-user-id="{{id}}">
                <img
                  class="chat-user-image"
                  src="{{#if  avatar }}{{@root.baseUrl}}{{avatar}}{{else}}{{@root.avatar}}{{/if}}"
                  alt="user picture">

                  <div class="chat-user-block">
                    <div class="chat-user-block-name">{{first_name}} {{second_name}}</div>
                    <p class="chat-user-block-login">@{{login}}</p>
                  </div>
                  
                  <div class="">
                    <input class="remove-select" type="checkbox" checked>
                  </div>
              </div> 
            </div>       

          {{/each}}

              {{#if selectedUsers.length}}


              {{/if}}
          
          {{#each users}}

            <div class="chats-list">

              <div class="chat-user" id="chat_list_click" data-user-id="{{id}}">
                <img
                  class="chat-user-image"
                  src="{{#if  avatar }}{{ @root.baseUrl}}{{avatar}}{{else}}{{@root.avatar}}{{/if}}"
                  alt="user picture"
                >

                  <div class="chat-user-block">
                    <div class="chat-user-block-name">{{first_name}} {{second_name}}</div>
                    <p class="chat-user-block-login">@{{login}}</p>
                  </div>

                  <div class="chats-list__single-checkbox">
                    <input class="add-select" type="checkbox">
                  </div>

              </div>

            </div>


          {{/each}}

      {{/if}}

  {{/if}}

</div>
`;
