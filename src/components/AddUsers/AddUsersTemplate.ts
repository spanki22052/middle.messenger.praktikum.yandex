export default `
<div class="chat-search-container to-center  ">
            {{#if openedPop}}
            <form>
            <p>Добавить пользователя в чат </p>
            {{{ searchInput }}}
            <div class="add-user-container-result"> 
            {{{SearchedUsers}}}
            </div>
            {{{button}}}
            </form>
   {{/if}}

</div>

`;
