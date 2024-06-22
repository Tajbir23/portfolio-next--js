const content = async () => {
    const res = await fetch('/projects/projects.json')

    if(!res.ok){
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data
}

export default content