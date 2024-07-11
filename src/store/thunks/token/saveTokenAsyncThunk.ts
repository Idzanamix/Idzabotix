/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ThunkActionType } from "../../storeRedux";
import { resetToken } from "../../slices/tokenSlice";
import { getTokenCookie } from "../../cookie/token/getTokenCookie";

// interface IQueryCode extends URLSearchParams {
//   code?: string;
// }


export const saveTokenAsyncThunk: any = (): ThunkActionType => async (dispatch) => {

  // const { VITE_CLIENT_SECRET, VITE_CLIENT_ID, VITE_SITE_URL } = import.meta.env;

  // const { code }: IQueryCode = new Proxy(new URLSearchParams(window.location.search), {
  //   get: (searchParams, prop: any) => searchParams.get(prop),
  // });

  const cookieToken = getTokenCookie();

  if (cookieToken !== 'null' && cookieToken) {
    return;
  } else {
    dispatch(resetToken());
  }

  // const params = `client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}&code=${code}&redirect_uri=${VITE_SITE_URL}`

  // try {
  //   const { data } = await axios.post('https://github.com/login/oauth/access_token?' + params,
  //     {
  //       headers: {
  //         'Accept': 'application/json',
  //       }
  //     }
  //   );

  //   console.log('data', data);

  //   const token = new URLSearchParams(data).get('access_token');

  //   if (token) {
  //     dispatch(setToken({
  //       isToken: true,
  //       liveTimeMinutes: 60,
  //     }));

  //     setTokenCookie(token, 60);
  //   }

  //   window.history.replaceState({}, 'Toolkinamix', '/');

  // } catch (error: any) {
  //   console.log('data2');

  //   console.log(error);
  //   dispatch(resetToken());
  // }
}




