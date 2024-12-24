import OpenAI from 'openai'

export const openAIClient = new OpenAI({
	apiKey: import.meta.env.VITE_REACT_CHAT_GPT_API_KEY,
	dangerouslyAllowBrowser: true,
})
