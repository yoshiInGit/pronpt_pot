import { useEffect, useState } from "react"

export const useSimpleUser = ({id} : {id : string}) => {
    const [user, setUser]           = useState<SimpleUser | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError]         = useState();

    useEffect(()=>{
        (async()=>{
            //TODO
        })()
    },[]);
    
    return {user, isLoading, error}
} 