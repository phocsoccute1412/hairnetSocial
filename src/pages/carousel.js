import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component, useRef, useState } from 'react';
import Logo from '../../public/images/publicPageImages/Logo.png';
import Logo2 from '../../public/images/publicPageImages/Logo2.png';
import ReverButtonCarousel from '../../public/images/publicPageImages/reverseButtionCarousel.png';
import Logo4 from '../../public/images/publicPageImages/slide2.jpg';
import ButtonCarousel from '../../public/images/publicPageImages/buttonCarousel.png';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import homecss from "../styles/homePage.module.css";
const picture='../../public/images/publicPageImages/Logo2.png';
const inter = Inter({
    weight:'600',
    subsets: ['latin'],
})
export default function CarouselBanner(){
    return (
        <>
        <h1 className={`${homecss.titleBotHeader} ${inter.className}`}>Your Choice - Prettier You Look</h1>
        <div className={homecss.khungCarousel}>
            <div className={homecss.containerSlider}>
                <input type="radio"  className={homecss.CarouselIndicator} id={homecss.Pic} name='Pic'defaultChecked/>
                <Image src={Logo4} alt='picture' className={homecss.CarouselImage}></Image> 
                <input type="radio"  className={homecss.CarouselIndicator} id={homecss.Pic2} name='Pic'/> 
                <Image src={Logo2} alt='picture' className={homecss.CarouselImage}></Image>
                <input type="radio"  className={`${homecss.CarouselIndicator}`} id={`${homecss.Pic3}`} name='Pic'/>
                <Image src={Logo} alt='picture' className={homecss.CarouselImage}></Image>
            </div>
            <div className={homecss.buttonCarousel}>
                <button onClick={handleOnClick}><Image src={ButtonCarousel} alt='picture' className={homecss.nutphai}></Image></button>
            </div>
            <div className={homecss.buttonCarouselLeft}>
                <button onClick={handleOnClickReverse}><Image src={ReverButtonCarousel} alt='picture' className={homecss.nuttrai}></Image></button>
            </div>
        </div>
        </>
    );
}
function handleOnClick(){
    const inputEles = document.querySelectorAll(`.${homecss.CarouselIndicator}`);
    console.log(inputEles)
    let flag = 0;
    for(let i=0; i<inputEles.length; i++){
        if(inputEles[i].checked){
            flag = i;
        }
    }
    if(flag === 2) flag = 0;
    else flag +=1;
    inputEles[flag].checked=true;
}
function handleOnClickReverse(){
    const inputElesReverse = document.querySelectorAll(`.${homecss.CarouselIndicator}`)
    let flag = 0;
    for(let i=0; i<inputElesReverse.length; i++){
        if(inputElesReverse[i].checked){
            flag = i;
        }
    }
    if(flag === 0) flag = 2;
    else flag -=1;
    inputElesReverse[flag].checked=true;
}