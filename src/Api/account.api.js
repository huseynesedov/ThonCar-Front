import { BaseApi } from "../Const/api";
import { apiRoutes } from "../Const/apiroute";

export const AccountApi = {
    AdminLogin(data) {
        return BaseApi.post(apiRoutes.account.adminLogin, data);
    },
    Decrypt(params) {
        return BaseApi.get(apiRoutes.account.decrypt, { ...params });
    },
    Encrypt(params) {
        return BaseApi.get(apiRoutes.account.encrypt, { ...params });
    },
    Login(data) {
        console.log(data)
        return BaseApi.post(apiRoutes.account.login, data);
    },
    RefreshToken(data) {
        return BaseApi.post(apiRoutes.account.refreshToken, data);
    },
    Test(params) {
        return BaseApi.get(apiRoutes.account.test, { ...params });
    }
};