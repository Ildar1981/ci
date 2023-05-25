import { login, loginFalse } from "../helper.js/auth.js"
import { username, username_invalid, password, password_invalid } from '../helper.js/constraint.js'



describe('login', () => {
    test('Регистрация пользователя', async () => {
        const res = await login({ username, password })
        expect(res.status).toEqual(200);

    })


    test('Регистрация пользователя с невалидными данными', async () => {

        const res = await loginFalse({ username_invalid, password_invalid })
        expect(res.status).toEqual(400);

    })

})