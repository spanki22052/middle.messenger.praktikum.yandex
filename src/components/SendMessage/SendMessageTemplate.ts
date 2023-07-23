export default `

     <form class="messages-sender-container">

            <input name="message" id="message" class="custom-input" placeholder="Сообщение" type="text" value="{{value}}"/>
            <span class="error-message">{{error}}</span>

        <div class="messages__form-button">
          <button class="login-form-button send-button" type="submit">Отправить</button>
        </div>
      </form>
`;
