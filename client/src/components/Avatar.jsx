import React from 'react'

const Avatar = ({children,backgroundColor,paddingLeft,marginTop,color,borderRadius,fontSize,cursor,textDecoration}) => {
    const style={
        backgroundColor,
        paddingLeft,
        marginTop,
        color:color || 'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor:cursor || null,
        textDecoration:"none"
    }
  return (
    <div style={style}>
        { children }
    </div>
  )
}

export default Avatar