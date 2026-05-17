import React from "react";
import { clientReviews } from "../constants";

const Client = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">Hear from my Clients</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {clientReviews.map(({ id, review, img, name, position }) => (
                    <div
                        key={id}
                        className="client-review p-6 rounded-xl shadow-lg bg-black-200"
                    >
                        <p className="text-white mb-4">{review}</p>

                        <div className="client-content flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img
                                    src={img}
                                    alt={name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-white">{name}</p>
                                    <p className="text-white-500 md:text-base text-sm">
                                        {position}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <img
                                        key={index}
                                        src="assets/star.png"
                                        alt="star"
                                        className="w-4 h-4"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Client;
