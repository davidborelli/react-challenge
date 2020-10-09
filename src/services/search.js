import axios from './api'
import { SEARCH, POSTS } from 'settings/kernel'
import { generateFiltersRequest } from 'utils/generateFiltersRequest'

export const searchItems = async (
  textoToSearch,
  page = 1,
  mostRelevants = false
) => {
  try {
    const searchTo = `${SEARCH}${textoToSearch}`

    const params = {
      page,
      orderBy: mostRelevants && 'relevance'
    }

    !mostRelevants && delete params.orderBy

    const url = generateFiltersRequest(searchTo, params)
    const { data } = await axios.get(url)

    return data
  } catch (error) {
    console.error(`Error to load search data... ${error}`)
  }
}

export const getArticle = async (articleId) => {
  try {
    const articleUrl = `${POSTS}${articleId}`

    const { data } = await axios.get(articleUrl)

    return data
  } catch (error) {
    console.error(`Error to get article data... ${error}`)
  }
}
