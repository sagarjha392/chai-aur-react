export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/sagarjha392')
    return response.json()
  }