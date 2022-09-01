import MockAdapter from 'axios-mock-adapter'
import { axiosInstance as axios } from '../libs/axios'

export default new MockAdapter(axios)
