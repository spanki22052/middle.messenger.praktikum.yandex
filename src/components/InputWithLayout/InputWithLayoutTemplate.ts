export default `
<div class='{{ className }}'>
    <p class='input-layout'> {{ text }}</p>
    <input type="{{type}}"
    id="{{id}}" name="{{name}}" placeholder="{{placeholder}}" 
    value="{{value}}" />
  <span class="error-message">{{error}}</span>
</div>
`;
