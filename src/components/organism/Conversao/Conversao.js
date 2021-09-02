import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Conversao = () => {
    const { register, handleSubmit, formState: { errors }, setValue} = useForm({
        mode: 'onChange'
    });

    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <>
            <form className="grid grid-cols-1" name="" id="" onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-26">
                <input type="email" className={errors.email ? "bg-white rounded-full text-red p-13 w-full outline-none ring-red ring-2 transition" : "bg-white rounded-full p-13 w-full focus:outline-none focus:ring-purple focus:ring-2 transition"} placeholder="Seu melhor e-mail..." { ...register('email', { required: "Este campo é obrigatório", pattern: { value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "E-mail inválido"} })} name="email" id="email" />
                {errors.email && <span className="md:text-13 tm:text-10 text-red font-bold leading-1">{errors.email.message}</span>}
                </div>
                <div>
            <input { ...register('aceito', { required: "Este campo é obrigatório" })} type="checkbox" id="aceito" name="aceito"  />
            <label htmlFor="aceito" className="text-13 text-white font-normal"> Autorizo o uso dos meus dados para campanha Paco Rabanne | Phantom*</label>
            {errors.aceito && <span className="md:text-13 tm:text-10 text-red font-bold leading-1">{errors.aceito.message}</span>}
            </div>
            <div>
            <input { ...register('maior', { required: "Este campo é obrigatório" })} type="checkbox" id="maior" name="maior"  />
            <label htmlFor="maior" className="text-13 text-white font-normal"> Sou maior de 18 anos.</label>
            {errors.maior && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.maior.message}</span>}
            </div>
            <div>
            <input { ...register('autorizo', { required: "Este campo é obrigatório" })} type="checkbox" id="autorizo" name="autorizo"  />
            <label htmlFor="autorizo" className="text-13 text-white font-normal"> Autorizo receber materiais da marca.</label>
            {errors.autorizo && <span className="md:text-13 tm:text-10 text-red font-bold leading-title">{errors.autorizo.message}</span>}
            </div>
            <p className="text-13 font-normal text-white">Ao informar meus dados, eu concordo com a <Link href="/politica-de-privacidade"><a className="hover:underline font-semibold">Política de Privacidade</a></Link></p>
                <div className="flex w-1/2 pt-26">
                <button className="bg-purple bg-opacity-90 hover:bg-opacity-100 text-white font-bold text-18 rounded-full tm:py-13 md:py-13 tm:px-18 md:px-45 w-full outline-none hover:bg-purple hover:text-white hover:shadow-lg transition tm:col-span-6 md:col-span-2"> Desbloquear </button>
                </div>
            </form>
        </>
    )
}

export default Conversao
