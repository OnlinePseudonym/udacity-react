import React from 'react'

import User from './User'

function UserList({ profiles, users, movies }) {
  return (
    <ul>
    	{profiles.map((profile, i) => <User key={i} favoriteMovie={ movies[profile.favoriteMovieID] } user={ users[profile.userID] } />)}
	</ul>
  )
}

export default UserList