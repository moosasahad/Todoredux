import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './redux/redex'
export const store = configureStore({
    reducer:{
        todo:todoSlice,
    }
})