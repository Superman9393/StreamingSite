export const load = async({fetch})=>{
    const videoRes = await fetch("http://localhost:3000/videos")
    const videoInfo = await videoRes.json()
    
    return {
        videos: videoInfo
    }
}