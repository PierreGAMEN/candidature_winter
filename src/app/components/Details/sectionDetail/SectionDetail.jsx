"use client";

import styles from "./sectionDetail.scss"
import {useState, useEffect} from "react"

const SectionDetail = ({ number, title, text, image, right, alt }) => {

    const [imageOnRight, setImageOnRight] = useState(true)

    useEffect(() => {
        setImageOnRight(right !== "false");
    }, [right]);

    return (
        <div className="container_sectionDetail">
            {!imageOnRight && <img className="image_sectionDetail" src={image} alt={alt} />}
            <div>
            <div className={`container_sectionDetail_title ${!imageOnRight ? "left" : ""}`}>
            {imageOnRight && <img src={number} alt={`${number}`} />}
            <h3>{title}</h3>
            {!imageOnRight && <img src={number} alt={`${number}`} />}
            </div>
            <div className="container_divider">
                <div className={`${imageOnRight ? "boldline" : "light"}`}></div>
                <div className={`${imageOnRight ? "light" : "boldline"}`}></div>
            </div>
            <p>{text}</p>
            </div>
            {imageOnRight && <img className="image_sectionDetail" src={image} alt={alt} />}
        </div>
    );
};

export default SectionDetail;