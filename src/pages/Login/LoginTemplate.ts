export default `
<div class="auth-container">
  <h2 class="auth-layout">Войти</h2>
  <form class="auth-form">
  
    {{{login}}}
    {{{password}}}
    <div class="auth-buttons">
    {{{button}}}
    
    <div class='custom-link'><a href="/register">Нет аккаунта?</a></div>
    <a href="/messenger">Войти</a>
    </div>

  </form>

</div>
`;
