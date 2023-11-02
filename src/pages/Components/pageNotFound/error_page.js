import React from 'react';
import * as S from './styles.js'
import {TbError404} from 'react-icons/tb'
import {MdOutlineMoodBad} from 'react-icons/md'
export default function PageNotFound() {
 return (
	 <S.Container>
		<S.CardContent>
			<h2>Ops, Página não encontrada!</h2>
			<MdOutlineMoodBad size={100} color='#000'/>
			<TbError404 size={100} color='#000'/>
		</S.CardContent>	
	 </S.Container>
 );
}