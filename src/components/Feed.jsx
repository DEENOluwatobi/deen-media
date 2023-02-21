import Image from 'next/image'
import { UilComment, UilShare, UilThumbsUp } from '@iconscout/react-unicons'
import css from '../styles/Feed.module.css'
import P5 from '../assets/p5.jpg'
import P4 from '../assets/p4.jpg'
import P3 from '../assets/p3.jpg'
import P2 from '../assets/p2.jpg'
import P1 from '../assets/p1.jpg'

export default function Feed() {
    return(
        <div className={css.feedcon}>
            <div className={css.storyline}>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P5} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>John Doe</span>
                </div>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P4} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>Peter Parker</span>
                </div>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P3} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>Mr Oseni</span>
                </div>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P2} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>Joe Bidden</span>
                </div>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>John Joe</span>
                </div>

                <div className={css.story}>
                    <div className={css.user}>
                        <Image className={css.img} src={P1} alt='' width={50} height={50}/>
                    </div>
                    <span className={css.names}>John Joe</span>
                </div>
            </div>

            <div className={css.posts}>
                <div className={css.details}>
                    <Image className={css.img} src={P5} alt='' width={60} height={60}/>
                    <div className={css.postdetail}>
                        <span className={css.bigletter}>John Doe</span>
                        <span className={css.smallletter}>30mins ago</span>
                    </div>
                </div>
                <div className={css.thepost}></div>
                <div className={css.reactions}>
                    <div className={css.reacts}>
                        <UilThumbsUp/>
                        Like
                    </div>
                    <div className={css.reacts}>
                        <UilComment/>
                        Comment
                    </div>
                    <div className={css.reacts}>
                        <UilShare/>
                        Share
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                <div className={css.details}>
                    <Image className={css.img} src={P4} alt='' width={60} height={60}/>
                    <div className={css.postdetail}>
                        <span className={css.bigletter}>Sarah Doe</span>
                        <span className={css.smallletter}>1hour ago</span>
                    </div>
                </div>
                <div className={css.thepost1}></div>
                <div className={css.reactions}>
                    <div className={css.reacts}>
                        <UilThumbsUp/>
                        Like
                    </div>
                    <div className={css.reacts}>
                        <UilComment/>
                        Comment
                    </div>
                    <div className={css.reacts}>
                        <UilShare/>
                        Share
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                <div className={css.details}>
                    <Image className={css.img} src={P2} alt='' width={60} height={60}/>
                    <div className={css.postdetail}>
                        <span className={css.bigletter}>Mercy Chike</span>
                        <span className={css.smallletter}>30mins ago</span>
                    </div>
                </div>
                <div className={css.thepost2}></div>
                <div className={css.reactions}>
                    <div className={css.reacts}>
                        <UilThumbsUp/>
                        Like
                    </div>
                    <div className={css.reacts}>
                        <UilComment/>
                        Comment
                    </div>
                    <div className={css.reacts}>
                        <UilShare/>
                        Share
                    </div>
                </div>
            </div>

            <div className={css.posts}>
                <div className={css.details}>
                    <Image className={css.img} src={P3} alt='' width={60} height={60}/>
                    <div className={css.postdetail}>
                        <span className={css.bigletter}>John White</span>
                        <span className={css.smallletter}>50mins ago</span>
                    </div>
                </div>
                <div className={css.thepost3}></div>
                <div className={css.reactions}>
                    <div className={css.reacts}>
                        <UilThumbsUp/>
                        Like
                    </div>
                    <div className={css.reacts}>
                        <UilComment/>
                        Comment
                    </div>
                    <div className={css.reacts}>
                        <UilShare/>
                        Share
                    </div>
                </div>
            </div>
        </div>
    )
};
