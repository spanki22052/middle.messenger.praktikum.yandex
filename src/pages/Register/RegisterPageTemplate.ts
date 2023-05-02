export const RegisterPageTemplate = `
<div class="auth-container">
<div class="auth-layout">Регистрация</div>
<form>
  {{{email}}}
  {{{login}}}
  {{{firstName}}}
  {{{secondName}}}
  {{{phone}}}
  {{{password}}}
  {{{repeatPassword}}}
  <div class="auth-buttons">
    {{{button}}}
    <div class="custom-link">
      <a href="/">Войти</a>
    </div>
  </div>
</form>
</div>
`;
