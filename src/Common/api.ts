export const API_URL = 'https://dogsapi.origamid.dev/json/';

export function TOKEN_POST(body:unknown){
    return{
        url: API_URL + "jwt-auth/v1/token",
        options:{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        },
    }
}

export function VALIDATE_TOKEN(token:string){
    return{
        url: API_URL + "jwt-auth/v1/token/validate",
        options:{
            method:"POST",
            headers:{
                Authorization: 'Bearer ' + token,
            },
        },
    }
}

export function GET_USER(token:string){
    return{
        url: API_URL + "api/user",
        options:{
            method:"GET",
            headers:{
                Authorization: 'Bearer ' + token,
            }
        },
    }
}

export function CREATE_USER(body: unknown){
    return{
        url: API_URL + "api/user",
        options:{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
        },
    }
}

export function PHOST_POST( formData: unknown, token:string,){
    return{
        url: API_URL + "api/photo",
        options:{
            method:"POST",
            headers:{
                Authorization: 'Bearer ' + token,
            },
            body: formData
        },
    }
}