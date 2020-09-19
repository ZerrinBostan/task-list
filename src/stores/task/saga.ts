import { fork } from 'child_process';
import { take, put, call, all, takeEvery } from 'redux-saga/effects';
import { FetchRepos, FetchUser } from '../../client';
import { getUser, setLoading, setRepos, setUser } from './actions';
import { GET_REPOS, GET_USER, ReposState } from './types';

function* watchGetUser() {
  yield takeEvery(GET_USER, getUserListener);
}

function* getUserListener(action: ReturnType<typeof getUser>) {
  yield put(setLoading({ id: 'user' }));
  const {
    avatar_url,
    bio,
    blog,
    email,
    id,
    location,
    name,
    public_repos,
  } = yield call(FetchUser);

  yield put(
    setUser({
      avatar_url,
      bio,
      blog,
      email,
      id,
      location,
      name,
      public_repos,
    })
  );

  yield put(setLoading({ id: '' }));

  yield put({ type: 'GET_REPOS' });
}

function* watchGetRepos() {
  yield takeEvery(GET_REPOS, getReposListener);
}

function* getReposListener() {
  yield put(setLoading({ id: 'repos' }));

  const response: ReposState[] = yield call(FetchRepos);

  const repositories: ReposState[] = response.map((item: ReposState) => ({
    description: item.description,
    forks: item.forks,
    forks_count: item.forks_count,
    full_name: item.full_name,
    id: item.id,
    languages_url: item.languages_url,
    license: item.license,
    name: item.name,
    open_issues_count: item.open_issues_count,
    stargazers_count: item.stargazers_count,
  }));

  yield put(setRepos(repositories));
  yield put(setLoading({ id: '' }));
}

export default function* rootSaga() {
  yield all([watchGetUser(), watchGetRepos()]);
}
