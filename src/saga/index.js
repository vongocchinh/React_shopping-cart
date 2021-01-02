import { call, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from  '../actions/index';
import {Product_List_Data_Success,Product_List_Data_Error,Data_Get_Saga} from '../actions/index';
function* getListData(){
    yield take(types.Product_Data_List);
    console.log("product data list"); 
    const res=yield call("https://api.covid19api.com/");
    if(res.statusCode===200){
        yield put(Product_List_Data_Success(res.data));
    }else{
        yield put(Product_List_Data_Error(res.data));
    }
    //call để gọi api
    //put để gọi dispatch action
}

function* getListData2(){
    const state=yield select(state=>state.Product_Data) ;
   if(state){
    yield put(Data_Get_Saga(state));
   }
}

function* rootSaga(){
    // yield fork(getListData);
    yield takeEvery(types.Product_Data_List,getListData2);// goij cais cuoi
    //takeEvery //goij all
}
export default rootSaga;