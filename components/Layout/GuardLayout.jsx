// core
import React, { useEffect } from 'react'

// library
import { useSelector } from "react-redux";

// components
import { Loading } from "../../components";
import { getUserState } from "../../redux/auth/selectors";
import { useRouter } from "next/router";
import { Layout } from "../../components";

export const GuardLayout = ({children}) => {
    const router = useRouter();

    const user = useSelector(getUserState);

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, []);

    return (
        <Layout>
            {user ? children : <Loading />}
        </Layout>
    )
};