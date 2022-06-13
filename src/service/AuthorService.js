import http from "../http-common";
class AuthorService {
    login() {
        return http.post(`/login?clientId=1&scope=image&redirectUrl=/consenScreen`);
    }
}
export default new AuthorService();
