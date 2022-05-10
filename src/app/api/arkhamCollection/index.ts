import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CardCollectionEntity, PackTreeEntity } from "types"

export const arkhamCollection = createApi({
  reducerPath: "arkhamCollectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_ARKHAM_COLLECTION_BASE_URL
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
    }),
    getXpValues: builder.query<number[], void>({
      query: () => "/xp_values"
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
  useGetTypeNamesQuery,
  useGetXpValuesQuery,
} = arkhamCollection
