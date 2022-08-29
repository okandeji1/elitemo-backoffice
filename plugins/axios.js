import { init } from '../utils/event-emitter';

export default function (ctx) {
  ctx.$axios.defaults.baseURL = ctx.$config.apiUrl;
  ctx.$axios.defaults.headers.common['x-api-key'] = ctx.$config.apiKey;

  ctx.$axios.interceptors.response.use(
    (response) => {

      return response;
    },
    async function (error) {

      return Promise.reject(error);
    },
  );

  init(ctx)

}
