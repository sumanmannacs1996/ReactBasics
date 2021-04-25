import React from 'react'

export default function User(props) {
    return props.users.map((p)=><p key={p.id}>{p.name}</p>)
}
