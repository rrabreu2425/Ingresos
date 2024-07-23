import { useContext, createContext, useState } from "react";
import { signUpRequest } from '../api/userAunt'

const AuntContext = createContext()

export const useAuth=()=>{
    const contex= useContext(AuntContext)
    if(!contex){
        throw new Error('useAunt most be used within an AuthProvider')
    }
    return contex

}

export const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null)
    const signUp = async (user) => {
        const res = await signUpRequest(user)
        console.log(res.data)
        setUser(res.data)
    }
    <AuntContext.Provider value={{
       signUp,
       user
    }}>
        {Children}
    </AuntContext.Provider>
    
}