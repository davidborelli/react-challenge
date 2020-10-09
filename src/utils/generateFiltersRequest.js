export const generateFiltersRequest = (url, filters) => {
  try {
    if (typeof filters === 'undefined' || Array.isArray(filters)) {
      throw new Error('Error when generatiing search filters')
    }

    if (Object.entries(filters).length <= 0) {
      throw new Error('Error when generatiing search filters')
    }

    let newUrl = url

    Object.entries(filters).forEach(([key, value]) => {
      newUrl = `${newUrl}&${key}=${value}`
    })

    return newUrl
  } catch (error) {
    throw new Error(`Error when generatiing search filters... ${error}`)
  }
}
