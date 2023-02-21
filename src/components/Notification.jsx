import css from '../styles/Notification.module.css'
import Image from 'next/image'
import { UilSetting, UilRedo } from '@iconscout/react-unicons'
import P5 from '../assets/p5.jpg'
import P4 from '../assets/p4.jpg'
import P3 from '../assets/p3.jpg'
import P2 from '../assets/p2.jpg'
import P1 from '../assets/p1.jpg'

export default function Notification() {
    return(
        <div className={css.notify}>
            <div className={css.activity}>
                <span className={css.head}>Notifications</span>
                <div className={css.icons}>
                    <UilSetting/>
                    <UilRedo/>
                </div>
            </div>
                
            <div className={css.gossip}>
                Today
                <div className={css.note}>
                    <Image className={css.img} src={P5} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>John Doe commented on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P4} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Mr Oseni liked on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P3} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>John Joe liked on your comment</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P2} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Lawal Oke commented on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Mike White shared on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P5} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>John Doe commented on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                Yesterday
                <div className={css.note}>
                    <Image className={css.img} src={P4} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Mr Oseni liked on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P3} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>John Joe liked on your comment</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P2} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Lawal Oke commented on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>

                <div className={css.note}>
                    <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                    <div>
                        <span className={css.issue}>Mike White shared on your post</span><br/>
                        <span className={css.time}>10mins ago</span>
                    </div>
                </div>    
            </div>

        </div>
    )
};
