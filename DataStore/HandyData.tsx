import React, { useState, useEffect } from "react";

import Electrician from "../assets/images/electrician.png";
import Plumber from "../assets/images/plumber.png";
import gardener from "../assets/images/gardener.png";
import barber from "../assets/images/barber.png";
import cleaner from "../assets/images/cleaner.png";
import photography from "../assets/images/photography.png";

import { createServer } from "miragejs"


let electrician = [
    {
        id: "1",
        img: Electrician,
        name: 'Shams',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "2",
        img: Plumber,
        name: 'Ghazanfar',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "3",
        img: gardener,
        name: 'osama',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "4",
        img: barber,
        name: 'Huzefa',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "5",
        img: cleaner,
        name: 'pritom',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "6",
        img: photography,
        name: 'Shahid',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "7",
        img: Electrician,
        name: 'Ehtasham',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "8",
        img: barber,
        name: 'Mahaboob',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "9",
        img: Electrician,
        name: 'Sucheta',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "10",
        img: gardener,
        name: 'Janvi',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
]


let plumber = [
    {
        id: "1",
        img: Electrician,
        name: 'Shams',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "2",
        img: Plumber,
        name: 'Ghazanfar',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "3",
        img: gardener,
        name: 'osama',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "4",
        img: barber,
        name: 'Huzefa',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "5",
        img: cleaner,
        name: 'pritom',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "6",
        img: photography,
        name: 'Shahid',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "7",
        img: Electrician,
        name: 'Ehtasham',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "8",
        img: barber,
        name: 'Mahaboob',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "9",
        img: Electrician,
        name: 'Sucheta',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
    {
        id: "10",
        img: gardener,
        name: 'Janvi',
        exp: "2 years of Exprience",
        rating: 4.3,
        totalJobs: 35,
        rate: 250
    },
]

export default createServer({
    routes() {
        this.namespace = "api"

        this.get("/electrician", () => {
            return {
                electrician
            }
        })
    },
})
