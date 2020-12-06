import React from "react"

const SearchStateContext = React.createContext()
const SearchDispatchContext = React.createContext()

function searchReducer(state, action) {
  switch (action.type) {
    case "SET_QUERY": {
      return { query: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
function SearchProvider({ children }) {
  const [state, dispatch] = React.useReducer(searchReducer, { query: "" })
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  )
}

function useSearchState() {
  const context = React.useContext(SearchStateContext)
  if (context === undefined) {
    throw new Error("useSearchState must be used within a SearchProvider")
  }
  return context
}
function useSearchDispatch() {
  const context = React.useContext(SearchDispatchContext)
  if (context === undefined) {
    throw new Error("useSearchDispatch must be used within a SearchProvider")
  }
  return context
}
export { SearchProvider, useSearchState, useSearchDispatch }
