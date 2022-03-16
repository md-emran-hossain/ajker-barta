import React, { useEffect } from 'react'
import DashboardHome from '../../components/Dashboard/DashboardHome/DashboardHome'
import MakePoll from '../../components/MakePoll/MakePoll'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router';

export default function MakePollRoute() {
    const { admin, user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loading) {
            return <div>Nothing</div>
        }
        if (!admin || !user.email) {
            router.push({
                pathname: '/login',
                query: { from: router.pathname }
            })
        }
    }, [loading, user.email, router, admin])
    return (
        <DashboardHome>
            <MakePoll />
        </DashboardHome>
    )
}