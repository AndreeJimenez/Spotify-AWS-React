import { all, fork, put, takeLatest } from 'redux-saga/effects';
import * as constants from './FoldersConstants';
import * as actions from './FoldersActions';
import * as services from './FoldersServices';

function* getAWSFolders() {
  try {
    const response = yield services.getAWSFolders();
    console.log(response);
    if (response) yield put(actions.getAWSFoldersSuccess(response));
  } catch (err) {
    yield put(actions.getAWSFoldersFailure({ error: err.message }));
  }
}
//watcher
function* getUserFoldersSaga() {
  yield takeLatest(constants.GET_AWS_FOLDERS_START, getAWSFolders);
}

export default function* foldersSaga() {
  yield all([
    fork(getUserFoldersSaga)
  ]);
} 