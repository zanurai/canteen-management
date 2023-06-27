import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../../config/constant";
import { getLevelInfo } from "../../../../localStorage/localStorage";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const levelInfo = getLevelInfo();
      const token = levelInfo && levelInfo.token ? levelInfo.token : "";
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: `/auths/register`,
          method: "POST",
          body: body,
        };
      },
    }),
    verifyUser: builder.mutation({
      query: (body) => {
        return {
          url: `/auths/verify-email`,
          method: "PATCH",
          body: body,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: `/auths/login`,
          method: "POST",
          body: body,
        };
      },
    }),
    getMyProfile: builder.query({
      query: () => {
        return {
          url: `/auths/my-profile`,
          method: "GET",
        };
      },
    }),
    logOut: builder.mutation({
      query: () => {
        return {
          url: `/auths/logout`,
          method: "PATCH",
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useGetMyProfileQuery,
  useLogOutMutation,
} = adminApi;
