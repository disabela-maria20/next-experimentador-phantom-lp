import Link from 'next/link'
import { useForm } from 'react-hook-form'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ModalMessage from '../../molecule/Modal/ModalMessage';

const Conversao = () => {
    const captchaRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const [htoken, setHtoken] = useState(null)
    const [errorMessage, setErrorMessage] = useState({
        title: '',
        message: '',
    });

    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        mode: 'onChange',
    })

    function onChange(value) {
        console.log('Captcha value:', value)
    }
    const recaptchaRef = React.useRef()

    /* HCaptcha */
    const onExpire = () => {
        setErrors({
            title: 'Erro',
            message: 'O captcha está expirado, por favor, tente novamente.',
        })
        setOpen(true)
    };

    /* HCaptcha */
    const onError = (err) => {
        setErrors({
            title: 'Erro',
            message: 'O captcha está incorreto, por favor, tente novamente.',
        })
        setOpen(true)
    };

    const onSubmit = async (data) => {

        try {
            /* Verifica se o captcha foi preenchido */
            if (await htoken) {
                captchaRef.current.resetCaptcha()

                const resp = await axios
                    .post(
                        'https://api.experimentador.com.br/api/v1/users',
                        {
                            email: data.email,
                            privacy_policy_authorization: data.aceito,
                            brand_accept: data.autorizo,
                            come_of_age: data.maior,
                        },
                        {
                            headers: {
                                'Api-key': process.env.FRONTEND_API_KEY,
                                'Access-Control-Allow-Origin': 'https://api.experimentador.com.br',
                                'Access-Control-Allow-Methods':
                                    'GET, POST, PUT, DELETE, HEAD, OPTIONS',
                                'Access-Control-Allow-Credentials': 'true',
                            },
                        }
                    )

                router.push('/pacorabanne/finalizado-thanks')
            } else {
                captchaRef.current.execute()
            }

        } catch (error) {
            if (error && error.response && error.response.data && error.response.data.message) {
                const errorName = error.response.data.message.split(' ').pop()
                if (errorName === '"users_email_unique"') {
                    setErrorMessage({
                        title: 'Erro',
                        message: 'Este e-mail já está cadastrado.',
                    })
                    setOpen(!open)
                }
            }
            console.log({ error })
        }
    }

    return (
        <>
            <form
                className='grid grid-cols-1'
                name=''
                id=''
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='pb-26'>
                    <input
                        type='email'
                        className={
                            errors.email
                                ? 'bg-white rounded-full text-red p-13 w-full outline-none ring-red ring-2 transition'
                                : 'bg-white rounded-full p-13 w-full focus:outline-none focus:ring-purple focus:ring-2 transition'
                        }
                        placeholder='Seu melhor e-mail...'
                        {...register('email', {
                            required: 'Este campo é obrigatório',
                            pattern: {
                                value:
                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'E-mail inválido',
                            },
                        })}
                        name='email'
                        id='email'
                    />
                    {errors.email && (
                        <span className='md:text-13 tm:text-10 text-red leading-1'>
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        {...register('aceito', { required: 'Este campo é obrigatório' })}
                        type='checkbox'
                        id='aceito'
                        name='aceito'
                        value='true'
                    />
                    <label htmlFor='aceito' className='text-13 text-white font-normal'>
                        {' '}
                        Autorizo o uso dos meus dados para campanha Paco Rabanne | Phantom*
                    </label>
                    {errors.aceito && (
                        <span className='md:text-13 tm:text-10 text-red leading-1'>
                            {errors.aceito.message}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        {...register('maior', { required: 'Este campo é obrigatório' })}
                        type='checkbox'
                        id='maior'
                        name='maior'
                        value='true'
                    />
                    <label htmlFor='maior' className='text-13 text-white font-normal'>
                        {' '}
                        Sou maior de 18 anos.
                    </label>
                    {errors.maior && (
                        <span className='md:text-13 tm:text-10 text-red leading-title'>
                            {errors.maior.message}
                        </span>
                    )}
                </div>
                <div>
                    <input
                        {...register('autorizo')}
                        type='checkbox'
                        id='autorizo'
                        name='autorizo'
                        value='true'
                    />
                    <label htmlFor='autorizo' className='text-13 text-white font-normal'>
                        {' '}
                        Autorizo receber materiais da marca.
                    </label>
                    {errors.autorizo && (
                        <span className='md:text-13 tm:text-10 text-red leading-title'>
                            {errors.autorizo.message}
                        </span>
                    )}
                </div>
                <p className='text-13 font-normal text-white'>
                    Ao informar meus dados, eu concordo com a{' '}
                    <Link href='/politica-de-privacidade'>
                        <a className='hover:underline font-semibold'>
                            Política de Privacidade
                        </a>
                    </Link>
                </p>
                <div className='flex w-1/2 pt-26'>
                    <button className='bg-purple bg-opacity-90 hover:bg-opacity-100 text-white text-18 rounded-full tm:py-13 md:py-13 tm:px-18 md:px-45 w-full outline-none hover:bg-purple hover:text-white hover:shadow-lg transition tm:col-span-6 md:col-span-2'>
                        {' '}
                        Desbloquear{' '}
                    </button>
                    <HCaptcha
                        sitekey={process.env.RECAPTCHA_SITE_KEY}
                        size="invisible"
                        onError={onError}
                        onExpire={onExpire}
                        onVerify={setHtoken}
                        ref={captchaRef}
                    />
                </div>
                {/* modal de aviso */}
                <ModalMessage
                    open={open}
                    setOpen={setOpen}
                    title={errorMessage.title}
                    message={errorMessage.message}
                ></ModalMessage>
            </form>
        </>
    )
}

export default Conversao
