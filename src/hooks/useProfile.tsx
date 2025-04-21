import { useContext, useEffect, useState } from "react";
import { getProfile } from "src/apis/profile";
import { TelegramContext } from "src/hooks/telegram-provider";
import { Profile } from "src/types/profile.type";
import { encryptData } from "src/utils/utils";

export default function useProfile() {
  const [profile, setProfile] = useState<Profile | undefined>();
  const [isFetching, setIsFetching] = useState(false);
  const { webApp } = useContext(TelegramContext);

  const fetchProfile = async () => {
    if (!webApp) return;
    const authData = webApp.initData || "";
    const encryptedData = encryptData(authData);
    setIsFetching(true);
    try {
      const response = await getProfile(encryptedData);
      setProfile(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [webApp]);

  return { profile, fetchProfile, isFetching };
}
