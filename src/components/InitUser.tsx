import { userState } from "@/store/atoms/user";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "@/config";
import { useEffect } from "react";

export function InitUser() {
    const setUser = useSetRecoilState(userState);   
    const init = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/admin/me`, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
  
            if (response.data.username) {
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        } catch (e) {
  
            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };
  
    useEffect(() => {
        init();
    }, []);
  
    return <></>
  }