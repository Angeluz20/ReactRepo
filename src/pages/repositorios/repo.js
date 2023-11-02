/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {FaArrowRightLong, FaArrowLeft} from 'react-icons/fa6'
import {RiErrorWarningLine} from 'react-icons/ri'
import LoadingGitHub from '../Components/loadings/loadingGitHub/loading.js';
import api from '../../services/api.js';
import * as S from './styles.js'

export default function Repositorios() {
	const {repo} = useParams();
	const nome = repo.replace(':','')
	const [dataRepo, setDataRepo] = useState({})
	const [issues, setIssues] = useState([])
	const [laoding, setLoading] = useState(false)
	const [page, setPage] = useState('')
	const [filters, setFilters] = useState([
		{state:'all', label:'All', active:true},
		{state:'open', label:'Open', active:false},
		{state:'closed', label:'Closed', active:false},
	])
	const [filterIndex, setFilterIndex] = useState(0);

	useEffect(()=>{
		async function load(){
					setLoading(true)
			const [repoData, issuesData] = await Promise.all([
				api.get(`/repos/${nome}`),
				api.get(`/repos/${nome}/issues`,{
						params:{
							state:filters.find(f => f.active).state,
							per_page:5
						}
				})
			])
			console.log(repoData.data)
			console.log(issuesData.data)
			setDataRepo(repoData?.data)
			setIssues(issuesData?.data)
			setLoading(false)
		}
		load()
	 },[nome]);

	useEffect(()=>{
		async function loadIssue(){
			setLoading(true)
			const response = await api.get(`/repos/${nome}/issues`,{
						params:{
						state:filters[filterIndex].state,
						page,
						per_page: 5
					}
				}
			)
			setIssues(response.data)
			setLoading(false)
		}
		loadIssue()
	},[nome, page, filterIndex, filters])

	function handlePage(action){
		setPage(action === 'back' ? page - 1: page + 1)
	}

	function handleFilter(index){
			setFilterIndex(index)
	}
 return (
	 <S.Container>
		<S.CardRepo>
			<S.Goback>
				<S.ArrowIcon to='/'>
						<IoMdArrowRoundBack color='#000' size={20}/>
				</S.ArrowIcon>		
			</S.Goback>
		
			{laoding ? <S.ViewLoading><LoadingGitHub/></S.ViewLoading> :
			<>
			<S.AvatarUser
				src={dataRepo.owner?.avatar_url} 
				alt={dataRepo.owner?.login} 
				width={'50px'} 
				height={'50px'}/>	

				<h2>{dataRepo.name}</h2>
				<p>{dataRepo.description}</p>
				<S.FilterContent >
					{filters.map((item, index) => (
						<S.BtnFilter 
						  active={filterIndex}
						  onClick={()=> handleFilter(index)}
							key={item.label}>
							{item.label}
						</S.BtnFilter>
					))}
				
				</S.FilterContent>

			  <S.ContentIssues>
					<S.ListIssues>
						{issues.length === 0 ? 
							<S.ListIssuesNotFound>
								<RiErrorWarningLine size={100} color='#ff7f00'/>
								<h1>Not Found Issues</h1>
							</S.ListIssuesNotFound>: 
								issues.map(issue => (
								<S.ListIssuesItem key={String(issue.id)}>
										<S.AvatarUserIssues src={issue.user.avatar_url} alt={issue.user.login}/>
										
										<div>
											<strong>
												<a href={issue.html_url}>{issue.title}</a>
												
												<br/>
												{issue.labels.map(label => (
													<span key={String(label.id)}>{label.name}</span>
													))}
											</strong>
										<p>{issue.user.login}</p>
										</div>
								</S.ListIssuesItem>
						))
						}
						
					</S.ListIssues>
		    </S.ContentIssues>
			</> }
			<S.ViewBtnNav>
				<S.BtnNavIssues
				 type='button'
				 onClick={() => handlePage('back')}>
					<FaArrowLeft size={15}/> Back
				</S.BtnNavIssues> 

				<S.BtnNavIssues type='button' onClick={() => handlePage('next')}>
					Next <FaArrowRightLong size={15}/>
				</S.BtnNavIssues>
			</S.ViewBtnNav>
		</S.CardRepo>
			
	 </S.Container>
 );
}