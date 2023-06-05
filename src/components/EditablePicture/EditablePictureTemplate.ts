export default `
  <form class="profile-content-box profile-small" name="avatar" method="POST" enctype="multipart/form-data" novalidate>
    <label class="file-upload"> 
      <img class="profile-pic-box editable" src="{{avatar}}" alt="user picture" />
      <input type="file" name="avatar" required>
    </label>
    {{{button}}}
  </form>

`;
