
const SectionDetail = ({ number, title, text, image }) => {
    return (
        <section>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt="" />
        </section>
    );
};

export default SectionDetail;