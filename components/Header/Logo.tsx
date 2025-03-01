
import Image from "next/image"
import Link from "next/link";
import Imagelogo  from "@/public/assets/icon.svg"

export default function Logo() {
    return (<Link className="flex items-center gap-2" href="/">
    <Image src={Imagelogo} width={50} alt='dictionary'  priority /> 
        <p style={{fontFamily:"Bellefair",color:"#fff"}}>English Dictionary</p>
    </Link>)

}
