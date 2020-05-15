import Mock from 'mockjs'
import data from './data'
import api from '@/api'

Mock.mock(api.TEST_LOGIN, 'post', data.test.login('root'))
Mock.mock(api.TOAST, 'get', data.test.getToasts())
Mock.mock(api.CONTAIN_LIST, 'get', data.lists.getContainList())
