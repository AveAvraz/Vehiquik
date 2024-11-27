import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { vehicleType } from './vehicleType'
import { banner } from '../schemas/banner'

//import {authorType} from './authorType' maybe

export const schema = {
  types: [blockContentType, categoryType,vehicleType, banner,],
}
