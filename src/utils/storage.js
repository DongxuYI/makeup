
export const clearStorage = () =>{
    window.localStorage.clear();
}
export const setStorage = (key,value) =>{
    localStorage[key] = value
}
export const getStorage = (key) =>{
    return localStorage.getItem(key)
}

export const saveInfo = (json) => {
    for(var key in json){
        localStorage[key] = json[key]
    }
}