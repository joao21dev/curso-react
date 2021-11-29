import { Posts } from "../Posts";
import "./styles.css"

export const Container = ({posts}) => 
    <section className="container">
        <Posts posts={posts}/>
    </section>
