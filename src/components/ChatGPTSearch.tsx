import { useState } from 'react'

import { SUPPORTED_LANGUAGES } from '../constants'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

interface SearchResult {
	id: string
	title: string
	description: string
}

function ChatGPTSearch() {
	const { selectedLanguage } = useSelector((state: RootState) => state.language)
	const [query, setQuery] = useState<string>('')
	const [results, setResults] = useState<SearchResult[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	console.log(query)
	// Handle the search input change
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	// Handle the search action
	const handleSearch = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!query.trim()) return

		setLoading(true)

		try {
			// Assuming you have an API call to fetch results (replace with actual API)
			const response = await fetch(`/api/chatgpt/search?q=${query}`)
			const data = await response.json()

			// Assuming data comes in an array of results with title and description
			setResults(data.results)
		} catch (error) {
			console.error('Error fetching search results:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="relative overflow-x-hidden h-full min-h-full w-[100vw]  bg-[url('../assets/images/backgroundImage.jpg')] bg-center bg-cover bg-no-repeat  overflow-hidden">
			<div className="w-full h-screen z-10 bg-black bg-opacity-40 bg-gradient-to-t from-black/80 via-transparent to-black/80"></div>
			<div className="absolute top-[15%] w-full p-5 z-10 flex justify-center">
				<div className="chatgpt-search-container p-5  w-full">
					<form className="search-bar mb-4  flex flex-col md:flex-row justify-center">
						<input
							type="text"
							placeholder={
								SUPPORTED_LANGUAGES?.find(
									(lang) => lang.identifier === selectedLanguage,
								)?.placeholder || '🔍  Search movies, shows, or ask ChatGPT...'
							}
							value={query}
							onChange={handleSearchChange}
							className="w-[90%] mb-5 md:mb-0 md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_20px]   outline-none text-black border-transparent hover:border-[#e50914] border-b-[1px] transition duration-300 max-w-[800px] "
						/>
						<button
							onClick={handleSearch}
							disabled={!query.trim()} // Disable button if query is empty
							className={`w-[90%] block md:w-fit md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_30px] border-none duration-400 font-semibold transition-colors duration-300 ${
								!query.trim()
									? 'bg-[#f16a6f] text-white cursor-not-allowed'
									: 'bg-[#e50914] text-white cursor-pointer hover:bg-[#b20710]'
							}`}>
							{SUPPORTED_LANGUAGES?.find(
								(lang) => lang.identifier === selectedLanguage,
							)?.buttonText || 'Search'}
						</button>
					</form>

					{loading && <p>Loading...</p>}

					<div className="search-results mt-4">
						{results.length > 0 ? (
							<ul>
								{results.map((result) => (
									<li key={result.id} className="mb-4 p-4 border-b">
										<h3 className="font-semibold text-xl">{result.title}</h3>
										<p>{result.description}</p>
									</li>
								))}
							</ul>
						) : (
							!loading && <p>No results found</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<div className="chatgpt-search-container p-5">
			<form className="search-bar mb-4  flex flex-col md:flex-row justify-center">
				<input
					type="text"
					placeholder="🔍 Search with ChatGPT..."
					value={query}
					onChange={handleSearchChange}
					className="w-[90%] mb-5 md:mb-0 md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_20px]   outline-none text-black border-transparent hover:border-[#e50914] border-b-[1px] transition duration-300 max-w-[800px] "
				/>
				<button
					onClick={handleSearch}
					disabled={!query.trim()} // Disable button if query is empty
					className={`w-[90%] block md:w-fit md:inline-block box-border text-base rounded-sm min-h-[40px] p-[16px_30px] border-none duration-400 font-semibold transition-colors duration-300 ${
						!query.trim()
							? 'bg-[#f16a6f] text-white cursor-not-allowed'
							: 'bg-[#e50914] text-white cursor-pointer hover:bg-[#b20710]'
					}`}>
					Search
				</button>
			</form>

			{loading && <p>Loading...</p>}

			<div className="search-results mt-4">
				{results.length > 0 ? (
					<ul>
						{results.map((result) => (
							<li key={result.id} className="mb-4 p-4 border-b">
								<h3 className="font-semibold text-xl">{result.title}</h3>
								<p>{result.description}</p>
							</li>
						))}
					</ul>
				) : (
					!loading && <p>No results found</p>
				)}
			</div>
		</div>
	)
}
export default ChatGPTSearch
