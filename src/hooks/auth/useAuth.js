import { useAuthStore } from "../../store/auth/useAuthStore"

export const useAuth = () => {
    const auth = useAuthStore(state => state.login);

    const login = (username, password) => {
        if(username === "salmendra" && password === "sofia.."){
            const user = {
                username,
                userType:"Transportista",
                userFirstName: "Sofia"
            }
            auth(user);
        }
    }
    return {
        login,
    }
}