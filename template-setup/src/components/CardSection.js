import React from "react";
import Card from "./Card";
const CardSection = () => {
    return(
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card />
                    </div>
                    <div className="col-4">
                        <Card title=" Angular Course " buttonName="Purchase Now"  />
                    </div>
                    <div className="col-4">
                        <Card title="MEAN Stack Course" buttonName="Buy Now" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardSection;
