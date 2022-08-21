import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Cache-Control'] = 'no-cache';
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

    return instance({
        method: 'POST',
        mode: 'no-cors',
        url,
        data: payload,
        auth: {
            username: "usr",
            password: "pwd"
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