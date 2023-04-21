'use client'
import { useSearchParams } from 'next/navigation'
const Post = () => {
  const router = useSearchParams()
  const param = router.toString().split('=')
  return <p style={{color:"white"}}>Post: {param[1]}</p>
}

export default Post