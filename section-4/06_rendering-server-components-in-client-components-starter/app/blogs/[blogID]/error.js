"use client"
export default function Error({error}){
    console.dir(error)
    return(
        <>
            <div>Something went wrong</div>
            <p>{error.message}</p>
        </>
    )
}