import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SongsActions from "./SongsActions";
import { GET_AWS_SONGS_START } from "./SongsConstants";

function FavoriteSong() {
  const dispatch = useDispatch();
  const [favoriteSong, setFavoriteSong] = useState([]);

  useEffect(() => {
    dispatch(SongsActions.getAWSSongsStart());
  });
}