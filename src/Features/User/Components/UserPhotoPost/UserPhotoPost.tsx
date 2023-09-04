import React, { useEffect } from 'react'
import { UserPhotoPostStyled } from './UserPhotoPost.style'
import Input from '../../../../Common/Components/Forms/Input/Input';
import Button from '../../../../Common/Components/Forms/Button/Button';
import useForm from '../../../../Common/CustomHooks/useForm';
import useFetch from '../../../../Common/CustomHooks/useFEtch';
import { PHOST_POST } from '../../../../Common/api';
import Error from '../../../../Common/Components/Error/Error';
import { useNavigate } from 'react-router-dom';


const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImage] = React.useState<null| {preview: string, raw:File}>(null);

  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(data){
      navigate('/conta');
    }
  },[data, navigate]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData();

    img && img.raw && formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);


    const token = window.localStorage.getItem('token');

    if(token){
      const {url, options} = PHOST_POST(formData, token);
      request(url, options);
    }
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setImage({
      preview: URL.createObjectURL(target.files![0]),
      raw: target.files![0],
    })
  }

  return (
    <UserPhotoPostStyled className='animeLeft'>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome}/>
        <Input label='Peso' type='number' name='peso' {...peso}/>
        <Input label='Idade' type='number' name='idade' {...idade}/>
        <input type="file" name="img" id="img" onChange={handleImageChange}/>
        {loading ?
          <Button disabled>Enviando...</Button>
            :
          <Button>Enviar</Button>
        }
        {error &&
          <Error message={error}/>
        }
      </form>
      <div>
        {img && img.preview &&
          <div className='preview' style={{backgroundImage:`url(${img.preview})`}}>

          </div>
        }
      </div>
    </UserPhotoPostStyled>
  )
}

export default UserPhotoPost;