import React,{useRef} from 'react'
import * as tf from '@tensorflow/tfjs'
import * as handpose from '@tensorflow-models/handpose'
import Webcam from 'react-webcam'
import './home.css';
import { drawHand } from '../../utilities';
import { useState } from 'react';




function Home() {
    const WebcamRef=useRef(null);
    const CanvasRef=useRef(null);

    const runHandpose = async ()=>{
        const net=await handpose.load()
        console.log('Handpose Model Loaded.');

        setInterval(()=>{
            detect(net);
        },0.1);

        // detect(net);
    }


    const detect = async(net) =>{
        //check if data is available

        if (
            typeof WebcamRef.current !== "undefined" &&
            WebcamRef.current !== null &&
            WebcamRef.current.video.readyState === 4
          ) {
        //get video properties
            const video = WebcamRef.current.video;
            const videoWidth = WebcamRef.current.video.videoWidth;
            const videoHeight = WebcamRef.current.video.videoHeight;

             //set video height and width
             
             WebcamRef.current.video.width = videoWidth;
             WebcamRef.current.video.height = videoHeight;
            
            //set canvas height and width

            CanvasRef.current.width = videoWidth;
            CanvasRef.current.height = videoHeight;

            //make directions

            const hand=await net.estimateHands(video);
            console.log(hand[0].landmarks[8]);

            // Draw mesh
            const ctx = CanvasRef.current.getContext("2d");
            drawHand(hand, ctx);

        }
        
        //draw mesh
    }


    runHandpose();

  return (
    <div>home
        <Webcam ref={WebcamRef} mirrored={true} class="Cam z-1"></Webcam>
        <canvas ref={CanvasRef} class="Cam z-3 mirror"></canvas>
        {/* <iframe title="fruit" class="Cam z-2" src="https://www.crazygames.com/embed/fruit-ninja"  frameborder="0" allow="gamepad *;"></iframe> */}
    </div>
  )
}
 
export default Home