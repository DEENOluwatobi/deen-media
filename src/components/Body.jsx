import css from '../styles/Body.module.css'
import Feed from './Feed'
import Nav from './Nav'
import Notification from './Notification'

export default function Body() {
    return(
        <div className={css.bodycon}>
            <Nav/>
            <Feed/>
            <Notification/>
        </div>
    )
};