import React from 'react'

const Helmet = ({ title, children }) => {
    document.title = "Food Odering App - " + title
    return (
        <div>{children}</div>
    )
}

export default Helmet