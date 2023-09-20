export const API_URL = 'https://dogsapi.origamid.dev/json/';

interface IGetPhotos {page: number, total:number , user: string | number}

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

export function GET_PHOTOS({page, total, user}: IGetPhotos){
    return{
        url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options:{
            method:"GET",
            cache: 'no-store'
        },
    }
}


export function GET_PHOTO(photoId:number | string | undefined){
    return{
        url: `${API_URL}api/photo/${photoId}`,
        options:{
            method:"GET",
            cache: 'no-store'
        },
    }
}


export function POST_COMMENT(id, body){
    return{
        url: `${API_URL}api/comment/${id}`,
        options:{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                 Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
            body: JSON.stringify(body)
        },
    }
}

export function PHOTO_DELETE(id:number){
    return{
        url: `${API_URL}api/photo/${id}`,
        options:{
            method:"DELETE",
            headers:{
                 Authorization: 'Bearer ' + window.localStorage.getItem('token'),
            },
        }
    }
}

export function PASSWORD_LOST(body){
    return{
        url: `${API_URL}api/password/lost`,
        options:{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(body)           
        }
    }
}