import React from 'react';
import Lottie from 'react-lottie';
import AnimationData from './Animation - 1731998760002.json';

export default function LottieAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: AnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className='w-[80%] sm:w-[70%] md:w-[50%] lg:w-[100%]'>
            <Lottie
                options={defaultOptions}
                isClickToPauseDisabled={true}
            />
        </div>
    );
}
