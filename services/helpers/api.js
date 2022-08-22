import axios from 'axios'
import { store } from "../../redux/index";


const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'



const get = makeActionDecorator(function (url) {
    return instance({
        method: 'GET',
        url,
        mode: 'no-cors',
        headers: {
        },
    })
});


const post = makeActionDecorator(function (url, payload) {
    const username = store.getState().auth.user;
    const password = store.getState().auth.password
    return instance({
        method: 'POST',
        mode: 'no-cors',
        url,
        data: payload,
        auth: {
            username,
            password
        }
    })
});







function makeActionDecorator(fTargetFunction) {
    return function () {
        return fTargetFunction.apply(this, arguments);
    }
}

export {
    get,
    post
}