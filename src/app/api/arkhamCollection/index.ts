import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CardCollectionEntity, PackTreeEntity } from "types"

export const arkhamCollection = createApi({
  reducerPath: "arkhamCollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://arkham-collection.herokuapp.com"
  }),
  endpoints: builder => ({
    getPacks: builder.query<PackTreeEntity[], void>({
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
    }),
    getFactionNames: builder.query<string[], void>({
      query: () => "/faction_names"
    }),
    getEncounterNames: builder.query<string[], void>({
      query: () => "/encounter_names"
    }),
    getTypeNames: builder.query<string[], void>({
      query: () => "/type_names"
    })
  })
})

export const {
  useGetPacksQuery,
  useGetCardsQuery,
  useGetTraitsQuery,
  useGetCardNamesQuery,
  useGetFactionNamesQuery,
  useGetEncounterNamesQuery,
  useGetTypeNamesQuery
} = arkhamCollection
