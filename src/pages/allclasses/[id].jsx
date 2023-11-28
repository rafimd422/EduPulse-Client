import { AuthContext } from "@/Provider/AuthProvider"
import { useContext } from "react"
import SignIn from "../auth/signin"

const ClassDetails = () => {
const {user} = useContext(AuthContext)



    if(user === null){
        return <SignIn />
      }
  return (
    <div>
      
    </div>
  )
}

export default ClassDetails
