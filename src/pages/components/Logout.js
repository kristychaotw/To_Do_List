import React from 'react'
import { useState } from 'react'
import { useAuth, logout } from '../firebase';

export function LogoutBtn() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
    async function handleLogout() {
        setLoading(true);
        try {
          await logout();
        } catch {
          alert("Error!");
        }
        setLoading(false);
      }
  return (
      <>
        <button className="mb-20" disabled={loading || !currentUser} onClick={handleLogout}>
          登出
        </button>
        </>
  )
}
