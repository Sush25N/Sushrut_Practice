import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            setLoading(false);
            const response = await fetch('https://api.github.com/users');
            console.log(response);
            
            setUsers(await response.json());
        }catch(error) {
            setLoading(false);
            console.log(error);
        }
    }
    useEffect(() => {
        getUsers();
    }, []);

    if(loading) {
        return <Loading />
    }

  return (
    <>
        <GithubUsers users={users} />  
    </>
  )
}

export default UseEffectApi
