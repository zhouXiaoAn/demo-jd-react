export const get = (url,data,callback) => {
    let xml = new XMLHttpRequest()
    xml.open("GET",url)
    xml.send(null)
    xml.addEventListener('readystatechange',()=>{
        if(xml.readyState === 4 && xml.status == 200) {
            console.log(xml.responseText)
        }
    })
}