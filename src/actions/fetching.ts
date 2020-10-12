//~ fetching to server
export const fetchContentData = async (credentials) => {
  const res = await fetch('https://jordan-portfolio-server.herokuapp.com/contentdatalogin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ credentials })
    }
  )
  if (res.status === 200)
    return await res.json() //update content state
}

export const updateContent = async (data, credentials) => {
  const res = await fetch('https://jordan-portfolio-server.herokuapp.com/updatecontent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data, credentials })
    })
  if (res.status === 200)
    return true
}
//~~~~

