import React from 'react'
import PropTypes from 'prop-types'

// withSomethingUniqueToComponent is a common naming convention. Here we are filtering our props and thus we called it withFiltertedProps
// We pass in a BaseComponent paramater that then returns a function. Destructing genre and list off of props as well
const withFilteredProps = (BaseComponent) => ({ genre, list }) => {
  // creating our filtered list based on the genre we pass in
  const filteredList = genre
    ?
    list.filter((artist) => artist.genre === genre)
    : list
  return <BaseComponent list={filteredList} />
}

// The actualy component we will use. All it takes is list and name off of props and return some JSX
const DisplayList = ({ list, name }) => {
  console.log();
  return (
    <div>
      {list.map((artist) => <div>{artist.name}</div>)}
    </div>
  )
}


// Remember, Higher Order Components are just functions that return a new component just like how .map, .filter or .reduce return a new array.
// Here we assign the variable HOC to the newly returned component
const HOC = withFilteredProps(DisplayList)

// Here we are using PropTypes. PropTypes allow us to set an actual type our props need to be. Rember this is data type not actual keyboard cat typing.
HOC.propTypes = {
  genre: PropTypes.string,
  list: PropTypes.array.isRequired
}

export default HOC
