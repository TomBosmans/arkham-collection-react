import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CardCollectionEntity, CardsQueryParamsDto, PackEntity } from "types"

export const arkhamCollection = createApi({
  reducerPath: "arkhamCollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000"
  }),
  endpoints: builder => ({
    getPacks: builder.query<PackEntity[], void>({
      query: () => "/packs"
    }),
    getCards: builder.query<CardCollectionEntity, CardsQueryParamsDto>({
      query: ({ pagination: { page, limit } }) => {
        const queryParams = []
        if (page) queryParams.push(`pagination[page]=${page}`)
        if (limit) queryParams.push(`pagination[limit]=${limit}`)

        return queryParams.length > 0 ? `/cards?${queryParams.join("&")}` : "/cards"
      }
    })
  })
})

export const { useGetPacksQuery, useGetCardsQuery } = arkhamCollection
