import styles from "./details.scss"
import SectionDetail from "./sectionDetail/SectionDetail"

const Details = () => {
    return(
    <main>
        <SectionDetail 
            title="test"
            number="3"
            text="blablbal"
            image="test"
        />
        <section>
            <img src="test" alt="" />
            <span>2</span>
            <h3>Test</h3>
            <p>Blablalaa</p>
        </section>
        <SectionDetail 
            title="test"
            number="3"
            text="blablbal"
            image="test"
        />
    </main>)
}

export default Details