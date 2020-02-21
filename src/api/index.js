import CreareAxios from './create-axios';
import configs from './config';

const server = new CreareAxios(configs)

export const addAndroidPlguin = data => {
  server.api({
    url: '/manager/addAndroidPlguin',
    method:"get",
    data: JSON.stringify(data)
  })
}
