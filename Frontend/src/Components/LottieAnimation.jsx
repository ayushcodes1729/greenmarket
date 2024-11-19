import React from 'react'
import Lottie from 'react-lottie'
import AnimationData from './Animation - 1731998760002.json'

export default function LottieAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={450}
                width={450}
            />
        </div>
    );
}

