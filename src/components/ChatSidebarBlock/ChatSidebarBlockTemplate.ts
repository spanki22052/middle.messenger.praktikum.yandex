export default `
<div class="chat-block">
<div class="left-side">
  <div class="image"></div>
</div>
<div class="right-side">
  <a class="clear-a" href="{{link}}">
    <div class="upside">
      <p class="sender-name">{{name}}</p>
      <p class="message-time">{{time}}</p>
    </div>
    <p class="message">{{message}}</p>
    <div class="badge">{{amount}}</div>
  </a>
</div>
</div>
`;
