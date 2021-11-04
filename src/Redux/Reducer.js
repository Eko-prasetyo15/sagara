const initialState = {
    isLoading: false,
    datasProv: [],
    datasKota: [],
    datasNews: []
}
const CountryData = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: !state.isLoading };
        case 'GET_PROV_SUCCESS':
            return { ...state, datasProv: action.datas }
        case 'GET_KOTA_SUCCESS':
            return { ...state, datasKota: action.datas }
        case 'GET_NEWS_SUCCESS':
            return { ...state, datasNews: action.datas }
        default:
            return state
    }

}

export default CountryData