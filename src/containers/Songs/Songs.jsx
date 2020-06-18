import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import * as constants from './FoldersConstants';
import * as actions from './FoldersActions';


function Folder() {
  const dispatch = useDispatch();
  const [folder, setFolder] = useState([]);

  useEffect(() => {
    if(folder.length === 0) {
      dispatch(actions.getAWSFoldersStart());

      setFolder([{}, {}]);
      console.log(folder);
    }

    return () => dispatch(constants.CLEAN_FOLDER());
  }, [dispatch, folder]);
}

export default Folder;