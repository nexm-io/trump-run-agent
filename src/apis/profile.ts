import { Profile } from "src/types/profile.type";
import { ApiResponse } from "src/types/utils.type";
import http from "src/utils/http";

export const getProfile = (encryptedData: string) => {
  return http.get<ApiResponse<Profile>>("/v1/user/get-user-info");
};
