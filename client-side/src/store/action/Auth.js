import manageAuthApi from "../../api/manageAuthApi"

export const login = (user) => {
    return async (dispatch) => {
        try {

            const res = await manageAuthApi.login(user);
            console.log(res)

        } catch (error) {

        }
    }
}