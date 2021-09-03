import {useRouter} from 'next/router'

function index() {
    const router = useRouter()
    return <div onLoad={() => router.push('/paco-rabanne')}></div>
}

export default index
