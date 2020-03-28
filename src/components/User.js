import React from 'react'

function User({ user, favoriteMovie, key }) {
  return (
    <li key={key}>{ `${user.name}'s favorite movie is ${favoriteMovie.name}.` }</li>
  )
}

export default User