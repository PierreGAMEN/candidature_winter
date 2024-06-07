"use client";

import styles from "./sectionDetail.scss"
import {useState, useEffect} from "react"

const SectionDetail = ({ number, title, text, image, right }) => {

    const [imageOnRight, setImageOnRight] = useState(true)

    useEffect(() => {
        setImageOnRight(right !== "false");
    }, [right]);

    return (
        <section className="container_sectionDetail">
            {!imageOnRight && <img className="image_sectionDetail" src={image} alt="" />}
            <div>
            <div className={`container_sectionDetail_title ${!imageOnRight ? "left" : ""}`}>
            {imageOnRight && <img src={number} alt="" />}
            <h3>{title}</h3>
            {!imageOnRight && <img src={number} alt="" />}
            </div>
            <div className="container_divider">
                <div className={`${imageOnRight ? "boldline" : "light"}`}></div>
                <div className={`${imageOnRight ? "light" : "boldline"}`}></div>
            </div>
            <p>{text}</p>
            </div>
            {imageOnRight && <img className="image_sectionDetail" src={image} alt="" />}
        </section>
    );
};

export default SectionDetail;