import { useRouter } from 'next/router'

const DynamicClass = () => {
    const router = useRouter()
    const {id} = router.query
    console.log(id)
  return (
    <div>
      id:{id}
    </div>
  )
}

export default DynamicClass
