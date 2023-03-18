import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component, useRef } from 'react';
import Logo from '../../public/images/publicPageImages/Logo.png';
import Logo2 from '../../public/images/publicPageImages/Logo2.png';
import ReverButtonCarousel from '../../public/images/publicPageImages/reverseButtionCarousel.png';
import Logo4 from '../../public/images/publicPageImages/Logo4.jpg';
import ButtonCarousel from '../../public/images/publicPageImages/buttonCarousel.png';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect} from 'react'
const picture='../../public/images/publicPageImages/Logo2.png';
const inter = Inter({
    weight:'600',
    subsets: ['latin'],
})
function handleOnClick(){
    // let flag = 0;
    // const inputEle= document.querySelector('#Pic')
    // const inputEle2= document.querySelector('#Pic2')
    // const inputEl3= document.querySelector('#Pic3')
    // if(inputEle.checked) flag = 1
    // else if(inputEle2.checked) flag = 2
    // else flag = 3
    // if(flag ===1) inputEle2.checked=true
    // else if(flag===2) inputEl3.checked=true
    // else inputEle.checked=true
    const inputEles=document.querySelectorAll('.Carousel-Indicator')
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
    // let flag = 0;
    // const inputEle= document.querySelector('#Pic')
    // const inputEle2= document.querySelector('#Pic2')
    // const inputEl3= document.querySelector('#Pic3')
    // if(inputEle.checked) flag = 1
    // else if(inputEle2.checked) flag = 2
    // else flag = 3
    // if(flag ===1) inputEl3.checked=true
    // else if(flag===2) inputEle.checked=true
    // else inputEle2.checked=true
    const inputEles=document.querySelectorAll('.Carousel-Indicator')
    let flag = 0;
    for(let i=0; i<inputEles.length; i++){
        if(inputEles[i].checked){
            flag = i;
        }
    }
    if(flag === 0) flag = 2;
    else flag -=1;
    inputEles[flag].checked=true;
}
export default function CarouselBanner(){
    return (
        <>
        <h1 className={`titleBotHeader ${inter.className}`}>Your Choice - Prettier You Look</h1>
        <div className="khungCarousel">
            {/* <Carousel className='Carousel'>
                <div>
                    <Image src={Picture3} alt='picture' className='imageCarousel1'></Image>
                </div>
                <div>
                    <Image src={Picture2} alt='picture' className='imageCarousel2'></Image>
                </div>
                <div>
                    <Image src={Picture} alt='picture' className='imageCarousel3'></Image>
                </div>
            </Carousel> */}
            <div className="containerSlider">
                <input type="radio"  className='Carousel-Indicator' id='Pic' name='Pic'defaultChecked/>
                <Image src={Logo4} alt='picture' className='Carousel-Image ImageCa1'></Image> 
                <input type="radio"  className='Carousel-Indicator' id='Pic2' name='Pic'/> 
                <Image src={Logo2} alt='picture' className='Carousel-Image ImageCa2'></Image>
                <input type="radio"  className='Carousel-Indicator' id='Pic3' name='Pic'/>
                <Image src={Logo} alt='picture' className='Carousel-Image ImageCa3'></Image>
            </div>
            <div className="buttonCarousel">
                <button onClick={handleOnClick}><Image src={ButtonCarousel} alt='picture' className="nutphai"></Image></button>
            </div>
            <div className="buttonCarouselLeft">
                <button onClick={handleOnClickReverse}><Image src={ReverButtonCarousel} alt='picture' className="nuttrai"></Image></button>
            </div>
        </div>
        </>
    );
}