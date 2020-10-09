import { useState, useEffect } from 'react'
import JsonSchema from 'components/JsonSchema'
import dynamic from 'next/dynamic'

import SectionSearch from 'components/SectionSearch'
import Modal from 'components/Modal'

import { searchItems } from 'services/search'

const SectionSearchResult = dynamic(() =>
  import('components/SectionSearchResult')
)

export default function App() {
  const [registers, setRegisters] = useState({})
  const [inputText, setInputText] = useState('')
  const [lastSearch, setlastSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    searchOnPresEnter()
  }, [])

  const searchOnPresEnter = () => {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Enter') {
        document.getElementById('btnSearchAll').click()
      }
    })
  }

  const handleSearch = async (relevant = false, page = 1) => {
    try {
      setShowModal(true)
      const response = await searchItems(inputText, page, relevant)
      setRegisters(response)
      setlastSearch(inputText)
      setShowModal(true)
    } catch (error) {
      console.error(`Error to load data... ${error}`)
    } finally {
      setShowModal(false)
    }
  }

  return (
    <>
      <SectionSearch
        fnSearchText={setInputText}
        searchTextValue={inputText}
        fnHandleSearch={handleSearch}
      />
      {registers?.data?.length >= 0 && (
        <SectionSearchResult
          searchResult={registers}
          inputText={inputText}
          lastSearch={lastSearch}
          fnPagination={handleSearch}
        />
      )}
      {showModal && <Modal />}
      <JsonSchema />
    </>
  )
}
