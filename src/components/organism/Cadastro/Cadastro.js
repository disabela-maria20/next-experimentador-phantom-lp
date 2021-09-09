import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import axios from 'axios'
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ModalMessage from '../../molecule/Modal/ModalMessage';

function Cadastro({ token }) {
    const router = useRouter()
    const captchaRef = useRef(null);
    const [htoken, setHtoken] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState({
        title: '',
        message: '',
    });

    //const [ValidateCep, setValidateCep] = useState(false)
    //const vcep = useRef()

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

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: 'onChange'
    });

    function onBlurCep(e, setValue) {
        const { value } = e.target

        const cep = value?.replace(/[^0-9]/g, '')

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                if (data && !data.logradouro) {
                    //vcep.current.onKeyup(()=> {
                    //setValidateCep(true)})
                }
                setValue('endereco', data.logradouro)
                setValue('cidade', data.localidade)
                setValue('estado', data.uf)
                setValue('bairro', data.bairro)
            })
    }

    const onSubmit = async (data) => {
        try {
            /* Verifica se o captcha foi preenchido */
            if (await htoken) {
                captchaRef.current.resetCaptcha()

                const cep = data.cep.replace(/\D/g, '')
                const cpf = data.cpf.replace(/[^\d]/g, '')
                const telefone = data.telefone.replace(/[^\d]/g, '')

                /* Busca produto da API */
                const response = await axios.get(`https://api.experimentador.com.br/api/v1/products?name=${'phantom'}`, {
                    headers: {
                        "Api-key": process.env.FRONTEND_API_KEY,
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true"
                    }
                })
                const product = response.data && response.data[0]

                /* Vefica quantidade de produto no stock */
                if (product.quantity <= 500) {
                    router.push('/pacorabanne/finalizado')
                    return
                }

                /* Cria um pedio, usuário e subtrai um produto */
                const post = await axios.post('https://api.experimentador.com.br/api/v1/orders', {
                    user_name: data.nome,
                    email: data.email,
                    password: '',
                    phone: telefone,
                    cep: cep,
                    cpf: cpf,
                    house_number: data.numero,
                    street_name: data.endereco,
                    complement: data.complemento,
                    city: data.cidade,
                    state: data.estado,
                    district: data.bairro,
                    privacy_policy_authorization: data.aceito,
                }, {
                    headers: {
                        "Api-key": process.env.FRONTEND_API_KEY,
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Credentials": "true"
                    }
                })

                if (post && post.data.data && post.data.data.id) {
                    await axios.put(`https://api.experimentador.com.br/api/v1/links/${token}`, {}, {
                        headers: {
                            "Api-key": process.env.FRONTEND_API_KEY,
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Credentials": "true"
                        }
                    })
                    router.push('/pacorabanne/thanks')
                }
                /*  Se não tiver o id, então não foi possível cadastrar o usuário */
                else {
                    if (post.data && post.data.constraint === "users_cpf_unique") {
                        setErrorMessage({
                            title: 'Erro',
                            message: 'Este CPF já está cadastrado.',
                        })
                        setOpen(true)
                    }
                    else if (post.data && post.data.constraint === "users_phone_unique") {
                        setErrorMessage({
                            title: 'Erro',
                            message: 'O telefone cadastrado já existe.',
                        })
                        setOpen(true)
                    }
                    else if (post.data && post.data.constraint === "users_email_unique") {
                        setErrorMessage({
                            title: 'Erro',
                            message: 'Este e-mail já está cadastrado.',
                        })
                        setOpen(true)
                    }
                    else if (post.data && post.data.message === 'User already have an order') {
                        setErrorMessage({
                            title: 'Erro',
                            message: 'Usuário já realizou um pedido.',
                        })
                        setOpen(true)
                    }
                }
            }
            /*  Se não tiver o token, então captcha ainda não foi preenchido */
            else {
                captchaRef.current.execute()
            }
        }
        catch (erro) {
            if (erro.response && erro.response.data.message === 'User already have an order') {
                setErrorMessage({
                    title: 'Erro ❗️',
                    message: 'O email inserido já existe',
                })
                setOpen(true)
                return
            } else if (erro.response && erro.response.data.errors[0].field === 'email') {
                setErrorMessage({
                    title: 'Erro no e-mail❗️',
                    message: 'Verifique se o e-mail foi digitado corretamente.',
                })
                setOpen(true)
                return
            }
            else if (erro.response && erro.response.data.errors[0].field === 'phone') {
                setErrorMessage({
                    title: 'Erro no telefone❗️',
                    message: 'Verifique se o telefone foi digitado corretamente.',
                })
                setOpen(true)
                return
            }
            else if (erro.response && erro.response.data.errors[0].field === 'cpf') {
                setErrorMessage({
                    title: 'Erro no CPF',
                    message: 'Verifique se o CPF foi digitado corretamente.',
                })
                setOpen(true)
                return
            }
            else if (erro.response && erro.response.data.errors[0].field === 'cep') {
                setErrorMessage({
                    title: 'Erro no CEP',
                    message: 'Verifique se o CEP foi digitado corretamente.',
                })
                setOpen(true)
                return
            }

            setErrorMessage({
                title: 'Erro ❗️',
                message: 'Ocorreu algum erro',
            })
            setOpen(true)
        }
    }

    return (
        <section className="mx-auto tm:max-w-xs sm:max-w-sm md:max-w-3xl my-15">
            <div className="rounded-medium bg-white p-38 shadow-xl">

                <form className="text-purple tm:text-15 md:text-18" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid tm:grid-cols-1 md:grid-cols-6 gap-15">
                        <label className="text-purple tm:text-15 md:text-18 font-bold col-span-6" htmlFor="nome">Nome Completo
                            <input type="text" {...register('nome', { required: "Este campo é obrigatório" })} className={errors.nome ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="nome" id="nome" />
                            {errors.nome && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.nome.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-4" htmlFor="email">E-mail
                            <input {...register('email', { required: "Este campo é obrigatório", pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "E-mail inválido" } })} type="email" className={errors.email ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="email" id="email" />
                            {errors.email && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.email.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-2" htmlFor="cpf">CPF
                            <InputMask mask="999.999.999-99" {...register('cpf', { required: "Este campo é obrigatório", pattern: { message: "CPF inválido" } })} type="tel" className={errors.cpf ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="cpf" id="cpf" />
                            {errors.cpf && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.cpf.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-3" htmlFor="telefone">Telefone
                            <InputMask mask="+55 (99) 99999-9999" {...register('telefone', { required: "Este campo é obrigatório" })} type="tel" className={errors.telefone ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="telefone" id="telefone" />
                            {errors.telefone && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.telefone.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-3" htmlFor="cep">CEP <p className="tm:text-10 hover:underline inline font-semibold"><Link href="https://buscacepinter.correios.com.br/app/endereco/index.php"><a target="_blank" rel="noreferrer">Não sabe o CEP?</a></Link></p>
                            <InputMask mask="99999-999" type="text" {...register('cep', { required: "Este campo é obrigatório", message: "CEP inválido" })} className={errors.cep ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="cep" id="cep" onBlur={(e) => onBlurCep(e, setValue)} />
                            {errors.cep && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.cep.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-3" htmlFor="endereco">Endereço
                            <input {...register('endereco', { required: "Este campo é obrigatório" })} type="text" className={errors.endereco ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="endereco" id="endereco" />
                            {errors.endereco && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.endereco.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-1" htmlFor="numero">Número
                            <input {...register('numero', { required: "Este campo é obrigatório" })} type="tel" className={errors.numero ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="numero" id="numero" />
                            {errors.numero && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.numero.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-2" htmlFor="bairro">Complemento
                            <input {...register('complemento', { required: "Este campo é obrigatório" })} type="text" className={errors.complemento ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="complemento" id="complemento" />
                            {errors.complemento && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.complemento.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-2" htmlFor="complemento">Bairro
                            <input {...register('bairro', { required: "Este campo é obrigatório" })} type="text" className={errors.bairro ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="bairro" id="bairro" />
                            {errors.bairro && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.bairro.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-2" htmlFor="cidade">Cidade
                            <input {...register('cidade', { required: "Este campo é obrigatório" })} type="text" className={errors.cidade ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition"} name="cidade" id="cidade" />
                            {errors.cidade && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.cidade.message}</span>}
                        </label>
                        <label className="text-purple tm:text-15 md:text-18 font-bold tm:col-span-6 md:col-span-2 appearance-none" htmlFor="estado">Estado
                            <select {...register('estado', { required: "Este campo é obrigatório" })} className={errors.estado ? "bg-purple-light rounded-full text-red p-13 w-full tm: my-10 md:my-15 outline-none ring-red ring-2 transition appearance-none" : "bg-purple-light rounded-full p-13 w-full tm: my-10 md:my-15 focus:outline-none focus:ring-purple focus:ring-2 transition appearance-none"} name="estado" id="estado" >
                                <option value="" disabled selected> -- </option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio GRande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantis</option>
                            </select>
                            {errors.estado && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.estado.message}</span>}
                        </label>
                        <div className="tm:col-span-6">
                            <div>
                                <input {...register('aceito', { required: "Este campo é obrigatório" })} type="checkbox" id="aceito" name="aceito" />
                                <label htmlFor="aceito" className="text-15 font-normal"> Autorizo o uso dos meus dados para campanha Paco Rabanne | Phantom*</label>
                                {errors.aceito && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.aceito.message}</span>}
                            </div>
                            <div>
                                <input {...register('maior', { required: "Este campo é obrigatório" })} type="checkbox" id="maior" name="maior" />
                                <label htmlFor="maior" className="text-15 font-normal"> Sou maior de 18 anos.</label>
                                {errors.maior && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.maior.message}</span>}
                            </div>
                            <div>
                                <input type="checkbox" id="autorizo" name="autorizo" />
                                <label htmlFor="autorizo" className="text-15 font-normal"> Autorizo receber materiais da marca.</label>
                                {errors.autorizo && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.autorizo.message}</span>}
                            </div>
                            <p className="text-15 font-normal">Ao informar meus dados, eu concordo com a <Link href="/pacorabanne/politica-de-privacidade"><a className="hover:underline font-semibold" rel="noreferrer">Política de Privacidade</a></Link></p>
                        </div>

                        {/* Botão de cadastro */}
                        <button className="bg-purple bg-opacity-90 hover:bg-opacity-100 text-white font-bold text-15 rounded-full tm:py-6 md:py-13 tm:px-18 md:px-45 outline-none hover:bg-purple hover:text-white hover:shadow-lg transition tm:col-span-6 md:col-span-2"> Cadastrar </button>
                        <HCaptcha
                            sitekey={process.env.RECAPTCHA_SITE_KEY}
                            size="invisible"
                            onError={onError}
                            onExpire={onExpire}
                            onVerify={setHtoken}
                            ref={captchaRef}
                        />
                    </div>
                    <p className="text-red text-15"></p>
                </form>
            </div>
            {/* modal de aviso */}
            <ModalMessage
                open={open}
                setOpen={setOpen}
                title={errorMessage.title}
                message={errorMessage.message}
            ></ModalMessage>
        </section>
    )
}

export default Cadastro
