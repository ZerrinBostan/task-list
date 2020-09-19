import React, { useEffect } from 'react';
import { IconMap, IconMail, IconLink } from '../components/icon';
import IconBookmark from '../components/icon/IconBookmark';
import Chips from '../components/Chips';
import Task from '../components/Task';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../stores/task/actions';
import { RootState } from '../stores/rootReducer';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const { repositories, user, loading } = useSelector(
    (state: RootState) => state.github
  );

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="home-page">
      <div className="container">
        {loading?.id === 'user' ? (
          <div className="d-flex justify-content-center align-items-center"><Loading /></div>
        ) : (
          <div className="home-page-head">
            <img src={user?.avatar_url} alt="qubitro" />
            <section>
              <span className="home-page-head__title">{user?.name}</span>
              <p>{user?.bio}</p>
              <div className="user-information mt-3">
                <span>
                  <IconMap fill="#24292e" />
                  {user?.location}
                </span>
                <span>
                  <IconLink width={16} height={16} fill="#24292e" />
                  https://www.qubitro.com
                </span>
                <span>
                  <IconMail width={16} height={16} fill="#24292e" />
                  mailto:{user?.email}
                </span>
                <Chips text="Verified" />
              </div>
            </section>
          </div>
        )}
        <div className="d-flex align-items-center mt-4">
          <IconBookmark width={18} height={18} fill="#24292e" />
          <span className="mx-2">repositories</span>
        <span className="repositories-count">{user?.public_repos}</span>
        </div>
      </div>
      {loading?.id === 'repos' ? (
        <div className="d-flex align-items-center justify-content-center"><Loading /></div>
      ) : (
        repositories?.map((item) => <Task {...item} />)
      )}
    </div>
  );
};

export default Home;
