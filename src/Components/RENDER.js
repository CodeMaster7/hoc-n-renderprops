import React from 'react'
import PropTypes from 'prop-types'

// Creating our Component and referencing props
const RenderProp = (props) => {
  // returning our render function. Remember this doesn't have to be called render but it most common along with child
  return props.render((genre, list) => {
    // filter our list
    const filteredList = genre ? list.filter((artist) => artist.genre === genre) : list
    return (
      // return JSX based off filteredList
      <div>
        {filteredList.map((artist) => <div className='artist-container' key={artist.name}>
          <img className='artist-img' src={artist.artistImg} alt={artist.name} />
          <div className='artist-info'>
            <h3> {artist.name}</h3>
            <p>{artist.genre}</p>
          </div>
        </div>)}
      </div>
    )
  })
}

// Here we are using PropTypes. PropTypes allow us to set an actual type our props need to be. Rember this is data type not actual keyboard cat typing.
RenderProp.propTypes = {
  render: PropTypes.func.isRequired
}

export default RenderProp
