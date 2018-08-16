
export const get = (url,data,jsonpcallback,callback) => {
    let cbName = 'cb' + get.count++
    let callbackName = 'window.get.' + cbName
    window.get[cbName] = function (data) {
        callback(data)
    }
    let script = document.createElement('script')
    script.src = `${url}?callback=${callbackName}`
    document.body.appendChild(script)
    // callback()
}
get.count = 0
window.get = get