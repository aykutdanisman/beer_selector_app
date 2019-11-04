import axios from 'axios';

function fetchBeers(meal) {
    return axios
        .get(`${process.env.PUNK_API_ENDPOINT}beers?food=${meal}`)
        .then(
            response => {
                const { data } = response;
                return {
                    success: true,
                    data,
                };
            },
            err => {
                let errorMessage;
                if (err.response == null){
                    errorMessage = `An error occured while calling the service!`;
                }else{
                    const { statusCode, error, message } = err.response.data;
                    errorMessage= `An error occured while fetching beers: ${statusCode} - ${error} : ${message}`;
                }
                return {
                    failure: true,
                    errorMessage,
                };
            }
        );
}

export default fetchBeers;
