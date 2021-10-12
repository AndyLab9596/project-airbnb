import manageAuthApi from "../../api/manageAuthApi"

export const login = (user) => {
    console.log(user)
    return async (dispatch) => {
        try {
            console.log('user', user)
            const data = JSON.stringify(user)
            console.log(data)
            const res = await manageAuthApi.login(data);
            console.log(res)

        } catch (error) {
            console.log(error.response)
        }
    }
}