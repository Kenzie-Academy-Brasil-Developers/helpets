import axios from "axios";

export const api = axios.create({
    baseURL: "https://helpets.onrender.com/", 
    timeout: 8000,
})

export const apiMaps = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyArOse9phGmQ0Clubc59tm-QTv3GJrX7UY&callback=initMap",
    timeout: 8000,
})