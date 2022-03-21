import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CardCollectionEntity, PackEntity } from "types"

export const arkhamCollection = createApi({
  reducerPath: "arkhamCollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://arkham-collection.herokuapp.com"
  }),
  endpoints: builder => ({
    getPacks: builder.query<PackEntity[], void>({
      query: () => "/packs"
    }),
    getCards: builder.query<CardCollectionEntity, string>({
      query: queryParams => (queryParams ? `/cards?${queryParams}` : "/cards")
    }),
    getTraits: builder.query<string[], void>({
      query: () => "/traits"
    }),
    getCardNames: builder.query<string[], void>({
      query: () => "/card_names"
    })
  })
})

export const {
  useGetPacksQuery,
  useGetCardsQuery,
  useGetTraitsQuery,
  useGetCardNamesQuery
} = arkhamCollection
