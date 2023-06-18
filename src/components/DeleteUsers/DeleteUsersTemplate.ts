export default `
     <div class="add-user-container {{#if openedPop}} opened{{/if}}">
          <form>
              <p>Удалить участников чата</p>
              {{{SearchedUsers}}}
              {{{button}}}
          </form>
    </div>
`;
