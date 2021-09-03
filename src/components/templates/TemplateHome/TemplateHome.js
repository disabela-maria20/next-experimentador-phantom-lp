import Navbar from "../../molecule/Navbar/Navbar";
import Footer from "../../organism/Footer/Footer";
import HeaderPrincipal from "../../organism/HeaderPrincipal/HeaderPrincipal";
import Introduction from "../../organism/Introduction/Introduction";
import KnowHow from "../../organism/KnowHow/KnowHow";
import { useRouter } from "next/router";
import axios from "axios";


function TemplateHome() {
    
    return (
            <>
                <Navbar />
                <HeaderPrincipal />
                <Introduction />
                <KnowHow />
                <Footer />
            </>
    )
}

export default TemplateHome
