import http from "../core/HTTP";

class UserProfileAPI {
  changeProfile(data: XMLHttpRequestBodyInit) {
    return http.put("user/profile", {
      headers: { "Content-Type": "application/json" },
      data,
    });
  }

  changePassword(data: XMLHttpRequestBodyInit) {
    return http.put("user/password", {
      headers: { "Content-Type": "application/json" },
      data,
    });
  }

  changeAvatar(data: XMLHttpRequestBodyInit) {
    return http.put("user/profile/avatar", { data });
  }

  searchUserByLogin(data: string) {
    return http.post("user/search", {
      headers: { "Content-Type": "application/json" },
      data,
    });
  }

  getUserById(id: string) {
    return http.get(`user/${id}`);
  }
}

export default new UserProfileAPI();
