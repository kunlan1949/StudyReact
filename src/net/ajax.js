import axios from 'axios';
export default function ajax(url = "",params = {},type='GET'){
    let promise;
    return new Promise((resolve,reject)=>{
        if('GET' === type.toUpperCase()){
            let paramsStr = '';
            //拆分所有参数包装到Object对象   例如{a,b,c} => a & b & c & 
            Object.keys(params).forEach((key)=>{
                paramsStr += key + '=' + params[key] + '&';
            }) 
            //去除最后的&
            if(paramsStr !==''){
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            //拼接字符串
            url += '?' +paramsStr;
            promise = axios.get(url);

        }else if('POST'=== type.toUpperCase()){
            promise = axios.post(url,params);
        }
        
        promise.then((response)=>{
            resolve(response.data);
        }).catch((e)=>{
            console.log(e);
            reject(e);
        });
    });
    
   
}