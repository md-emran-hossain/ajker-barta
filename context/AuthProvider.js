import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export let AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};
