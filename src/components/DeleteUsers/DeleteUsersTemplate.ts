export default `
 <div class="add-user-container">
  {{#if openedPop}}
 
      <form>

      <p>Удалить участников из чата</p>

      {{{SearchedUsers}}}

       <div class="to-center-button">
      {{{button}}}</div>

      </form>
 {{/if}}
</div>
`;
