const key = '4404d2f5ff44af76585b0d45e25f087d';
const href = 'https://ws.audioscrobbler.com';

const getTopArtists = () => dispatch => {
    const asyncGetTopArtists = () => {
      const country = 'ukraine';
      const page = '';
      const limit = '100';
      console.log(typeof(page), typeof(limit))
        return dispatch => {
          fetch(`${href}/2.0/?method=geo.gettopartists&country=ukraine&limit=${limit}&page=${page}&api_key=${key}&format=json`)
              .then(response => response.json())
              .then(req => {
                //  console.log(req)
                  const data = req.topartists.artist;
                  dispatch({ type: 'GET_TOP_ARTISTS', data })

              })
              .catch(errors => {
                //  console.log(errors)
              })
        }
    }
    dispatch(asyncGetTopArtists())
}


const getInfo = (artist) => dispatch => {
    const asyncGetMoreInfo = () => {
      const name = artist;
      const limit = '100';
        return dispatch => {
          fetch(`${href}/2.0/?method=artist.getinfo&artist=${name}&api_key=${key}&format=json`)
              .then(response => response.json())
              .then(req => {
              //    console.log(req)
                  const data = req;
                  dispatch({ type: 'GET_INFO', data })

              })
              .catch(errors => {
                  //console.log(errors)
              })
        }
    }
    dispatch(asyncGetMoreInfo())
}


export default {
    getTopArtists,
    getInfo
};
