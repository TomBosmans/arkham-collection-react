import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CardCollectionEntity, PackEntity } from "types"

export const arkhamCollection = createApi({
  reducerPath: "arkhamCollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000"
  }),
  endpoints: builder => ({
    getPacks: builder.query<PackEntity[], void>({
      query: () => "/packs"
    }),
    getCards: builder.query<CardCollectionEntity, string>({
      query: queryParams => (queryParams ? `/cards?${queryParams}` : "/cards")
    })
  })
})

export const { useGetPacksQuery, useGetCardsQuery } = arkhamCollection
