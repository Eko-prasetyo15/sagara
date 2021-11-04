import axios from 'axios'

const URL_PROV = 'https://dev.farizdotid.com/api/daerahindonesia/provinsi';
const URL_KOTA = 'https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi='
const URL_NEWS = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-04&sortBy=publishedAt&apiKey=b77fc9e462e54d4abeb04041f36059af'


export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const getProvSuccess = (datas) => ({
    type: 'GET_PROV_SUCCESS',
    datas,
});
const getProvFailure = (err) => ({
    type: 'GET_PROV_FAILURE',
    err,
});
const getKotaSuccess = (datas) => ({
    type: 'GET_KOTA_SUCCESS',
    datas,
});
const getKotaFailure = (err) => ({
    type: 'GET_KOTA_FAILURE',
    err,
});
const getNewsSuccess = (datas) => ({
    type: 'GET_NEWS_SUCCESS',
    datas,
});
const getNewsFailure = (err) => ({
    type: 'GET_NEWS_FAILURE',
    err,
});

export const getProvinsi = (kota) => {
    console.log(kota, 'lllll')
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL_PROV, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(getProvSuccess(response.data.provinsi));
                if(kota) {
                    dispatch(getKota(kota))
                }
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getProvFailure(error))

            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};
export const getKota = (id) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL_KOTA + `${id}`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(getKotaSuccess(response.data.kota_kabupaten));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getKotaFailure(error))

            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};
export const getNews = (id) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL_NEWS, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(getNewsSuccess(response.data.articles));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getNewsFailure(error))

            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};



