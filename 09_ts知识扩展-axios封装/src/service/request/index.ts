import axios from 'axios'
import type {AxiosInstance, AxiosRequestConfig} from 'axios'
class HyRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use((config) => {
      console.log('请求 success');
      return config
    }, err => {
      console.log("请求 fail");
      return config
    })

    this.instance.interceptors.response.use((res) => {
      console.log('响应 success');
      return res
    }, err => {
      console.log("响应 fail");
      return config
    })
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config)
  }


}
export default HyRequest