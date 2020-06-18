import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useNotifier from '../../hooks/useNotifier';
import Loader from '../../components/Loader/Loader';
import LibraryItem from '../../components/LibraryItem/LibraryItem';
import * as constants from './FoldersConstants';
import * as actions from './FoldersActions';
import {
  LibraryItemsContainer,
} from '../../components/LibraryItem/playlistItemStyles';

import _ from 'lodash';


const FolderPage = (props) => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  const { showSnackbar } = useNotifier({
    message: 'Algo salió mal plebe :('
  });
/*
  //const folders = useSelector((state) => _.get(state, 'FoldersReducer.list'));
  const loading = useSelector((state) => _.get(state, 'FoldersReducer.loading'));
  const error = useSelector((state) => _.get(state, 'FoldersReducer.error'));

  const handleList = () => {
    setList(folders);
  };

  useEffect(() => {
    if (folders === null && loading === false) {
      dispatch({ type: actions.getAWSFoldersStart() });
    }
    if (folders !== null && loading === false) {
      handleList();
    }
  });

  if (loading)
    return <Loader isLoading={ loading } />;
  if (!loading && error) showSnackbar();

    return (
      <LibraryItemsContainer>
        {folders.map(({ folder }, i) => (
          <LibraryItem
            key={i}
            id={folder.idUser}
            title={folder.name}
            cover={"https://i.imgur.com/RNK19gQ.png"}
          />
        ))}
      </LibraryItemsContainer>
    );*/
};
  
export default FolderPage;




/*
function Folder() {
  const dispatch = useDispatch();
  const [folder, setFolder] = useState([]);
  const { response, loading, error } = useSelector(
    ({ response }) => response),
    { list: folderList } = useSelector(({ response }) => response);


  const { showSnackbar } = useNotifier({
    message: 'Algo salió mal plebe :('
  });

  useEffect(() => {
    if(folder.length === 0) {
      dispatch(actions.getAWSFoldersStart());
      setFolder([{}, {}]);
    }
    //return () => dispatch(constants.CLEAN_FOLDER());
  }, [folder, dispatch]);

  if (loading)
    return <Loader isLoading={ loading } />;
  if (!loading && error) showSnackbar();

  return (
    <>
      {response.map(response => (
        <LibraryItem
          key={response.idUser}
          title={response.name}
          cover={"https://i.imgur.com/RNK19gQ.png"}
          //type='album'
        />
      ))}
    </>
  );
}


export default Folder;*/