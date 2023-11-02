import React from 'react';
import animation_white from '../../../../assets/animation/loading_branco.json'
import animation_black from '../../../../assets/animation/loadblack.json'

import Lottie from 'react-lottie'

export default function LoadingGitHub({type=false}) {
	const defaultOptions1 = {
		loop: true,
		autoplay:true,
		animationData: animation_white,
		rendererSettings:{
			preserveAspecttRatio:'xMidYMid slice'
		}
	}
	const defaultOptions2 = {
		loop: true,
		autoplay:true,
		animationData: animation_black,
		rendererSettings:{
			preserveAspecttRatio:'xMidYMid slice'
		}
	}
 return (
	 <div>
		{type ? 
			<Lottie
						options={defaultOptions1}
						height={34}
						width={34}
			/>
		:
			<Lottie
					options={defaultOptions2}
					height={200}
					width={200}
			/>

				}
			
	 </div>
 );
}