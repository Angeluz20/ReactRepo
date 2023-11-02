import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home";
import PageNotFound from "../Components/pageNotFound/error_page";
import Repositorios from "../repositorios/repo";
export default function RoutesApp(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/repositorio/:repo" element={<Repositorios/>}/>
				<Route path="*" element={<PageNotFound/>}/>
			</Routes>
		</BrowserRouter>
	)
}