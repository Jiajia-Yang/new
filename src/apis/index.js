
import { createApi } from '@ajax'
import { mockURL, baseURL, path } from '@config'

const option = { baseURL: mockURL }

export const demoApi = createApi('get', `${path}/data/demo`, option) // demo




