import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export const networkStatus = ()=>{
    const [connected,setConnected] = useState<boolean | null>(false);
    const [internet, setInternet] = useState<boolean | null>(false);

    useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
        console.log('inhook',state.isConnected)
            setConnected(state.isConnected);
            setInternet(state.isInternetReachable);
      });
    },[]) 
   return connected && internet;
    }