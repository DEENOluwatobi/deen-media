import css from '../styles/Msg.module.css'
import Image from 'next/image'
import { UilSearch } from '@iconscout/react-unicons'
import P5 from '../assets/p5.jpg'
import P4 from '../assets/p4.jpg'
import P3 from '../assets/p3.jpg'
import P2 from '../assets/p2.jpg'
import P1 from '../assets/p1.jpg'

export default function Msg() {
    return(
        <div className={css.msgcon}>
            <div className={css.search}>
                <UilSearch/>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                <div className={css.pbubble}></div>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P2} alt='' width={50} height={50}/>
                <div className={css.pbubble}></div>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P3} alt='' width={50} height={50}/>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P4} alt='' width={50} height={50}/>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P5} alt='' width={50} height={50}/>
                <div className={css.pbubble}></div>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                <div className={css.pbubble}></div>
            </div>
            <div className={css.useractive}>
                <Image className={css.img} src={P2} alt='' width={50} height={50}/>
                <div className={css.pbubble}></div>
            </div>
        </div>
    )
};
