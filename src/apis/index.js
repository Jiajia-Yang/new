
import { createApi } from '@ajax'
import { mockURL, baseURL, path } from '@config'

const option = { baseURL: mockURL }

export const demoApi = createApi(`${path}/data/demo`, option) // demo
