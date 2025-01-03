export const SUPPORTED_LANGUAGES = [
	{
		identifier: 'en',
		name: 'English',
		placeholder:
			'🔍 What would you like to watch today? ChatGPT is happy to help...',
		buttonText: 'Search',
	},
	{
		identifier: 'hi',
		name: 'Hindi',
		placeholder: '🔍 मूवीज़, शो या ChatGPT से पूछें...',
		buttonText: 'खोजें',
	},
	{
		identifier: 'es',
		name: 'Spanish',
		placeholder: '🔍 Busca películas, series o pregunta a ChatGPT...',
		buttonText: 'Buscar',
	},
	{
		identifier: 'zh',
		name: 'Chinese',
		placeholder: '🔍 搜索电影、节目或询问ChatGPT...',
		buttonText: '搜索',
	},
	{
		identifier: 'ar',
		name: 'Arabic',
		placeholder: '🔍 ابحث عن أفلام، عروض أو اسأل ChatGPT...',
		buttonText: 'بحث',
	},
	{
		identifier: 'fr',
		name: 'French',
		placeholder: '🔍 Cherchez des films, séries ou demandez à ChatGPT...',
		buttonText: 'Rechercher',
	},
	{
		identifier: 'de',
		name: 'German',
		placeholder: '🔍 Suchen Sie Filme, Serien oder fragen Sie ChatGPT...',
		buttonText: 'Suchen',
	},
	{
		identifier: 'ru',
		name: 'Russian',
		placeholder: '🔍 Ищите фильмы, сериалы или спрашивайте у ChatGPT...',
		buttonText: 'Поиск',
	},
	{
		identifier: 'pt',
		name: 'Portuguese',
		placeholder: '🔍 Pesquise filmes, séries ou pergunte ao ChatGPT...',
		buttonText: 'Pesquisar',
	},
	{
		identifier: 'bn',
		name: 'Bengali',
		placeholder: '🔍 সিনেমা, শো বা ChatGPT-কে প্রশ্ন করুন...',
		buttonText: 'অনুসন্ধান',
	},
	{
		identifier: 'ja',
		name: 'Japanese',
		placeholder: '🔍 映画、番組、またはChatGPTに質問...',
		buttonText: '検索',
	},
	{
		identifier: 'ko',
		name: 'Korean',
		placeholder: '🔍 영화, 프로그램, 또는 ChatGPT에 질문...',
		buttonText: '검색',
	},
]

export const API_OPTIONS = {
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${
			import.meta.env.VITE_REACT_APP_TMDB_API_ACCESS_TOKEN
		}`,
	},
}

export const SEARCH_QUERY = 'https://api.themoviedb.org/3/search/movie?query='

export const BASE_URL = 'https://image.tmdb.org/t/p/original'

export const FALLBACK_IMAGE_URL = `https://image.tmdb.org/t/p/original/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg`
