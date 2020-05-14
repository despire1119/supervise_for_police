import Mock from 'mockjs'
import data from './data'
import api from '@/api'

Mock.mock(api.TEST_LOGIN, 'post', data)
