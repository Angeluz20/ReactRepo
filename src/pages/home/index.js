import React, {useState, useCallback, useEffect} from 'react';
import * as S from './styles.js'
import api from '../../services/api.js';
import LoadingGitHub from '../Components/loadings/loadingGitHub/loading.js';
import {AiOutlineSearch, AiFillGithub} from 'react-icons/ai'
import {IoOpenOutline} from 'react-icons/io5'
import {TbTrashX} from 'react-icons/tb'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom';


export default function Home() {
	const [newRepo, setNewRepo] = useState('')
	const [repo, setRepo] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const storage = localStorage.getItem('repos')
		if(storage){
			setRepo(JSON.parse(storage))
		}
	},[])

	useEffect(() => {
		localStorage.setItem('repos',JSON.stringify(repo))
	},[repo])

	const getReposSearch = useCallback((e) => {
		e.preventDefault()
		
		async function submit(){
			setLoading(true)
			try {
				if(newRepo === ''){
					toast.warn('fill the form!')
					return
				}
				const response =  await api.get(`repos/${newRepo}`)

				const hasRepo = repo.find(repo => repo.name === newRepo)

				if(hasRepo){
					toast.info('Existing repository!')
					return
				}
		
				const data = {
					name: response.data.full_name
				}
				
				setRepo([...repo, data])
				setNewRepo('');
				toast.success('Repository found!')
				console.log(response)
			
		} catch (error) {
			toast.error(`Oops, No repository found!`)
		} finally{
			setLoading(false)
		}	
	}	
	submit()
},[newRepo, repo])

	const handleRepo = (e) => {
		setNewRepo(e.target.value)
	}
	
	const handleDelete = useCallback((repoId) => {
		const find = repo.filter(r => r.name !== repoId)
		setRepo(find)
		toast.info('Repositório removido')
	},[repo])

 return (
	 <S.Container>
		   <AiFillGithub size={70} color='#000'/>
			<S.TitleProject>ReactRepo</S.TitleProject>

			<S.CardSearhRepo onSubmit={getReposSearch}>
					<S.InputSearch 
					  type='text'
						placeholder='Enter the repository name'
						value={newRepo}
						onChange={handleRepo}
					/>

					<S.BtnSearch type='submit'>	
						{!loading ? <><AiOutlineSearch size={25}/>Search</>:<LoadingGitHub type={true}/>}
					</S.BtnSearch>
			</S.CardSearhRepo>

			<S.List>
					{repo.map(repo => (
							<S.ItemList key={repo.name}>
								
								<span>
									<S.DeleteBtn onClick={() => handleDelete(repo.name)}>
										<TbTrashX size={20}/>
									</S.DeleteBtn>									
									{repo.name}
								</span>

								<Link to={`/repositorio/:${encodeURIComponent(repo.name)}`}>
									<IoOpenOutline color='#000'/>
								</Link>
							</S.ItemList>
						))}
					</S.List>
	 </S.Container>
 );
}