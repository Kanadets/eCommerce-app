import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import ShopActionsTypes from "./shop.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// collectionRef
//   .get()
//   .then((snapshot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     fetchCollectionsSuccess(collectionsMap);
//   })
//   .catch((error) => fetchCollectionsFailure(error.message));

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionsTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
